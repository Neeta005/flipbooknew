import { type NextRequest, NextResponse } from "next/server"
import sharp from "sharp"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get("url")

  if (!imageUrl) {
    return new NextResponse("Image URL is required", { status: 400 })
  }

  // Basic validation to ensure it's a local path or a trusted domain
  // In a real application, you'd want more robust URL validation
  if (!imageUrl.startsWith("/") && !imageUrl.startsWith(process.env.NEXT_PUBLIC_BASE_URL || "")) {
    return new NextResponse("Invalid image URL", { status: 403 })
  }

  try {
    // Construct the full path for local images
    const fullPath = imageUrl.startsWith("/") ? `./public${imageUrl}` : imageUrl

    // Fetch the image data
    let imageBuffer
    if (imageUrl.startsWith("/")) {
      // For local public assets
      imageBuffer = await sharp(fullPath).toBuffer()
    } else {
      // For external URLs (if you decide to support them later)
      const response = await fetch(imageUrl)
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`)
      }
      imageBuffer = await response.arrayBuffer()
    }

    const image = sharp(imageBuffer)
    const metadata = await image.metadata()

    // Define watermark text and properties
    const watermarkText = "VedicJal"
    const fontSize = Math.max(20, Math.min(metadata.width / 10, metadata.height / 10)) // Responsive font size
    const opacity = 0.3 // Adjust opacity as needed
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
      .toFormat("jpeg") // Convert to JPEG for smaller size, adjust as needed
      .toBuffer()

    return new NextResponse(watermarkedImageBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable", // Aggressive caching for watermarked images
      },
    })
  } catch (error) {
    console.error("Error processing image:", error)
    return new NextResponse("Error processing image", { status: 500 })
  }
}
