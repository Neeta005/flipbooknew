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

import React, { useRef, useEffect, useState, useMemo } from "react"
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
  isPreview?: boolean // true for gallery, false/default for zoom
  priority?: boolean // true for immediate loading (zoom view)
  onLoad?: () => void // callback when image loads
}

// Enhanced memory cache with cleanup
class WatermarkCache {
  private cache = new Map<string, string>()
  private accessTimes = new Map<string, number>()
  private maxSize = 50 // Reasonable cache size
  
  get(key: string): string | undefined {
    if (this.cache.has(key)) {
      this.accessTimes.set(key, Date.now())
      return this.cache.get(key)
    }
    return undefined
  }
  
  set(key: string, value: string): void {
    if (this.cache.size >= this.maxSize) {
      this.cleanup()
    }
    this.cache.set(key, value)
    this.accessTimes.set(key, Date.now())
  }
  
  private cleanup(): void {
    const entries = Array.from(this.accessTimes.entries())
    entries.sort(([,a], [,b]) => a - b)
    const toRemove = Math.floor(entries.length * 0.3)
    for (let i = 0; i < toRemove; i++) {
      const [key] = entries[i]
      this.cache.delete(key)
      this.accessTimes.delete(key)
      // Clean up blob URLs to prevent memory leaks
      if (key.startsWith('blob:')) {
        URL.revokeObjectURL(key)
      }
    }
  }
  
  has(key: string): boolean {
    return this.cache.has(key)
  }
}

const cache = new WatermarkCache()

const MAX_PREVIEW_WIDTH = 180
const MAX_PREVIEW_HEIGHT = 130

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill,
  objectFit = "contain",
  watermarkText = "VedicJal",
  className,
  isPreview = false,
  priority = false,
  onLoad,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgContainerRef = useRef<HTMLDivElement>(null)
  const [watermarkedSrc, setWatermarkedSrc] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [inView, setInView] = useState(false)

  const cacheKey = useMemo(() => `${src}-${watermarkText}-${isPreview}`, [src, watermarkText, isPreview])

  // Intersection Observer for lazy watermarking
  useEffect(() => {
    // Check cache immediately
    if (cache.has(cacheKey)) {
      setWatermarkedSrc(cache.get(cacheKey)!)
      return
    }

    // For priority images (zoom), start processing immediately
    if (priority) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '100px', threshold: 0.1 } // Start processing early
    )

    if (imgContainerRef.current) {
      observer.observe(imgContainerRef.current)
    }

    return () => observer.disconnect()
  }, [cacheKey, priority])

  // Optimized watermarking process
  useEffect(() => {
    if (!inView || watermarkedSrc) return

    if (cache.has(cacheKey)) {
      setWatermarkedSrc(cache.get(cacheKey)!)
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d", { 
      alpha: true, 
      willReadFrequently: false 
    })
    if (!ctx) return

    setIsLoading(true)
    const img = new window.Image()
    img.crossOrigin = "anonymous"
    
    img.onload = () => {
      try {
        let cW = img.naturalWidth
        let cH = img.naturalHeight
        
        if (isPreview) {
          const scale = Math.min(1, MAX_PREVIEW_WIDTH / cW, MAX_PREVIEW_HEIGHT / cH)
          cW = Math.round(cW * scale)
          cH = Math.round(cH * scale)
        }
        
        canvas.width = cW
        canvas.height = cH
        
        // Clear and draw image
        ctx.clearRect(0, 0, cW, cH)
        ctx.drawImage(img, 0, 0, cW, cH)

        // Optimized watermark - lighter for zoom view
        const fontSize = isPreview ? Math.max(12, cW / 25) : Math.max(16, cW / 30)
        ctx.font = `${fontSize}px Arial`
        ctx.fillStyle = isPreview ? "rgba(0, 0, 0, 0.08)" : "rgba(0, 0, 0, 0.06)" // Even lighter for zoom
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        
        ctx.save()
        ctx.translate(cW / 2, cH / 2)
        ctx.rotate(-Math.PI / 4)
        
        const textWidth = ctx.measureText(watermarkText).width
        // More spacing for zoom view = faster processing
        const spacing = isPreview ? textWidth * 2 : textWidth * 2.5
        const diagonal = Math.sqrt(cW * cW + cH * cH)
        
        // Reduced iterations for zoom view
        const step = spacing
        for (let i = -diagonal / 2; i < diagonal / 2; i += step) {
          for (let j = -diagonal / 2; j < diagonal / 2; j += step) {
            ctx.fillText(watermarkText, i, j)
          }
        }
        
        ctx.restore()
        
        // Use different compression based on view type
        const format = src.includes('.png') ? 'image/png' : 'image/jpeg'
        const quality = isPreview ? 0.7 : 0.8 // Higher quality for zoom
        const dataUrl = canvas.toDataURL(format, quality)
        
        cache.set(cacheKey, dataUrl)
        setWatermarkedSrc(dataUrl)
        setIsLoading(false)
        
        // Call onLoad callback if provided
        if (onLoad) onLoad()
      } catch (error) {
        console.error('Watermarking failed:', error)
        setWatermarkedSrc(src) // Fallback to original
        setIsLoading(false)
        if (onLoad) onLoad()
      }
    }

    img.onerror = () => {
      setWatermarkedSrc(src) // Fallback to original
      setIsLoading(false)
      if (onLoad) onLoad()
    }
    
    img.src = src
  }, [cacheKey, inView, src, watermarkText, isPreview])

  // Always show something immediately
  const displaySrc = watermarkedSrc || src

  return (
    <div 
      ref={imgContainerRef} 
      className={className} 
      style={{ 
        width: fill ? '100%' : width, 
        height: fill ? '100%' : height, 
        position: fill ? 'absolute' : 'relative' 
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      
      <Image
        src={displaySrc}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={className}
        style={{ 
          objectFit,
          // Show slight transparency while processing watermark
          opacity: isLoading ? 0.85 : 1,
          transition: 'opacity 0.2s ease'
        }}
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        // Add blur placeholder for better perceived performance
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        onLoad={() => {
          if (onLoad && !isLoading) onLoad()
        }}
      />
      
      {/* Subtle loading indicator */}
      {isLoading && (
        <div className="absolute top-2 right-2 w-4 h-4 border border-green-400 border-t-transparent rounded-full animate-spin opacity-60"></div>
      )}
    </div>
  )
}

export default WatermarkedImage

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
