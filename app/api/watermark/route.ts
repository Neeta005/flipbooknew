import { type NextRequest, NextResponse } from "next/server"
import { readFile, access } from "fs/promises"
import { join } from "path"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get("url")

  console.log("=== WATERMARK API START ===")
  console.log("Environment:", process.env.NODE_ENV)
  console.log("Image URL requested:", imageUrl)

  if (!imageUrl) {
    console.log("❌ No image URL provided")
    return new NextResponse("Image URL is required", { status: 400 })
  }

  if (!imageUrl.startsWith("/")) {
    console.log("❌ Invalid image URL - doesn't start with /")
    return new NextResponse("Invalid image URL", { status: 403 })
  }

  try {
    const possiblePaths = [
      join(process.cwd(), "public", imageUrl),
      join(process.cwd(), imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
      join(process.cwd(), "public", imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
    ]

    let imageBuffer: Buffer | null = null
    let foundPath = ""

    for (const path of possiblePaths) {
      try {
        console.log("🔍 Trying path:", path)
        await access(path)
        imageBuffer = await readFile(path)
        foundPath = path
        console.log("✅ Found image at:", foundPath)
        break
      } catch (error) {
        console.log("❌ Path not found:", path)
        continue
      }
    }

    if (!imageBuffer) {
      console.error("❌ Image not found in any of the paths:", possiblePaths)
      return new NextResponse("Image not found", { status: 404 })
    }

    console.log("🔧 Loading Sharp...")
    const sharp = (await import("sharp")).default

    const image = sharp(imageBuffer)
    const metadata = await image.metadata()

    if (!metadata.width || !metadata.height) {
      throw new Error("Could not get image dimensions")
    }

    console.log("📐 Image dimensions:", metadata.width, "x", metadata.height)

    // Calculate watermark properties
    const watermarkText = "VedicJal"
    const fontSize = Math.max(24, Math.min(metadata.width / 8, metadata.height / 8))
    const opacity = 0.25

    console.log("🎨 Watermark settings:", { fontSize, opacity })

    // Create a more reliable SVG watermark with embedded font fallbacks
    const svgText = `
      <svg width="${metadata.width}" height="${metadata.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            .watermark-text {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              font-size: ${fontSize}px;
              font-weight: bold;
              fill: #16a34a;
              fill-opacity: ${opacity};
              text-anchor: middle;
              dominant-baseline: central;
            }
          </style>
        </defs>
        <g transform="translate(${metadata.width / 2}, ${metadata.height / 2}) rotate(-30)">
          <text class="watermark-text" x="0" y="0">${watermarkText}</text>
        </g>
      </svg>
    `

    console.log("📝 SVG watermark created")

    // Alternative approach: Create watermark using Sharp's text overlay
    try {
      console.log("🔄 Attempting Sharp text overlay...")

      // Create a simple text watermark using Sharp's built-in text rendering
      const watermarkBuffer = Buffer.from(
        `<svg width="${metadata.width}" height="${metadata.height}">
          <text 
            x="50%" 
            y="50%" 
            font-family="Arial, Helvetica, sans-serif" 
            font-size="${fontSize}" 
            font-weight="bold"
            fill="#16a34a" 
            fill-opacity="${opacity}"
            text-anchor="middle" 
            dominant-baseline="middle"
            transform="rotate(-30 ${metadata.width / 2} ${metadata.height / 2})"
          >${watermarkText}</text>
        </svg>`,
      )

      const watermarkedImageBuffer = await image
        .composite([
          {
            input: watermarkBuffer,
            gravity: "center",
          },
        ])
        .jpeg({ quality: 90 })
        .toBuffer()

      console.log("✅ Watermark applied successfully with Sharp text overlay")
      console.log("📊 Final image size:", watermarkedImageBuffer.length, "bytes")

      return new NextResponse(watermarkedImageBuffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      })
    } catch (textError) {
      console.log("❌ Sharp text overlay failed, trying alternative method:", textError.message)

      // Fallback: Create watermark using a different approach
      const simpleWatermark = Buffer.from(
        `<svg width="${metadata.width}" height="${metadata.height}" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(${metadata.width / 2}, ${metadata.height / 2}) rotate(-30)">
            <text 
              x="0" 
              y="0" 
              style="font-family: sans-serif; font-size: ${fontSize}px; font-weight: bold; fill: rgba(22, 163, 74, ${opacity}); text-anchor: middle; dominant-baseline: central;"
            >${watermarkText}</text>
          </g>
        </svg>`,
      )

      const watermarkedImageBuffer = await image
        .composite([
          {
            input: simpleWatermark,
            gravity: "center",
          },
        ])
        .jpeg({ quality: 90 })
        .toBuffer()

      console.log("✅ Watermark applied with fallback method")

      return new NextResponse(watermarkedImageBuffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      })
    }
  } catch (error) {
    console.error("❌ Error processing image:", error)

    // Fallback: return original image
    try {
      console.log("🔄 Returning original image as fallback...")
      const possiblePaths = [
        join(process.cwd(), "public", imageUrl),
        join(process.cwd(), imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
        join(process.cwd(), "public", imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
      ]

      for (const path of possiblePaths) {
        try {
          const originalBuffer = await readFile(path)
          console.log("✅ Returning original image from:", path)

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
          continue
        }
      }

      throw new Error("Could not find image in fallback")
    } catch (fallbackError) {
      console.error("❌ Complete fallback failed:", fallbackError)
      return new NextResponse("Error processing image", { status: 500 })
    }
  }
}
