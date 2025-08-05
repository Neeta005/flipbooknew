import { type NextRequest, NextResponse } from "next/server"
import sharp from "sharp"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get("imageUrl")
  const watermarkText = searchParams.get("watermarkText") || "VedicJal"

  if (!imageUrl) {
    return new NextResponse("Image URL is required", { status: 400 })
  }

  try {
    // Fetch the original image
    const response = await fetch(imageUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`)
    }
    const imageBuffer = await response.arrayBuffer()

    // Create a Sharp instance from the image buffer
    const image = sharp(Buffer.from(imageBuffer))
    const metadata = await image.metadata()

    // Determine font size based on image width for responsiveness
    const fontSize = Math.max(20, Math.floor((metadata.width || 800) / 20))

    // Create SVG for the watermark text
    const watermarkSvg = `
      <svg width="${metadata.width}" height="${metadata.height}">
        <style>
          .watermark {
            font-family: Arial, sans-serif;
            font-size: ${fontSize}px;
            fill: rgba(0, 0, 0, 0.1);
            text-anchor: middle;
            dominant-baseline: middle;
          }
        </style>
        <g transform="translate(${metadata.width / 2}, ${metadata.height / 2}) rotate(-45)">
          ${Array.from({ length: 10 })
            .map((_, i) =>
              Array.from({ length: 10 })
                .map(
                  (_, j) =>
                    `<text x="${(i - 5) * fontSize * 3}" y="${(j - 5) * fontSize * 3}" class="watermark">${watermarkText}</text>`,
                )
                .join(""),
            )
            .join("")}
        </g>
      </svg>
    `

    // Composite the watermark SVG onto the image
    const watermarkedImageBuffer = await image
      .composite([
        {
          input: Buffer.from(watermarkSvg),
          gravity: "center",
        },
      ])
      .png() // Output as PNG
      .toBuffer()

    return new NextResponse(watermarkedImageBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable", // Cache for a long time
      },
    })
  } catch (error) {
    console.error("Error watermarking image:", error)
    return new NextResponse(`Failed to watermark image: ${error instanceof Error ? error.message : "Unknown error"}`, {
      status: 500,
    })
  }
}
