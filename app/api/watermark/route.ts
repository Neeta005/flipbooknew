import { type NextRequest, NextResponse } from "next/server"
import sharp from "sharp"
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
    // Construct the full path for local images
    const imagePath = join(process.cwd(), "public", imageUrl)

    // Read the image file
    const imageBuffer = readFileSync(imagePath)

    const image = sharp(imageBuffer)
    const metadata = await image.metadata()

    // Define watermark text and properties
    const watermarkText = "VedicJal"
    const fontSize = Math.max(24, Math.min(metadata.width / 8, metadata.height / 8)) // Responsive font size
    const opacity = 0.4 // Slightly more visible
    const textColor = "#16a34a" // Green-600

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
          transform="rotate(-25 ${metadata.width / 2} ${metadata.height / 2})"
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
      .jpeg({ quality: 85 }) // Good quality for web
      .toBuffer()

    return new NextResponse(watermarkedImageBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=86400", // Cache for 24 hours
      },
    })
  } catch (error) {
    console.error("Error processing image:", error)
    return new NextResponse("Error processing image", { status: 500 })
  }
}
