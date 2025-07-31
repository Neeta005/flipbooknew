
"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Droplet, Leaf, X, Plus, Minus, Maximize } from "lucide-react" // Using Lucide React for icons

const FlipBook = () => {
  const [currentSpread, setCurrentSpread] = useState(0) // The spread currently being animated FROM
  const [displaySpread, setDisplaySpread] = useState(0) // The spread currently being displayed
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState("")
  const [sidebarWidth, setSidebarWidth] = useState(300)
  const [isResizing, setIsResizing] = useState(false)
  const flipBookRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(1024)

  // Revamped Color palette for marketing appeal
  const colors = {
    primary: "#2563eb", // Vibrant Blue
    primaryLight: "#bfdbfe", // Light Blue
    secondary: "#6b7280", // Gray
    accent: "#10b981", // Emerald Green for eco-friendly
    textDark: "#1f2937", // Dark Gray
    textMedium: "#4b5563", // Medium Gray
    textLight: "#9ca3af", // Light Gray
    backgroundLight: "#f3f4f6", // Off-white
    backgroundWhite: "#ffffff", // Pure White
    borderLight: "#e5e7eb", // Light Border
    shadowLight: "rgba(0, 0, 0, 0.05)",
    shadowMedium: "rgba(0, 0, 0, 0.1)",
    shadowStrong: "rgba(0, 0, 0, 0.2)",
    brandBlue: "#0ea5e9", // Sky Blue
    brandDarkBlue: "#0369a1", // Darker Sky Blue
    brandGreen: "#4caf50", // Green for bio
    brandBrown: "#8B4513", // Brown for index
  }

  // Product data for galleries
  const productData = {
    "200ml": {
      title: "200ml Water Bottles",
      images: [
        "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
      ],
    },
    "250ml": {
      title: "250ml Water Bottles",
      images: [
        "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
      ],
    },
    "300ml": {
      title: "300ml Water Bottles",
      images: [
         "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
      ],
    },
    "500ml": {
      title: "500ml Water Bottles",
      images: [
        "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
      ],
    },
    "700ml": {
      title: "700ml Water Bottles",
      images: [
        "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
      ],
    },
    "1liter": {
      title: "1 Liter Water Bottles",
      images: [
         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
      ],
    },
    "bio-200ml": {
      title: "Biodegradable 200ml",
      images: [
         "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
      ],
    },
    "bio-250ml": {
      title: "Biodegradable 250ml",
      images: [
        "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
      ],
    },
    "bio-300ml": {
      title: "Biodegradable 300ml",
      images: [
         "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
      ],
    },
    "bio-500ml": {
      title: "Biodegradable 500ml",
      images: [
         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
        "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
      ],
    },
  }

  // Open product gallery
  const openProductGallery = (productId) => {
    setSelectedProduct({ id: productId, imageIndex: undefined }) // Open gallery, not specific image
  }

  // Close gallery or zoomed image
  const closeGallery = () => {
    setSelectedProduct(null)
  }

  const allPages = [
    // Page 0 - Cover Page (CLOSED BOOK - SINGLE PAGE)
    {
      id: "cover",
      type: "cover",
      content: (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full p-0 relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-200 border border-slate-200 rounded-xl shadow-lg
          flex flex-col justify-center items-center select-none" // Added select-none
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-br from-sky-500/15 to-blue-400/10 -skew-y-2 origin-top-left" />
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-tl from-blue-400/10 to-sky-500/15 skew-y-2 origin-bottom-right" />
          <div
            className="absolute w-40 h-40 rounded-full"
            style={{
              background: `radial-gradient(circle, ${colors.brandBlue}/8% 0%, ${colors.brandBlue}/0% 70%)`,
              top: "18%",
              left: "8%",
            }}
          />
          <div
            className="absolute w-30 h-30 rounded-full"
            style={{
              background: `radial-gradient(circle, ${colors.brandBlue}/8% 0%, ${colors.brandBlue}/0% 70%)`,
              bottom: "12%",
              right: "8%",
            }}
          />
          {/* Main content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-10 p-6 text-center max-w-2xl w-[90%]"
          >
            {/* Logo and title */}
            <div className="mb-3 flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Image
                  src="/Vedic Jal.png"
                  alt="VedicJal Logo"
                  width={100}
                  height={100}
                  className="rounded-2xl shadow-xl border-4 border-white bg-white mb-1.5"
                  onContextMenu={(e) => e.preventDefault()} // Prevent right-click
                  draggable="false" // Prevent dragging
                />
              </motion.div>
              <h1 className="text-4xl font-bold text-sky-800 font-serif mb-1.5">VedicJal</h1>
              <p className="text-base text-sky-500 font-medium">Pure Water, Pure Life</p>
            </div>
            {/* Welcome Box */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-white/75 backdrop-blur-md rounded-xl p-3.5 mt-3 mb-3 shadow-sm border border-blue-100"
            >
              <h2 className="text-2xl font-semibold text-cyan-800 font-serif m-0">
                Welcome to VedicJal online brochure for customized range
              </h2>
            </motion.div>
            {/* Divider */}
            <div className="flex items-center justify-center my-2">
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-sky-700/50" />
              <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-sky-700/50" />
            </div>
            {/* Footer text */}
            <p className="text-sm text-slate-600 italic mt-2">"Bringing purity to your hands"</p>
          </motion.div>
        </motion.div>
      ),
    },
    // Page 1 - Full-fit Image Left
  {
  id: "image-left",
  type: "fullimage",
  content: (
    <div className="w-full aspect-[3/4] relative overflow-hidden select-none">
      <Image
        src="/page1.jpg"
        alt="VedicJal Workshop - Page 1"
        fill
        style={{ objectFit: "cover" }}
        onContextMenu={(e) => e.preventDefault()}
        draggable="false"
      />
    </div>
  ),
},
{
  id: "image-right",
  type: "fullimage",
  content: (
    <div className="w-full aspect-[3/4] relative overflow-hidden select-none">
      <Image
        src="/page2.jpg"
        alt="VedicJal Workshop - Page 2"
        fill
        style={{ objectFit: "cover" }}
        onContextMenu={(e) => e.preventDefault()}
        draggable="false"
      />
    </div>
  ),
},

    // Page 3 - Main Index (ml bottles) - Left Page
    {
      id: "main-index",
      type: "index-main",
      content: (
        <div className="w-full h-full p-[1.5vh] md:p-[2.5vw] box-border bg-white font-serif flex flex-col overflow-hidden select-none">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-[1vh]"
          >
            <h1 className="text-xl md:text-3xl text-amber-800 m-0 font-bold">PRODUCT INDEX</h1>
            <div className="w-16 h-0.5 bg-amber-800 mx-auto mb-[0.5vh]" />
            <p className="text-xs md:text-sm text-gray-600 m-0">Click on any item to view the product gallery.</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-1 w-full max-w-[90vw] mx-auto flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 gap-y-[0.5vh]">
              {[
                { number: "1.", name: "200ml", id: "200ml" },
                { number: "2.", name: "250ml", id: "250ml" },
                { number: "3.", name: "300ml", id: "300ml" },
                { number: "4.", name: "500ml", id: "500ml" },
                { number: "5.", name: "700ml", id: "700ml" },
                { number: "6.", name: "1 Liter", id: "1liter" },
              ].map((item) => (
                <motion.div
                  key={item.id}
                  className="flex items-center p-[0.8vh] md:p-[1.2vw] bg-blue-50 rounded-md cursor-pointer text-sm md:text-base font-medium text-gray-800 border border-transparent transition-all duration-300 ease-in-out"
                  onClick={() => openProductGallery(item.id)}
                  whileHover={{
                    background: "#e3f2fd",
                    borderColor: colors.primary,
                    x: 6,
                    boxShadow: colors.shadowMedium,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Droplet className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-500" />
                  <span className="font-bold mr-3 text-amber-800 min-w-[35px]">{item.number}</span>
                  <span>{item.name}</span>
                  <span className="ml-auto text-blue-600 text-base">→</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      ),
    },
    // Page 4 - Biodegradable Index - Right Page
    {
      id: "bio-index",
      type: "index-bio",
      content: (
      <div className="w-full h-full p-[1.5vh] md:p-[2.5vw] box-border bg-white font-serif flex flex-col overflow-y-auto select-none">

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-[1vh]"
          >
            <h1 className="text-xl md:text-3xl text-green-600 m-0 font-bold">BIODEGRADABLE COLLECTION</h1>
            <div className="w-16 h-0.5 bg-green-600 mx-auto mb-[0.5vh]" />
            <p className="text-xs md:text-sm text-gray-600 m-0">Eco-friendly options for a sustainable future.</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-1 w-full max-w-[90vw] mx-auto flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 gap-y-[0.5vh]">
              {[
                { number: "7.1", name: "Biodegradable 200ml", id: "bio-200ml" },
                { number: "7.2", name: "Biodegradable 250ml", id: "bio-250ml" },
                { number: "7.3", name: "Biodegradable 300ml", id: "bio-300ml" },
                { number: "7.4", name: "Biodegradable 500ml", id: "bio-500ml" },
              ].map((item) => (
                <motion.div
                  key={item.id}
                  className="flex items-center p-[0.8vh] md:p-[1.2vw] bg-green-50 rounded-md cursor-pointer text-sm md:text-base font-medium text-gray-800 border border-transparent transition-all duration-300 ease-in-out"
                  onClick={() => openProductGallery(item.id)}
                  whileHover={{
                    background: "#c8e6c9",
                    borderColor: colors.accent,
                    x: 6,
                    boxShadow: colors.shadowMedium,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Leaf className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-600" />
                  <span className="font-bold mr-3 text-green-600 min-w-[45px]">{item.number}</span>
                  <span>{item.name}</span>
                  <span className="ml-auto text-green-600 text-base">→</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      ),
    },
    // Page 5 - THANK YOU PAGE - Left Page
    {
      id: "thankyou",
      type: "thankyou",
      content: (
        <div className="w-full h-full p-4 md:p-8 box-border bg-gradient-to-br from-white to-slate-50 flex items-center justify-center relative overflow-hidden select-none">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-slate-800 z-10 w-full max-w-xl"
          >
            {/* Logo */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-2.5 flex flex-col items-center"
            >
              <Image
                src="/Vedic Jal.png"
                alt="VedicJal Logo"
                width={70}
                height={70}
                className="mb-1.5 rounded-xl shadow-md border-2.5 border-white"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </motion.div>
            {/* Heading */}
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold m-0 mb-1.5 bg-gradient-to-br from-blue-500 to-cyan-500 bg-clip-text text-transparent leading-tight font-sans"
            >
              Thank You
            </motion.h1>
            {/* Divider */}
            <div className="w-18 h-0.5 bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto mb-3.5 rounded-sm" />
            {/* Subtext */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-base md:text-lg m-0 mb-1.5 font-semibold text-slate-800 font-sans"
            >
              For choosing VedicJal
            </motion.p>
            {/* Body text */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-sm md:text-base font-normal text-slate-600 font-sans leading-relaxed max-w-sm mx-auto mb-4"
            >
              Your trust in our premium handcrafted water bottles means the world to us.
            </motion.p>
            {/* Quote */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="p-2.5 px-5 border-1.5 border-blue-200 rounded-lg bg-blue-50/50 inline-block shadow-sm"
            >
              <p className="text-base m-0 font-medium text-blue-600 font-sans italic">"Pure Water, Pure Life"</p>
            </motion.div>
          </motion.div>
        </div>
      ),
    },
    // Page 6 - Blank Back Cover - Right Page
    {
      id: "back-cover",
      type: "blank",
      content: (
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-4xl text-slate-300 font-bold select-none">
          {/* Optional: Subtle branding or pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center text-xl font-semibold text-blue-300"
          >
            VedicJal
          </motion.div>
        </div>
      ),
    },
  ]

  // Define spreads: [leftPageIndex, rightPageIndex]
  const spreads = [
    [null, 0], // Spread 0: Cover (Right only)
    [1, 2], // Spread 1: Image Left, Image Right
    [3, 4], // Spread 2: Main Index, Biodegradable Index
    [5, 6], // Spread 3: Thank You, Blank Back Cover
  ]

  const totalSpreads = spreads.length // 4 spreads (0 to 3)

const getPageContent = (pageIndex) => {
  if (
    pageIndex === null ||
    typeof allPages[pageIndex] === "undefined"
  ) {
    return null
  }
  return allPages[pageIndex].content
}

  // Content for the static left page (always shows the content of displaySpread)
  const getCurrentLeftPageContent = () => {
    const pageIndex = spreads[displaySpread][0]
    return getPageContent(pageIndex)
  }

  // Content for the static right page (always shows the content of displaySpread)
  const getCurrentRightPageContent = () => {
    const pageIndex = spreads[displaySpread][1]
    return getPageContent(pageIndex)
  }

  // Content for the front of the flipping page (content of the page being turned away from)
  const getFlippingPageFrontContent = () => {
    if (flipDirection === "next") {
      return getPageContent(spreads[currentSpread][1]) // Current right page
    } else if (flipDirection === "prev") {
      return getPageContent(spreads[currentSpread][0]) // Current left page
    }
    return null
  }

  // Content for the back of the flipping page (content of the page being turned to)
  const getFlippingPageBackContent = () => {
    if (flipDirection === "next") {
      const nextPageIdx = spreads[currentSpread + 1]?.[1] // Next right page
      return getPageContent(nextPageIdx)
    } else if (flipDirection === "prev") {
      const prevPageIdx = spreads[currentSpread - 1]?.[0] // Previous left page
      return getPageContent(prevPageIdx)
    }
    return null
  }

  const goToSpread = (spreadIndex) => {
    if (isFlipping || spreadIndex < 0 || spreadIndex >= totalSpreads) return

    const direction = spreadIndex > currentSpread ? "next" : "prev"
    setFlipDirection(direction)
    setIsFlipping(true)
    setCurrentSpread(spreadIndex) // Update currentSpread immediately for flip content

    // Update displaySpread after the animation completes
    setTimeout(() => {
      setDisplaySpread(spreadIndex)
      setIsFlipping(false)
      setFlipDirection("")
    }, 600) // Full animation duration
  }

  const nextSpread = () => {
    if (currentSpread < totalSpreads - 1) {
      goToSpread(currentSpread + 1)
    }
  }

  const prevSpread = () => {
    if (currentSpread > 0) {
      goToSpread(currentSpread - 1)
    }
  }

  const isClosedBook = displaySpread === 0 // Use displaySpread for visual state

  // Sidebar resize handlers
  const handleMouseDown = useCallback((e) => {
    setIsResizing(true)
    e.preventDefault()
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      if (!isResizing || windowWidth <= 768) return
      const newWidth = e.clientX
      if (newWidth >= 250 && newWidth <= 400) {
        setSidebarWidth(newWidth)
      }
    },
    [isResizing, windowWidth],
  )

  const handleMouseUp = useCallback(() => {
    setIsResizing(false)
  }, [])

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [isResizing, handleMouseMove, handleMouseUp])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth <= 768) {
        setSidebarWidth(window.innerWidth)
      }
    }
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  // Product Gallery Component
  const ProductGallery = ({ productId, closeGallery, colors }) => {
    const product = productData[productId]
    if (!product) return null

    const galleryVariants = {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
      exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } },
    }

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }

    return (
      <motion.div
        variants={galleryVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-black/90 z-[1000] flex flex-col select-none"
      >
        <div className="p-4 md:p-8 bg-white/10 backdrop-blur-md flex justify-between items-center">
          <h2 className="text-white text-xl md:text-2xl font-semibold m-0">{product.title}</h2>
          <motion.button
            className="bg-white/20 border-none text-white text-2xl w-10 h-10 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out"
            onClick={closeGallery}
            whileHover={{ background: "rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>
        <motion.div
          className="flex-1 p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {product.images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 rounded-xl overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => setSelectedProduct({ id: productId, imageIndex: index })} // Pass image index for zoom
              whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.title} ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-[300px] object-cover"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div className="p-4 text-white text-center">
                <h3 className="m-0 text-lg font-medium">Model {index + 1}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    )
  }

  // Zoomed Image Viewer Component
  const ZoomedImageViewer = ({ productId, imageIndex, closeViewer }) => {
    const product = productData[productId]
    const imageUrl = product?.images[imageIndex]
    const [zoom, setZoom] = useState(1)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const imageRef = useRef(null)
    const isDragging = useRef(false)
    const startDragPos = useRef({ x: 0, y: 0 })

    const handleWheel = useCallback(
      (e) => {
        e.preventDefault()
        const scaleAmount = 0.1
        const newZoom = e.deltaY < 0 ? Math.min(3, zoom + scaleAmount) : Math.max(0.5, zoom - scaleAmount)
        setZoom(newZoom)
      },
      [zoom],
    )

    const handleMouseDown = useCallback(
      (e) => {
        e.preventDefault()
        isDragging.current = true
        startDragPos.current = { x: e.clientX - position.x, y: e.clientY - position.y }
      },
      [position],
    )

    const handleMouseMove = useCallback(
      (e) => {
        if (!isDragging.current) return
        setPosition({
          x: e.clientX - startDragPos.current.x,
          y: e.clientY - startDragPos.current.y,
        })
      },
      [position],
    )

    const handleMouseUp = useCallback(() => {
      isDragging.current = false
    }, [])

    useEffect(() => {
      const imgElement = imageRef.current
      if (imgElement) {
        imgElement.addEventListener("wheel", handleWheel, { passive: false })
        imgElement.addEventListener("mousemove", handleMouseMove)
        imgElement.addEventListener("mouseup", handleMouseUp)
        imgElement.addEventListener("mouseleave", handleMouseUp) // Stop dragging if mouse leaves image
        return () => {
          imgElement.removeEventListener("wheel", handleWheel)
          imgElement.removeEventListener("mousemove", handleMouseMove)
          imgElement.removeEventListener("mouseup", handleMouseUp)
          imgElement.removeEventListener("mouseleave", handleMouseUp)
        }
      }
    }, [handleWheel, handleMouseMove, handleMouseUp])

    if (!imageUrl) return null

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-[1001] flex items-center justify-center select-none"
      >
        <motion.button
          className="absolute top-4 right-4 bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl cursor-pointer"
          onClick={closeViewer}
          whileHover={{ background: "rgba(255, 255, 255, 0.3)" }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-6 h-6" />
        </motion.button>

        <div className="relative max-w-[90vw] max-h-[90vh] overflow-hidden flex items-center justify-center">
          <motion.img
            ref={imageRef}
            src={imageUrl}
            alt={product.title}
            className="max-w-full max-h-full object-contain cursor-grab"
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              transformOrigin: "center center",
            }}
            onMouseDown={handleMouseDown}
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="absolute bottom-4 flex gap-2 bg-white/20 p-2 rounded-full backdrop-blur-md">
          <motion.button
            className="bg-white/30 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl"
            onClick={() => setZoom((prev) => Math.min(3, prev + 0.1))}
            whileHover={{ background: "rgba(255, 255, 255, 0.4)" }}
            whileTap={{ scale: 0.9 }}
          >
            <Plus className="w-4 h-4" />
          </motion.button>
          <motion.button
            className="bg-white/30 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl"
            onClick={() => setZoom((prev) => Math.max(0.5, prev - 0.1))}
            whileHover={{ background: "rgba(255, 255, 255, 0.4)" }}
            whileTap={{ scale: 0.9 }}
          >
            <Minus className="w-4 h-4" />
          </motion.button>
          <motion.button
            className="bg-white/30 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl"
            onClick={() => {
              setZoom(1)
              setPosition({ x: 0, y: 0 })
            }}
            whileHover={{ background: "rgba(255, 255, 255, 0.4)" }}
            whileTap={{ scale: 0.9 }}
          >
            <Maximize className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    )
  }

  // Component for rendering spread thumbnails in the sidebar
  const SpreadThumbnail = ({ spreadIndex, isActive, onClick, windowWidth }) => {
    const [leftPageIndex, rightPageIndex] = spreads[spreadIndex]
    const leftPageContent = getPageContent(leftPageIndex)
    const rightPageContent = getPageContent(rightPageIndex)

    return (
      <motion.div
        className="thumbnail flex-shrink-0 relative overflow-hidden rounded-md cursor-pointer transition-all duration-300 ease-in-out"
        style={{
          marginBottom: windowWidth <= 768 ? 0 : "0.5rem",
          border: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
          background: colors.backgroundWhite,
          boxShadow: isActive ? `0 4px 20px ${colors.shadowMedium}` : `0 2px 8px ${colors.shadowLight}`,
          height: windowWidth <= 768 ? "100px" : "120px",
          width: windowWidth <= 768 ? (leftPageContent ? "160px" : "80px") : "auto",
          minWidth: windowWidth <= 768 ? (leftPageContent ? "160px" : "80px") : "auto",
        }}
        onClick={onClick}
        whileHover={{
          scale: isActive ? 1 : 1.02,
          borderColor: isActive ? colors.primary : colors.primary,
          boxShadow: isActive ? `0 4px 20px ${colors.shadowMedium}` : `0 4px 16px ${colors.shadowMedium}`,
        }}
      >
        {leftPageContent && (
          <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden relative bg-slate-50 flex items-center justify-center">
            <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
              {leftPageContent}
            </div>
          </div>
        )}
        <div
          className={`${leftPageContent ? "absolute right-0 top-0 w-1/2" : "w-full"} h-full overflow-hidden relative bg-slate-50 flex items-center justify-center`}
        >
          <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
            {rightPageContent}
          </div>
        </div>
        {/* Page number/label */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-800 text-white p-1 px-2 text-xs font-medium text-center h-5 flex items-center justify-center">
          {spreadIndex === 0 ? "Cover" : spreadIndex === 1 ? "Intro" : spreadIndex === 2 ? "Index" : "Thank You"}
        </div>
      </motion.div>
    )
  }

  return (
    <>
      <div
        className="flex h-screen bg-gradient-to-br from-slate-100 to-slate-200 font-sans overflow-hidden
        flex-col md:flex-row select-none" // Added select-none to main container
      >
        {/* Resizable Sidebar */}
        <div
          className="relative flex flex-shrink-0 bg-white/95 backdrop-blur-xl border-r border-slate-200 shadow-lg
          min-w-[250px] max-w-[400px] md:h-full md:flex-col
          w-full h-[120px] overflow-x-auto overflow-y-hidden md:overflow-x-hidden md:overflow-y-auto"
          style={{
            width: windowWidth <= 768 ? "100%" : `${sidebarWidth}px`,
            height: windowWidth <= 768 ? "120px" : "100%",
          }}
        >
          {/* Header - only shown on mobile */}
          {windowWidth <= 768 && (
            <div className="p-4 bg-white flex items-center sticky left-0 z-10 border-b border-slate-200 min-w-max">
              <h3 className="m-0 text-slate-800 text-base font-semibold whitespace-nowrap">Page Navigation</h3>
            </div>
          )}
          {/* Thumbnails */}
          <div className="flex-1 w-full px-[3vw] flex flex-col justify-center">

            {spreads.map((_, index) => (
              <SpreadThumbnail
                key={index}
                spreadIndex={index}
                isActive={index === displaySpread} // Use displaySpread for active state
                onClick={() => goToSpread(index)}
                windowWidth={windowWidth}
              />
            ))}
          </div>
          {/* Resize Handle - only on desktop */}
          {windowWidth > 768 && (
            <div
              className="absolute top-0 right-0 w-1 cursor-col-resize z-10 transition-all duration-300 ease-in-out hover:bg-blue-500 hover:opacity-50"
              style={{ height: "100%" }}
              onMouseDown={handleMouseDown}
            />
          )}
        </div>
        {/* Main Flipbook */}
        <div
          className="flipbook-main flex-1 flex flex-col items-center justify-center p-2 md:p-8 relative overflow-hidden
          h-[calc(100vh-120px)] md:h-full"
        >
          <div
            ref={flipBookRef}
            className="relative mb-4"
            style={{
              width: windowWidth <= 768 ? "95%" : "min(90vw, 95vh * 1.2)",
              height: windowWidth <= 768 ? "70%" : "min(75vh, 90vw / 1.2)",
              maxWidth: "1400px",
              maxHeight: "900px",
              perspective: "1500px",
            }}
          >
            {/* Book spine - only show when not closed book */}
            {!isClosedBook && (
              <div className="absolute left-1/2 top-0 w-1.5 h-full bg-gradient-to-b from-slate-600 to-slate-800 -translate-x-1/2 z-10 rounded-md shadow-md" />
            )}
            {/* Left Page - only show when book is open */}
            {!isClosedBook && getCurrentLeftPageContent() && (
              <div className="absolute w-1/2 h-full bg-white border border-slate-200 shadow-xl overflow-hidden left-0 rounded-l-xl">
                {getCurrentLeftPageContent()}
              </div>
            )}
            {/* Right Page */}
            <div
              className="absolute h-full bg-white border border-slate-200 shadow-xl overflow-hidden right-0 rounded-r-xl transition-all duration-300 ease-in-out"
              style={{
                width: isClosedBook ? (windowWidth <= 768 ? "100%" : "50%") : "50%",
                left: isClosedBook ? (windowWidth <= 768 ? 0 : "50%") : "auto",
                borderTopLeftRadius: isClosedBook ? "0" : "0",
                borderBottomLeftRadius: isClosedBook ? "0" : "0",
              }}
            >
              {getCurrentRightPageContent()}
            </div>
            {/* Flipping Page */}
            <AnimatePresence initial={false}>
              {isFlipping && (
                <motion.div
                  key={currentSpread + "-" + flipDirection} // Key ensures re-mount for each flip
                  initial={{ rotateY: flipDirection === "next" ? 0 : 0 }}
                  animate={{ rotateY: flipDirection === "next" ? -180 : 180 }}
                  exit={{ opacity: 0 }} // Exit opacity to prevent flicker after rotation
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute w-1/2 h-full bg-white border border-slate-200 shadow-xl overflow-hidden z-20 transform-style-preserve-3d"
                  style={{
                    transformOrigin: flipDirection === "next" ? "left center" : "right center",
                    right: flipDirection === "next" ? 0 : "auto",
                    left: flipDirection === "prev" ? 0 : "auto",
                  }}
                >
                  <div className="absolute w-full h-full backface-hidden">{getFlippingPageFrontContent()}</div>
                  <div className="absolute w-full h-full backface-hidden" style={{ transform: "rotateY(180deg)" }}>
                    {getFlippingPageBackContent()}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Compact Navigation */}
          <div
            className="flex items-center justify-center gap-4 bg-white/95 backdrop-blur-xl p-2 px-4 rounded-full shadow-lg border border-slate-200
            w-full max-w-xs md:max-w-md"
          >
            <motion.button
              className="bg-slate-600 text-white border-none py-2 px-4 rounded-full cursor-not-allowed font-semibold text-sm transition-all duration-300 ease-in-out shadow-md
              flex items-center justify-center w-10 h-8"
              style={{
                background:
                  displaySpread === 0
                    ? colors.secondary
                    : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                cursor: displaySpread === 0 ? "not-allowed" : "pointer",
                boxShadow: displaySpread === 0 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
              }}
              onClick={prevSpread}
              disabled={displaySpread === 0}
              whileHover={
                displaySpread !== 0 ? { translateY: -2, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)" } : {}
              }
              whileTap={displaySpread !== 0 ? { translateY: 0, boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)" } : {}}
            >
              ←
            </motion.button>
            <div className="text-slate-800 font-semibold text-sm p-0 px-2 min-w-[120px] text-center">
              {displaySpread === 0
                ? "Cover"
                : displaySpread === 1
                  ? "Intro"
                  : displaySpread === 2
                    ? "Index"
                    : `Thank You`}{" "}
              / {totalSpreads}
            </div>
            <motion.button
              className="bg-slate-600 text-white border-none py-2 px-4 rounded-full cursor-not-allowed font-semibold text-sm transition-all duration-300 ease-in-out shadow-md
              flex items-center justify-center w-10 h-8"
              style={{
                background:
                  displaySpread >= totalSpreads - 1
                    ? colors.secondary
                    : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                cursor: displaySpread >= totalSpreads - 1 ? "not-allowed" : "pointer",
                boxShadow: displaySpread >= totalSpreads - 1 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
              }}
              onClick={nextSpread}
              disabled={displaySpread >= totalSpreads - 1}
              whileHover={
                displaySpread < totalSpreads - 1
                  ? { translateY: -2, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)" }
                  : {}
              }
              whileTap={
                displaySpread < totalSpreads - 1
                  ? { translateY: 0, boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)" }
                  : {}
              }
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedProduct && selectedProduct.imageIndex === undefined && (
          <ProductGallery productId={selectedProduct.id} closeGallery={closeGallery} colors={colors} />
        )}
        {selectedProduct && selectedProduct.imageIndex !== undefined && (
          <ZoomedImageViewer
            productId={selectedProduct.id}
            imageIndex={selectedProduct.imageIndex}
            closeViewer={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default FlipBook
