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
// "use client"

// import React, { useRef, useEffect, useState, useMemo } from "react"
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
//   isPreview?: boolean // true for gallery, false/default for zoom
// }

// // Memory cache for processed images
// const cache = new Map<string, string>()

// const MAX_PREVIEW_WIDTH = 180
// const MAX_PREVIEW_HEIGHT = 130

// const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
//   src,
//   alt,
//   width,
//   height,
//   fill,
//   objectFit = "contain",
//   watermarkText = "VedicJal",
//   className,
//   isPreview = false,
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const imgContainerRef = useRef<HTMLDivElement>(null)
//   const [watermarkedSrc, setWatermarkedSrc] = useState<string | null>(null)
//   const [inView, setInView] = useState(false)

//   const cacheKey = useMemo(() => `${src}-${watermarkText}-${isPreview}`, [src, watermarkText, isPreview])

//   // Intersection Observer for lazy watermarking
//   useEffect(() => {
//     if (cache.has(cacheKey)) {
//       setWatermarkedSrc(cache.get(cacheKey)!)
//       return
//     }
//     const observer = new window.IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setInView(true)
//           observer.disconnect()
//         }
//       })
//     })
//     if (imgContainerRef.current) {
//       observer.observe(imgContainerRef.current)
//     }
//     return () => observer.disconnect()
//   }, [cacheKey])

//   // Watermarking processing (only after inView)
//   useEffect(() => {
//     if (!inView) return;

//     if (cache.has(cacheKey)) {
//       setWatermarkedSrc(cache.get(cacheKey)!)
//       return
//     }

//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     const img = new window.Image()
//     img.crossOrigin = "anonymous"
//     img.onload = () => {
//       let cW = img.naturalWidth
//       let cH = img.naturalHeight
//       if (isPreview) {
//         const scale = Math.min(1, MAX_PREVIEW_WIDTH / cW, MAX_PREVIEW_HEIGHT / cH)
//         cW = Math.round(cW * scale)
//         cH = Math.round(cH * scale)
//       }
//       canvas.width = cW
//       canvas.height = cH
//       ctx.clearRect(0, 0, cW, cH)
//       ctx.drawImage(img, 0, 0, cW, cH)

//       ctx.font = `${Math.max(14, cW / 20)}px Arial`
//       ctx.fillStyle = "rgba(0, 0, 0, 0.12)"
//       ctx.textAlign = "center"
//       ctx.textBaseline = "middle"
//       ctx.save()
//       ctx.translate(cW / 2, cH / 2)
//       ctx.rotate(-Math.PI / 4)
//       const textWidth = ctx.measureText(watermarkText).width
//       const diagonal = Math.sqrt(cW * cW + cH * cH)
//       const spacing = textWidth * 1.5
//       for (let i = -diagonal / 2; i < diagonal / 2; i += spacing) {
//         for (let j = -diagonal / 2; j < diagonal / 2; j += spacing) {
//           ctx.fillText(watermarkText, i, j)
//         }
//       }
//       ctx.restore()
//       const dataUrl = canvas.toDataURL("image/png")
//       cache.set(cacheKey, dataUrl)
//       setWatermarkedSrc(dataUrl)
//     }
//     img.onerror = () => setWatermarkedSrc(src)
//     img.src = src
//   }, [cacheKey, inView, src, watermarkText, isPreview])

//   // Placeholder before watermarking
//   if (!watermarkedSrc) {
//     return (
//       <div ref={imgContainerRef} className={className} style={{ width: fill ? '100%' : width, height: fill ? '100%' : height, position: fill ? 'absolute' : 'relative' }}>
//         <canvas ref={canvasRef} style={{ display: 'none' }} />
//         <Image
//           src="/placeholder.svg?height=80&width=120"
//           alt="Loading image"
//           fill={fill}
//           width={width}
//           height={height}
//           className={className}
//           style={{ objectFit }}
//           loading="lazy"
//         />
//       </div>
//     )
//   }

//   // Show watermarked image when ready
//   return (
//     <div ref={imgContainerRef} className={className} style={{ width: fill ? '100%' : width, height: fill ? '100%' : height, position: fill ? 'absolute' : 'relative' }}>
//       <canvas ref={canvasRef} style={{ display: 'none' }} />
//       <Image
//         src={watermarkedSrc}
//         alt={alt}
//         fill={fill}
//         width={width}
//         height={height}
//         className={className}
//         style={{ objectFit }}
//         onContextMenu={(e) => e.preventDefault()}
//         draggable={false}
//         loading="lazy"
//       />
//     </div>
//   )
// }

// export default WatermarkedImage
"use client"
import { useState } from "react"
import type React from "react"

import Image from "next/image"

interface WatermarkedImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  className?: string
  style?: React.CSSProperties
  onError?: () => void
}

// Helper function to determine if an image should be watermarked
const shouldWatermarkImage = (imagePath: string) => {
  // Don't watermark logos
  if (imagePath.includes("Vedic Jal.png") || imagePath.includes("VedicJal.png")) {
    return false
  }

  // Don't watermark page images (page1.jpg, page2.jpg)
  if (imagePath.includes("page1.jpg") || imagePath.includes("page2.jpg")) {
    return false
  }

  // Watermark product images (bottle images)
  const productPaths = ["/200ml/", "/250ml/", "/300ml/", "/500ml/", "/750ml/", "/1lit/", "/bio/"]

  return productPaths.some((path) => imagePath.includes(path))
}

// Helper function to get watermarked image URL only for product images
const getImageUrl = (originalUrl: string) => {
  if (shouldWatermarkImage(originalUrl)) {
    return `/api/watermark?url=${encodeURIComponent(originalUrl)}`
  }
  return originalUrl
}

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
  src,
  alt,
  fill,
  width,
  height,
  objectFit = "contain",
  className = "",
  style,
  onError,
}) => {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    console.error("Watermarked image failed to load:", src)
    setHasError(true)
    setIsLoading(false)
    if (onError) onError()
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  // If there's an error, fall back to the original image
  const imageSrc = hasError ? src : getImageUrl(src)

  const imageProps = {
    src: imageSrc,
    alt,
    className: `${className} ${isLoading ? "opacity-50" : "opacity-100"} transition-opacity duration-300`,
    style: {
      objectFit: objectFit as any,
      ...style,
    },
    onError: handleError,
    onLoad: handleLoad,
    onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
    draggable: false,
  }

  if (fill) {
    return <Image {...imageProps} fill />
  }

  return <Image {...imageProps} width={width} height={height} />
}

export default WatermarkedImage
