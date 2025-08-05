import { type NextRequest, NextResponse } from "next/server"
import { readFile, access } from "fs/promises"
import { join } from "path"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get("url")

  if (!imageUrl) {
    return new NextResponse("Image URL is required", { status: 400 })
  }

  if (!imageUrl.startsWith("/")) {
    return new NextResponse("Invalid image URL", { status: 403 })
  }

  try {
    // Find the image file
    const possiblePaths = [
      join(process.cwd(), "public", imageUrl),
      join(process.cwd(), imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
      join(process.cwd(), "public", imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
    ]

    let imageBuffer: Buffer | null = null

    for (const path of possiblePaths) {
      try {
        await access(path)
        imageBuffer = await readFile(path)
        break
      } catch (error) {
        continue
      }
    }

    if (!imageBuffer) {
      return new NextResponse("Image not found", { status: 404 })
    }

    const sharp = (await import("sharp")).default
    const image = sharp(imageBuffer)
    const metadata = await image.metadata()

    if (!metadata.width || !metadata.height) {
      throw new Error("Could not get image dimensions")
    }

    // Create a simple diagonal stripe watermark
    const stripeWidth = Math.max(2, Math.min(metadata.width, metadata.height) / 100)
    const spacing = stripeWidth * 20

    // Create multiple diagonal stripes
    const stripes = []
    for (let i = -metadata.height; i < metadata.width + metadata.height; i += spacing) {
      stripes.push({
        input: {
          create: {
            width: Math.round(stripeWidth),
            height: Math.round(Math.sqrt(metadata.width * metadata.width + metadata.height * metadata.height)),
            channels: 4,
            background: { r: 22, g: 163, b: 74, alpha: 0.08 },
          },
        },
        left: Math.round(i),
        top: Math.round(-metadata.height / 2),
        blend: "over",
      })
    }

    // Apply the watermark stripes
    const watermarkedImageBuffer = await image.composite(stripes).jpeg({ quality: 90 }).toBuffer()

    return new NextResponse(watermarkedImageBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch (error) {
    console.error("Error processing image:", error)

    // Fallback: return original image
    try {
      const possiblePaths = [
        join(process.cwd(), "public", imageUrl),
        join(process.cwd(), imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
        join(process.cwd(), "public", imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl),
      ]

      for (const path of possiblePaths) {
        try {
          const originalBuffer = await readFile(path)
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
    } catch (fallbackError) {
      return new NextResponse("Error processing image", { status: 500 })
    }
  }
}
