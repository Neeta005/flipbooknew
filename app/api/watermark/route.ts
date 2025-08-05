import { type NextRequest, NextResponse } from "next/server"
import { readFile, access } from "fs/promises"
import { join } from "path"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get("url")

  console.log("=== WATERMARK API START ===")
  console.log("Environment:", process.env.NODE_ENV)
  console.log("Platform:", process.platform)
  console.log("Image URL requested:", imageUrl)
  console.log("Current working directory:", process.cwd())

  if (!imageUrl) {
    console.log("❌ No image URL provided")
    return new NextResponse("Image URL is required", { status: 400 })
  }

  // Basic validation to ensure it's a local path
  if (!imageUrl.startsWith("/")) {
    console.log("❌ Invalid image URL - doesn't start with /")
    return new NextResponse("Invalid image URL", { status: 403 })
  }

  try {
    // Try multiple possible paths for the image
    const possiblePaths = [
      join(process.cwd(), "public", imageUrl),
      join(process.cwd(), imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
      join(process.cwd(), "public", imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
    ]

    console.log("Possible paths to try:", possiblePaths)

    let imageBuffer: Buffer | null = null
    let foundPath = ""

    // Try to find the image in different locations
    for (const path of possiblePaths) {
      try {
        console.log("🔍 Trying path:", path)
        await access(path)
        imageBuffer = await readFile(path)
        foundPath = path
        console.log("✅ Found image at:", foundPath)
        console.log("📊 Image buffer size:", imageBuffer.length, "bytes")
        break
      } catch (error) {
        console.log("❌ Path not found:", path, error.message)
        continue
      }
    }

    if (!imageBuffer) {
      console.error("❌ Image not found in any of the paths:", possiblePaths)
      return new NextResponse("Image not found", { status: 404 })
    }

    // Check if Sharp is available
    console.log("🔧 Attempting to load Sharp...")
    let sharp
    try {
      sharp = (await import("sharp")).default
      console.log("✅ Sharp loaded successfully")
    } catch (sharpError) {
      console.error("❌ Sharp loading failed:", sharpError)
      throw new Error(`Sharp loading failed: ${sharpError.message}`)
    }

    const image = sharp(imageBuffer)
    const metadata = await image.metadata()

    if (!metadata.width || !metadata.height) {
      throw new Error("Could not get image dimensions")
    }

    console.log("📐 Image metadata:", {
      width: metadata.width,
      height: metadata.height,
      format: metadata.format,
      size: metadata.size,
    })

    // Define watermark text and properties
    const watermarkText = "VedicJal"
    const fontSize = Math.max(20, Math.min(metadata.width / 10, metadata.height / 10))
    const opacity = 0.3
    const textColor = "#16a34a"

    console.log("🎨 Watermark settings:", {
      text: watermarkText,
      fontSize,
      opacity,
      textColor,
    })

    // Create SVG for the watermark
    const svgText = `
      <svg width="${metadata.width}" height="${metadata.height}">
        <text
          x="50%"
          y="50%"
          font-family="Arial, sans-serif"
          font-size="${fontSize}"
          fill="${textColor}"
          fill-opacity="${opacity}"
          text-anchor="middle"
          dominant-baseline="middle"
          transform="rotate(-30 ${metadata.width / 2} ${metadata.height / 2})"
        >
          ${watermarkText}
        </text>
      </svg>
    `

    console.log("📝 SVG watermark created, length:", svgText.length)

    // Composite the watermark onto the image
    console.log("🔄 Starting image composition...")
    const watermarkedImageBuffer = await image
      .composite([
        {
          input: Buffer.from(svgText),
          gravity: "center",
        },
      ])
      .jpeg({ quality: 90 })
      .toBuffer()

    console.log("✅ Watermark applied successfully")
    console.log("📊 Final image size:", watermarkedImageBuffer.length, "bytes")
    console.log("=== WATERMARK API SUCCESS ===")

    return new NextResponse(watermarkedImageBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch (error) {
    console.error("❌ Error processing image:", error)
    console.error("Error stack:", error.stack)

    // Fallback: try to return original image
    try {
      console.log("🔄 Attempting fallback to original image...")
      const possiblePaths = [
        join(process.cwd(), "public", imageUrl),
        join(process.cwd(), imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
        join(process.cwd(), "public", imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
      ]

      for (const path of possiblePaths) {
        try {
          const originalBuffer = await readFile(path)
          console.log("✅ Returning original image from:", path)

          // Determine content type based on file extension
          const ext = imageUrl.toLowerCase().split(".").pop()
          const contentType =
            ext === "png"
              ? "image/png"
              : ext === "jpg" || ext === "jpeg"
                ? "image/jpeg"
                : ext === "webp"
                  ? "image/webp"
                  : "image/jpeg"

          return new NextResponse(originalBuffer, {
            headers: {
              "Content-Type": contentType,
              "Cache-Control": "public, max-age=31536000, immutable",
            },
          })
        } catch (fallbackError) {
          console.log("❌ Fallback path failed:", path, fallbackError.message)
          continue
        }
      }

      throw new Error("Could not find image in fallback")
    } catch (fallbackError) {
      console.error("❌ Fallback error:", fallbackError)
      console.log("=== WATERMARK API FAILED ===")
      return new NextResponse("Error processing image", { status: 500 })
    }
  }
}
