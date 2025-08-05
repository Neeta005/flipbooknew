import { type NextRequest, NextResponse } from "next/server"
import { readFile, access } from "fs/promises"
import { join } from "path"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get("url")

  console.log("Watermark API called with URL:", imageUrl)

  if (!imageUrl) {
    return new NextResponse("Image URL is required", { status: 400 })
  }

  // Basic validation to ensure it's a local path
  if (!imageUrl.startsWith("/")) {
    return new NextResponse("Invalid image URL", { status: 403 })
  }

  try {
    // Try multiple possible paths for the image
    const possiblePaths = [
      join(process.cwd(), "public", imageUrl),
      join(process.cwd(), imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
      join(process.cwd(), "public", imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
      // Add specific bio folder path
      join(process.cwd(), "public", "bio", imageUrl.split("/").pop() || ""),
    ]

    let imageBuffer: Buffer | null = null
    let foundPath = ""

    // Try to find the image in different locations
    for (const path of possiblePaths) {
      try {
        console.log("Trying path:", path)
        await access(path)
        imageBuffer = await readFile(path)
        foundPath = path
        console.log("Found image at:", foundPath)
        break
      } catch (error) {
        console.log("Path not found:", path)
        continue
      }
    }

    if (!imageBuffer) {
      console.error("Image not found in any of the paths:", possiblePaths)
      return new NextResponse("Image not found", { status: 404 })
    }

    // Import sharp dynamically to avoid build issues
    const sharp = (await import("sharp")).default

    const image = sharp(imageBuffer)
    const metadata = await image.metadata()

    if (!metadata.width || !metadata.height) {
      throw new Error("Could not get image dimensions")
    }

    console.log("Processing image:", foundPath, "Dimensions:", metadata.width, "x", metadata.height)

    // Watermark product images (bottle images)
    const productPaths = [
      "/200ml/",
      "/250ml/",
      "/300ml/",
      "/500ml/",
      "/750ml/",
      "/1lit/",
      "/bio/", // Updated to match your folder structure
    ]

    // Check if the image URL contains any of the product paths
    const shouldWatermark = productPaths.some((path) => imageUrl.includes(path))

    if (!shouldWatermark) {
      console.log("Image does not require watermarking")

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

      return new NextResponse(imageBuffer, {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      })
    }

    // Define watermark text and properties
    const watermarkText = "VedicJal"
    const fontSize = Math.max(20, Math.min(metadata.width / 10, metadata.height / 10))
    const opacity = 0.3
    const textColor = "#16a34a"

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

    // Composite the watermark onto the image
    const watermarkedImageBuffer = await image
      .composite([
        {
          input: Buffer.from(svgText),
          gravity: "center",
        },
      ])
      .jpeg({ quality: 90 })
      .toBuffer()

    console.log("Watermark applied successfully")

    return new NextResponse(watermarkedImageBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch (error) {
    console.error("Error processing image:", error)

    // Fallback: try to return original image
    try {
      const possiblePaths = [
        join(process.cwd(), "public", imageUrl),
        join(process.cwd(), imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
        join(process.cwd(), "public", imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
        // Add specific bio folder path
        join(process.cwd(), "public", "bio", imageUrl.split("/").pop() || ""),
      ]

      for (const path of possiblePaths) {
        try {
          const originalBuffer = await readFile(path)
          console.log("Returning original image from:", path)

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
          continue
        }
      }

      throw new Error("Could not find image in fallback")
    } catch (fallbackError) {
      console.error("Fallback error:", fallbackError)
      return new NextResponse("Error processing image", { status: 500 })
    }
  }
}
