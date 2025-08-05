import { type NextRequest, NextResponse } from "next/server"
import { join } from "path"
import { readFileSync } from "fs"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get("url")

  if (!imageUrl) {
    return new NextResponse("Image URL is required", { status: 400 })
  }

  // Only allow local paths for security
  if (!imageUrl.startsWith("/")) {
    return new NextResponse("Invalid image URL", { status: 403 })
  }

  try {
    // Try to load Sharp dynamically only at runtime
    let sharp: any = null
    try {
      sharp = (await import("sharp")).default
    } catch (sharpError) {
      console.warn("Sharp not available, serving original image")
    }

    // Construct the full path for local images
    const imagePath = join(process.cwd(), "public", imageUrl)

    // Read the image file
    const imageBuffer = readFileSync(imagePath)

    // If Sharp is not available, return original image
    if (!sharp) {
      return new NextResponse(imageBuffer, {
        headers: {
          "Content-Type": getContentType(imageUrl),
          "Cache-Control": "public, max-age=86400",
        },
      })
    }

    // Process with Sharp if available
    const image = sharp(imageBuffer)
    const metadata = await image.metadata()

    // Define watermark text and properties
    const watermarkText = "VedicJal"
    const fontSize = Math.max(24, Math.min((metadata.width || 400) / 8, (metadata.height || 300) / 8))
    const opacity = 0.4
    const textColor = "#16a34a"

    // Create SVG for the watermark
    const svgText = `
      <svg width="${metadata.width || 400}" height="${metadata.height || 300}">
        <text
          x="50%"
          y="50%"
          font-family="Arial, sans-serif"
          font-size="${fontSize}"
          fill="${textColor}"
          fill-opacity="${opacity}"
          text-anchor="middle"
          dominant-baseline="middle"
          transform="rotate(-25 ${(metadata.width || 400) / 2} ${(metadata.height || 300) / 2})"
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
      .jpeg({ quality: 85 })
      .toBuffer()

    return new NextResponse(watermarkedImageBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=86400",
      },
    })
  } catch (error) {
    console.error("Error processing image:", error)

    // Fallback: return original image on any error
    try {
      const imagePath = join(process.cwd(), "public", imageUrl)
      const imageBuffer = readFileSync(imagePath)

      return new NextResponse(imageBuffer, {
        headers: {
          "Content-Type": getContentType(imageUrl),
          "Cache-Control": "public, max-age=86400",
        },
      })
    } catch (fallbackError) {
      console.error("Fallback error:", fallbackError)
      return new NextResponse("Error processing image", { status: 500 })
    }
  }
}

function getContentType(imageUrl: string): string {
  const ext = imageUrl.toLowerCase().split(".").pop()
  switch (ext) {
    case "jpg":
    case "jpeg":
      return "image/jpeg"
    case "png":
      return "image/png"
    case "webp":
      return "image/webp"
    case "gif":
      return "image/gif"
    default:
      return "image/jpeg"
  }
}
