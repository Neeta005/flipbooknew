// "use client"

// import React, { useRef, useEffect, useState } from "react"
// import Image from "next/image"

// interface WatermarkedImageProps {
//   src: string
//   alt: string
//   width?: number
//   height?: number
//   fill?: boolean
//   objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
//   watermarkText?: string
//   className?: string
// }

// const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
//   src,
//   alt,
//   width,
//   height,
//   fill,
//   objectFit = "contain",
//   watermarkText = "VedicJal",
//   className,
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const [watermarkedSrc, setWatermarkedSrc] = useState<string | null>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     const img = new window.Image()
//     img.crossOrigin = "anonymous" // Required for images from different origins to avoid CORS issues when drawing to canvas

//     img.onload = () => {
//       // Set canvas dimensions to match image
//       canvas.width = img.naturalWidth
//       canvas.height = img.naturalHeight

//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       ctx.drawImage(img, 0, 0)

//       // Add watermark
//       ctx.font = `${Math.max(20, canvas.width / 20)}px Arial` // Responsive font size
//       ctx.fillStyle = "rgba(0, 0, 0, 0.1)" // Semi-transparent black
//       ctx.textAlign = "center"
//       ctx.textBaseline = "middle"

//       // Rotate and repeat watermark for better security
//       ctx.save()
//       ctx.translate(canvas.width / 2, canvas.height / 2)
//       ctx.rotate(-Math.PI / 4) // Rotate by -45 degrees

//       const textWidth = ctx.measureText(watermarkText).width
//       const diagonal = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height)
//       const spacing = textWidth * 1.5 // Spacing between repeated watermarks

//       for (let i = -diagonal / 2; i < diagonal / 2; i += spacing) {
//         for (let j = -diagonal / 2; j < diagonal / 2; j += spacing) {
//           ctx.fillText(watermarkText, i, j)
//         }
//       }
//       ctx.restore()

//       setWatermarkedSrc(canvas.toDataURL("image/png"))
//     }

//     img.onerror = () => {
//       console.error("Failed to load image for watermarking:", src)
//       setWatermarkedSrc(src) // Fallback to original if error
//     }

//     img.src = src
//   }, [src, watermarkText])

//   if (!watermarkedSrc) {
//     // Render a placeholder or loading state while image is being processed
//     return (
//       <div className={className} style={{ width: fill ? '100%' : width, height: fill ? '100%' : height, position: fill ? 'absolute' : 'relative' }}>
//         <canvas ref={canvasRef} style={{ display: 'none' }} />
//         <Image
//           src="/placeholder.svg?height=300&width=400"
//           alt="Loading image"
//           fill={fill}
//           width={width}
//           height={height}
//           className={className}
//           style={{ objectFit }}
//         />
//       </div>
//     )
//   }

//   // Render the watermarked image
//   return (
//     <div className={className} style={{ width: fill ? '100%' : width, height: fill ? '100%' : height, position: fill ? 'absolute' : 'relative' }}>
//       <canvas ref={canvasRef} style={{ display: 'none' }} />
//       <Image
//         src={watermarkedSrc || "/placeholder.svg"}
//         alt={alt}
//         fill={fill}
//         width={width}
//         height={height}
//         className={className}
//         style={{ objectFit }}
//         onContextMenu={(e) => e.preventDefault()}
//         draggable="false"
//       />
//     </div>
  
// )
// }

// export default WatermarkedImage
"use client"
import type React from "react"
import { useMemo } from "react"
import Image from "next/image"

interface WatermarkedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  watermarkText?: string
  className?: string
}

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill,
  objectFit = "contain",
  watermarkText = "VedicJal",
  className,
}) => {
  // Construct the full URL for the original image to be passed to the API route
  const fullImageUrl = useMemo(() => {
    if (src.startsWith("http://") || src.startsWith("https://")) {
      return src
    }
    // For local paths, prepend the current origin
    if (typeof window !== "undefined") {
      return `${window.location.origin}${src}`
    }
    // Fallback for server-side rendering or if window is not defined
    // In a real Next.js app, you might need a base URL env var here
    return src // This might not work if the server can't resolve local paths directly
  }, [src])

  // Construct the URL for the server-side watermarking API
  const watermarkedApiSrc = useMemo(() => {
    const params = new URLSearchParams()
    params.set("imageUrl", fullImageUrl)
    params.set("watermarkText", watermarkText)
    return `/api/watermark?${params.toString()}`
  }, [fullImageUrl, watermarkText])

  return (
    <Image
      src={watermarkedApiSrc || "/placeholder.svg"}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      style={{ objectFit }}
      onContextMenu={(e) => e.preventDefault()}
      draggable="false"
      // Optional: Add a placeholder or blurDataURL for better loading experience
      // placeholder="blur"
      // blurDataURL="/placeholder.svg?height=10&width=10"
    />
  )
}

export default WatermarkedImage
