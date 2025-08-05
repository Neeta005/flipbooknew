
// // // // // // "use client"

// // // // // // import { useState, useRef, useCallback, useEffect } from "react"
// // // // // // import { motion, AnimatePresence } from "framer-motion"
// // // // // // import Image from "next/image"
// // // // // // import { Droplet, Leaf, X, Plus, Minus, Maximize } from "lucide-react" // Using Lucide React for icons

// // // // // // const FlipBook = () => {
// // // // // //   const [currentSpread, setCurrentSpread] = useState(0) // The spread currently being animated FROM
// // // // // //   const [displaySpread, setDisplaySpread] = useState(0) // The spread currently being displayed
// // // // // //   const [selectedProduct, setSelectedProduct] = useState(null)
// // // // // //   const [isFlipping, setIsFlipping] = useState(false)
// // // // // //   const [flipDirection, setFlipDirection] = useState("")
// // // // // //   const [sidebarWidth, setSidebarWidth] = useState(300)
// // // // // //   const [isResizing, setIsResizing] = useState(false)
// // // // // //   const flipBookRef = useRef(null)
// // // // // //   const [windowWidth, setWindowWidth] = useState(1024)

// // // // // //   // Revamped Color palette for marketing appeal
// // // // // //   const colors = {
// // // // // //     primary: "#2563eb", // Vibrant Blue
// // // // // //     primaryLight: "#bfdbfe", // Light Blue
// // // // // //     secondary: "#6b7280", // Gray
// // // // // //     accent: "#10b981", // Emerald Green for eco-friendly
// // // // // //     textDark: "#1f2937", // Dark Gray
// // // // // //     textMedium: "#4b5563", // Medium Gray
// // // // // //     textLight: "#9ca3af", // Light Gray
// // // // // //     backgroundLight: "#f3f4f6", // Off-white
// // // // // //     backgroundWhite: "#ffffff", // Pure White
// // // // // //     borderLight: "#e5e7eb", // Light Border
// // // // // //     shadowLight: "rgba(0, 0, 0, 0.05)",
// // // // // //     shadowMedium: "rgba(0, 0, 0, 0.1)",
// // // // // //     shadowStrong: "rgba(0, 0, 0, 0.2)",
// // // // // //     brandBlue: "#0ea5e9", // Sky Blue
// // // // // //     brandDarkBlue: "#0369a1", // Darker Sky Blue
// // // // // //     brandGreen: "#4caf50", // Green for bio
// // // // // //     brandBrown: "#8B4513", // Brown for index
// // // // // //   }

// // // // // //   // Product data for galleries
// // // // // //   const productData = {
// // // // // //     "200ml": {
// // // // // //       title: "200ml Water Bottles",
// // // // // //       images: [
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // // // //       ],
// // // // // //     },
// // // // // //     "250ml": {
// // // // // //       title: "250ml Water Bottles",
// // // // // //       images: [
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
// // // // // //       ],
// // // // // //     },
// // // // // //     "300ml": {
// // // // // //       title: "300ml Water Bottles",
// // // // // //       images: [
// // // // // //          "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
// // // // // //       ],
// // // // // //     },
// // // // // //     "500ml": {
// // // // // //       title: "500ml Water Bottles",
// // // // // //       images: [
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // // // //       ],
// // // // // //     },
// // // // // //     "700ml": {
// // // // // //       title: "700ml Water Bottles",
// // // // // //       images: [
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
// // // // // //       ],
// // // // // //     },
// // // // // //     "1liter": {
// // // // // //       title: "1 Liter Water Bottles",
// // // // // //       images: [
// // // // // //          "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // // // //       ],
// // // // // //     },
// // // // // //     "bio-200ml": {
// // // // // //       title: "Biodegradable 200ml",
// // // // // //       images: [
// // // // // //          "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
// // // // // //       ],
// // // // // //     },
// // // // // //     "bio-250ml": {
// // // // // //       title: "Biodegradable 250ml",
// // // // // //       images: [
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // // // //       ],
// // // // // //     },
// // // // // //     "bio-300ml": {
// // // // // //       title: "Biodegradable 300ml",
// // // // // //       images: [
// // // // // //          "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
// // // // // //       ],
// // // // // //     },
// // // // // //     "bio-500ml": {
// // // // // //       title: "Biodegradable 500ml",
// // // // // //       images: [
// // // // // //          "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // // // //       ],
// // // // // //     },
// // // // // //   }

// // // // // //   // Open product gallery
// // // // // //   const openProductGallery = (productId) => {
// // // // // //     setSelectedProduct({ id: productId, imageIndex: undefined }) // Open gallery, not specific image
// // // // // //   }

// // // // // //   // Close gallery or zoomed image
// // // // // //   const closeGallery = () => {
// // // // // //     setSelectedProduct(null)
// // // // // //   }

// // // // // //   const allPages = [
// // // // // //     // Page 0 - Cover Page (CLOSED BOOK - SINGLE PAGE)
// // // // // //     {
// // // // // //       id: "cover",
// // // // // //       type: "cover",
// // // // // //       content: (
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, scale: 0.9 }}
// // // // // //           animate={{ opacity: 1, scale: 1 }}
// // // // // //           transition={{ duration: 0.5 }}
// // // // // //           className="w-full h-full p-0 relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-200 border border-slate-200 rounded-xl shadow-lg
// // // // // //           flex flex-col justify-center items-center select-none" // Added select-none
// // // // // //         >
// // // // // //           {/* Decorative elements */}
// // // // // //           <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-br from-sky-500/15 to-blue-400/10 -skew-y-2 origin-top-left" />
// // // // // //           <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-tl from-blue-400/10 to-sky-500/15 skew-y-2 origin-bottom-right" />
// // // // // //           <div
// // // // // //             className="absolute w-40 h-40 rounded-full"
// // // // // //             style={{
// // // // // //               background: `radial-gradient(circle, ${colors.brandBlue}/8% 0%, ${colors.brandBlue}/0% 70%)`,
// // // // // //               top: "18%",
// // // // // //               left: "8%",
// // // // // //             }}
// // // // // //           />
// // // // // //           <div
// // // // // //             className="absolute w-30 h-30 rounded-full"
// // // // // //             style={{
// // // // // //               background: `radial-gradient(circle, ${colors.brandBlue}/8% 0%, ${colors.brandBlue}/0% 70%)`,
// // // // // //               bottom: "12%",
// // // // // //               right: "8%",
// // // // // //             }}
// // // // // //           />
// // // // // //           {/* Main content */}
// // // // // //           <motion.div
// // // // // //             initial={{ y: 20, opacity: 0 }}
// // // // // //             animate={{ y: 0, opacity: 1 }}
// // // // // //             transition={{ delay: 0.2, duration: 0.5 }}
// // // // // //             className="relative z-10 p-6 text-center max-w-2xl w-[90%]"
// // // // // //           >
// // // // // //             {/* Logo and title */}
// // // // // //             <div className="mb-3 flex flex-col items-center">
// // // // // //               <motion.div
// // // // // //                 initial={{ scale: 0.8, opacity: 0 }}
// // // // // //                 animate={{ scale: 1, opacity: 1 }}
// // // // // //                 transition={{ delay: 0.4, duration: 0.5 }}
// // // // // //               >
// // // // // //                 <Image
// // // // // //                   src="/Vedic Jal.png"
// // // // // //                   alt="VedicJal Logo"
// // // // // //                   width={100}
// // // // // //                   height={100}
// // // // // //                   className="rounded-2xl shadow-xl border-4 border-white bg-white mb-1.5"
// // // // // //                   onContextMenu={(e) => e.preventDefault()} // Prevent right-click
// // // // // //                   draggable="false" // Prevent dragging
// // // // // //                 />
// // // // // //               </motion.div>
// // // // // //               <h1 className="text-4xl font-bold text-sky-800 font-serif mb-1.5">VedicJal</h1>
// // // // // //               <p className="text-base text-sky-500 font-medium">Pure Water, Pure Life</p>
// // // // // //             </div>
// // // // // //             {/* Welcome Box */}
// // // // // //             <motion.div
// // // // // //               initial={{ y: 20, opacity: 0 }}
// // // // // //               animate={{ y: 0, opacity: 1 }}
// // // // // //               transition={{ delay: 0.6, duration: 0.5 }}
// // // // // //               className="bg-white/75 backdrop-blur-md rounded-xl p-3.5 mt-3 mb-3 shadow-sm border border-blue-100"
// // // // // //             >
// // // // // //               <h2 className="text-2xl font-semibold text-cyan-800 font-serif m-0">
// // // // // //                 Welcome to VedicJal online brochure for customized range
// // // // // //               </h2>
// // // // // //             </motion.div>
// // // // // //             {/* Divider */}
// // // // // //             <div className="flex items-center justify-center my-2">
// // // // // //               <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-sky-700/50" />
// // // // // //               <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-sky-700/50" />
// // // // // //             </div>
// // // // // //             {/* Footer text */}
// // // // // //             <p className="text-sm text-slate-600 italic mt-2">"Bringing purity to your hands"</p>
// // // // // //           </motion.div>
// // // // // //         </motion.div>
// // // // // //       ),
// // // // // //     },
// // // // // //     // Page 1 - Full-fit Image Left
// // // // // //   {
// // // // // //   id: "image-left",
// // // // // //   type: "fullimage",
// // // // // //   content: (
// // // // // //     <div className="w-full aspect-[3/4] relative overflow-hidden select-none">
// // // // // //       <Image
// // // // // //         src="/page1.jpg"
// // // // // //         alt="VedicJal Workshop - Page 1"
// // // // // //         fill
// // // // // //         style={{ objectFit: "cover" }}
// // // // // //         onContextMenu={(e) => e.preventDefault()}
// // // // // //         draggable="false"
// // // // // //       />
// // // // // //     </div>
// // // // // //   ),
// // // // // // },
// // // // // // {
// // // // // //   id: "image-right",
// // // // // //   type: "fullimage",
// // // // // //   content: (
// // // // // //     <div className="w-full aspect-[3/4] relative overflow-hidden select-none">
// // // // // //       <Image
// // // // // //         src="/page2.jpg"
// // // // // //         alt="VedicJal Workshop - Page 2"
// // // // // //         fill
// // // // // //         style={{ objectFit: "cover" }}
// // // // // //         onContextMenu={(e) => e.preventDefault()}
// // // // // //         draggable="false"
// // // // // //       />
// // // // // //     </div>
// // // // // //   ),
// // // // // // },

// // // // // //     // Page 3 - Main Index (ml bottles) - Left Page
// // // // // //     {
// // // // // //       id: "main-index",
// // // // // //       type: "index-main",
// // // // // //       content: (
// // // // // //         <div className="w-full h-full p-[1.5vh] md:p-[2.5vw] box-border bg-white font-serif flex flex-col overflow-hidden select-none">
// // // // // //           <motion.div
// // // // // //             initial={{ y: -20, opacity: 0 }}
// // // // // //             animate={{ y: 0, opacity: 1 }}
// // // // // //             transition={{ duration: 0.5 }}
// // // // // //             className="text-center mb-[1vh]"
// // // // // //           >
// // // // // //             <h1 className="text-xl md:text-3xl text-amber-800 m-0 font-bold">PRODUCT INDEX</h1>
// // // // // //             <div className="w-16 h-0.5 bg-amber-800 mx-auto mb-[0.5vh]" />
// // // // // //             <p className="text-xs md:text-sm text-gray-600 m-0">Click on any item to view the product gallery.</p>
// // // // // //           </motion.div>
// // // // // //           <motion.div
// // // // // //             initial={{ y: 20, opacity: 0 }}
// // // // // //             animate={{ y: 0, opacity: 1 }}
// // // // // //             transition={{ delay: 0.2, duration: 0.5 }}
// // // // // //             className="flex-1 w-full max-w-[90vw] mx-auto flex flex-col justify-center"
// // // // // //           >
// // // // // //             <div className="grid grid-cols-1 gap-y-[0.5vh]">
// // // // // //               {[
// // // // // //                 { number: "1.", name: "200ml", id: "200ml" },
// // // // // //                 { number: "2.", name: "250ml", id: "250ml" },
// // // // // //                 { number: "3.", name: "300ml", id: "300ml" },
// // // // // //                 { number: "4.", name: "500ml", id: "500ml" },
// // // // // //                 { number: "5.", name: "700ml", id: "700ml" },
// // // // // //                 { number: "6.", name: "1 Liter", id: "1liter" },
// // // // // //               ].map((item) => (
// // // // // //                 <motion.div
// // // // // //                   key={item.id}
// // // // // //                   className="flex items-center p-[0.8vh] md:p-[1.2vw] bg-blue-50 rounded-md cursor-pointer text-sm md:text-base font-medium text-gray-800 border border-transparent transition-all duration-300 ease-in-out"
// // // // // //                   onClick={() => openProductGallery(item.id)}
// // // // // //                   whileHover={{
// // // // // //                     background: "#e3f2fd",
// // // // // //                     borderColor: colors.primary,
// // // // // //                     x: 6,
// // // // // //                     boxShadow: colors.shadowMedium,
// // // // // //                   }}
// // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // //                 >
// // // // // //                   <Droplet className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-500" />
// // // // // //                   <span className="font-bold mr-3 text-amber-800 min-w-[35px]">{item.number}</span>
// // // // // //                   <span>{item.name}</span>
// // // // // //                   <span className="ml-auto text-blue-600 text-base">→</span>
// // // // // //                 </motion.div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //       ),
// // // // // //     },
// // // // // //     // Page 4 - Biodegradable Index - Right Page
// // // // // //     {
// // // // // //       id: "bio-index",
// // // // // //       type: "index-bio",
// // // // // //       content: (
// // // // // //       <div className="w-full h-full p-[1.5vh] md:p-[2.5vw] box-border bg-white font-serif flex flex-col overflow-y-auto select-none">

// // // // // //           <motion.div
// // // // // //             initial={{ y: -20, opacity: 0 }}
// // // // // //             animate={{ y: 0, opacity: 1 }}
// // // // // //             transition={{ duration: 0.5 }}
// // // // // //             className="text-center mb-[1vh]"
// // // // // //           >
// // // // // //             <h1 className="text-xl md:text-3xl text-green-600 m-0 font-bold">BIODEGRADABLE COLLECTION</h1>
// // // // // //             <div className="w-16 h-0.5 bg-green-600 mx-auto mb-[0.5vh]" />
// // // // // //             <p className="text-xs md:text-sm text-gray-600 m-0">Eco-friendly options for a sustainable future.</p>
// // // // // //           </motion.div>
// // // // // //           <motion.div
// // // // // //             initial={{ y: 20, opacity: 0 }}
// // // // // //             animate={{ y: 0, opacity: 1 }}
// // // // // //             transition={{ delay: 0.2, duration: 0.5 }}
// // // // // //             className="flex-1 w-full max-w-[90vw] mx-auto flex flex-col justify-center"
// // // // // //           >
// // // // // //             <div className="grid grid-cols-1 gap-y-[0.5vh]">
// // // // // //               {[
// // // // // //                 { number: "7.1", name: "Biodegradable 200ml", id: "bio-200ml" },
// // // // // //                 { number: "7.2", name: "Biodegradable 250ml", id: "bio-250ml" },
// // // // // //                 { number: "7.3", name: "Biodegradable 300ml", id: "bio-300ml" },
// // // // // //                 { number: "7.4", name: "Biodegradable 500ml", id: "bio-500ml" },
// // // // // //               ].map((item) => (
// // // // // //                 <motion.div
// // // // // //                   key={item.id}
// // // // // //                   className="flex items-center p-[0.8vh] md:p-[1.2vw] bg-green-50 rounded-md cursor-pointer text-sm md:text-base font-medium text-gray-800 border border-transparent transition-all duration-300 ease-in-out"
// // // // // //                   onClick={() => openProductGallery(item.id)}
// // // // // //                   whileHover={{
// // // // // //                     background: "#c8e6c9",
// // // // // //                     borderColor: colors.accent,
// // // // // //                     x: 6,
// // // // // //                     boxShadow: colors.shadowMedium,
// // // // // //                   }}
// // // // // //                   whileTap={{ scale: 0.98 }}
// // // // // //                 >
// // // // // //                   <Leaf className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-600" />
// // // // // //                   <span className="font-bold mr-3 text-green-600 min-w-[45px]">{item.number}</span>
// // // // // //                   <span>{item.name}</span>
// // // // // //                   <span className="ml-auto text-green-600 text-base">→</span>
// // // // // //                 </motion.div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //       ),
// // // // // //     },
// // // // // //     // Page 5 - THANK YOU PAGE - Left Page
// // // // // //     {
// // // // // //       id: "thankyou",
// // // // // //       type: "thankyou",
// // // // // //       content: (
// // // // // //         <div className="w-full h-full p-4 md:p-8 box-border bg-gradient-to-br from-white to-slate-50 flex items-center justify-center relative overflow-hidden select-none">
// // // // // //           <motion.div
// // // // // //             initial={{ scale: 0.9, opacity: 0 }}
// // // // // //             animate={{ scale: 1, opacity: 1 }}
// // // // // //             transition={{ duration: 0.5 }}
// // // // // //             className="text-center text-slate-800 z-10 w-full max-w-xl"
// // // // // //           >
// // // // // //             {/* Logo */}
// // // // // //             <motion.div
// // // // // //               initial={{ y: -20, opacity: 0 }}
// // // // // //               animate={{ y: 0, opacity: 1 }}
// // // // // //               transition={{ delay: 0.2, duration: 0.5 }}
// // // // // //               className="mb-2.5 flex flex-col items-center"
// // // // // //             >
// // // // // //               <Image
// // // // // //                 src="/Vedic Jal.png"
// // // // // //                 alt="VedicJal Logo"
// // // // // //                 width={70}
// // // // // //                 height={70}
// // // // // //                 className="mb-1.5 rounded-xl shadow-md border-2.5 border-white"
// // // // // //                 onContextMenu={(e) => e.preventDefault()}
// // // // // //                 draggable="false"
// // // // // //               />
// // // // // //             </motion.div>
// // // // // //             {/* Heading */}
// // // // // //             <motion.h1
// // // // // //               initial={{ y: -20, opacity: 0 }}
// // // // // //               animate={{ y: 0, opacity: 1 }}
// // // // // //               transition={{ delay: 0.4, duration: 0.5 }}
// // // // // //               className="text-4xl md:text-6xl font-extrabold m-0 mb-1.5 bg-gradient-to-br from-blue-500 to-cyan-500 bg-clip-text text-transparent leading-tight font-sans"
// // // // // //             >
// // // // // //               Thank You
// // // // // //             </motion.h1>
// // // // // //             {/* Divider */}
// // // // // //             <div className="w-18 h-0.5 bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto mb-3.5 rounded-sm" />
// // // // // //             {/* Subtext */}
// // // // // //             <motion.p
// // // // // //               initial={{ y: 20, opacity: 0 }}
// // // // // //               animate={{ y: 0, opacity: 1 }}
// // // // // //               transition={{ delay: 0.6, duration: 0.5 }}
// // // // // //               className="text-base md:text-lg m-0 mb-1.5 font-semibold text-slate-800 font-sans"
// // // // // //             >
// // // // // //               For choosing VedicJal
// // // // // //             </motion.p>
// // // // // //             {/* Body text */}
// // // // // //             <motion.p
// // // // // //               initial={{ y: 20, opacity: 0 }}
// // // // // //               animate={{ y: 0, opacity: 1 }}
// // // // // //               transition={{ delay: 0.8, duration: 0.5 }}
// // // // // //               className="text-sm md:text-base font-normal text-slate-600 font-sans leading-relaxed max-w-sm mx-auto mb-4"
// // // // // //             >
// // // // // //               Your trust in our premium handcrafted water bottles means the world to us.
// // // // // //             </motion.p>
// // // // // //             {/* Quote */}
// // // // // //             <motion.div
// // // // // //               initial={{ scale: 0.8, opacity: 0 }}
// // // // // //               animate={{ scale: 1, opacity: 1 }}
// // // // // //               transition={{ delay: 1, duration: 0.5 }}
// // // // // //               className="p-2.5 px-5 border-1.5 border-blue-200 rounded-lg bg-blue-50/50 inline-block shadow-sm"
// // // // // //             >
// // // // // //               <p className="text-base m-0 font-medium text-blue-600 font-sans italic">"Pure Water, Pure Life"</p>
// // // // // //             </motion.div>
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //       ),
// // // // // //     },
// // // // // //     // Page 6 - Blank Back Cover - Right Page
// // // // // //     {
// // // // // //       id: "back-cover",
// // // // // //       type: "blank",
// // // // // //       content: (
// // // // // //         <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-4xl text-slate-300 font-bold select-none">
// // // // // //           {/* Optional: Subtle branding or pattern */}
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0 }}
// // // // // //             animate={{ opacity: 0.3 }}
// // // // // //             transition={{ delay: 0.5, duration: 1 }}
// // // // // //             className="text-center text-xl font-semibold text-blue-300"
// // // // // //           >
// // // // // //             VedicJal
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //       ),
// // // // // //     },
// // // // // //   ]

// // // // // //   // Define spreads: [leftPageIndex, rightPageIndex]
// // // // // //   const spreads = [
// // // // // //     [null, 0], // Spread 0: Cover (Right only)
// // // // // //     [1, 2], // Spread 1: Image Left, Image Right
// // // // // //     [3, 4], // Spread 2: Main Index, Biodegradable Index
// // // // // //     [5, 6], // Spread 3: Thank You, Blank Back Cover
// // // // // //   ]

// // // // // //   const totalSpreads = spreads.length // 4 spreads (0 to 3)

// // // // // // const getPageContent = (pageIndex) => {
// // // // // //   if (
// // // // // //     pageIndex === null ||
// // // // // //     typeof allPages[pageIndex] === "undefined"
// // // // // //   ) {
// // // // // //     return null
// // // // // //   }
// // // // // //   return allPages[pageIndex].content
// // // // // // }

// // // // // //   // Content for the static left page (always shows the content of displaySpread)
// // // // // //   const getCurrentLeftPageContent = () => {
// // // // // //     const pageIndex = spreads[displaySpread][0]
// // // // // //     return getPageContent(pageIndex)
// // // // // //   }

// // // // // //   // Content for the static right page (always shows the content of displaySpread)
// // // // // //   const getCurrentRightPageContent = () => {
// // // // // //     const pageIndex = spreads[displaySpread][1]
// // // // // //     return getPageContent(pageIndex)
// // // // // //   }

// // // // // //   // Content for the front of the flipping page (content of the page being turned away from)
// // // // // //   const getFlippingPageFrontContent = () => {
// // // // // //     if (flipDirection === "next") {
// // // // // //       return getPageContent(spreads[currentSpread][1]) // Current right page
// // // // // //     } else if (flipDirection === "prev") {
// // // // // //       return getPageContent(spreads[currentSpread][0]) // Current left page
// // // // // //     }
// // // // // //     return null
// // // // // //   }

// // // // // //   // Content for the back of the flipping page (content of the page being turned to)
// // // // // //   const getFlippingPageBackContent = () => {
// // // // // //     if (flipDirection === "next") {
// // // // // //       const nextPageIdx = spreads[currentSpread + 1]?.[1] // Next right page
// // // // // //       return getPageContent(nextPageIdx)
// // // // // //     } else if (flipDirection === "prev") {
// // // // // //       const prevPageIdx = spreads[currentSpread - 1]?.[0] // Previous left page
// // // // // //       return getPageContent(prevPageIdx)
// // // // // //     }
// // // // // //     return null
// // // // // //   }

// // // // // //   const goToSpread = (spreadIndex) => {
// // // // // //     if (isFlipping || spreadIndex < 0 || spreadIndex >= totalSpreads) return

// // // // // //     const direction = spreadIndex > currentSpread ? "next" : "prev"
// // // // // //     setFlipDirection(direction)
// // // // // //     setIsFlipping(true)
// // // // // //     setCurrentSpread(spreadIndex) // Update currentSpread immediately for flip content

// // // // // //     // Update displaySpread after the animation completes
// // // // // //     setTimeout(() => {
// // // // // //       setDisplaySpread(spreadIndex)
// // // // // //       setIsFlipping(false)
// // // // // //       setFlipDirection("")
// // // // // //     }, 600) // Full animation duration
// // // // // //   }

// // // // // //   const nextSpread = () => {
// // // // // //     if (currentSpread < totalSpreads - 1) {
// // // // // //       goToSpread(currentSpread + 1)
// // // // // //     }
// // // // // //   }

// // // // // //   const prevSpread = () => {
// // // // // //     if (currentSpread > 0) {
// // // // // //       goToSpread(currentSpread - 1)
// // // // // //     }
// // // // // //   }

// // // // // //   const isClosedBook = displaySpread === 0 // Use displaySpread for visual state

// // // // // //   // Sidebar resize handlers
// // // // // //   const handleMouseDown = useCallback((e) => {
// // // // // //     setIsResizing(true)
// // // // // //     e.preventDefault()
// // // // // //   }, [])

// // // // // //   const handleMouseMove = useCallback(
// // // // // //     (e) => {
// // // // // //       if (!isResizing || windowWidth <= 768) return
// // // // // //       const newWidth = e.clientX
// // // // // //       if (newWidth >= 250 && newWidth <= 400) {
// // // // // //         setSidebarWidth(newWidth)
// // // // // //       }
// // // // // //     },
// // // // // //     [isResizing, windowWidth],
// // // // // //   )

// // // // // //   const handleMouseUp = useCallback(() => {
// // // // // //     setIsResizing(false)
// // // // // //   }, [])

// // // // // //   useEffect(() => {
// // // // // //     if (isResizing) {
// // // // // //       document.addEventListener("mousemove", handleMouseMove)
// // // // // //       document.addEventListener("mouseup", handleMouseUp)
// // // // // //       return () => {
// // // // // //         document.removeEventListener("mousemove", handleMouseMove)
// // // // // //         document.removeEventListener("mouseup", handleMouseUp)
// // // // // //       }
// // // // // //     }
// // // // // //   }, [isResizing, handleMouseMove, handleMouseUp])

// // // // // //   useEffect(() => {
// // // // // //     const handleResize = () => {
// // // // // //       setWindowWidth(window.innerWidth)
// // // // // //       if (window.innerWidth <= 768) {
// // // // // //         setSidebarWidth(window.innerWidth)
// // // // // //       }
// // // // // //     }
// // // // // //     if (typeof window !== "undefined") {
// // // // // //       setWindowWidth(window.innerWidth)
// // // // // //       window.addEventListener("resize", handleResize)
// // // // // //       return () => {
// // // // // //         window.removeEventListener("resize", handleResize)
// // // // // //       }
// // // // // //     }
// // // // // //   }, [])

// // // // // //   // Product Gallery Component
// // // // // //   const ProductGallery = ({ productId, closeGallery, colors }) => {
// // // // // //     const product = productData[productId]
// // // // // //     if (!product) return null

// // // // // //     const galleryVariants = {
// // // // // //       hidden: { opacity: 0, scale: 0.95 },
// // // // // //       visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
// // // // // //       exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } },
// // // // // //     }

// // // // // //     const itemVariants = {
// // // // // //       hidden: { opacity: 0, y: 20 },
// // // // // //       visible: { opacity: 1, y: 0 },
// // // // // //     }

// // // // // //     return (
// // // // // //       <motion.div
// // // // // //         variants={galleryVariants}
// // // // // //         initial="hidden"
// // // // // //         animate="visible"
// // // // // //         exit="exit"
// // // // // //         className="fixed inset-0 bg-black/90 z-[1000] flex flex-col select-none"
// // // // // //       >
// // // // // //         <div className="p-4 md:p-8 bg-white/10 backdrop-blur-md flex justify-between items-center">
// // // // // //           <h2 className="text-white text-xl md:text-2xl font-semibold m-0">{product.title}</h2>
// // // // // //           <motion.button
// // // // // //             className="bg-white/20 border-none text-white text-2xl w-10 h-10 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out"
// // // // // //             onClick={closeGallery}
// // // // // //             whileHover={{ background: "rgba(255, 255, 255, 0.3)" }}
// // // // // //             whileTap={{ scale: 0.9 }}
// // // // // //           >
// // // // // //             <X className="w-6 h-6" />
// // // // // //           </motion.button>
// // // // // //         </div>
// // // // // //         <motion.div
// // // // // //           className="flex-1 p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto"
// // // // // //           variants={{
// // // // // //             visible: {
// // // // // //               transition: {
// // // // // //                 staggerChildren: 0.05,
// // // // // //               },
// // // // // //             },
// // // // // //           }}
// // // // // //         >
// // // // // //           {product.images.map((image, index) => (
// // // // // //             <motion.div
// // // // // //               key={index}
// // // // // //               variants={itemVariants}
// // // // // //               className="bg-white/10 rounded-xl overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
// // // // // //               onClick={() => setSelectedProduct({ id: productId, imageIndex: index })} // Pass image index for zoom
// // // // // //               whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.15)" }}
// // // // // //               whileTap={{ scale: 0.98 }}
// // // // // //             >
// // // // // //               <Image
// // // // // //                 src={image || "/placeholder.svg"}
// // // // // //                 alt={`${product.title} ${index + 1}`}
// // // // // //                 width={400}
// // // // // //                 height={300}
// // // // // //                 className="w-full h-[300px] object-cover"
// // // // // //                 onContextMenu={(e) => e.preventDefault()}
// // // // // //                 draggable="false"
// // // // // //               />
// // // // // //               <div className="p-4 text-white text-center">
// // // // // //                 <h3 className="m-0 text-lg font-medium">Model {index + 1}</h3>
// // // // // //               </div>
// // // // // //             </motion.div>
// // // // // //           ))}
// // // // // //         </motion.div>
// // // // // //       </motion.div>
// // // // // //     )
// // // // // //   }

// // // // // //   // Zoomed Image Viewer Component
// // // // // //   const ZoomedImageViewer = ({ productId, imageIndex, closeViewer }) => {
// // // // // //     const product = productData[productId]
// // // // // //     const imageUrl = product?.images[imageIndex]
// // // // // //     const [zoom, setZoom] = useState(1)
// // // // // //     const [position, setPosition] = useState({ x: 0, y: 0 })
// // // // // //     const imageRef = useRef(null)
// // // // // //     const isDragging = useRef(false)
// // // // // //     const startDragPos = useRef({ x: 0, y: 0 })

// // // // // //     const handleWheel = useCallback(
// // // // // //       (e) => {
// // // // // //         e.preventDefault()
// // // // // //         const scaleAmount = 0.1
// // // // // //         const newZoom = e.deltaY < 0 ? Math.min(3, zoom + scaleAmount) : Math.max(0.5, zoom - scaleAmount)
// // // // // //         setZoom(newZoom)
// // // // // //       },
// // // // // //       [zoom],
// // // // // //     )

// // // // // //     const handleMouseDown = useCallback(
// // // // // //       (e) => {
// // // // // //         e.preventDefault()
// // // // // //         isDragging.current = true
// // // // // //         startDragPos.current = { x: e.clientX - position.x, y: e.clientY - position.y }
// // // // // //       },
// // // // // //       [position],
// // // // // //     )

// // // // // //     const handleMouseMove = useCallback(
// // // // // //       (e) => {
// // // // // //         if (!isDragging.current) return
// // // // // //         setPosition({
// // // // // //           x: e.clientX - startDragPos.current.x,
// // // // // //           y: e.clientY - startDragPos.current.y,
// // // // // //         })
// // // // // //       },
// // // // // //       [position],
// // // // // //     )

// // // // // //     const handleMouseUp = useCallback(() => {
// // // // // //       isDragging.current = false
// // // // // //     }, [])

// // // // // //     useEffect(() => {
// // // // // //       const imgElement = imageRef.current
// // // // // //       if (imgElement) {
// // // // // //         imgElement.addEventListener("wheel", handleWheel, { passive: false })
// // // // // //         imgElement.addEventListener("mousemove", handleMouseMove)
// // // // // //         imgElement.addEventListener("mouseup", handleMouseUp)
// // // // // //         imgElement.addEventListener("mouseleave", handleMouseUp) // Stop dragging if mouse leaves image
// // // // // //         return () => {
// // // // // //           imgElement.removeEventListener("wheel", handleWheel)
// // // // // //           imgElement.removeEventListener("mousemove", handleMouseMove)
// // // // // //           imgElement.removeEventListener("mouseup", handleMouseUp)
// // // // // //           imgElement.removeEventListener("mouseleave", handleMouseUp)
// // // // // //         }
// // // // // //       }
// // // // // //     }, [handleWheel, handleMouseMove, handleMouseUp])

// // // // // //     if (!imageUrl) return null

// // // // // //     return (
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0 }}
// // // // // //         animate={{ opacity: 1 }}
// // // // // //         exit={{ opacity: 0 }}
// // // // // //         className="fixed inset-0 bg-black/95 z-[1001] flex items-center justify-center select-none"
// // // // // //       >
// // // // // //         <motion.button
// // // // // //           className="absolute top-4 right-4 bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl cursor-pointer"
// // // // // //           onClick={closeViewer}
// // // // // //           whileHover={{ background: "rgba(255, 255, 255, 0.3)" }}
// // // // // //           whileTap={{ scale: 0.9 }}
// // // // // //         >
// // // // // //           <X className="w-6 h-6" />
// // // // // //         </motion.button>

// // // // // //         <div className="relative max-w-[90vw] max-h-[90vh] overflow-hidden flex items-center justify-center">
// // // // // //           <motion.img
// // // // // //             ref={imageRef}
// // // // // //             src={imageUrl}
// // // // // //             alt={product.title}
// // // // // //             className="max-w-full max-h-full object-contain cursor-grab"
// // // // // //             style={{
// // // // // //               transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
// // // // // //               transformOrigin: "center center",
// // // // // //             }}
// // // // // //             onMouseDown={handleMouseDown}
// // // // // //             onContextMenu={(e) => e.preventDefault()}
// // // // // //             draggable="false"
// // // // // //             initial={{ scale: 0.8, opacity: 0 }}
// // // // // //             animate={{ scale: 1, opacity: 1 }}
// // // // // //             transition={{ duration: 0.3 }}
// // // // // //           />
// // // // // //         </div>

// // // // // //         <div className="absolute bottom-4 flex gap-2 bg-white/20 p-2 rounded-full backdrop-blur-md">
// // // // // //           <motion.button
// // // // // //             className="bg-white/30 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl"
// // // // // //             onClick={() => setZoom((prev) => Math.min(3, prev + 0.1))}
// // // // // //             whileHover={{ background: "rgba(255, 255, 255, 0.4)" }}
// // // // // //             whileTap={{ scale: 0.9 }}
// // // // // //           >
// // // // // //             <Plus className="w-4 h-4" />
// // // // // //           </motion.button>
// // // // // //           <motion.button
// // // // // //             className="bg-white/30 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl"
// // // // // //             onClick={() => setZoom((prev) => Math.max(0.5, prev - 0.1))}
// // // // // //             whileHover={{ background: "rgba(255, 255, 255, 0.4)" }}
// // // // // //             whileTap={{ scale: 0.9 }}
// // // // // //           >
// // // // // //             <Minus className="w-4 h-4" />
// // // // // //           </motion.button>
// // // // // //           <motion.button
// // // // // //             className="bg-white/30 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl"
// // // // // //             onClick={() => {
// // // // // //               setZoom(1)
// // // // // //               setPosition({ x: 0, y: 0 })
// // // // // //             }}
// // // // // //             whileHover={{ background: "rgba(255, 255, 255, 0.4)" }}
// // // // // //             whileTap={{ scale: 0.9 }}
// // // // // //           >
// // // // // //             <Maximize className="w-4 h-4" />
// // // // // //           </motion.button>
// // // // // //         </div>
// // // // // //       </motion.div>
// // // // // //     )
// // // // // //   }

// // // // // //   // Component for rendering spread thumbnails in the sidebar
// // // // // //   const SpreadThumbnail = ({ spreadIndex, isActive, onClick, windowWidth }) => {
// // // // // //     const [leftPageIndex, rightPageIndex] = spreads[spreadIndex]
// // // // // //     const leftPageContent = getPageContent(leftPageIndex)
// // // // // //     const rightPageContent = getPageContent(rightPageIndex)

// // // // // //     return (
// // // // // //       <motion.div
// // // // // //         className="thumbnail flex-shrink-0 relative overflow-hidden rounded-md cursor-pointer transition-all duration-300 ease-in-out"
// // // // // //         style={{
// // // // // //           marginBottom: windowWidth <= 768 ? 0 : "0.5rem",
// // // // // //           border: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
// // // // // //           background: colors.backgroundWhite,
// // // // // //           boxShadow: isActive ? `0 4px 20px ${colors.shadowMedium}` : `0 2px 8px ${colors.shadowLight}`,
// // // // // //           height: windowWidth <= 768 ? "100px" : "120px",
// // // // // //           width: windowWidth <= 768 ? (leftPageContent ? "160px" : "80px") : "auto",
// // // // // //           minWidth: windowWidth <= 768 ? (leftPageContent ? "160px" : "80px") : "auto",
// // // // // //         }}
// // // // // //         onClick={onClick}
// // // // // //         whileHover={{
// // // // // //           scale: isActive ? 1 : 1.02,
// // // // // //           borderColor: isActive ? colors.primary : colors.primary,
// // // // // //           boxShadow: isActive ? `0 4px 20px ${colors.shadowMedium}` : `0 4px 16px ${colors.shadowMedium}`,
// // // // // //         }}
// // // // // //       >
// // // // // //         {leftPageContent && (
// // // // // //           <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden relative bg-slate-50 flex items-center justify-center">
// // // // // //             <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
// // // // // //               {leftPageContent}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //         <div
// // // // // //           className={`${leftPageContent ? "absolute right-0 top-0 w-1/2" : "w-full"} h-full overflow-hidden relative bg-slate-50 flex items-center justify-center`}
// // // // // //         >
// // // // // //           <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
// // // // // //             {rightPageContent}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         {/* Page number/label */}
// // // // // //         <div className="absolute bottom-0 left-0 right-0 bg-slate-800 text-white p-1 px-2 text-xs font-medium text-center h-5 flex items-center justify-center">
// // // // // //           {spreadIndex === 0 ? "Cover" : spreadIndex === 1 ? "Intro" : spreadIndex === 2 ? "Index" : "Thank You"}
// // // // // //         </div>
// // // // // //       </motion.div>
// // // // // //     )
// // // // // //   }

// // // // // //   return (
// // // // // //     <>
// // // // // //       <div
// // // // // //         className="flex h-screen bg-gradient-to-br from-slate-100 to-slate-200 font-sans overflow-hidden
// // // // // //         flex-col md:flex-row select-none" // Added select-none to main container
// // // // // //       >
// // // // // //         {/* Resizable Sidebar */}
// // // // // //         <div
// // // // // //           className="relative flex flex-shrink-0 bg-white/95 backdrop-blur-xl border-r border-slate-200 shadow-lg
// // // // // //           min-w-[250px] max-w-[400px] md:h-full md:flex-col
// // // // // //           w-full h-[120px] overflow-x-auto overflow-y-hidden md:overflow-x-hidden md:overflow-y-auto"
// // // // // //           style={{
// // // // // //             width: windowWidth <= 768 ? "100%" : `${sidebarWidth}px`,
// // // // // //             height: windowWidth <= 768 ? "120px" : "100%",
// // // // // //           }}
// // // // // //         >
// // // // // //           {/* Header - only shown on mobile */}
// // // // // //           {windowWidth <= 768 && (
// // // // // //             <div className="p-4 bg-white flex items-center sticky left-0 z-10 border-b border-slate-200 min-w-max">
// // // // // //               <h3 className="m-0 text-slate-800 text-base font-semibold whitespace-nowrap">Page Navigation</h3>
// // // // // //             </div>
// // // // // //           )}
// // // // // //           {/* Thumbnails */}
// // // // // //           <div className="flex-1 w-full px-[3vw] flex flex-col justify-center">

// // // // // //             {spreads.map((_, index) => (
// // // // // //               <SpreadThumbnail
// // // // // //                 key={index}
// // // // // //                 spreadIndex={index}
// // // // // //                 isActive={index === displaySpread} // Use displaySpread for active state
// // // // // //                 onClick={() => goToSpread(index)}
// // // // // //                 windowWidth={windowWidth}
// // // // // //               />
// // // // // //             ))}
// // // // // //           </div>
// // // // // //           {/* Resize Handle - only on desktop */}
// // // // // //           {windowWidth > 768 && (
// // // // // //             <div
// // // // // //               className="absolute top-0 right-0 w-1 cursor-col-resize z-10 transition-all duration-300 ease-in-out hover:bg-blue-500 hover:opacity-50"
// // // // // //               style={{ height: "100%" }}
// // // // // //               onMouseDown={handleMouseDown}
// // // // // //             />
// // // // // //           )}
// // // // // //         </div>
// // // // // //         {/* Main Flipbook */}
// // // // // //         <div
// // // // // //           className="flipbook-main flex-1 flex flex-col items-center justify-center p-2 md:p-8 relative overflow-hidden
// // // // // //           h-[calc(100vh-120px)] md:h-full"
// // // // // //         >
// // // // // //           <div
// // // // // //             ref={flipBookRef}
// // // // // //             className="relative mb-4"
// // // // // //             style={{
// // // // // //               width: windowWidth <= 768 ? "95%" : "min(90vw, 95vh * 1.2)",
// // // // // //               height: windowWidth <= 768 ? "70%" : "min(75vh, 90vw / 1.2)",
// // // // // //               maxWidth: "1400px",
// // // // // //               maxHeight: "900px",
// // // // // //               perspective: "1500px",
// // // // // //             }}
// // // // // //           >
// // // // // //             {/* Book spine - only show when not closed book */}
// // // // // //             {!isClosedBook && (
// // // // // //               <div className="absolute left-1/2 top-0 w-1.5 h-full bg-gradient-to-b from-slate-600 to-slate-800 -translate-x-1/2 z-10 rounded-md shadow-md" />
// // // // // //             )}
// // // // // //             {/* Left Page - only show when book is open */}
// // // // // //             {!isClosedBook && getCurrentLeftPageContent() && (
// // // // // //               <div className="absolute w-1/2 h-full bg-white border border-slate-200 shadow-xl overflow-hidden left-0 rounded-l-xl">
// // // // // //                 {getCurrentLeftPageContent()}
// // // // // //               </div>
// // // // // //             )}
// // // // // //             {/* Right Page */}
// // // // // //             <div
// // // // // //               className="absolute h-full bg-white border border-slate-200 shadow-xl overflow-hidden right-0 rounded-r-xl transition-all duration-300 ease-in-out"
// // // // // //               style={{
// // // // // //                 width: isClosedBook ? (windowWidth <= 768 ? "100%" : "50%") : "50%",
// // // // // //                 left: isClosedBook ? (windowWidth <= 768 ? 0 : "50%") : "auto",
// // // // // //                 borderTopLeftRadius: isClosedBook ? "0" : "0",
// // // // // //                 borderBottomLeftRadius: isClosedBook ? "0" : "0",
// // // // // //               }}
// // // // // //             >
// // // // // //               {getCurrentRightPageContent()}
// // // // // //             </div>
// // // // // //             {/* Flipping Page */}
// // // // // //             <AnimatePresence initial={false}>
// // // // // //               {isFlipping && (
// // // // // //                 <motion.div
// // // // // //                   key={currentSpread + "-" + flipDirection} // Key ensures re-mount for each flip
// // // // // //                   initial={{ rotateY: flipDirection === "next" ? 0 : 0 }}
// // // // // //                   animate={{ rotateY: flipDirection === "next" ? -180 : 180 }}
// // // // // //                   exit={{ opacity: 0 }} // Exit opacity to prevent flicker after rotation
// // // // // //                   transition={{ duration: 0.6, ease: "easeInOut" }}
// // // // // //                   className="absolute w-1/2 h-full bg-white border border-slate-200 shadow-xl overflow-hidden z-20 transform-style-preserve-3d"
// // // // // //                   style={{
// // // // // //                     transformOrigin: flipDirection === "next" ? "left center" : "right center",
// // // // // //                     right: flipDirection === "next" ? 0 : "auto",
// // // // // //                     left: flipDirection === "prev" ? 0 : "auto",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   <div className="absolute w-full h-full backface-hidden">{getFlippingPageFrontContent()}</div>
// // // // // //                   <div className="absolute w-full h-full backface-hidden" style={{ transform: "rotateY(180deg)" }}>
// // // // // //                     {getFlippingPageBackContent()}
// // // // // //                   </div>
// // // // // //                 </motion.div>
// // // // // //               )}
// // // // // //             </AnimatePresence>
// // // // // //           </div>
// // // // // //           {/* Compact Navigation */}
// // // // // //           <div
// // // // // //             className="flex items-center justify-center gap-4 bg-white/95 backdrop-blur-xl p-2 px-4 rounded-full shadow-lg border border-slate-200
// // // // // //             w-full max-w-xs md:max-w-md"
// // // // // //           >
// // // // // //             <motion.button
// // // // // //               className="bg-slate-600 text-white border-none py-2 px-4 rounded-full cursor-not-allowed font-semibold text-sm transition-all duration-300 ease-in-out shadow-md
// // // // // //               flex items-center justify-center w-10 h-8"
// // // // // //               style={{
// // // // // //                 background:
// // // // // //                   displaySpread === 0
// // // // // //                     ? colors.secondary
// // // // // //                     : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// // // // // //                 cursor: displaySpread === 0 ? "not-allowed" : "pointer",
// // // // // //                 boxShadow: displaySpread === 0 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
// // // // // //               }}
// // // // // //               onClick={prevSpread}
// // // // // //               disabled={displaySpread === 0}
// // // // // //               whileHover={
// // // // // //                 displaySpread !== 0 ? { translateY: -2, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)" } : {}
// // // // // //               }
// // // // // //               whileTap={displaySpread !== 0 ? { translateY: 0, boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)" } : {}}
// // // // // //             >
// // // // // //               ←
// // // // // //             </motion.button>
// // // // // //             <div className="text-slate-800 font-semibold text-sm p-0 px-2 min-w-[120px] text-center">
// // // // // //               {displaySpread === 0
// // // // // //                 ? "Cover"
// // // // // //                 : displaySpread === 1
// // // // // //                   ? "Intro"
// // // // // //                   : displaySpread === 2
// // // // // //                     ? "Index"
// // // // // //                     : `Thank You`}{" "}
// // // // // //               / {totalSpreads}
// // // // // //             </div>
// // // // // //             <motion.button
// // // // // //               className="bg-slate-600 text-white border-none py-2 px-4 rounded-full cursor-not-allowed font-semibold text-sm transition-all duration-300 ease-in-out shadow-md
// // // // // //               flex items-center justify-center w-10 h-8"
// // // // // //               style={{
// // // // // //                 background:
// // // // // //                   displaySpread >= totalSpreads - 1
// // // // // //                     ? colors.secondary
// // // // // //                     : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// // // // // //                 cursor: displaySpread >= totalSpreads - 1 ? "not-allowed" : "pointer",
// // // // // //                 boxShadow: displaySpread >= totalSpreads - 1 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
// // // // // //               }}
// // // // // //               onClick={nextSpread}
// // // // // //               disabled={displaySpread >= totalSpreads - 1}
// // // // // //               whileHover={
// // // // // //                 displaySpread < totalSpreads - 1
// // // // // //                   ? { translateY: -2, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)" }
// // // // // //                   : {}
// // // // // //               }
// // // // // //               whileTap={
// // // // // //                 displaySpread < totalSpreads - 1
// // // // // //                   ? { translateY: 0, boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)" }
// // // // // //                   : {}
// // // // // //               }
// // // // // //             >
// // // // // //               →
// // // // // //             </motion.button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <AnimatePresence>
// // // // // //         {selectedProduct && selectedProduct.imageIndex === undefined && (
// // // // // //           <ProductGallery productId={selectedProduct.id} closeGallery={closeGallery} colors={colors} />
// // // // // //         )}
// // // // // //         {selectedProduct && selectedProduct.imageIndex !== undefined && (
// // // // // //           <ZoomedImageViewer
// // // // // //             productId={selectedProduct.id}
// // // // // //             imageIndex={selectedProduct.imageIndex}
// // // // // //             closeViewer={() => setSelectedProduct(null)}
// // // // // //           />
// // // // // //         )}
// // // // // //       </AnimatePresence>
// // // // // //     </>
// // // // // //   )
// // // // // // }

// // // // // // export default FlipBook
// // // // // "use client"

// // // // // import { useState, useRef, useCallback, useEffect } from "react"
// // // // // import { motion, AnimatePresence } from "framer-motion"
// // // // // import Image from "next/image"
// // // // // import { Droplet, Leaf, X, Plus, Minus, Maximize, Phone, Mail, MapPin } from "lucide-react"
// // // // // import {Instagram, Facebook } from "lucide-react";
// // // // // import { FaWhatsapp } from "react-icons/fa";

// // // // // const FlipBook = () => {
// // // // //   const [currentSpread, setCurrentSpread] = useState(0)
// // // // //   const [displaySpread, setDisplaySpread] = useState(0)
// // // // //   const [selectedProduct, setSelectedProduct] = useState(null)
// // // // //   const [isFlipping, setIsFlipping] = useState(false)
// // // // //   const [flipDirection, setFlipDirection] = useState("")
// // // // //   const [sidebarWidth, setSidebarWidth] = useState(300)
// // // // //   const [isResizing, setIsResizing] = useState(false)
// // // // //   const flipBookRef = useRef(null)
// // // // //   const [windowWidth, setWindowWidth] = useState(1024)
// // // // //   const [isMobile, setIsMobile] = useState(false)

// // // // //   // Updated color palette to match VedicJal website (green theme)
// // // // //   const colors = {
// // // // //     primary: "#16a34a", // Green-600
// // // // //     primaryLight: "#bbf7d0", // Green-200
// // // // //     primaryDark: "#15803d", // Green-700
// // // // //     secondary: "#6b7280", // Gray-500
// // // // //     accent: "#059669", // Emerald-600
// // // // //     accentLight: "#a7f3d0", // Emerald-200
// // // // //     textDark: "#1f2937", // Gray-800
// // // // //     textMedium: "#4b5563", // Gray-600
// // // // //     textLight: "#9ca3af", // Gray-400
// // // // //     backgroundLight: "#f0fdf4", // Green-50
// // // // //     backgroundWhite: "#ffffff",
// // // // //     borderLight: "#d1fae5", // Green-100
// // // // //     shadowLight: "rgba(34, 197, 94, 0.1)",
// // // // //     shadowMedium: "rgba(34, 197, 94, 0.2)",
// // // // //     shadowStrong: "rgba(34, 197, 94, 0.3)",
// // // // //     brandGreen: "#16a34a",
// // // // //     brandDarkGreen: "#15803d",
// // // // //     brandLightGreen: "#22c55e",
// // // // //   }

// // // // //   // Product data for galleries
// // // // //   const productData = {
// // // // //     "200ml": {
// // // // //       title: "200ml Water Bottles",
// // // // //       images: [
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // // //       ],
// // // // //     },
// // // // //     "250ml": {
// // // // //       title: "250ml Water Bottles",
// // // // //       images: [
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
// // // // //       ],
// // // // //     },
// // // // //     "300ml": {
// // // // //       title: "300ml Water Bottles",
// // // // //       images: [
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
// // // // //       ],
// // // // //     },
// // // // //     "500ml": {
// // // // //       title: "500ml Water Bottles",
// // // // //       images: [
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // // //       ],
// // // // //     },
// // // // //     "750ml": {
// // // // //       title: "750ml Water Bottles",
// // // // //       images: [
// // // // //         "/img1.png",
// // // // //         "\img2.png",
// // // // //         "\img3.png",
// // // // //         "\img4.png",
// // // // //         "\img5.png",
// // // // //         "\img6.png",
// // // // //         "\img7.png",
// // // // //         "\img8.png",
// // // // //         "\img9.png",
// // // // //         "\img10.png",
// // // // //         "\img11.png",
// // // // //         "\img12.png",
// // // // //         "\img13.png",
// // // // //         "\img14.png",
// // // // //         "\img15.png",
// // // // //         "\img16.png",
// // // // //         "\img17.png",
// // // // //         "\img18.png",
// // // // //         "\img19.png",
// // // // //         "\img20.png",
// // // // //         "\img21.png",
// // // // //         "\img22.png",
// // // // //         "\img23.png",
// // // // //       ],
// // // // //     },
// // // // //     "1liter": {
// // // // //       title: "1 Liter Water Bottles",
// // // // //       images: [
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // // //       ],
// // // // //     },
// // // // //     "bio-200ml": {
// // // // //       title: "Biodegradable 200ml",
// // // // //       images: [
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
// // // // //       ],
// // // // //     },
// // // // //     "bio-250ml": {
// // // // //       title: "Biodegradable 250ml",
// // // // //       images: [
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // // //       ],
// // // // //     },
// // // // //     "bio-300ml": {
// // // // //       title: "Biodegradable 300ml",
// // // // //       images: [
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
// // // // //       ],
// // // // //     },
// // // // //     "bio-500ml": {
// // // // //       title: "Biodegradable 500ml",
// // // // //       images: [
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // // //       ],
// // // // //     },
// // // // //   }

// // // // //   const openProductGallery = (productId) => {
// // // // //     setSelectedProduct({ id: productId, imageIndex: undefined })
// // // // //   }

// // // // //   const closeGallery = () => {
// // // // //     setSelectedProduct(null)
// // // // //   }

// // // // //   const allPages = [
// // // // //     // Page 0 - Cover Page
// // // // //    {
// // // // //   id: "cover",
// // // // //   type: "cover",
// // // // //   content: (
// // // // //     <motion.div
// // // // //       initial={{ opacity: 0, scale: 0.9 }}
// // // // //       animate={{ opacity: 1, scale: 1 }}
// // // // //       transition={{ duration: 0.8, ease: "easeOut" }}
// // // // //       className="w-full h-full p-0 relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl shadow-xl flex flex-col justify-center items-center select-none"
// // // // //     >
// // // // //       {/* Decorative Top & Bottom Strips */}
// // // // //       <motion.div
// // // // //         className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-br from-green-500/20 to-green-400/15 -skew-y-3 origin-top-left"
// // // // //         initial={{ x: -100, opacity: 0 }}
// // // // //         animate={{ x: 0, opacity: 1 }}
// // // // //         transition={{ delay: 0.3, duration: 0.8 }}
// // // // //       />
// // // // //       <motion.div
// // // // //         className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-tl from-green-400/15 to-green-500/20 skew-y-3 origin-bottom-right"
// // // // //         initial={{ x: 100, opacity: 0 }}
// // // // //         animate={{ x: 0, opacity: 1 }}
// // // // //         transition={{ delay: 0.4, duration: 0.8 }}
// // // // //       />

// // // // //       {/* Floating Particles */}
// // // // //       {[
// // // // //         { top: 20, left: 10 },
// // // // //         { top: 32, left: 25 },
// // // // //         { top: 44, left: 40 },
// // // // //         { top: 56, left: 55 },
// // // // //         { top: 68, left: 70 },
// // // // //         { top: 80, left: 85 },
// // // // //       ].map((p, i) => (
// // // // //         <motion.div
// // // // //           key={i}
// // // // //           className="absolute w-1.5 h-1.5 bg-green-400/30 rounded-full"
// // // // //           style={{ top: `${p.top}%`, left: `${p.left}%` }}
// // // // //           animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
// // // // //           transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.2 }}
// // // // //         />
// // // // //       ))}

// // // // //       {/* Main Content */}
// // // // //       <motion.div
// // // // //         initial={{ y: 30, opacity: 0 }}
// // // // //         animate={{ y: 0, opacity: 1 }}
// // // // //         transition={{ delay: 0.5, duration: 0.8 }}
// // // // //         className="relative z-10 p-4 text-center max-w-md w-[92%]"
// // // // //       >
// // // // //         {/* Logo & Title */}
// // // // //         <div className="mb-3 flex flex-col items-center">
// // // // //           <motion.div
// // // // //             initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
// // // // //             animate={{ scale: 1, opacity: 1, rotate: 0 }}
// // // // //             transition={{ delay: 0.7, duration: 0.8, ease: "backOut" }}
// // // // //             whileHover={{ scale: 1.05, rotate: 2 }}
// // // // //           >
// // // // //             <Image
// // // // //               src="/Vedic Jal.png"
// // // // //               alt="VedicJal Logo"
// // // // //               width={100}
// // // // //               height={100}
// // // // //               className="rounded-xl shadow-xl border-4 border-white bg-white mb-1"
// // // // //               onContextMenu={(e) => e.preventDefault()}
// // // // //               draggable="false"
// // // // //             />
// // // // //           </motion.div>
// // // // //           <motion.h1
// // // // //             className="text-3xl md:text-4xl font-bold text-green-800 font-serif mb-1"
// // // // //             initial={{ opacity: 0, y: 20 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ delay: 0.9, duration: 0.6 }}
// // // // //           >
// // // // //             VedicJal
// // // // //           </motion.h1>
// // // // //           <motion.p
// // // // //             className="text-sm md:text-base text-green-600 font-medium"
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             transition={{ delay: 1.1, duration: 0.6 }}
// // // // //           >
// // // // //             Pure Water, Pure Life
// // // // //           </motion.p>
// // // // //         </div>

// // // // //         {/* Welcome Box */}
// // // // //         <motion.div
// // // // //           initial={{ y: 30, opacity: 0, scale: 0.95 }}
// // // // //           animate={{ y: 0, opacity: 1, scale: 1 }}
// // // // //           transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
// // // // //           className="bg-white/80 backdrop-blur-md rounded-xl p-3 mt-3 mb-3 shadow-md border border-green-200"
// // // // //         >
// // // // //           <h2 className="text-lg md:text-xl font-semibold text-green-800 font-serif m-0">
// // // // //             Welcome to VedicJal Online Brochure
// // // // //           </h2>
// // // // //           <p className="text-green-600 mt-1 text-sm">
// // // // //             Discover our customized range of premium water bottles
// // // // //           </p>
// // // // //         </motion.div>

// // // // //         {/* Divider */}
// // // // //         <motion.div
// // // // //           className="flex items-center justify-center my-3"
// // // // //           initial={{ scaleX: 0 }}
// // // // //           animate={{ scaleX: 1 }}
// // // // //           transition={{ delay: 1.5, duration: 0.8 }}
// // // // //         >
// // // // //           <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-green-600/50" />
// // // // //           <motion.div
// // // // //             className="mx-2 w-2.5 h-2.5 bg-green-500 rounded-full"
// // // // //             animate={{ scale: [1, 1.2, 1] }}
// // // // //             transition={{ duration: 2, repeat: Infinity }}
// // // // //           />
// // // // //           <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-green-600/50" />
// // // // //         </motion.div>

// // // // //         {/* Footer Quote */}
// // // // //         <motion.p
// // // // //           className="text-xs md:text-sm text-green-700 italic mt-2"
// // // // //           initial={{ opacity: 0 }}
// // // // //           animate={{ opacity: 1 }}
// // // // //           transition={{ delay: 1.7, duration: 0.6 }}
// // // // //         >
// // // // //           "Bringing purity to your hands"
// // // // //         </motion.p>
// // // // //       </motion.div>
// // // // //     </motion.div>
// // // // //   ),
// // // // // }
// // // // // ,

// // // // //     // Page 1 - Full-fit Image Left
// // // // //     {
// // // // //       id: "image-left",
// // // // //       type: "fullimage",
// // // // //       content: (
// // // // //         <motion.div
// // // // //           className="w-full aspect-[3/4] relative overflow-hidden select-none"
// // // // //           initial={{ opacity: 0, x: -50 }}
// // // // //           animate={{ opacity: 1, x: 0 }}
// // // // //           transition={{ duration: 0.8, ease: "easeOut" }}
// // // // //         >
// // // // //           <Image
// // // // //             src="/page1.jpg"
// // // // //             alt="VedicJal Workshop - Page 1"
// // // // //             fill
// // // // //             style={{ objectFit: "cover" }}
// // // // //             onContextMenu={(e) => e.preventDefault()}
// // // // //             draggable="false"
// // // // //           />
// // // // //           <motion.div
// // // // //             className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             transition={{ delay: 0.5, duration: 0.8 }}
// // // // //           />
// // // // //         </motion.div>
// // // // //       ),
// // // // //     },

// // // // //     // Page 2 - Full-fit Image Right
// // // // //     {
// // // // //       id: "image-right",
// // // // //       type: "fullimage",
// // // // //       content: (
// // // // //         <motion.div
// // // // //           className="w-full aspect-[3/4] relative overflow-hidden select-none"
// // // // //           initial={{ opacity: 0, x: 50 }}
// // // // //           animate={{ opacity: 1, x: 0 }}
// // // // //           transition={{ duration: 0.8, ease: "easeOut" }}
// // // // //         >
// // // // //           <Image
// // // // //             src="/page2.jpg"
// // // // //             alt="VedicJal Workshop - Page 2"
// // // // //             fill
// // // // //             style={{ objectFit: "cover" }}
// // // // //             onContextMenu={(e) => e.preventDefault()}
// // // // //             draggable="false"
// // // // //           />
// // // // //           <motion.div
// // // // //             className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             transition={{ delay: 0.5, duration: 0.8 }}
// // // // //           />
// // // // //         </motion.div>
// // // // //       ),
// // // // //     },

// // // // //     // Page 3 - Main Index (ml bottles)
// // // // //    {
// // // // //   id: "main-index",
// // // // //   type: "index-main",
// // // // //   content: (
// // // // //     <div className="w-full h-full p-3 md:p-6 box-border bg-gradient-to-br from-white to-green-50 font-serif flex flex-col overflow-y-auto select-none scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-transparent">
// // // // //       {/* Title Section */}
// // // // //       <motion.div
// // // // //         initial={{ y: -30, opacity: 0 }}
// // // // //         animate={{ y: 0, opacity: 1 }}
// // // // //         transition={{ duration: 0.8, ease: "easeOut" }}
// // // // //         className="text-center mb-4"
// // // // //       >
// // // // //         <h1 className="text-xl md:text-3xl text-green-800 font-bold m-0">PRODUCT INDEX</h1>
// // // // //         <motion.div
// // // // //           className="w-16 h-1 bg-green-600 mx-auto my-2 rounded-full"
// // // // //           initial={{ scaleX: 0 }}
// // // // //           animate={{ scaleX: 1 }}
// // // // //           transition={{ delay: 0.3, duration: 0.8 }}
// // // // //         />
// // // // //         <p className="text-xs md:text-sm text-green-700 font-medium m-0">
// // // // //           Click on any item to view the product gallery
// // // // //         </p>
// // // // //       </motion.div>

// // // // //       {/* Product List */}
// // // // //       <motion.div
// // // // //         initial={{ y: 30, opacity: 0 }}
// // // // //         animate={{ y: 0, opacity: 1 }}
// // // // //         transition={{ delay: 0.4, duration: 0.8 }}
// // // // //         className="flex-1 w-full max-w-[92vw] mx-auto"
// // // // //       >
// // // // //         <div className="grid grid-cols-1 gap-2">
// // // // //           {[
// // // // //             { number: "1.", name: "200ml", id: "200ml" },
// // // // //             { number: "2.", name: "250ml", id: "250ml" },
// // // // //             { number: "3.", name: "300ml", id: "300ml" },
// // // // //             { number: "4.", name: "500ml", id: "500ml" },
// // // // //             { number: "5.", name: "750ml", id: "750ml" },
// // // // //             { number: "6.", name: "1 Liter", id: "1liter" },
// // // // //           ].map((item, index) => (
// // // // //             <motion.div
// // // // //               key={item.id}
// // // // //               className="flex items-center p-2 md:p-3 bg-white rounded-md cursor-pointer text-sm md:text-base text-green-800 border border-transparent shadow hover:shadow-md transition-all duration-300"
// // // // //               onClick={() => openProductGallery(item.id)}
// // // // //               initial={{ x: -50, opacity: 0 }}
// // // // //               animate={{ x: 0, opacity: 1 }}
// // // // //               transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
// // // // //               whileHover={{
// // // // //                 background: "#ecfdf5",
// // // // //                 borderColor: "#22c55e",
// // // // //                 x: 6,
// // // // //                 scale: 1.02,
// // // // //               }}
// // // // //               whileTap={{ scale: 0.97 }}
// // // // //             >
// // // // //               <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
// // // // //                 <Droplet className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-600" />
// // // // //               </motion.div>
// // // // //               <span className="font-bold mr-3 min-w-[32px]">{item.number}</span>
// // // // //               <span className="flex-1">{item.name}</span>
// // // // //               <motion.span
// // // // //                 className="ml-auto text-green-600 text-base font-bold"
// // // // //                 whileHover={{ x: 4 }}
// // // // //                 transition={{ duration: 0.2 }}
// // // // //               >
// // // // //                 →
// // // // //               </motion.span>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </motion.div>
// // // // //     </div>
// // // // //   ),
// // // // // }
// // // // // ,

// // // // //     // Page 4 - Biodegradable Index
// // // // //   {
// // // // //   id: "bio-index",
// // // // //   type: "index-bio",
// // // // //   content: (
// // // // //     <div className="w-full h-full p-3 md:p-6 box-border bg-gradient-to-br from-white to-emerald-50 font-serif flex flex-col overflow-y-auto select-none scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-transparent">
// // // // //       {/* Header */}
// // // // //       <motion.div
// // // // //         initial={{ y: -30, opacity: 0 }}
// // // // //         animate={{ y: 0, opacity: 1 }}
// // // // //         transition={{ duration: 0.8, ease: "easeOut" }}
// // // // //         className="text-center mb-4"
// // // // //       >
// // // // //         <h1 className="text-xl md:text-3xl text-emerald-700 font-bold m-0">BIODEGRADABLE COLLECTION</h1>
// // // // //         <motion.div
// // // // //           className="w-16 h-1 bg-emerald-600 mx-auto my-2 rounded-full"
// // // // //           initial={{ scaleX: 0 }}
// // // // //           animate={{ scaleX: 1 }}
// // // // //           transition={{ delay: 0.3, duration: 0.8 }}
// // // // //         />
// // // // //         <p className="text-xs md:text-sm text-emerald-700 font-medium m-0">
// // // // //           Eco-friendly options for a sustainable future
// // // // //         </p>
// // // // //       </motion.div>

// // // // //       {/* Biodegradable Items List */}
// // // // //       <motion.div
// // // // //         initial={{ y: 30, opacity: 0 }}
// // // // //         animate={{ y: 0, opacity: 1 }}
// // // // //         transition={{ delay: 0.4, duration: 0.8 }}
// // // // //         className="flex-1 w-full max-w-[92vw] mx-auto"
// // // // //       >
// // // // //         <div className="grid grid-cols-1 gap-2">
// // // // //           {[
// // // // //             { number: "7.1", name: "Biodegradable 200ml", id: "bio-200ml" },
// // // // //             { number: "7.2", name: "Biodegradable 250ml", id: "bio-250ml" },
// // // // //             { number: "7.3", name: "Biodegradable 300ml", id: "bio-300ml" },
// // // // //             { number: "7.4", name: "Biodegradable 500ml", id: "bio-500ml" },
// // // // //           ].map((item, index) => (
// // // // //             <motion.div
// // // // //               key={item.id}
// // // // //               className="flex items-center p-2 md:p-3 bg-white rounded-md cursor-pointer text-sm md:text-base text-emerald-800 border border-transparent shadow hover:shadow-md transition-all duration-300"
// // // // //               onClick={() => openProductGallery(item.id)}
// // // // //               initial={{ x: 50, opacity: 0 }}
// // // // //               animate={{ x: 0, opacity: 1 }}
// // // // //               transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
// // // // //               whileHover={{
// // // // //                 background: "#d1fae5",
// // // // //                 borderColor: "#10b981",
// // // // //                 x: 6,
// // // // //                 scale: 1.02,
// // // // //               }}
// // // // //               whileTap={{ scale: 0.97 }}
// // // // //             >
// // // // //               <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
// // // // //                 <Leaf className="w-4 h-4 md:w-5 md:h-5 mr-2 text-emerald-600" />
// // // // //               </motion.div>
// // // // //               <span className="font-bold mr-3 min-w-[45px]">{item.number}</span>
// // // // //               <span className="flex-1">{item.name}</span>
// // // // //               <motion.span
// // // // //                 className="ml-auto text-emerald-600 text-base font-bold"
// // // // //                 whileHover={{ x: 4 }}
// // // // //                 transition={{ duration: 0.2 }}
// // // // //               >
// // // // //                 →
// // // // //               </motion.span>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </motion.div>
// // // // //     </div>
// // // // //   ),
// // // // // }
// // // // // ,

// // // // //     // Page 5 - THANK YOU PAGE
// // // // //    {
// // // // //   id: "thankyou",
// // // // //   type: "thankyou",
// // // // //   content: (
// // // // //     <div className="w-full h-full p-3 md:p-5 box-border bg-gradient-to-br from-white to-green-50 flex items-center justify-center relative overflow-hidden select-none">
// // // // //       {/* Floating Particles */}
// // // // //       {[
// // // // //         { top: 15, left: 20, delay: 0 },
// // // // //         { top: 35, left: 80, delay: 0.5 },
// // // // //         { top: 60, left: 15, delay: 1.0 },
// // // // //         { top: 25, left: 70, delay: 1.5 },
// // // // //         { top: 80, left: 85, delay: 2.0 },
// // // // //         { top: 45, left: 25, delay: 2.5 },
// // // // //         { top: 70, left: 60, delay: 3.0 },
// // // // //         { top: 90, left: 40, delay: 3.5 },
// // // // //       ].map((p, i) => (
// // // // //         <motion.div
// // // // //           key={i}
// // // // //           className="absolute w-1 h-1 bg-green-400/40 rounded-full"
// // // // //           style={{ top: `${p.top}%`, left: `${p.left}%` }}
// // // // //           animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
// // // // //           transition={{
// // // // //             duration: 3 + i * 0.3,
// // // // //             repeat: Infinity,
// // // // //             delay: p.delay,
// // // // //           }}
// // // // //         />
// // // // //       ))}

// // // // //       <motion.div
// // // // //         initial={{ scale: 0.8, opacity: 0 }}
// // // // //         animate={{ scale: 1, opacity: 1 }}
// // // // //         transition={{ duration: 0.8, ease: "backOut" }}
// // // // //         className="text-center text-green-800 z-10 w-full max-w-md"
// // // // //       >
// // // // //         {/* Logo */}
// // // // //         <motion.div
// // // // //           initial={{ y: -30, opacity: 0, rotate: -10 }}
// // // // //           animate={{ y: 0, opacity: 1, rotate: 0 }}
// // // // //           transition={{ delay: 0.3, duration: 0.8, ease: "backOut" }}
// // // // //           className="mb-3 flex flex-col items-center"
// // // // //         >
// // // // //           <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
// // // // //             <Image
// // // // //               src="/Vedic Jal.png"
// // // // //               alt="VedicJal Logo"
// // // // //               width={70}
// // // // //               height={70}
// // // // //               className="rounded-lg shadow-md border-2 border-white"
// // // // //               onContextMenu={(e) => e.preventDefault()}
// // // // //               draggable="false"
// // // // //             />
// // // // //           </motion.div>
// // // // //         </motion.div>

// // // // //         {/* Heading */}
// // // // //         <motion.h1
// // // // //           initial={{ y: -30, opacity: 0 }}
// // // // //           animate={{ y: 0, opacity: 1 }}
// // // // //           transition={{ delay: 0.5, duration: 0.8 }}
// // // // //           className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 leading-tight"
// // // // //         >
// // // // //           Thank You
// // // // //         </motion.h1>

// // // // //         <motion.div
// // // // //           className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-3 rounded-full"
// // // // //           initial={{ scaleX: 0 }}
// // // // //           animate={{ scaleX: 1 }}
// // // // //           transition={{ delay: 0.7, duration: 0.8 }}
// // // // //         />

// // // // //         {/* Subtext */}
// // // // //         <motion.p
// // // // //           initial={{ y: 20, opacity: 0 }}
// // // // //           animate={{ y: 0, opacity: 1 }}
// // // // //           transition={{ delay: 0.9, duration: 0.5 }}
// // // // //           className="text-base md:text-lg font-semibold mb-2"
// // // // //         >
// // // // //           For choosing VedicJal
// // // // //         </motion.p>

// // // // //         <motion.p
// // // // //           initial={{ y: 20, opacity: 0 }}
// // // // //           animate={{ y: 0, opacity: 1 }}
// // // // //           transition={{ delay: 1.1, duration: 0.5 }}
// // // // //           className="text-sm md:text-base text-green-700 leading-snug mb-4"
// // // // //         >
// // // // //           Your trust in our premium handcrafted water bottles means the world to us.
// // // // //         </motion.p>

// // // // //         {/* Quote */}
// // // // //         <motion.div
// // // // //           initial={{ scale: 0.9, opacity: 0 }}
// // // // //           animate={{ scale: 1, opacity: 1 }}
// // // // //           transition={{ delay: 1.3, duration: 0.5 }}
// // // // //           className="p-3 px-4 border border-green-300 rounded-lg bg-green-100/50 inline-block text-green-700 font-medium italic text-sm md:text-base"
// // // // //         >
// // // // //           "Pure Water, Pure Life"
// // // // //         </motion.div>
// // // // //       </motion.div>
// // // // //     </div>
// // // // //   ),
// // // // // }
// // // // // ,

// // // // //     // Page 6 - Contact Us Page
// // // // // {
// // // // //   id: "contact",
// // // // //   type: "contact",
// // // // //   content: (
// // // // //     <div className="w-full h-full p-4 md:p-6 box-border bg-gradient-to-br from-white to-green-50 flex flex-col justify-center items-center overflow-auto select-none">
// // // // //       <motion.div
// // // // //         initial={{ opacity: 0, y: 30 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         transition={{ duration: 0.8, ease: "easeOut" }}
// // // // //         className="text-green-800 w-full max-w-md text-center space-y-3"
// // // // //       >
// // // // //         {/* Title */}
// // // // //         <motion.h1
// // // // //           initial={{ y: -20, opacity: 0 }}
// // // // //           animate={{ y: 0, opacity: 1 }}
// // // // //           transition={{ delay: 0.2, duration: 0.6 }}
// // // // //           className="text-xl sm:text-2xl font-bold font-serif"
// // // // //         >
// // // // //           Contact Us
// // // // //         </motion.h1>

// // // // //         {/* Divider */}
// // // // //         <motion.div
// // // // //           className="w-10 sm:w-12 h-1 bg-green-600 mx-auto rounded-full"
// // // // //           initial={{ scaleX: 0 }}
// // // // //           animate={{ scaleX: 1 }}
// // // // //           transition={{ delay: 0.3, duration: 0.6 }}
// // // // //         />

// // // // //         {/* Details */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 10 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ delay: 0.5, duration: 0.6 }}
// // // // //           className="bg-white/90 p-4 rounded-xl shadow border border-green-200 text-xs sm:text-sm text-green-700 leading-relaxed space-y-1"
// // // // //         >
// // // // //           <p className="font-bold text-green-800 text-sm">Vedicjal</p>
// // // // //           <p>A brand owned by Anugya FMCG Industries</p>
// // // // //           <p>E-153 Forest Lane, Near Country Club</p>
// // // // //           <p>Sainik Farms, New Delhi – 110068</p>
// // // // //           <p>📞 <span className="text-green-800 font-medium">+91- 9810152783/9818088458</span></p>
// // // // //           <p>
// // // // //             📧{" "}
// // // // //             <a
// // // // //               href="mailto:info@vedicjal.com"
// // // // //               className="underline text-green-800 break-all"
// // // // //             >
// // // // //               info@vedicjal.com
// // // // //             </a>
// // // // //           </p>
// // // // //           <p>
// // // // //             🌐{" "}
// // // // //             <a
// // // // //               href="https://vedicjal.com"
// // // // //               target="_blank"
// // // // //               rel="noopener noreferrer"
// // // // //               className="underline text-green-800 break-all"
// // // // //             >
// // // // //               www.vedicjal.com
// // // // //             </a>
// // // // //           </p>

// // // // //           {/* Social Media */}
// // // // //           <div className="flex justify-center gap-4 pt-2 text-green-600">
// // // // //             <a
// // // // //               href="https://www.instagram.com/vedic_jal?utm_source=qr&igsh=MXI1OG90MjFyM2E0OA=="
// // // // //               target="_blank"
// // // // //               rel="noopener noreferrer"
// // // // //               aria-label="Instagram"
// // // // //             >
// // // // //               <Instagram className="w-5 h-5 hover:text-green-800" />
// // // // //             </a>
// // // // //             <a
// // // // //               href="https://www.facebook.com/share/19N6P87t5x/"
// // // // //               target="_blank"
// // // // //               rel="noopener noreferrer"
// // // // //               aria-label="Facebook"
// // // // //             >
// // // // //               <Facebook className="w-5 h-5 hover:text-green-800" />
// // // // //             </a>
// // // // //             <a
// // // // //               href="https://wa.me/message/HMB5Q7MZXTP3P1"
// // // // //               target="_blank"
// // // // //               rel="noopener noreferrer"
// // // // //               aria-label="WhatsApp"
// // // // //             >
// // // // //               <FaWhatsapp className="w-5 h-5 hover:text-green-800" />
// // // // //             </a>
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       </motion.div>
// // // // //     </div>
// // // // //   ),
// // // // // }





// // // // //   ]

// // // // //   // Mobile-specific page order for single-page view
// // // // //   const mobilePages = [
// // // // //     0, // Cover
// // // // //     1, // Left image
// // // // //     2, // Right image
// // // // //     3, // Main index
// // // // //     4, // Bio index
// // // // //     5, // Thank you
// // // // //     6, // Contact
// // // // //   ]

// // // // //   // Desktop spreads: [leftPageIndex, rightPageIndex]
// // // // //   const spreads = [
// // // // //     [null, 0], // Spread 0: Cover (Right only)
// // // // //     [1, 2], // Spread 1: Image Left, Image Right
// // // // //     [3, 4], // Spread 2: Main Index, Biodegradable Index
// // // // //     [5, 6], // Spread 3: Thank You, Contact
// // // // //   ]

// // // // //   const totalSpreads = isMobile ? mobilePages.length : spreads.length

// // // // //   const getPageContent = (pageIndex) => {
// // // // //     if (pageIndex === null || typeof allPages[pageIndex] === "undefined") {
// // // // //       return null
// // // // //     }
// // // // //     return allPages[pageIndex].content
// // // // //   }

// // // // //   // Mobile: get current page content
// // // // //   const getCurrentMobilePageContent = () => {
// // // // //     if (!isMobile) return null
// // // // //     const pageIndex = mobilePages[displaySpread]
// // // // //     return getPageContent(pageIndex)
// // // // //   }

// // // // //   // Desktop: get left/right page content
// // // // //   const getCurrentLeftPageContent = () => {
// // // // //     if (isMobile) return null
// // // // //     const pageIndex = spreads[displaySpread][0]
// // // // //     return getPageContent(pageIndex)
// // // // //   }

// // // // //   const getCurrentRightPageContent = () => {
// // // // //     if (isMobile) return null
// // // // //     const pageIndex = spreads[displaySpread][1]
// // // // //     return getPageContent(pageIndex)
// // // // //   }

// // // // //   const getFlippingPageFrontContent = () => {
// // // // //     if (isMobile) {
// // // // //       const pageIndex = mobilePages[currentSpread]
// // // // //       return getPageContent(pageIndex)
// // // // //     } else {
// // // // //       if (flipDirection === "next") {
// // // // //         return getPageContent(spreads[currentSpread][1])
// // // // //       } else if (flipDirection === "prev") {
// // // // //         return getPageContent(spreads[currentSpread][0])
// // // // //       }
// // // // //     }
// // // // //     return null
// // // // //   }

// // // // //   const getFlippingPageBackContent = () => {
// // // // //     if (isMobile) {
// // // // //       const nextPageIdx = flipDirection === "next" ? mobilePages[currentSpread + 1] : mobilePages[currentSpread - 1]
// // // // //       return getPageContent(nextPageIdx)
// // // // //     } else {
// // // // //       if (flipDirection === "next") {
// // // // //         const nextPageIdx = spreads[currentSpread + 1]?.[1]
// // // // //         return getPageContent(nextPageIdx)
// // // // //       } else if (flipDirection === "prev") {
// // // // //         const prevPageIdx = spreads[currentSpread - 1]?.[0]
// // // // //         return getPageContent(prevPageIdx)
// // // // //       }
// // // // //     }
// // // // //     return null
// // // // //   }

// // // // //   const goToSpread = (spreadIndex) => {
// // // // //     if (isFlipping || spreadIndex < 0 || spreadIndex >= totalSpreads) return
// // // // //     const direction = spreadIndex > currentSpread ? "next" : "prev"
// // // // //     setFlipDirection(direction)
// // // // //     setIsFlipping(true)
// // // // //     setCurrentSpread(spreadIndex)

// // // // //     setTimeout(() => {
// // // // //       setDisplaySpread(spreadIndex)
// // // // //       setIsFlipping(false)
// // // // //       setFlipDirection("")
// // // // //     }, 800) // Longer animation for mobile
// // // // //   }

// // // // //   const nextSpread = () => {
// // // // //     if (currentSpread < totalSpreads - 1) {
// // // // //       goToSpread(currentSpread + 1)
// // // // //     }
// // // // //   }

// // // // //   const prevSpread = () => {
// // // // //     if (currentSpread > 0) {
// // // // //       goToSpread(currentSpread - 1)
// // // // //     }
// // // // //   }

// // // // //   const isClosedBook = displaySpread === 0 && !isMobile

// // // // //   // Sidebar resize handlers (desktop only)
// // // // //   const handleMouseDown = useCallback(
// // // // //     (e) => {
// // // // //       if (isMobile) return
// // // // //       setIsResizing(true)
// // // // //       e.preventDefault()
// // // // //     },
// // // // //     [isMobile],
// // // // //   )

// // // // //   const handleMouseMove = useCallback(
// // // // //     (e) => {
// // // // //       if (!isResizing || isMobile) return
// // // // //       const newWidth = e.clientX
// // // // //       if (newWidth >= 250 && newWidth <= 400) {
// // // // //         setSidebarWidth(newWidth)
// // // // //       }
// // // // //     },
// // // // //     [isResizing, isMobile],
// // // // //   )

// // // // //   const handleMouseUp = useCallback(() => {
// // // // //     setIsResizing(false)
// // // // //   }, [])

// // // // //   useEffect(() => {
// // // // //     if (isResizing) {
// // // // //       document.addEventListener("mousemove", handleMouseMove)
// // // // //       document.addEventListener("mouseup", handleMouseUp)
// // // // //       return () => {
// // // // //         document.removeEventListener("mousemove", handleMouseMove)
// // // // //         document.removeEventListener("mouseup", handleMouseUp)
// // // // //       }
// // // // //     }
// // // // //   }, [isResizing, handleMouseMove, handleMouseUp])

// // // // //   useEffect(() => {
// // // // //     const handleResize = () => {
// // // // //       const width = window.innerWidth
// // // // //       setWindowWidth(width)
// // // // //       setIsMobile(width <= 768)
// // // // //       if (width <= 768) {
// // // // //         setSidebarWidth(width)
// // // // //       }
// // // // //     }

// // // // //     if (typeof window !== "undefined") {
// // // // //       const width = window.innerWidth
// // // // //       setWindowWidth(width)
// // // // //       setIsMobile(width <= 768)
// // // // //       window.addEventListener("resize", handleResize)
// // // // //       return () => {
// // // // //         window.removeEventListener("resize", handleResize)
// // // // //       }
// // // // //     }
// // // // //   }, [])

// // // // //   // Product Gallery Component
// // // // //   const ProductGallery = ({ productId, closeGallery, colors }) => {
// // // // //     const product = productData[productId]
// // // // //     if (!product) return null

// // // // //     const galleryVariants = {
// // // // //       hidden: { opacity: 0, scale: 0.95 },
// // // // //       visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
// // // // //       exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } },
// // // // //     }

// // // // //     const itemVariants = {
// // // // //       hidden: { opacity: 0, y: 30 },
// // // // //       visible: { opacity: 1, y: 0 },
// // // // //     }

// // // // //     return (
// // // // //       <motion.div
// // // // //         variants={galleryVariants}
// // // // //         initial="hidden"
// // // // //         animate="visible"
// // // // //         exit="exit"
// // // // //         className="fixed inset-0 bg-black/95 z-[1000] flex flex-col select-none"
// // // // //       >
// // // // //         <div className="p-4 md:p-8 bg-green-900/20 backdrop-blur-md flex justify-between items-center border-b border-green-500/20">
// // // // //           <h2 className="text-white text-xl md:text-2xl font-semibold m-0">{product.title}</h2>
// // // // //           <motion.button
// // // // //             className="bg-white/20 border-none text-white text-2xl w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out"
// // // // //             onClick={closeGallery}
// // // // //             whileHover={{ background: "rgba(255, 255, 255, 0.3)", scale: 1.1 }}
// // // // //             whileTap={{ scale: 0.9 }}
// // // // //           >
// // // // //             <X className="w-6 h-6" />
// // // // //           </motion.button>
// // // // //         </div>

// // // // //         <motion.div
// // // // //           className="flex-1 p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto"
// // // // //           variants={{
// // // // //             visible: {
// // // // //               transition: {
// // // // //                 staggerChildren: 0.08,
// // // // //               },
// // // // //             },
// // // // //           }}
// // // // //         >
// // // // //           {product.images.map((image, index) => (
// // // // //             <motion.div
// // // // //               key={index}
// // // // //               variants={itemVariants}
// // // // //               className="bg-white/10 rounded-xl overflow-hidden transition-all duration-300 ease-in-out cursor-pointer border border-green-500/20"
// // // // //               onClick={() => setSelectedProduct({ id: productId, imageIndex: index })}
// // // // //               whileHover={{
// // // // //                 scale: 1.05,
// // // // //                 background: "rgba(255, 255, 255, 0.15)",
// // // // //                 borderColor: "rgba(34, 197, 94, 0.5)",
// // // // //               }}
// // // // //               whileTap={{ scale: 0.98 }}
// // // // //             >
// // // // //               <Image
// // // // //                 src={image || "/placeholder.svg"}
// // // // //                 alt={`${product.title} ${index + 1}`}
// // // // //                 width={400}
// // // // //                 height={300}
// // // // //                 className="w-full h-[300px] object-cover"
// // // // //                 onContextMenu={(e) => e.preventDefault()}
// // // // //                 draggable="false"
// // // // //               />
// // // // //               <div className="p-4 text-white text-center">
// // // // //                 <h3 className="m-0 text-lg font-medium">Model {index + 1}</h3>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </motion.div>
// // // // //       </motion.div>
// // // // //     )
// // // // //   }

// // // // //   // Zoomed Image Viewer Component
// // // // //   const ZoomedImageViewer = ({ productId, imageIndex, closeViewer }) => {
// // // // //     const product = productData[productId]
// // // // //     const imageUrl = product?.images[imageIndex]
// // // // //     const [zoom, setZoom] = useState(1)
// // // // //     const [position, setPosition] = useState({ x: 0, y: 0 })
// // // // //     const imageRef = useRef(null)
// // // // //     const isDragging = useRef(false)
// // // // //     const startDragPos = useRef({ x: 0, y: 0 })

// // // // //     const handleWheel = useCallback(
// // // // //       (e) => {
// // // // //         e.preventDefault()
// // // // //         const scaleAmount = 0.1
// // // // //         const newZoom = e.deltaY < 0 ? Math.min(3, zoom + scaleAmount) : Math.max(0.5, zoom - scaleAmount)
// // // // //         setZoom(newZoom)
// // // // //       },
// // // // //       [zoom],
// // // // //     )

// // // // //     const handleMouseDown = useCallback(
// // // // //       (e) => {
// // // // //         e.preventDefault()
// // // // //         isDragging.current = true
// // // // //         startDragPos.current = { x: e.clientX - position.x, y: e.clientY - position.y }
// // // // //       },
// // // // //       [position],
// // // // //     )

// // // // //     const handleMouseMove = useCallback((e) => {
// // // // //       if (!isDragging.current) return
// // // // //       setPosition({
// // // // //         x: e.clientX - startDragPos.current.x,
// // // // //         y: e.clientY - startDragPos.current.y,
// // // // //       })
// // // // //     }, [])

// // // // //     const handleMouseUp = useCallback(() => {
// // // // //       isDragging.current = false
// // // // //     }, [])

// // // // //     useEffect(() => {
// // // // //       const imgElement = imageRef.current
// // // // //       if (imgElement) {
// // // // //         imgElement.addEventListener("wheel", handleWheel, { passive: false })
// // // // //         imgElement.addEventListener("mousemove", handleMouseMove)
// // // // //         imgElement.addEventListener("mouseup", handleMouseUp)
// // // // //         imgElement.addEventListener("mouseleave", handleMouseUp)
// // // // //         return () => {
// // // // //           imgElement.removeEventListener("wheel", handleWheel)
// // // // //           imgElement.removeEventListener("mousemove", handleMouseMove)
// // // // //           imgElement.removeEventListener("mouseup", handleMouseUp)
// // // // //           imgElement.removeEventListener("mouseleave", handleMouseUp)
// // // // //         }
// // // // //       }
// // // // //     }, [handleWheel, handleMouseMove, handleMouseUp])

// // // // //     if (!imageUrl) return null

// // // // //     return (
// // // // //       <motion.div
// // // // //         initial={{ opacity: 0 }}
// // // // //         animate={{ opacity: 1 }}
// // // // //         exit={{ opacity: 0 }}
// // // // //         className="fixed inset-0 bg-black/95 z-[1001] flex items-center justify-center select-none"
// // // // //       >
// // // // //         <motion.button
// // // // //           className="absolute top-4 right-4 bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer"
// // // // //           onClick={closeViewer}
// // // // //           whileHover={{ background: "rgba(255, 255, 255, 0.3)", scale: 1.1 }}
// // // // //           whileTap={{ scale: 0.9 }}
// // // // //         >
// // // // //           <X className="w-6 h-6" />
// // // // //         </motion.button>

// // // // //         <div className="relative max-w-[90vw] max-h-[90vh] overflow-hidden flex items-center justify-center">
// // // // //           <motion.img
// // // // //             ref={imageRef}
// // // // //             src={imageUrl}
// // // // //             alt={product.title}
// // // // //             className="max-w-full max-h-full object-contain cursor-grab"
// // // // //             style={{
// // // // //               transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
// // // // //               transformOrigin: "center center",
// // // // //             }}
// // // // //             onMouseDown={handleMouseDown}
// // // // //             onContextMenu={(e) => e.preventDefault()}
// // // // //             draggable="false"
// // // // //             initial={{ scale: 0.8, opacity: 0 }}
// // // // //             animate={{ scale: 1, opacity: 1 }}
// // // // //             transition={{ duration: 0.4 }}
// // // // //           />
// // // // //         </div>

// // // // //         <div className="absolute bottom-4 flex gap-2 bg-white/20 p-3 rounded-full backdrop-blur-md">
// // // // //           <motion.button
// // // // //             className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl"
// // // // //             onClick={() => setZoom((prev) => Math.min(3, prev + 0.1))}
// // // // //             whileHover={{ background: "rgba(255, 255, 255, 0.4)" }}
// // // // //             whileTap={{ scale: 0.9 }}
// // // // //           >
// // // // //             <Plus className="w-5 h-5" />
// // // // //           </motion.button>
// // // // //           <motion.button
// // // // //             className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl"
// // // // //             onClick={() => setZoom((prev) => Math.max(0.5, prev - 0.1))}
// // // // //             whileHover={{ background: "rgba(255, 255, 255, 0.4)" }}
// // // // //             whileTap={{ scale: 0.9 }}
// // // // //           >
// // // // //             <Minus className="w-5 h-5" />
// // // // //           </motion.button>
// // // // //           <motion.button
// // // // //             className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl"
// // // // //             onClick={() => {
// // // // //               setZoom(1)
// // // // //               setPosition({ x: 0, y: 0 })
// // // // //             }}
// // // // //             whileHover={{ background: "rgba(255, 255, 255, 0.4)" }}
// // // // //             whileTap={{ scale: 0.9 }}
// // // // //           >
// // // // //             <Maximize className="w-5 h-5" />
// // // // //           </motion.button>
// // // // //         </div>
// // // // //       </motion.div>
// // // // //     )
// // // // //   }

// // // // //   // Component for rendering thumbnails in the sidebar
// // // // //   const SpreadThumbnail = ({ spreadIndex, isActive, onClick }) => {
// // // // //     if (isMobile) {
// // // // //       // Mobile: single page thumbnails
// // // // //       const pageIndex = mobilePages[spreadIndex]
// // // // //       const pageContent = getPageContent(pageIndex)
// // // // //       const pageLabels = ["Cover", "Image 1", "Image 2", "Index", "Bio", "Thanks", "Contact"]

// // // // //       return (
// // // // //         <motion.div
// // // // //           className="thumbnail flex-shrink-0 relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
// // // // //           style={{
// // // // //             marginRight: "0.5rem",
// // // // //             border: isActive ? `3px solid ${colors.primary}` : "3px solid transparent",
// // // // //             background: colors.backgroundWhite,
// // // // //             boxShadow: isActive ? `0 6px 25px ${colors.shadowMedium}` : `0 3px 12px ${colors.shadowLight}`,
// // // // //             height: "100px",
// // // // //             width: "80px",
// // // // //             minWidth: "80px",
// // // // //           }}
// // // // //           onClick={onClick}
// // // // //           whileHover={{
// // // // //             scale: isActive ? 1 : 1.05,
// // // // //             borderColor: colors.primary,
// // // // //             boxShadow: `0 6px 20px ${colors.shadowMedium}`,
// // // // //           }}
// // // // //           whileTap={{ scale: 0.95 }}
// // // // //         >
// // // // //           <div className="w-full h-full overflow-hidden relative bg-green-50 flex items-center justify-center">
// // // // //             <div className="scale-[0.06] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
// // // // //               {pageContent}
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="absolute bottom-0 left-0 right-0 bg-green-800 text-white p-1 text-xs font-medium text-center h-5 flex items-center justify-center">
// // // // //             {pageLabels[spreadIndex]}
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       )
// // // // //     } else {
// // // // //       // Desktop: spread thumbnails
// // // // //       const [leftPageIndex, rightPageIndex] = spreads[spreadIndex]
// // // // //       const leftPageContent = getPageContent(leftPageIndex)
// // // // //       const rightPageContent = getPageContent(rightPageIndex)
// // // // //       const spreadLabels = ["Cover", "Intro", "Index", "Thank You"]

// // // // //       return (
// // // // //         <motion.div
// // // // //           className="thumbnail flex-shrink-0 relative overflow-hidden rounded-md cursor-pointer transition-all duration-300 ease-in-out"
// // // // //           style={{
// // // // //             marginBottom: "0.5rem",
// // // // //             border: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
// // // // //             background: colors.backgroundWhite,
// // // // //             boxShadow: isActive ? `0 4px 20px ${colors.shadowMedium}` : `0 2px 8px ${colors.shadowLight}`,
// // // // //             height: "120px",
// // // // //             width: "auto",
// // // // //             minWidth: leftPageContent ? "160px" : "80px",
// // // // //           }}
// // // // //           onClick={onClick}
// // // // //           whileHover={{
// // // // //             scale: isActive ? 1 : 1.02,
// // // // //             borderColor: colors.primary,
// // // // //             boxShadow: `0 4px 16px ${colors.shadowMedium}`,
// // // // //           }}
// // // // //         >
// // // // //           {leftPageContent && (
// // // // //             <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden relative bg-green-50 flex items-center justify-center">
// // // // //               <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
// // // // //                 {leftPageContent}
// // // // //               </div>
// // // // //             </div>
// // // // //           )}
// // // // //           <div
// // // // //             className={`${leftPageContent ? "absolute right-0 top-0 w-1/2" : "w-full"} h-full overflow-hidden relative bg-green-50 flex items-center justify-center`}
// // // // //           >
// // // // //             <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
// // // // //               {rightPageContent}
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="absolute bottom-0 left-0 right-0 bg-green-800 text-white p-1 px-2 text-xs font-medium text-center h-5 flex items-center justify-center">
// // // // //             {spreadLabels[spreadIndex]}
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       )
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <>
// // // // //       <div className="flex h-screen bg-gradient-to-br from-green-50 to-green-100 font-sans overflow-hidden flex-col md:flex-row select-none">
// // // // //         {/* Resizable Sidebar */}
// // // // //         <div
// // // // //           className="relative flex flex-shrink-0 bg-white/95 backdrop-blur-xl border-r border-green-200 shadow-lg min-w-[250px] max-w-[400px] md:h-full md:flex-col w-full h-[120px] overflow-x-auto overflow-y-hidden md:overflow-x-hidden md:overflow-y-auto"
// // // // //           style={{
// // // // //             width: isMobile ? "100%" : `${sidebarWidth}px`,
// // // // //             height: isMobile ? "120px" : "100%",
// // // // //           }}
// // // // //         >
// // // // //           {/* Header - only shown on mobile */}
// // // // //           {isMobile && (
// // // // //             <div className="p-4 bg-white flex items-center sticky left-0 z-10 border-b border-green-200 min-w-max">
// // // // //               <h3 className="m-0 text-green-800 text-base font-semibold whitespace-nowrap">Page Navigation</h3>
// // // // //             </div>
// // // // //           )}

// // // // //           {/* Thumbnails */}
// // // // //           <div
// // // // //             className={`flex-1 w-full px-[3vw] flex ${isMobile ? "flex-row items-center overflow-x-auto" : "flex-col justify-center"}`}
// // // // //           >
// // // // //             {Array.from({ length: totalSpreads }).map((_, index) => (
// // // // //               <SpreadThumbnail
// // // // //                 key={index}
// // // // //                 spreadIndex={index}
// // // // //                 isActive={index === displaySpread}
// // // // //                 onClick={() => goToSpread(index)}
// // // // //               />
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* Resize Handle - only on desktop */}
// // // // //           {!isMobile && (
// // // // //             <div
// // // // //               className="absolute top-0 right-0 w-1 cursor-col-resize z-10 transition-all duration-300 ease-in-out hover:bg-green-500 hover:opacity-50"
// // // // //               style={{ height: "100%" }}
// // // // //               onMouseDown={handleMouseDown}
// // // // //             />
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Main Flipbook */}
// // // // //         <div className="flipbook-main flex-1 flex flex-col items-center justify-center p-2 md:p-8 relative overflow-hidden h-[calc(100vh-120px)] md:h-full">
// // // // //           <div
// // // // //             ref={flipBookRef}
// // // // //             className="relative mb-4"
// // // // //             style={{
// // // // //               width: isMobile ? "95%" : "min(90vw, 95vh * 1.2)",
// // // // //               height: isMobile ? "70%" : "min(75vh, 90vw / 1.2)",
// // // // //               maxWidth: "1400px",
// // // // //               maxHeight: "900px",
// // // // //               perspective: "1500px",
// // // // //             }}
// // // // //           >
// // // // //             {/* Book spine - only show when not closed book and not mobile */}
// // // // //             {!isClosedBook && !isMobile && (
// // // // //               <div className="absolute left-1/2 top-0 w-1.5 h-full bg-gradient-to-b from-green-600 to-green-800 -translate-x-1/2 z-10 rounded-md shadow-md" />
// // // // //             )}

// // // // //             {/* Mobile: Single page view */}
// // // // //             {isMobile && (
// // // // //               <motion.div
// // // // //                 key={displaySpread}
// // // // //                 initial={{ opacity: 0, x: flipDirection === "next" ? 100 : -100 }}
// // // // //                 animate={{ opacity: 1, x: 0 }}
// // // // //                 exit={{ opacity: 0, x: flipDirection === "next" ? -100 : 100 }}
// // // // //                 transition={{ duration: 0.6, ease: "easeInOut" }}
// // // // //                 className="absolute inset-0 bg-white border-2 border-green-200 shadow-2xl overflow-hidden rounded-xl"
// // // // //               >
// // // // //                 {getCurrentMobilePageContent()}
// // // // //               </motion.div>
// // // // //             )}

// // // // //             {/* Desktop: Dual page view */}
// // // // //             {!isMobile && (
// // // // //               <>
// // // // //                 {/* Left Page - only show when book is open */}
// // // // //                 {!isClosedBook && getCurrentLeftPageContent() && (
// // // // //                   <div className="absolute w-1/2 h-full bg-white border border-green-200 shadow-xl overflow-hidden left-0 rounded-l-xl">
// // // // //                     {getCurrentLeftPageContent()}
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {/* Right Page */}
// // // // //                 <div
// // // // //                   className="absolute h-full bg-white border border-green-200 shadow-xl overflow-hidden right-0 rounded-r-xl transition-all duration-300 ease-in-out"
// // // // //                   style={{
// // // // //                     width: isClosedBook ? "50%" : "50%",
// // // // //                     left: isClosedBook ? "50%" : "auto",
// // // // //                     borderTopLeftRadius: isClosedBook ? "0.75rem" : "0",
// // // // //                     borderBottomLeftRadius: isClosedBook ? "0.75rem" : "0",
// // // // //                   }}
// // // // //                 >
// // // // //                   {getCurrentRightPageContent()}
// // // // //                 </div>

// // // // //                 {/* Flipping Page */}
// // // // //                 <AnimatePresence initial={false}>
// // // // //                   {isFlipping && (
// // // // //                     <motion.div
// // // // //                       key={currentSpread + "-" + flipDirection}
// // // // //                       initial={{ rotateY: flipDirection === "next" ? 0 : 0 }}
// // // // //                       animate={{ rotateY: flipDirection === "next" ? -180 : 180 }}
// // // // //                       exit={{ opacity: 0 }}
// // // // //                       transition={{ duration: 0.8, ease: "easeInOut" }}
// // // // //                       className="absolute w-1/2 h-full bg-white border border-green-200 shadow-xl overflow-hidden z-20 transform-style-preserve-3d"
// // // // //                       style={{
// // // // //                         transformOrigin: flipDirection === "next" ? "left center" : "right center",
// // // // //                         right: flipDirection === "next" ? 0 : "auto",
// // // // //                         left: flipDirection === "prev" ? 0 : "auto",
// // // // //                       }}
// // // // //                     >
// // // // //                       <div className="absolute w-full h-full backface-hidden">{getFlippingPageFrontContent()}</div>
// // // // //                       <div className="absolute w-full h-full backface-hidden" style={{ transform: "rotateY(180deg)" }}>
// // // // //                         {getFlippingPageBackContent()}
// // // // //                       </div>
// // // // //                     </motion.div>
// // // // //                   )}
// // // // //                 </AnimatePresence>
// // // // //               </>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* Enhanced Navigation */}
// // // // //           <div className="flex items-center justify-center gap-4 bg-white/95 backdrop-blur-xl p-3 px-6 rounded-full shadow-lg border border-green-200 w-full max-w-xs md:max-w-md">
// // // // //             <motion.button
// // // // //               className="bg-green-600 text-white border-none py-2 px-4 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out shadow-md flex items-center justify-center w-12 h-10"
// // // // //               style={{
// // // // //                 background:
// // // // //                   displaySpread === 0
// // // // //                     ? colors.secondary
// // // // //                     : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// // // // //                 cursor: displaySpread === 0 ? "not-allowed" : "pointer",
// // // // //                 boxShadow: displaySpread === 0 ? "none" : "0 3px 12px rgba(34, 197, 94, 0.3)",
// // // // //               }}
// // // // //               onClick={prevSpread}
// // // // //               disabled={displaySpread === 0}
// // // // //               whileHover={displaySpread !== 0 ? { translateY: -3, boxShadow: "0 6px 20px rgba(34, 197, 94, 0.4)" } : {}}
// // // // //               whileTap={displaySpread !== 0 ? { translateY: 0, boxShadow: "0 3px 12px rgba(34, 197, 94, 0.3)" } : {}}
// // // // //             >
// // // // //               ←
// // // // //             </motion.button>

// // // // //             <div className="text-green-800 font-semibold text-sm p-0 px-3 min-w-[140px] text-center">
// // // // //               {isMobile
// // // // //                 ? displaySpread === 0
// // // // //                   ? "Cover"
// // // // //                   : displaySpread === 1
// // // // //                     ? "Image 1"
// // // // //                     : displaySpread === 2
// // // // //                       ? "Image 2"
// // // // //                       : displaySpread === 3
// // // // //                         ? "Index"
// // // // //                         : displaySpread === 4
// // // // //                           ? "Bio"
// // // // //                           : displaySpread === 5
// // // // //                             ? "Thanks"
// // // // //                             : "Contact"
// // // // //                 : displaySpread === 0
// // // // //                   ? "Cover"
// // // // //                   : displaySpread === 1
// // // // //                     ? "Intro"
// // // // //                     : displaySpread === 2
// // // // //                       ? "Index"
// // // // //                       : "Thank You"}{" "}
// // // // //               / {totalSpreads}
// // // // //             </div>

// // // // //             <motion.button
// // // // //               className="bg-green-600 text-white border-none py-2 px-4 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out shadow-md flex items-center justify-center w-12 h-10"
// // // // //               style={{
// // // // //                 background:
// // // // //                   displaySpread >= totalSpreads - 1
// // // // //                     ? colors.secondary
// // // // //                     : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// // // // //                 cursor: displaySpread >= totalSpreads - 1 ? "not-allowed" : "pointer",
// // // // //                 boxShadow: displaySpread >= totalSpreads - 1 ? "none" : "0 3px 12px rgba(34, 197, 94, 0.3)",
// // // // //               }}
// // // // //               onClick={nextSpread}
// // // // //               disabled={displaySpread >= totalSpreads - 1}
// // // // //               whileHover={
// // // // //                 displaySpread < totalSpreads - 1
// // // // //                   ? { translateY: -3, boxShadow: "0 6px 20px rgba(34, 197, 94, 0.4)" }
// // // // //                   : {}
// // // // //               }
// // // // //               whileTap={
// // // // //                 displaySpread < totalSpreads - 1
// // // // //                   ? { translateY: 0, boxShadow: "0 3px 12px rgba(34, 197, 94, 0.3)" }
// // // // //                   : {}
// // // // //               }
// // // // //             >
// // // // //               →
// // // // //             </motion.button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <AnimatePresence>
// // // // //         {selectedProduct && selectedProduct.imageIndex === undefined && (
// // // // //           <ProductGallery productId={selectedProduct.id} closeGallery={closeGallery} colors={colors} />
// // // // //         )}
// // // // //         {selectedProduct && selectedProduct.imageIndex !== undefined && (
// // // // //           <ZoomedImageViewer
// // // // //             productId={selectedProduct.id}
// // // // //             imageIndex={selectedProduct.imageIndex}
// // // // //             closeViewer={() => setSelectedProduct(null)}
// // // // //           />
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </>
// // // // //   )
// // // // // }

// // // // // export default FlipBook
// // // // "use client"

// // // // import { useState, useRef, useCallback, useEffect } from "react"
// // // // import { motion, AnimatePresence } from "framer-motion"
// // // // import Image from "next/image"
// // // // import { Droplet, Leaf, X, Plus, Minus, Maximize } from "lucide-react"
// // // // import { Instagram, Facebook } from "lucide-react"
// // // // import { FaWhatsapp } from "react-icons/fa"

// // // // const FlipBook = () => {
// // // //   const [currentSpread, setCurrentSpread] = useState(0)
// // // //   const [displaySpread, setDisplaySpread] = useState(0)
// // // //   const [selectedProduct, setSelectedProduct] = useState(null)
// // // //   const [isFlipping, setIsFlipping] = useState(false)
// // // //   const [flipDirection, setFlipDirection] = useState("")
// // // //   const [sidebarWidth, setSidebarWidth] = useState(300)
// // // //   const [isResizing, setIsResizing] = useState(false)
// // // //   const flipBookRef = useRef(null)
// // // //   const [windowWidth, setWindowWidth] = useState(1024)
// // // //   const [isMobile, setIsMobile] = useState(false)

// // // //   // Updated color palette to match VedicJal website (green theme)
// // // //   const colors = {
// // // //     primary: "#16a34a", // Green-600
// // // //     primaryLight: "#bbf7d0", // Green-200
// // // //     primaryDark: "#15803d", // Green-700
// // // //     secondary: "#6b7280", // Gray-500
// // // //     accent: "#059669", // Emerald-600
// // // //     accentLight: "#a7f3d0", // Emerald-200
// // // //     textDark: "#1f2937", // Gray-800
// // // //     textMedium: "#4b5563", // Gray-600
// // // //     textLight: "#9ca3af", // Gray-400
// // // //     backgroundLight: "#f0fdf4", // Green-50
// // // //     backgroundWhite: "#ffffff",
// // // //     borderLight: "#d1fae5", // Green-100
// // // //     shadowLight: "rgba(34, 197, 94, 0.1)",
// // // //     shadowMedium: "rgba(34, 197, 94, 0.2)",
// // // //     shadowStrong: "rgba(34, 197, 94, 0.3)",
// // // //     brandGreen: "#16a34a",
// // // //     brandDarkGreen: "#15803d",
// // // //     brandLightGreen: "#22c55e",
// // // //   }

// // // //   // Product data for galleries
// // // //   const productData = {
// // // //     "200ml": {
// // // //       title: "200ml Water Bottles",
// // // //       images: [
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // //       ],
// // // //     },
// // // //     "250ml": {
// // // //       title: "250ml Water Bottles",
// // // //       images: [
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
// // // //       ],
// // // //     },
// // // //     "300ml": {
// // // //       title: "300ml Water Bottles",
// // // //       images: [
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
// // // //       ],
// // // //     },
// // // //     "500ml": {
// // // //       title: "500ml Water Bottles",
// // // //       images: [
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // //       ],
// // // //     },
// // // //     "750ml": {
// // // //       title: "750ml Water Bottles",
// // // //       images: [
// // // //         "/img1.png",
// // // //         "/img2.png",
// // // //         "/img3.png",
// // // //         "/img4.png",
// // // //         "/img5.png",
// // // //         "/img6.png",
// // // //         "/img7.png",
// // // //         "/img8.png",
// // // //         "/img9.png",
// // // //         "/img10.png",
// // // //         "/img11.png",
// // // //         "/img12.png",
// // // //         "/img13.png",
// // // //         "/img14.png",
// // // //         "/img15.png",
// // // //         "/img16.png",
// // // //         "/img17.png",
// // // //         "/img18.png",
// // // //         "/img19.png",
// // // //         "/img20.png",
// // // //         "/img21.png",
// // // //         "/img22.png",
// // // //         "/img23.png",
// // // //       ],
// // // //     },
// // // //     "1liter": {
// // // //       title: "1 Liter Water Bottles",
// // // //       images: [
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // //       ],
// // // //     },
// // // //     "bio-200ml": {
// // // //       title: "Biodegradable 200ml",
// // // //       images: [
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
// // // //       ],
// // // //     },
// // // //     "bio-250ml": {
// // // //       title: "Biodegradable 250ml",
// // // //       images: [
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // //       ],
// // // //     },
// // // //     "bio-300ml": {
// // // //       title: "Biodegradable 300ml",
// // // //       images: [
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM.jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (1).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM (2).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.46 PM.jpeg",
// // // //       ],
// // // //     },
// // // //     "bio-500ml": {
// // // //       title: "Biodegradable 500ml",
// // // //       images: [
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (1).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM (2).jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.44 PM.jpeg",
// // // //         "/WhatsApp Image 2025-07-31 at 2.28.45 PM (1).jpeg",
// // // //       ],
// // // //     },
// // // //   }

// // // //   const openProductGallery = (productId) => {
// // // //     setSelectedProduct({ id: productId, imageIndex: undefined })
// // // //   }

// // // //   const closeGallery = () => {
// // // //     setSelectedProduct(null)
// // // //   }

// // // //   const allPages = [
// // // //     // Page 0 - Cover Page
// // // //     {
// // // //       id: "cover",
// // // //       type: "cover",
// // // //       content: (
// // // //         <motion.div
// // // //           initial={{ opacity: 0, scale: 0.9 }}
// // // //           animate={{ opacity: 1, scale: 1 }}
// // // //           transition={{ duration: 0.8, ease: "easeOut" }}
// // // //           className="w-full h-full p-0 relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl shadow-xl flex flex-col justify-center items-center select-none"
// // // //         >
// // // //           {/* Decorative Top & Bottom Strips */}
// // // //           <motion.div
// // // //             className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-br from-green-500/20 to-green-400/15 -skew-y-3 origin-top-left"
// // // //             initial={{ x: -100, opacity: 0 }}
// // // //             animate={{ x: 0, opacity: 1 }}
// // // //             transition={{ delay: 0.3, duration: 0.8 }}
// // // //           />
// // // //           <motion.div
// // // //             className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-tl from-green-400/15 to-green-500/20 skew-y-3 origin-bottom-right"
// // // //             initial={{ x: 100, opacity: 0 }}
// // // //             animate={{ x: 0, opacity: 1 }}
// // // //             transition={{ delay: 0.4, duration: 0.8 }}
// // // //           />

// // // //           {/* Floating Particles */}
// // // //           {[
// // // //             { top: 20, left: 10 },
// // // //             { top: 32, left: 25 },
// // // //             { top: 44, left: 40 },
// // // //             { top: 56, left: 55 },
// // // //             { top: 68, left: 70 },
// // // //             { top: 80, left: 85 },
// // // //           ].map((p, i) => (
// // // //             <motion.div
// // // //               key={i}
// // // //               className="absolute w-1.5 h-1.5 bg-green-400/30 rounded-full"
// // // //               style={{ top: `${p.top}%`, left: `${p.left}%` }}
// // // //               animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
// // // //               transition={{ duration: 2 + i * 0.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
// // // //             />
// // // //           ))}

// // // //           {/* Main Content */}
// // // //           <motion.div
// // // //             initial={{ y: 30, opacity: 0 }}
// // // //             animate={{ y: 0, opacity: 1 }}
// // // //             transition={{ delay: 0.5, duration: 0.8 }}
// // // //             className="relative z-10 p-4 text-center max-w-md w-[92%]"
// // // //           >
// // // //             {/* Logo & Title */}
// // // //             <div className="mb-3 flex flex-col items-center">
// // // //               <motion.div
// // // //                 initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
// // // //                 animate={{ scale: 1, opacity: 1, rotate: 0 }}
// // // //                 transition={{ delay: 0.7, duration: 0.8, ease: "backOut" }}
// // // //                 whileHover={{ scale: 1.05, rotate: 2 }}
// // // //               >
// // // //                 <Image
// // // //                   src="/Vedic Jal.png"
// // // //                   alt="VedicJal Logo"
// // // //                   width={100}
// // // //                   height={100}
// // // //                   className="rounded-xl shadow-xl border-4 border-white bg-white mb-1"
// // // //                   onContextMenu={(e) => e.preventDefault()}
// // // //                   draggable="false"
// // // //                 />
// // // //               </motion.div>
// // // //               <motion.h1
// // // //                 className="text-3xl md:text-4xl font-bold text-green-800 font-serif mb-1"
// // // //                 initial={{ opacity: 0, y: 20 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 transition={{ delay: 0.9, duration: 0.6 }}
// // // //               >
// // // //                 VedicJal
// // // //               </motion.h1>
// // // //               <motion.p
// // // //                 className="text-sm md:text-base text-green-600 font-medium"
// // // //                 initial={{ opacity: 0 }}
// // // //                 animate={{ opacity: 1 }}
// // // //                 transition={{ delay: 1.1, duration: 0.6 }}
// // // //               >
// // // //                 Pure Water, Pure Life
// // // //               </motion.p>
// // // //             </div>

// // // //             {/* Welcome Box */}
// // // //             <motion.div
// // // //               initial={{ y: 30, opacity: 0, scale: 0.95 }}
// // // //               animate={{ y: 0, opacity: 1, scale: 1 }}
// // // //               transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
// // // //               className="bg-white/80 backdrop-blur-md rounded-xl p-3 mt-3 mb-3 shadow-md border border-green-200"
// // // //             >
// // // //               <h2 className="text-lg md:text-xl font-semibold text-green-800 font-serif m-0">
// // // //                 Welcome to VedicJal Online Brochure
// // // //               </h2>
// // // //               <p className="text-green-600 mt-1 text-sm">Discover our customized range of premium water bottles</p>
// // // //             </motion.div>

// // // //             {/* Divider */}
// // // //             <motion.div
// // // //               className="flex items-center justify-center my-3"
// // // //               initial={{ scaleX: 0 }}
// // // //               animate={{ scaleX: 1 }}
// // // //               transition={{ delay: 1.5, duration: 0.8 }}
// // // //             >
// // // //               <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-green-600/50" />
// // // //               <motion.div
// // // //                 className="mx-2 w-2.5 h-2.5 bg-green-500 rounded-full"
// // // //                 animate={{ scale: [1, 1.2, 1] }}
// // // //                 transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
// // // //               />
// // // //               <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-green-600/50" />
// // // //             </motion.div>

// // // //             {/* Footer Quote */}
// // // //             <motion.p
// // // //               className="text-xs md:text-sm text-green-700 italic mt-2"
// // // //               initial={{ opacity: 0 }}
// // // //               animate={{ opacity: 1 }}
// // // //               transition={{ delay: 1.7, duration: 0.6 }}
// // // //             >
// // // //               "Bringing purity to your hands"
// // // //             </motion.p>
// // // //           </motion.div>
// // // //         </motion.div>
// // // //       ),
// // // //     },

// // // //     // Page 1 - Full-fit Image Left
// // // //     {
// // // //       id: "image-left",
// // // //       type: "fullimage",
// // // //       content: (
// // // //         <motion.div
// // // //           className="w-full aspect-[3/4] relative overflow-hidden select-none"
// // // //           initial={{ opacity: 0, x: -50 }}
// // // //           animate={{ opacity: 1, x: 0 }}
// // // //           transition={{ duration: 0.8, ease: "easeOut" }}
// // // //         >
// // // //           <Image
// // // //             src="/page1.jpg"
// // // //             alt="VedicJal Workshop - Page 1"
// // // //             fill
// // // //             style={{ objectFit: "cover" }}
// // // //             onContextMenu={(e) => e.preventDefault()}
// // // //             draggable="false"
// // // //           />
// // // //           <motion.div
// // // //             className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             transition={{ delay: 0.5, duration: 0.8 }}
// // // //           />
// // // //         </motion.div>
// // // //       ),
// // // //     },

// // // //     // Page 2 - Full-fit Image Right
// // // //     {
// // // //       id: "image-right",
// // // //       type: "fullimage",
// // // //       content: (
// // // //         <motion.div
// // // //           className="w-full aspect-[3/4] relative overflow-hidden select-none"
// // // //           initial={{ opacity: 0, x: 50 }}
// // // //           animate={{ opacity: 1, x: 0 }}
// // // //           transition={{ duration: 0.8, ease: "easeOut" }}
// // // //         >
// // // //           <Image
// // // //             src="/page2.jpg"
// // // //             alt="VedicJal Workshop - Page 2"
// // // //             fill
// // // //             style={{ objectFit: "cover" }}
// // // //             onContextMenu={(e) => e.preventDefault()}
// // // //             draggable="false"
// // // //           />
// // // //           <motion.div
// // // //             className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             transition={{ delay: 0.5, duration: 0.8 }}
// // // //           />
// // // //         </motion.div>
// // // //       ),
// // // //     },

// // // //     // Page 3 - Main Index (ml bottles)
// // // //     {
// // // //       id: "main-index",
// // // //       type: "index-main",
// // // //       content: (
// // // //         <div className="w-full h-full p-3 md:p-6 box-border bg-gradient-to-br from-white to-green-50 font-serif flex flex-col overflow-y-auto select-none scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-transparent">
// // // //           {/* Title Section */}
// // // //           <motion.div
// // // //             initial={{ y: -30, opacity: 0 }}
// // // //             animate={{ y: 0, opacity: 1 }}
// // // //             transition={{ duration: 0.8, ease: "easeOut" }}
// // // //             className="text-center mb-4"
// // // //           >
// // // //             <h1 className="text-xl md:text-3xl text-green-800 font-bold m-0">PRODUCT INDEX</h1>
// // // //             <motion.div
// // // //               className="w-16 h-1 bg-green-600 mx-auto my-2 rounded-full"
// // // //               initial={{ scaleX: 0 }}
// // // //               animate={{ scaleX: 1 }}
// // // //               transition={{ delay: 0.3, duration: 0.8 }}
// // // //             />
// // // //             <p className="text-xs md:text-sm text-green-700 font-medium m-0">
// // // //               Click on any item to view the product gallery
// // // //             </p>
// // // //           </motion.div>

// // // //           {/* Product List */}
// // // //           <motion.div
// // // //             initial={{ y: 30, opacity: 0 }}
// // // //             animate={{ y: 0, opacity: 1 }}
// // // //             transition={{ delay: 0.4, duration: 0.8 }}
// // // //             className="flex-1 w-full max-w-[92vw] mx-auto"
// // // //           >
// // // //             <div className="grid grid-cols-1 gap-2">
// // // //               {[
// // // //                 { number: "1.", name: "200ml", id: "200ml" },
// // // //                 { number: "2.", name: "250ml", id: "250ml" },
// // // //                 { number: "3.", name: "300ml", id: "300ml" },
// // // //                 { number: "4.", name: "500ml", id: "500ml" },
// // // //                 { number: "5.", name: "750ml", id: "750ml" },
// // // //                 { number: "6.", name: "1 Liter", id: "1liter" },
// // // //               ].map((item, index) => (
// // // //                 <motion.div
// // // //                   key={item.id}
// // // //                   className="flex items-center p-2 md:p-3 bg-white rounded-md cursor-pointer text-sm md:text-base text-green-800 border border-transparent shadow hover:shadow-md transition-all duration-300"
// // // //                   onClick={() => openProductGallery(item.id)}
// // // //                   initial={{ x: -50, opacity: 0 }}
// // // //                   animate={{ x: 0, opacity: 1 }}
// // // //                   transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
// // // //                   whileHover={{
// // // //                     background: "#ecfdf5",
// // // //                     borderColor: "#22c55e",
// // // //                     x: 6,
// // // //                     scale: 1.02,
// // // //                   }}
// // // //                   whileTap={{ scale: 0.97 }}
// // // //                 >
// // // //                   <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
// // // //                     <Droplet className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-600" />
// // // //                   </motion.div>
// // // //                   <span className="font-bold mr-3 min-w-[32px]">{item.number}</span>
// // // //                   <span className="flex-1">{item.name}</span>
// // // //                   <motion.span
// // // //                     className="ml-auto text-green-600 text-base font-bold"
// // // //                     whileHover={{ x: 4 }}
// // // //                     transition={{ duration: 0.2 }}
// // // //                   >
// // // //                     →
// // // //                   </motion.span>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       ),
// // // //     },

// // // //     // Page 4 - Biodegradable Index
// // // //     {
// // // //       id: "bio-index",
// // // //       type: "index-bio",
// // // //       content: (
// // // //         <div className="w-full h-full p-3 md:p-6 box-border bg-gradient-to-br from-white to-emerald-50 font-serif flex flex-col overflow-y-auto select-none scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-transparent">
// // // //           {/* Header */}
// // // //           <motion.div
// // // //             initial={{ y: -30, opacity: 0 }}
// // // //             animate={{ y: 0, opacity: 1 }}
// // // //             transition={{ duration: 0.8, ease: "easeOut" }}
// // // //             className="text-center mb-4"
// // // //           >
// // // //             <h1 className="text-xl md:text-3xl text-emerald-700 font-bold m-0">BIODEGRADABLE COLLECTION</h1>
// // // //             <motion.div
// // // //               className="w-16 h-1 bg-emerald-600 mx-auto my-2 rounded-full"
// // // //               initial={{ scaleX: 0 }}
// // // //               animate={{ scaleX: 1 }}
// // // //               transition={{ delay: 0.3, duration: 0.8 }}
// // // //             />
// // // //             <p className="text-xs md:text-sm text-emerald-700 font-medium m-0">
// // // //               Eco-friendly options for a sustainable future
// // // //             </p>
// // // //           </motion.div>

// // // //           {/* Biodegradable Items List */}
// // // //           <motion.div
// // // //             initial={{ y: 30, opacity: 0 }}
// // // //             animate={{ y: 0, opacity: 1 }}
// // // //             transition={{ delay: 0.4, duration: 0.8 }}
// // // //             className="flex-1 w-full max-w-[92vw] mx-auto"
// // // //           >
// // // //             <div className="grid grid-cols-1 gap-2">
// // // //               {[
// // // //                 { number: "7.1", name: "Biodegradable 200ml", id: "bio-200ml" },
// // // //                 { number: "7.2", name: "Biodegradable 250ml", id: "bio-250ml" },
// // // //                 { number: "7.3", name: "Biodegradable 300ml", id: "bio-300ml" },
// // // //                 { number: "7.4", name: "Biodegradable 500ml", id: "bio-500ml" },
// // // //               ].map((item, index) => (
// // // //                 <motion.div
// // // //                   key={item.id}
// // // //                   className="flex items-center p-2 md:p-3 bg-white rounded-md cursor-pointer text-sm md:text-base text-emerald-800 border border-transparent shadow hover:shadow-md transition-all duration-300"
// // // //                   onClick={() => openProductGallery(item.id)}
// // // //                   initial={{ x: 50, opacity: 0 }}
// // // //                   animate={{ x: 0, opacity: 1 }}
// // // //                   transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
// // // //                   whileHover={{
// // // //                     background: "#d1fae5",
// // // //                     borderColor: "#10b981",
// // // //                     x: 6,
// // // //                     scale: 1.02,
// // // //                   }}
// // // //                   whileTap={{ scale: 0.97 }}
// // // //                 >
// // // //                   <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
// // // //                     <Leaf className="w-4 h-4 md:w-5 md:h-5 mr-2 text-emerald-600" />
// // // //                   </motion.div>
// // // //                   <span className="font-bold mr-3 min-w-[45px]">{item.number}</span>
// // // //                   <span className="flex-1">{item.name}</span>
// // // //                   <motion.span
// // // //                     className="ml-auto text-emerald-600 text-base font-bold"
// // // //                     whileHover={{ x: 4 }}
// // // //                     transition={{ duration: 0.2 }}
// // // //                   >
// // // //                     →
// // // //                   </motion.span>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       ),
// // // //     },

// // // //     // Page 5 - THANK YOU PAGE
// // // //     {
// // // //       id: "thankyou",
// // // //       type: "thankyou",
// // // //       content: (
// // // //         <div className="w-full h-full p-3 md:p-5 box-border bg-gradient-to-br from-white to-green-50 flex items-center justify-center relative overflow-hidden select-none">
// // // //           {/* Floating Particles */}
// // // //           {[
// // // //             { top: 15, left: 20, delay: 0 },
// // // //             { top: 35, left: 80, delay: 0.5 },
// // // //             { top: 60, left: 15, delay: 1.0 },
// // // //             { top: 25, left: 70, delay: 1.5 },
// // // //             { top: 80, left: 85, delay: 2.0 },
// // // //             { top: 45, left: 25, delay: 2.5 },
// // // //             { top: 70, left: 60, delay: 3.0 },
// // // //             { top: 90, left: 40, delay: 3.5 },
// // // //           ].map((p, i) => (
// // // //             <motion.div
// // // //               key={i}
// // // //               className="absolute w-1 h-1 bg-green-400/40 rounded-full"
// // // //               style={{ top: `${p.top}%`, left: `${p.left}%` }}
// // // //               animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
// // // //               transition={{
// // // //                 duration: 3 + i * 0.3,
// // // //                 repeat: Number.POSITIVE_INFINITY,
// // // //                 delay: p.delay,
// // // //               }}
// // // //             />
// // // //           ))}

// // // //           <motion.div
// // // //             initial={{ scale: 0.8, opacity: 0 }}
// // // //             animate={{ scale: 1, opacity: 1 }}
// // // //             transition={{ duration: 0.8, ease: "backOut" }}
// // // //             className="text-center text-green-800 z-10 w-full max-w-md"
// // // //           >
// // // //             {/* Logo */}
// // // //             <motion.div
// // // //               initial={{ y: -30, opacity: 0, rotate: -10 }}
// // // //               animate={{ y: 0, opacity: 1, rotate: 0 }}
// // // //               transition={{ delay: 0.3, duration: 0.8, ease: "backOut" }}
// // // //               className="mb-3 flex flex-col items-center"
// // // //             >
// // // //               <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
// // // //                 <Image
// // // //                   src="/Vedic Jal.png"
// // // //                   alt="VedicJal Logo"
// // // //                   width={70}
// // // //                   height={70}
// // // //                   className="rounded-lg shadow-md border-2 border-white"
// // // //                   onContextMenu={(e) => e.preventDefault()}
// // // //                   draggable="false"
// // // //                 />
// // // //               </motion.div>
// // // //             </motion.div>

// // // //             {/* Heading */}
// // // //             <motion.h1
// // // //               initial={{ y: -30, opacity: 0 }}
// // // //               animate={{ y: 0, opacity: 1 }}
// // // //               transition={{ delay: 0.5, duration: 0.8 }}
// // // //               className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 leading-tight"
// // // //             >
// // // //               Thank You
// // // //             </motion.h1>
// // // //             <motion.div
// // // //               className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-3 rounded-full"
// // // //               initial={{ scaleX: 0 }}
// // // //               animate={{ scaleX: 1 }}
// // // //               transition={{ delay: 0.7, duration: 0.8 }}
// // // //             />

// // // //             {/* Subtext */}
// // // //             <motion.p
// // // //               initial={{ y: 20, opacity: 0 }}
// // // //               animate={{ y: 0, opacity: 1 }}
// // // //               transition={{ delay: 0.9, duration: 0.5 }}
// // // //               className="text-base md:text-lg font-semibold mb-2"
// // // //             >
// // // //               For choosing VedicJal
// // // //             </motion.p>
// // // //             <motion.p
// // // //               initial={{ y: 20, opacity: 0 }}
// // // //               animate={{ y: 0, opacity: 1 }}
// // // //               transition={{ delay: 1.1, duration: 0.5 }}
// // // //               className="text-sm md:text-base text-green-700 leading-snug mb-4"
// // // //             >
// // // //               Your trust in our premium handcrafted water bottles means the world to us.
// // // //             </motion.p>

// // // //             {/* Quote */}
// // // //             <motion.div
// // // //               initial={{ scale: 0.9, opacity: 0 }}
// // // //               animate={{ scale: 1, opacity: 1 }}
// // // //               transition={{ delay: 1.3, duration: 0.5 }}
// // // //               className="p-3 px-4 border border-green-300 rounded-lg bg-green-100/50 inline-block text-green-700 font-medium italic text-sm md:text-base"
// // // //             >
// // // //               "Pure Water, Pure Life"
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         </div>
// // // //       ),
// // // //     },

// // // //     // Page 6 - Contact Us Page
// // // //     {
// // // //       id: "contact",
// // // //       type: "contact",
// // // //       content: (
// // // //         <div className="w-full h-full p-4 md:p-6 box-border bg-gradient-to-br from-white to-green-50 flex flex-col justify-center items-center overflow-auto select-none">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8, ease: "easeOut" }}
// // // //             className="text-green-800 w-full max-w-md text-center space-y-3"
// // // //           >
// // // //             {/* Title */}
// // // //             <motion.h1
// // // //               initial={{ y: -20, opacity: 0 }}
// // // //               animate={{ y: 0, opacity: 1 }}
// // // //               transition={{ delay: 0.2, duration: 0.6 }}
// // // //               className="text-xl sm:text-2xl font-bold font-serif"
// // // //             >
// // // //               Contact Us
// // // //             </motion.h1>

// // // //             {/* Divider */}
// // // //             <motion.div
// // // //               className="w-10 sm:w-12 h-1 bg-green-600 mx-auto rounded-full"
// // // //               initial={{ scaleX: 0 }}
// // // //               animate={{ scaleX: 1 }}
// // // //               transition={{ delay: 0.3, duration: 0.6 }}
// // // //             />

// // // //             {/* Details */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 10 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ delay: 0.5, duration: 0.6 }}
// // // //               className="bg-white/90 p-4 rounded-xl shadow border border-green-200 text-xs sm:text-sm text-green-700 leading-relaxed space-y-1"
// // // //             >
// // // //               <p className="font-bold text-green-800 text-sm">Vedicjal</p>
// // // //               <p>A brand owned by Anugya FMCG Industries</p>
// // // //               <p>E-153 Forest Lane, Near Country Club</p>
// // // //               <p>Sainik Farms, New Delhi – 110068</p>
// // // //               <p>
// // // //                 📞 <span className="text-green-800 font-medium">+91- 9810152783/9818088458</span>
// // // //               </p>
// // // //               <p>
// // // //                 📧{" "}
// // // //                 <a href="mailto:info@vedicjal.com" className="underline text-green-800 break-all">
// // // //                   info@vedicjal.com
// // // //                 </a>
// // // //               </p>
// // // //               <p>
// // // //                 🌐{" "}
// // // //                 <a
// // // //                   href="https://vedicjal.com"
// // // //                   target="_blank"
// // // //                   rel="noopener noreferrer"
// // // //                   className="underline text-green-800 break-all"
// // // //                 >
// // // //                   www.vedicjal.com
// // // //                 </a>
// // // //               </p>

// // // //               {/* Social Media */}
// // // //               <div className="flex justify-center gap-4 pt-2 text-green-600">
// // // //                 <a
// // // //                   href="https://www.instagram.com/vedic_jal?utm_source=qr&igsh=MXI1OG90MjFyM2E0OA=="
// // // //                   target="_blank"
// // // //                   rel="noopener noreferrer"
// // // //                   aria-label="Instagram"
// // // //                 >
// // // //                   <Instagram className="w-5 h-5 hover:text-green-800" />
// // // //                 </a>
// // // //                 <a
// // // //                   href="https://www.facebook.com/share/19N6P87t5x/"
// // // //                   target="_blank"
// // // //                   rel="noopener noreferrer"
// // // //                   aria-label="Facebook"
// // // //                 >
// // // //                   <Facebook className="w-5 h-5 hover:text-green-800" />
// // // //                 </a>
// // // //                 <a
// // // //                   href="https://wa.me/message/HMB5Q7MZXTP3P1"
// // // //                   target="_blank"
// // // //                   rel="noopener noreferrer"
// // // //                   aria-label="WhatsApp"
// // // //                 >
// // // //                   <FaWhatsapp className="w-5 h-5 hover:text-green-800" />
// // // //                 </a>
// // // //               </div>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         </div>
// // // //       ),
// // // //     },
// // // //   ]

// // // //   // Mobile-specific page order for single-page view
// // // //   const mobilePages = [
// // // //     0, // Cover
// // // //     1, // Left image
// // // //     2, // Right image
// // // //     3, // Main index
// // // //     4, // Bio index
// // // //     5, // Thank you
// // // //     6, // Contact
// // // //   ]

// // // //   // Desktop spreads: [leftPageIndex, rightPageIndex]
// // // //   const spreads = [
// // // //     [null, 0], // Spread 0: Cover (Right only)
// // // //     [1, 2], // Spread 1: Image Left, Image Right
// // // //     [3, 4], // Spread 2: Main Index, Biodegradable Index
// // // //     [5, 6], // Spread 3: Thank You, Contact
// // // //   ]

// // // //   const totalSpreads = isMobile ? mobilePages.length : spreads.length

// // // //   const getPageContent = (pageIndex) => {
// // // //     if (pageIndex === null || typeof allPages[pageIndex] === "undefined") {
// // // //       return null
// // // //     }
// // // //     return allPages[pageIndex].content
// // // //   }

// // // //   // Mobile: get current page content
// // // //   const getCurrentMobilePageContent = () => {
// // // //     if (!isMobile) return null
// // // //     const pageIndex = mobilePages[displaySpread]
// // // //     return getPageContent(pageIndex)
// // // //   }

// // // //   // Desktop: get left/right page content
// // // //   const getCurrentLeftPageContent = () => {
// // // //     if (isMobile) return null
// // // //     const pageIndex = spreads[displaySpread][0]
// // // //     return getPageContent(pageIndex)
// // // //   }

// // // //   const getCurrentRightPageContent = () => {
// // // //     if (isMobile) return null
// // // //     const pageIndex = spreads[displaySpread][1]
// // // //     return getPageContent(pageIndex)
// // // //   }

// // // //   const getFlippingPageFrontContent = () => {
// // // //     if (isMobile) {
// // // //       const pageIndex = mobilePages[currentSpread]
// // // //       return getPageContent(pageIndex)
// // // //     } else {
// // // //       if (flipDirection === "next") {
// // // //         return getPageContent(spreads[currentSpread][1])
// // // //       } else if (flipDirection === "prev") {
// // // //         return getPageContent(spreads[currentSpread][0])
// // // //       }
// // // //     }
// // // //     return null
// // // //   }

// // // //   const getFlippingPageBackContent = () => {
// // // //     if (isMobile) {
// // // //       const nextPageIdx = flipDirection === "next" ? mobilePages[currentSpread + 1] : mobilePages[currentSpread - 1]
// // // //       return getPageContent(nextPageIdx)
// // // //     } else {
// // // //       if (flipDirection === "next") {
// // // //         const nextPageIdx = spreads[currentSpread + 1]?.[1]
// // // //         return getPageContent(nextPageIdx)
// // // //       } else if (flipDirection === "prev") {
// // // //         const prevPageIdx = spreads[currentSpread - 1]?.[0]
// // // //         return getPageContent(prevPageIdx)
// // // //       }
// // // //     }
// // // //     return null
// // // //   }

// // // //   const goToSpread = (spreadIndex) => {
// // // //     if (isFlipping || spreadIndex < 0 || spreadIndex >= totalSpreads) return
// // // //     const direction = spreadIndex > currentSpread ? "next" : "prev"
// // // //     setFlipDirection(direction)
// // // //     setIsFlipping(true)
// // // //     setCurrentSpread(spreadIndex)
// // // //     setTimeout(() => {
// // // //       setDisplaySpread(spreadIndex)
// // // //       setIsFlipping(false)
// // // //       setFlipDirection("")
// // // //     }, 800) // Longer animation for mobile
// // // //   }

// // // //   const nextSpread = () => {
// // // //     if (currentSpread < totalSpreads - 1) {
// // // //       goToSpread(currentSpread + 1)
// // // //     }
// // // //   }

// // // //   const prevSpread = () => {
// // // //     if (currentSpread > 0) {
// // // //       goToSpread(currentSpread - 1)
// // // //     }
// // // //   }

// // // //   const isClosedBook = displaySpread === 0 && !isMobile

// // // //   // Sidebar resize handlers (desktop only)
// // // //   const handleMouseDown = useCallback(
// // // //     (e) => {
// // // //       if (isMobile) return
// // // //       setIsResizing(true)
// // // //       e.preventDefault()
// // // //     },
// // // //     [isMobile],
// // // //   )

// // // //   const handleMouseMove = useCallback(
// // // //     (e) => {
// // // //       if (!isResizing || isMobile) return
// // // //       const newWidth = e.clientX
// // // //       if (newWidth >= 250 && newWidth <= 400) {
// // // //         setSidebarWidth(newWidth)
// // // //       }
// // // //     },
// // // //     [isResizing, isMobile],
// // // //   )

// // // //   const handleMouseUp = useCallback(() => {
// // // //     setIsResizing(false)
// // // //   }, [])

// // // //   useEffect(() => {
// // // //     if (isResizing) {
// // // //       document.addEventListener("mousemove", handleMouseMove)
// // // //       document.addEventListener("mouseup", handleMouseUp)
// // // //       return () => {
// // // //         document.removeEventListener("mousemove", handleMouseMove)
// // // //         document.removeEventListener("mouseup", handleMouseUp)
// // // //       }
// // // //     }
// // // //   }, [isResizing, handleMouseMove, handleMouseUp])

// // // //   useEffect(() => {
// // // //     const handleResize = () => {
// // // //       const width = window.innerWidth
// // // //       setWindowWidth(width)
// // // //       setIsMobile(width <= 768)
// // // //       if (width <= 768) {
// // // //         setSidebarWidth(width)
// // // //       }
// // // //     }

// // // //     if (typeof window !== "undefined") {
// // // //       const width = window.innerWidth
// // // //       setWindowWidth(width)
// // // //       setIsMobile(width <= 768)
// // // //       window.addEventListener("resize", handleResize)
// // // //       return () => {
// // // //         window.removeEventListener("resize", handleResize)
// // // //       }
// // // //     }
// // // //   }, [])

// // // //   // Enhanced Product Gallery Component with Amazon-style cards
// // // //   const ProductGallery = ({ productId, closeGallery, colors }) => {
// // // //     const product = productData[productId]
// // // //     if (!product) return null

// // // //     const galleryVariants = {
// // // //       hidden: { opacity: 0, scale: 0.95 },
// // // //       visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
// // // //       exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } },
// // // //     }

// // // //     const itemVariants = {
// // // //       hidden: { opacity: 0, y: 30 },
// // // //       visible: { opacity: 1, y: 0 },
// // // //     }

// // // //     return (
// // // //       <motion.div
// // // //         variants={galleryVariants}
// // // //         initial="hidden"
// // // //         animate="visible"
// // // //         exit="exit"
// // // //         className="fixed inset-0 bg-black/95 z-[1000] flex flex-col select-none"
// // // //       >
// // // //         {/* Header */}
// // // //         <div className="p-4 md:p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-md flex justify-between items-center border-b border-green-500/20">
// // // //           <div className="flex items-center gap-3">
// // // //             <Droplet className="w-6 h-6 text-green-400" />
// // // //             <h2 className="text-white text-xl md:text-2xl font-semibold m-0">{product.title}</h2>
// // // //           </div>
// // // //           <motion.button
// // // //             className="bg-white/20 border-none text-white text-2xl w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500/30"
// // // //             onClick={closeGallery}
// // // //             whileHover={{ scale: 1.1 }}
// // // //             whileTap={{ scale: 0.9 }}
// // // //           >
// // // //             <X className="w-6 h-6" />
// // // //           </motion.button>
// // // //         </div>

// // // //         {/* Gallery Grid */}
// // // //         <motion.div
// // // //           className="flex-1 p-4 md:p-6 overflow-y-auto"
// // // //           variants={{
// // // //             visible: {
// // // //               transition: {
// // // //                 staggerChildren: 0.08,
// // // //               },
// // // //             },
// // // //           }}
// // // //         >
// // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
// // // //             {product.images.map((image, index) => (
// // // //               <motion.div
// // // //                 key={index}
// // // //                 variants={itemVariants}
// // // //                 className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out cursor-pointer border border-gray-200 hover:border-green-400 hover:shadow-2xl group"
// // // //                 onClick={() => setSelectedProduct({ id: productId, imageIndex: index })}
// // // //                 whileHover={{ y: -8, scale: 1.02 }}
// // // //                 whileTap={{ scale: 0.98 }}
// // // //               >
// // // //                 {/* Image Container */}
// // // //                 <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
// // // //                   <Image
// // // //                     src={image || "/placeholder.svg?height=300&width=400"}
// // // //                     alt={`${product.title} ${index + 1}`}
// // // //                     fill
// // // //                     className="object-contain transition-transform duration-300 group-hover:scale-105"
// // // //                     onContextMenu={(e) => e.preventDefault()}
// // // //                     draggable="false"
// // // //                   />
// // // //                   {/* Overlay on hover */}
// // // //                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
// // // //                     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
// // // //                       Click to zoom
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Product Info */}
// // // //                 <div className="p-4">
// // // //                   <h3 className="text-gray-800 font-semibold text-base mb-2 line-clamp-2">
// // // //                     {product.title} - Model {index + 1}
// // // //                   </h3>
// // // //                   <div className="flex items-center justify-between">
// // // //                     <span className="text-green-600 font-bold text-lg">Premium Quality</span>
// // // //                     <div className="flex items-center gap-1 text-yellow-500">
// // // //                       {[...Array(5)].map((_, i) => (
// // // //                         <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
// // // //                           <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
// // // //                         </svg>
// // // //                       ))}
// // // //                     </div>
// // // //                   </div>
// // // //                   <p className="text-gray-600 text-sm mt-2">High-quality water bottle with premium finish</p>

// // // //                   {/* Action Button */}
// // // //                   <motion.button
// // // //                     className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
// // // //                     whileHover={{ scale: 1.02 }}
// // // //                     whileTap={{ scale: 0.98 }}
// // // //                   >
// // // //                     View Details
// // // //                   </motion.button>
// // // //                 </div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* Footer */}
// // // //         <div className="p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-md border-t border-green-500/20">
// // // //           <div className="text-center text-white/80 text-sm">
// // // //             <p>Showing {product.images.length} models • Click any image to view in full size</p>
// // // //           </div>
// // // //         </div>
// // // //       </motion.div>
// // // //     )
// // // //   }

// // // //   // Zoomed Image Viewer Component
// // // //   const ZoomedImageViewer = ({ productId, imageIndex, closeViewer }) => {
// // // //     const product = productData[productId]
// // // //     const imageUrl = product?.images[imageIndex]
// // // //     const [zoom, setZoom] = useState(1)
// // // //     const [position, setPosition] = useState({ x: 0, y: 0 })
// // // //     const imageRef = useRef(null)
// // // //     const isDragging = useRef(false)
// // // //     const startDragPos = useRef({ x: 0, y: 0 })

// // // //     const handleWheel = useCallback(
// // // //       (e) => {
// // // //         e.preventDefault()
// // // //         const scaleAmount = 0.1
// // // //         const newZoom = e.deltaY < 0 ? Math.min(3, zoom + scaleAmount) : Math.max(0.5, zoom - scaleAmount)
// // // //         setZoom(newZoom)
// // // //       },
// // // //       [zoom],
// // // //     )

// // // //     const handleMouseDown = useCallback(
// // // //       (e) => {
// // // //         e.preventDefault()
// // // //         isDragging.current = true
// // // //         startDragPos.current = { x: e.clientX - position.x, y: e.clientY - position.y }
// // // //       },
// // // //       [position],
// // // //     )

// // // //     const handleMouseMove = useCallback((e) => {
// // // //       if (!isDragging.current) return
// // // //       setPosition({
// // // //         x: e.clientX - startDragPos.current.x,
// // // //         y: e.clientY - startDragPos.current.y,
// // // //       })
// // // //     }, [])

// // // //     const handleMouseUp = useCallback(() => {
// // // //       isDragging.current = false
// // // //     }, [])

// // // //     useEffect(() => {
// // // //       const imgElement = imageRef.current
// // // //       if (imgElement) {
// // // //         imgElement.addEventListener("wheel", handleWheel, { passive: false })
// // // //         imgElement.addEventListener("mousemove", handleMouseMove)
// // // //         imgElement.addEventListener("mouseup", handleMouseUp)
// // // //         imgElement.addEventListener("mouseleave", handleMouseUp)
// // // //         return () => {
// // // //           imgElement.removeEventListener("wheel", handleWheel)
// // // //           imgElement.removeEventListener("mousemove", handleMouseMove)
// // // //           imgElement.removeEventListener("mouseup", handleMouseUp)
// // // //           imgElement.removeEventListener("mouseleave", handleMouseUp)
// // // //         }
// // // //       }
// // // //     }, [handleWheel, handleMouseMove, handleMouseUp])

// // // //     if (!imageUrl) return null

// // // //     return (
// // // //       <motion.div
// // // //         initial={{ opacity: 0 }}
// // // //         animate={{ opacity: 1 }}
// // // //         exit={{ opacity: 0 }}
// // // //         className="fixed inset-0 bg-black/95 z-[1001] flex items-center justify-center select-none"
// // // //       >
// // // //         <motion.button
// // // //           className="absolute top-4 right-4 bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-red-500/30"
// // // //           onClick={closeViewer}
// // // //           whileHover={{ scale: 1.1 }}
// // // //           whileTap={{ scale: 0.9 }}
// // // //         >
// // // //           <X className="w-6 h-6" />
// // // //         </motion.button>

// // // //         <div className="relative max-w-[90vw] max-h-[90vh] overflow-hidden flex items-center justify-center">
// // // //           <motion.img
// // // //             ref={imageRef}
// // // //             src={imageUrl}
// // // //             alt={product.title}
// // // //             className="max-w-full max-h-full object-contain cursor-grab"
// // // //             style={{
// // // //               transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
// // // //               transformOrigin: "center center",
// // // //             }}
// // // //             onMouseDown={handleMouseDown}
// // // //             onContextMenu={(e) => e.preventDefault()}
// // // //             draggable="false"
// // // //             initial={{ scale: 0.8, opacity: 0 }}
// // // //             animate={{ scale: 1, opacity: 1 }}
// // // //             transition={{ duration: 0.4 }}
// // // //           />
// // // //         </div>

// // // //         <div className="absolute bottom-4 flex gap-2 bg-white/20 p-3 rounded-full backdrop-blur-md">
// // // //           <motion.button
// // // //             className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40"
// // // //             onClick={() => setZoom((prev) => Math.min(3, prev + 0.1))}
// // // //             whileHover={{ scale: 1.1 }}
// // // //             whileTap={{ scale: 0.9 }}
// // // //           >
// // // //             <Plus className="w-5 h-5" />
// // // //           </motion.button>
// // // //           <motion.button
// // // //             className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40"
// // // //             onClick={() => setZoom((prev) => Math.max(0.5, prev - 0.1))}
// // // //             whileHover={{ scale: 1.1 }}
// // // //             whileTap={{ scale: 0.9 }}
// // // //           >
// // // //             <Minus className="w-5 h-5" />
// // // //           </motion.button>
// // // //           <motion.button
// // // //             className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40"
// // // //             onClick={() => {
// // // //               setZoom(1)
// // // //               setPosition({ x: 0, y: 0 })
// // // //             }}
// // // //             whileHover={{ scale: 1.1 }}
// // // //             whileTap={{ scale: 0.9 }}
// // // //           >
// // // //             <Maximize className="w-5 h-5" />
// // // //           </motion.button>
// // // //         </div>
// // // //       </motion.div>
// // // //     )
// // // //   }

// // // //   // Component for rendering thumbnails in the sidebar
// // // //   const SpreadThumbnail = ({ spreadIndex, isActive, onClick }) => {
// // // //     if (isMobile) {
// // // //       // Mobile: single page thumbnails
// // // //       const pageIndex = mobilePages[spreadIndex]
// // // //       const pageContent = getPageContent(pageIndex)
// // // //       const pageLabels = ["Cover", "Image 1", "Image 2", "Index", "Bio", "Thanks", "Contact"]

// // // //       return (
// // // //         <motion.div
// // // //           className="thumbnail flex-shrink-0 relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
// // // //           style={{
// // // //             marginRight: "0.5rem",
// // // //             border: isActive ? `3px solid ${colors.primary}` : "3px solid transparent",
// // // //             background: colors.backgroundWhite,
// // // //             boxShadow: isActive ? `0 6px 25px ${colors.shadowMedium}` : `0 3px 12px ${colors.shadowLight}`,
// // // //             height: "100px",
// // // //             width: "80px",
// // // //             minWidth: "80px",
// // // //           }}
// // // //           onClick={onClick}
// // // //           whileHover={{
// // // //             scale: isActive ? 1 : 1.05,
// // // //             borderColor: colors.primary,
// // // //             boxShadow: `0 6px 20px ${colors.shadowMedium}`,
// // // //           }}
// // // //           whileTap={{ scale: 0.95 }}
// // // //         >
// // // //           <div className="w-full h-full overflow-hidden relative bg-green-50 flex items-center justify-center">
// // // //             <div className="scale-[0.06] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
// // // //               {pageContent}
// // // //             </div>
// // // //           </div>
// // // //           <div className="absolute bottom-0 left-0 right-0 bg-green-800 text-white p-1 text-xs font-medium text-center h-5 flex items-center justify-center">
// // // //             {pageLabels[spreadIndex]}
// // // //           </div>
// // // //         </motion.div>
// // // //       )
// // // //     } else {
// // // //       // Desktop: spread thumbnails
// // // //       const [leftPageIndex, rightPageIndex] = spreads[spreadIndex]
// // // //       const leftPageContent = getPageContent(leftPageIndex)
// // // //       const rightPageContent = getPageContent(rightPageIndex)
// // // //       const spreadLabels = ["Cover", "Intro", "Index", "Thank You"]

// // // //       return (
// // // //         <motion.div
// // // //           className="thumbnail flex-shrink-0 relative overflow-hidden rounded-md cursor-pointer transition-all duration-300 ease-in-out"
// // // //           style={{
// // // //             marginBottom: "0.5rem",
// // // //             border: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
// // // //             background: colors.backgroundWhite,
// // // //             boxShadow: isActive ? `0 4px 20px ${colors.shadowMedium}` : `0 2px 8px ${colors.shadowLight}`,
// // // //             height: "120px",
// // // //             width: "auto",
// // // //             minWidth: leftPageContent ? "160px" : "80px",
// // // //           }}
// // // //           onClick={onClick}
// // // //           whileHover={{
// // // //             scale: isActive ? 1 : 1.02,
// // // //             borderColor: colors.primary,
// // // //             boxShadow: `0 4px 16px ${colors.shadowMedium}`,
// // // //           }}
// // // //         >
// // // //           {leftPageContent && (
// // // //             <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden relative bg-green-50 flex items-center justify-center">
// // // //               <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
// // // //                 {leftPageContent}
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //           <div
// // // //             className={`${leftPageContent ? "absolute right-0 top-0 w-1/2" : "w-full"} h-full overflow-hidden relative bg-green-50 flex items-center justify-center`}
// // // //           >
// // // //             <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
// // // //               {rightPageContent}
// // // //             </div>
// // // //           </div>
// // // //           <div className="absolute bottom-0 left-0 right-0 bg-green-800 text-white p-1 px-2 text-xs font-medium text-center h-5 flex items-center justify-center">
// // // //             {spreadLabels[spreadIndex]}
// // // //           </div>
// // // //         </motion.div>
// // // //       )
// // // //     }
// // // //   }

// // // //   return (
// // // //     <>
// // // //       <div className="flex h-screen bg-gradient-to-br from-green-50 to-green-100 font-sans overflow-hidden flex-col md:flex-row select-none">
// // // //         {/* Resizable Sidebar */}
// // // //         <div
// // // //           className="relative flex flex-shrink-0 bg-white/95 backdrop-blur-xl border-r border-green-200 shadow-lg min-w-[250px] max-w-[400px] md:h-full md:flex-col w-full h-[120px] overflow-x-auto overflow-y-hidden md:overflow-x-hidden md:overflow-y-auto"
// // // //           style={{
// // // //             width: isMobile ? "100%" : `${sidebarWidth}px`,
// // // //             height: isMobile ? "120px" : "100%",
// // // //           }}
// // // //         >
// // // //           {/* Header - only shown on mobile */}
// // // //           {isMobile && (
// // // //             <div className="p-4 bg-white flex items-center sticky left-0 z-10 border-b border-green-200 min-w-max">
// // // //               <h3 className="m-0 text-green-800 text-base font-semibold whitespace-nowrap">Page Navigation</h3>
// // // //             </div>
// // // //           )}

// // // //           {/* Thumbnails */}
// // // //           <div
// // // //             className={`flex-1 w-full px-[3vw] flex ${isMobile ? "flex-row items-center overflow-x-auto" : "flex-col justify-center"}`}
// // // //           >
// // // //             {Array.from({ length: totalSpreads }).map((_, index) => (
// // // //               <SpreadThumbnail
// // // //                 key={index}
// // // //                 spreadIndex={index}
// // // //                 isActive={index === displaySpread}
// // // //                 onClick={() => goToSpread(index)}
// // // //               />
// // // //             ))}
// // // //           </div>

// // // //           {/* Resize Handle - only on desktop */}
// // // //           {!isMobile && (
// // // //             <div
// // // //               className="absolute top-0 right-0 w-1 cursor-col-resize z-10 transition-all duration-300 ease-in-out hover:bg-green-500 hover:opacity-50"
// // // //               style={{ height: "100%" }}
// // // //               onMouseDown={handleMouseDown}
// // // //             />
// // // //           )}
// // // //         </div>

// // // //         {/* Main Flipbook */}
// // // //         <div className="flipbook-main flex-1 flex flex-col items-center justify-center p-2 md:p-8 relative overflow-hidden h-[calc(100vh-120px)] md:h-full">
// // // //           <div
// // // //             ref={flipBookRef}
// // // //             className="relative mb-4"
// // // //             style={{
// // // //               width: isMobile ? "95%" : "min(90vw, 95vh * 1.2)",
// // // //               height: isMobile ? "70%" : "min(75vh, 90vw / 1.2)",
// // // //               maxWidth: "1400px",
// // // //               maxHeight: "900px",
// // // //               perspective: "1500px",
// // // //             }}
// // // //           >
// // // //             {/* Book spine - only show when not closed book and not mobile */}
// // // //             {!isClosedBook && !isMobile && (
// // // //               <div className="absolute left-1/2 top-0 w-1.5 h-full bg-gradient-to-b from-green-600 to-green-800 -translate-x-1/2 z-10 rounded-md shadow-md" />
// // // //             )}

// // // //             {/* Mobile: Single page view */}
// // // //             {isMobile && (
// // // //               <motion.div
// // // //                 key={displaySpread}
// // // //                 initial={{ opacity: 0, x: flipDirection === "next" ? 100 : -100 }}
// // // //                 animate={{ opacity: 1, x: 0 }}
// // // //                 exit={{ opacity: 0, x: flipDirection === "next" ? -100 : 100 }}
// // // //                 transition={{ duration: 0.6, ease: "easeInOut" }}
// // // //                 className="absolute inset-0 bg-white border-2 border-green-200 shadow-2xl overflow-hidden rounded-xl"
// // // //               >
// // // //                 {getCurrentMobilePageContent()}
// // // //               </motion.div>
// // // //             )}

// // // //             {/* Desktop: Dual page view */}
// // // //             {!isMobile && (
// // // //               <>
// // // //                 {/* Left Page - only show when book is open */}
// // // //                 {!isClosedBook && getCurrentLeftPageContent() && (
// // // //                   <div className="absolute w-1/2 h-full bg-white border border-green-200 shadow-xl overflow-hidden left-0 rounded-l-xl">
// // // //                     {getCurrentLeftPageContent()}
// // // //                   </div>
// // // //                 )}

// // // //                 {/* Right Page */}
// // // //                 <div
// // // //                   className="absolute h-full bg-white border border-green-200 shadow-xl overflow-hidden right-0 rounded-r-xl transition-all duration-300 ease-in-out"
// // // //                   style={{
// // // //                     width: isClosedBook ? "50%" : "50%",
// // // //                     left: isClosedBook ? "50%" : "auto",
// // // //                     borderTopLeftRadius: isClosedBook ? "0.75rem" : "0",
// // // //                     borderBottomLeftRadius: isClosedBook ? "0.75rem" : "0",
// // // //                   }}
// // // //                 >
// // // //                   {getCurrentRightPageContent()}
// // // //                 </div>

// // // //                 {/* Flipping Page */}
// // // //                 <AnimatePresence initial={false}>
// // // //                   {isFlipping && (
// // // //                     <motion.div
// // // //                       key={currentSpread + "-" + flipDirection}
// // // //                       initial={{ rotateY: flipDirection === "next" ? 0 : 0 }}
// // // //                       animate={{ rotateY: flipDirection === "next" ? -180 : 180 }}
// // // //                       exit={{ opacity: 0 }}
// // // //                       transition={{ duration: 0.8, ease: "easeInOut" }}
// // // //                       className="absolute w-1/2 h-full bg-white border border-green-200 shadow-xl overflow-hidden z-20 transform-style-preserve-3d"
// // // //                       style={{
// // // //                         transformOrigin: flipDirection === "next" ? "left center" : "right center",
// // // //                         right: flipDirection === "next" ? 0 : "auto",
// // // //                         left: flipDirection === "prev" ? 0 : "auto",
// // // //                       }}
// // // //                     >
// // // //                       <div className="absolute w-full h-full backface-hidden">{getFlippingPageFrontContent()}</div>
// // // //                       <div className="absolute w-full h-full backface-hidden" style={{ transform: "rotateY(180deg)" }}>
// // // //                         {getFlippingPageBackContent()}
// // // //                       </div>
// // // //                     </motion.div>
// // // //                   )}
// // // //                 </AnimatePresence>
// // // //               </>
// // // //             )}
// // // //           </div>

// // // //           {/* Enhanced Navigation */}
// // // //           <div className="flex items-center justify-center gap-4 bg-white/95 backdrop-blur-xl p-3 px-6 rounded-full shadow-lg border border-green-200 w-full max-w-xs md:max-w-md">
// // // //             <motion.button
// // // //               className="bg-green-600 text-white border-none py-2 px-4 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out shadow-md flex items-center justify-center w-12 h-10"
// // // //               style={{
// // // //                 background:
// // // //                   displaySpread === 0
// // // //                     ? colors.secondary
// // // //                     : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// // // //                 cursor: displaySpread === 0 ? "not-allowed" : "pointer",
// // // //                 boxShadow: displaySpread === 0 ? "none" : "0 3px 12px rgba(34, 197, 94, 0.3)",
// // // //               }}
// // // //               onClick={prevSpread}
// // // //               disabled={displaySpread === 0}
// // // //               whileHover={displaySpread !== 0 ? { translateY: -3, boxShadow: "0 6px 20px rgba(34, 197, 94, 0.4)" } : {}}
// // // //               whileTap={displaySpread !== 0 ? { translateY: 0, boxShadow: "0 3px 12px rgba(34, 197, 94, 0.3)" } : {}}
// // // //             >
// // // //               ←
// // // //             </motion.button>
// // // //             <div className="text-green-800 font-semibold text-sm p-0 px-3 min-w-[140px] text-center">
// // // //               {isMobile
// // // //                 ? displaySpread === 0
// // // //                   ? "Cover"
// // // //                   : displaySpread === 1
// // // //                     ? "Image 1"
// // // //                     : displaySpread === 2
// // // //                       ? "Image 2"
// // // //                       : displaySpread === 3
// // // //                         ? "Index"
// // // //                         : displaySpread === 4
// // // //                           ? "Bio"
// // // //                           : displaySpread === 5
// // // //                             ? "Thanks"
// // // //                             : "Contact"
// // // //                 : displaySpread === 0
// // // //                   ? "Cover"
// // // //                   : displaySpread === 1
// // // //                     ? "Intro"
// // // //                     : displaySpread === 2
// // // //                       ? "Index"
// // // //                       : "Thank You"}{" "}
// // // //               / {totalSpreads}
// // // //             </div>
// // // //             <motion.button
// // // //               className="bg-green-600 text-white border-none py-2 px-4 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out shadow-md flex items-center justify-center w-12 h-10"
// // // //               style={{
// // // //                 background:
// // // //                   displaySpread >= totalSpreads - 1
// // // //                     ? colors.secondary
// // // //                     : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// // // //                 cursor: displaySpread >= totalSpreads - 1 ? "not-allowed" : "pointer",
// // // //                 boxShadow: displaySpread >= totalSpreads - 1 ? "none" : "0 3px 12px rgba(34, 197, 94, 0.3)",
// // // //               }}
// // // //               onClick={nextSpread}
// // // //               disabled={displaySpread >= totalSpreads - 1}
// // // //               whileHover={
// // // //                 displaySpread < totalSpreads - 1
// // // //                   ? { translateY: -3, boxShadow: "0 6px 20px rgba(34, 197, 94, 0.4)" }
// // // //                   : {}
// // // //               }
// // // //               whileTap={
// // // //                 displaySpread < totalSpreads - 1
// // // //                   ? { translateY: 0, boxShadow: "0 3px 12px rgba(34, 197, 94, 0.3)" }
// // // //                   : {}
// // // //               }
// // // //             >
// // // //               →
// // // //             </motion.button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <AnimatePresence>
// // // //         {selectedProduct && selectedProduct.imageIndex === undefined && (
// // // //           <ProductGallery productId={selectedProduct.id} closeGallery={closeGallery} colors={colors} />
// // // //         )}
// // // //         {selectedProduct && selectedProduct.imageIndex !== undefined && (
// // // //           <ZoomedImageViewer
// // // //             productId={selectedProduct.id}
// // // //             imageIndex={selectedProduct.imageIndex}
// // // //             closeViewer={() => setSelectedProduct(null)}
// // // //           />
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </>
// // // //   )
// // // // }

// // // // export default FlipBook
// // // "use client"

// // // import { useState, useRef, useCallback, useEffect } from "react"
// // // import { motion, AnimatePresence, useMotionValue } from "framer-motion" // Added useMotionValue
// // // import Image from "next/image"
// // // import { Droplet, Leaf, X, Plus, Minus, Maximize } from "lucide-react"
// // // import { Instagram, Facebook } from "lucide-react"
// // // import { FaWhatsapp } from "react-icons/fa"

// // // const FlipBook = () => {
// // //   const [currentSpread, setCurrentSpread] = useState(0)
// // //   const [displaySpread, setDisplaySpread] = useState(0)
// // //   const [selectedProduct, setSelectedProduct] = useState(null)
// // //   const [isFlipping, setIsFlipping] = useState(false)
// // //   const [flipDirection, setFlipDirection] = useState("")
// // //   const [sidebarWidth, setSidebarWidth] = useState(300)
// // //   const [isResizing, setIsResizing] = useState(false)
// // //   const flipBookRef = useRef(null)
// // //   const [windowWidth, setWindowWidth] = useState(1024)
// // //   const [isMobile, setIsMobile] = useState(false)

// // //   // Updated color palette to match VedicJal website (green theme)
// // //   const colors = {
// // //     primary: "#16a34a", // Green-600
// // //     primaryLight: "#bbf7d0", // Green-200
// // //     primaryDark: "#15803d", // Green-700
// // //     secondary: "#6b7280", // Gray-500
// // //     accent: "#059669", // Emerald-600
// // //     accentLight: "#a7f3d0", // Emerald-2200
// // //     textDark: "#1f2937", // Gray-800
// // //     textMedium: "#4b5563", // Gray-600
// // //     textLight: "#9ca3af", // Gray-400
// // //     backgroundLight: "#f0fdf4", // Green-50
// // //     backgroundWhite: "#ffffff",
// // //     borderLight: "#d1fae5", // Green-100
// // //     shadowLight: "rgba(34, 197, 94, 0.1)",
// // //     shadowMedium: "rgba(34, 197, 94, 0.2)",
// // //     shadowStrong: "rgba(34, 197, 94, 0.3)",
// // //     brandGreen: "#16a34a",
// // //     brandDarkGreen: "#15803d",
// // //     brandLightGreen: "#22c55e",
// // //   }

// // //   // Product data for galleries
// // //   const productData = {
// // //     "200ml": {
// // //       title: "200ml Water Bottles",
// // //       images: [
// // //         "/200ml/img1.png",
// // //           "/200ml/img2.png",
// // //             "/200ml/img3.png",
// // //               "/200ml/img4.png",
// // //                 "/200ml/img5.png",
// // //                   "/200ml/img6.png",
// // //                     "/200ml/img7.png",
// // //                       "/200ml/img8.png",
// // //                         "/200ml/img9.png",
// // //                           "/200ml/img10.png",
// // //                             "/200ml/img11.png",
// // //                               "/200ml/img12.png",
// // //                                 "/200ml/img13.png",
// // //                                   "/200ml/img14.png",
// // //                                     "/200ml/img15.png",
// // //                                       "/200ml/img16.png",
// // //                                         "/200ml/img17.png",
// // //                                           "/200ml/img18.png",
// // //                                             "/200ml/img19.png",
// // //                                               "/200ml/img20.png",
// // //                                                 "/200ml/img21.png",
// // //                                                  "/200ml/img22.png",
// // //                                                  "/200ml/img23.png",
// // //                                                  "/200ml/img24.png",
// // //                                                  "/200ml/img25.png",
// // //                                                  "/200ml/img26.png",
// // //                                                  "/200ml/img27.png",
// // //                                                  "/200ml/img28.png",
// // //                                                  "/200ml/img29.png",
// // //                                                  "/200ml/img30.png",
// // //                                                  "/200ml/img31.png",
// // //                                                 "/200ml/img32.png",
// // //                                                 "/200ml/img33.png",
// // //                                                 "/200ml/img34.png",
// // //                                                 "/200ml/img35.png",
// // //                                                 "/200ml/img36.png",
// // //                                                 "/200ml/img37.png",
// // //                                                 "/200ml/img38.png",
       
// // //       ],
// // //     },
// // //     "250ml": {
// // //       title: "250ml Water Bottles",
// // //       images: [
// // //         "/250ml/img1.png",
// // //           "/250ml/img2.png",
// // //             "/250ml/img3.png",
// // //               "/250ml/img4.png",
// // //                 "/250ml/img5.png",
// // //                   "/250ml/img6.png",
      
// // //       ],
// // //     },
// // //     "300ml": {
// // //       title: "300ml Water Bottles",
// // //       images: [
// // //         "/300ml/img1.png",
// // //         "/300ml/img2.png",
// // //         "/300ml/img3.png",
// // //         "/300ml/img4.png",
// // //         "/300ml/img5.png",
// // //         "/300ml/img6.png",
// // //         "/300ml/img7.png",
// // //         "/300ml/img8.png",
       
// // //       ],
// // //     },
// // //     "500ml": {
// // //       title: "500ml Water Bottles",
// // //       images: [
// // //         "/500ml/img1.png",
// // //         "/500ml/img2.png",
// // //         "/500ml/img3.png",
// // //         "/500ml/img4.png",
// // //         "/500ml/img5.png",
// // //         "/500ml/img6.png",
// // //         "/500ml/img7.png",
// // //         "/500ml/img8.png",
// // //         "/500ml/img9.png",
// // //         "/500ml/img10.png",
// // //         "/500ml/img11.png",
// // //         "/500ml/img12.png",
// // //         "/500ml/img13.png",
// // //         "/500ml/img14.png",
// // //         "/500ml/img15.png",
// // //         "/500ml/img16.png",
        
// // //       ],
// // //     },
// // //     "750ml": {
// // //       title: "750ml Water Bottles",
// // //       images: [
// // //         "/img1.png",
// // //         "/img2.png",
// // //         "/img3.png",
// // //         "/img4.png",
// // //         "/img5.png",
// // //         "/img6.png",
// // //         "/img7.png",
// // //         "/img8.png",
// // //         "/img9.png",
// // //         "/img10.png",
// // //         "/img11.png",
// // //         "/img12.png",
// // //         "/img13.png",
// // //         "/img14.png",
// // //         "/img15.png",
// // //         "/img16.png",
// // //         "/img17.png",
// // //         "/img18.png",
// // //         "/img19.png",
// // //         "/img20.png",
// // //         "/img21.png",
// // //         "/img22.png",
// // //         "/img23.png",
// // //       ],
// // //     },
// // //     "1liter": {
// // //       title: "1 Liter Water Bottles",
// // //       images: [
// // //         "/1lit/img1.png",
// // //         "/1lit/img2.png",
// // //         "/1lit/img3.png",
// // //         "/1lit/img4.png",
// // //         "/1lit/img5.png",
// // //         "/1lit/img6.png",
// // //         "/1lit/img7.png",
// // //         "/1lit/img8.png",
// // //         "/1lit/img9.png",
// // //         "/1lit/img10.png",
// // //         "/1lit/img11.png",
// // //         "/1lit/img12.png",
       
// // //       ],
// // //     },
// // //     "bio-200ml": {
// // //       title: "Biodegradable 200ml",
// // //       images: [
// // //         "/200ml bio.jpeg",
// // //       ],
// // //     },
// // //     "bio-250ml": {
// // //       title: "Biodegradable 250ml",
// // //       images: [
// // //         "/250ml bio.jpeg",
// // //       ],
// // //     },
// // //     "bio-300ml": {
// // //       title: "Biodegradable 300ml",
// // //       images: [
// // //         "/300ml bio.jpeg",
       
// // //       ],
// // //     },
// // //     "bio-500ml": {
// // //       title: "Biodegradable 500ml",
// // //       images: [
// // //          "/500ml bio.jpeg",
        
// // //       ],
// // //     },
// // //      "bio-750ml": {
// // //       title: "Biodegradable 500ml",
// // //       images: [
// // //          "/750ml bio.jpeg",
        
// // //       ],
// // //     },
// // //   }

// // //   const openProductGallery = (productId) => {
// // //     setSelectedProduct({ id: productId, imageIndex: undefined })
// // //   }

// // //   const closeGallery = () => {
// // //     setSelectedProduct(null)
// // //   }

// // //   const allPages = [
// // //     // Page 0 - Cover Page
// // //     {
// // //       id: "cover",
// // //       type: "cover",
// // //       content: (
// // //         <motion.div
// // //           initial={{ opacity: 0, scale: 0.9 }}
// // //           animate={{ opacity: 1, scale: 1 }}
// // //           transition={{ duration: 0.8, ease: "easeOut" }}
// // //           className="w-full h-full p-0 relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl shadow-xl flex flex-col justify-center items-center select-none"
// // //         >
// // //           {/* Decorative Top & Bottom Strips */}
// // //           <motion.div
// // //             className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-br from-green-500/20 to-green-400/15 -skew-y-3 origin-top-left"
// // //             initial={{ x: -100, opacity: 0 }}
// // //             animate={{ x: 0, opacity: 1 }}
// // //             transition={{ delay: 0.3, duration: 0.8 }}
// // //           />
// // //           <motion.div
// // //             className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-tl from-green-400/15 to-green-500/20 skew-y-3 origin-bottom-right"
// // //             initial={{ x: 100, opacity: 0 }}
// // //             animate={{ x: 0, opacity: 1 }}
// // //             transition={{ delay: 0.4, duration: 0.8 }}
// // //           />
// // //           {/* Floating Particles */}
// // //           {[
// // //             { top: 20, left: 10 },
// // //             { top: 32, left: 25 },
// // //             { top: 44, left: 40 },
// // //             { top: 56, left: 55 },
// // //             { top: 68, left: 70 },
// // //             { top: 80, left: 85 },
// // //           ].map((p, i) => (
// // //             <motion.div
// // //               key={i}
// // //               className="absolute w-1.5 h-1.5 bg-green-400/30 rounded-full"
// // //               style={{ top: `${p.top}%`, left: `${p.left}%` }}
// // //               animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
// // //               transition={{ duration: 2 + i * 0.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
// // //             />
// // //           ))}
// // //           {/* Main Content */}
// // //           <motion.div
// // //             initial={{ y: 30, opacity: 0 }}
// // //             animate={{ y: 0, opacity: 1 }}
// // //             transition={{ delay: 0.5, duration: 0.8 }}
// // //             className="relative z-10 p-4 text-center max-w-md w-[92%]"
// // //           >
// // //             {/* Logo & Title */}
// // //             <div className="mb-3 flex flex-col items-center">
// // //               <motion.div
// // //                 initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
// // //                 animate={{ scale: 1, opacity: 1, rotate: 0 }}
// // //                 transition={{ delay: 0.7, duration: 0.8, ease: "backOut" }}
// // //                 whileHover={{ scale: 1.05, rotate: 2 }}
// // //               >
// // //                 <Image
// // //                   src="/Vedic Jal.png"
// // //                   alt="VedicJal Logo"
// // //                   width={100}
// // //                   height={100}
// // //                   className="rounded-xl shadow-xl border-4 border-white bg-white mb-1"
// // //                   onContextMenu={(e) => e.preventDefault()}
// // //                   draggable="false"
// // //                 />
// // //               </motion.div>
// // //               <motion.h1
// // //                 className="text-3xl md:text-4xl font-bold text-green-800 font-serif mb-1"
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ delay: 0.9, duration: 0.6 }}
// // //               >
// // //                 VedicJal
// // //               </motion.h1>
// // //               <motion.p
// // //                 className="text-sm md:text-base text-green-600 font-medium"
// // //                 initial={{ opacity: 0 }}
// // //                 animate={{ opacity: 1 }}
// // //                 transition={{ delay: 1.1, duration: 0.6 }}
// // //               >
// // //                 Pure Water, Pure Life
// // //               </motion.p>
// // //             </div>
// // //             {/* Welcome Box */}
// // //             <motion.div
// // //               initial={{ y: 30, opacity: 0, scale: 0.95 }}
// // //               animate={{ y: 0, opacity: 1, scale: 1 }}
// // //               transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
// // //               className="bg-white/80 backdrop-blur-md rounded-xl p-3 mt-3 mb-3 shadow-md border border-green-200"
// // //             >
// // //               <h2 className="text-lg md:text-xl font-semibold text-green-800 font-serif m-0">
// // //                 Welcome to VedicJal Online Brochure
// // //               </h2>
// // //               <p className="text-green-600 mt-1 text-sm">Discover our customized range of premium water bottles</p>
// // //             </motion.div>
// // //             {/* Divider */}
// // //             <motion.div
// // //               className="flex items-center justify-center my-3"
// // //               initial={{ scaleX: 0 }}
// // //               animate={{ scaleX: 1 }}
// // //               transition={{ delay: 1.5, duration: 0.8 }}
// // //             >
// // //               <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-green-600/50" />
// // //               <motion.div
// // //                 className="mx-2 w-2.5 h-2.5 bg-green-500 rounded-full"
// // //                 animate={{ scale: [1, 1.2, 1] }}
// // //                 transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
// // //               />
// // //               <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-green-600/50" />
// // //             </motion.div>
// // //             {/* Footer Quote */}
// // //             <motion.p
// // //               className="text-xs md:text-sm text-green-700 italic mt-2"
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               transition={{ delay: 1.7, duration: 0.6 }}
// // //             >
// // //               "Bringing purity to your hands"
// // //             </motion.p>
// // //           </motion.div>
// // //         </motion.div>
// // //       ),
// // //     },
// // //     // Page 1 - Full-fit Image Left
// // //     {
// // //       id: "image-left",
// // //       type: "fullimage",
// // //       content: (
// // //         <motion.div
// // //           className="w-full aspect-[3/4] relative overflow-hidden select-none"
// // //           initial={{ opacity: 0, x: -50 }}
// // //           animate={{ opacity: 1, x: 0 }}
// // //           transition={{ duration: 0.8, ease: "easeOut" }}
// // //         >
// // //           <Image
// // //             src="/page1.jpg"
// // //             alt="VedicJal Workshop - Page 1"
// // //             fill
// // //             style={{ objectFit: "cover" }}
// // //             onContextMenu={(e) => e.preventDefault()}
// // //             draggable="false"
// // //           />
// // //           <motion.div
// // //             className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ delay: 0.5, duration: 0.8 }}
// // //           />
// // //         </motion.div>
// // //       ),
// // //     },
// // //     // Page 2 - Full-fit Image Right
// // //     {
// // //       id: "image-right",
// // //       type: "fullimage",
// // //       content: (
// // //         <motion.div
// // //           className="w-full aspect-[3/4] relative overflow-hidden select-none"
// // //           initial={{ opacity: 0, x: 50 }}
// // //           animate={{ opacity: 1, x: 0 }}
// // //           transition={{ duration: 0.8, ease: "easeOut" }}
// // //         >
// // //           <Image
// // //             src="/page2.jpg"
// // //             alt="VedicJal Workshop - Page 2"
// // //             fill
// // //             style={{ objectFit: "cover" }}
// // //             onContextMenu={(e) => e.preventDefault()}
// // //             draggable="false"
// // //           />
// // //           <motion.div
// // //             className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ delay: 0.5, duration: 0.8 }}
// // //           />
// // //         </motion.div>
// // //       ),
// // //     },
// // //     // Page 3 - Main Index (ml bottles)
// // //     {
// // //       id: "main-index",
// // //       type: "index-main",
// // //       content: (
// // //         <div className="w-full h-full p-3 md:p-6 box-border bg-gradient-to-br from-white to-green-50 font-serif flex flex-col overflow-y-auto select-none scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-transparent">
// // //           {/* Title Section */}
// // //           <motion.div
// // //             initial={{ y: -30, opacity: 0 }}
// // //             animate={{ y: 0, opacity: 1 }}
// // //             transition={{ duration: 0.8, ease: "easeOut" }}
// // //             className="text-center mb-4"
// // //           >
// // //             <h1 className="text-xl md:text-3xl text-green-800 font-bold m-0">PRODUCT INDEX</h1>
// // //             <motion.div
// // //               className="w-16 h-1 bg-green-600 mx-auto my-2 rounded-full"
// // //               initial={{ scaleX: 0 }}
// // //               animate={{ scaleX: 1 }}
// // //               transition={{ delay: 0.3, duration: 0.8 }}
// // //             />
// // //             <p className="text-xs md:text-sm text-green-700 font-medium m-0">
// // //               Click on any item to view the product gallery
// // //             </p>
// // //           </motion.div>
// // //           {/* Product List */}
// // //           <motion.div
// // //             initial={{ y: 30, opacity: 0 }}
// // //             animate={{ y: 0, opacity: 1 }}
// // //             transition={{ delay: 0.4, duration: 0.8 }}
// // //             className="flex-1 w-full max-w-[92vw] mx-auto"
// // //           >
// // //             <div className="grid grid-cols-1 gap-2">
// // //               {[
// // //                 { number: "1.", name: "200ml", id: "200ml" },
// // //                 { number: "2.", name: "250ml", id: "250ml" },
// // //                 { number: "3.", name: "300ml", id: "300ml" },
// // //                 { number: "4.", name: "500ml", id: "500ml" },
// // //                 { number: "5.", name: "750ml", id: "750ml" },
// // //                 { number: "6.", name: "1 Liter", id: "1liter" },
// // //               ].map((item, index) => (
// // //                 <motion.div
// // //                   key={item.id}
// // //                   className="flex items-center p-2 md:p-3 bg-white rounded-md cursor-pointer text-sm md:text-base text-green-800 border border-transparent shadow hover:shadow-md transition-all duration-300"
// // //                   onClick={() => openProductGallery(item.id)}
// // //                   initial={{ x: -50, opacity: 0 }}
// // //                   animate={{ x: 0, opacity: 1 }}
// // //                   transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
// // //                   whileHover={{
// // //                     background: "#ecfdf5",
// // //                     borderColor: "#22c55e",
// // //                     x: 6,
// // //                     scale: 1.02,
// // //                   }}
// // //                   whileTap={{ scale: 0.97 }}
// // //                 >
// // //                   <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
// // //                     <Droplet className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-600" />
// // //                   </motion.div>
// // //                   <span className="font-bold mr-3 min-w-[32px]">{item.number}</span>
// // //                   <span className="flex-1">{item.name}</span>
// // //                   <motion.span
// // //                     className="ml-auto text-green-600 text-base font-bold"
// // //                     whileHover={{ x: 4 }}
// // //                     transition={{ duration: 0.2 }}
// // //                   >
// // //                     →
// // //                   </motion.span>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       ),
// // //     },
// // //     // Page 4 - Biodegradable Index
// // //     {
// // //       id: "bio-index",
// // //       type: "index-bio",
// // //       content: (
// // //         <div className="w-full h-full p-3 md:p-6 box-border bg-gradient-to-br from-white to-emerald-50 font-serif flex flex-col overflow-y-auto select-none scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-transparent">
// // //           {/* Header */}
// // //           <motion.div
// // //             initial={{ y: -30, opacity: 0 }}
// // //             animate={{ y: 0, opacity: 1 }}
// // //             transition={{ duration: 0.8, ease: "easeOut" }}
// // //             className="text-center mb-4"
// // //           >
// // //             <h1 className="text-xl md:text-3xl text-emerald-700 font-bold m-0">BIODEGRADABLE COLLECTION</h1>
// // //             <motion.div
// // //               className="w-16 h-1 bg-emerald-600 mx-auto my-2 rounded-full"
// // //               initial={{ scaleX: 0 }}
// // //               animate={{ scaleX: 1 }}
// // //               transition={{ delay: 0.3, duration: 0.8 }}
// // //             />
// // //             <p className="text-xs md:text-sm text-emerald-700 font-medium m-0">
// // //               Eco-friendly options for a sustainable future
// // //             </p>
// // //           </motion.div>
// // //           {/* Biodegradable Items List */}
// // //           <motion.div
// // //             initial={{ y: 30, opacity: 0 }}
// // //             animate={{ y: 0, opacity: 1 }}
// // //             transition={{ delay: 0.4, duration: 0.8 }}
// // //             className="flex-1 w-full max-w-[92vw] mx-auto"
// // //           >
// // //             <div className="grid grid-cols-1 gap-2">
// // //               {[
// // //                 { number: "7.1", name: "Biodegradable 200ml", id: "bio-200ml" },
// // //                 { number: "7.2", name: "Biodegradable 250ml", id: "bio-250ml" },
// // //                 { number: "7.3", name: "Biodegradable 300ml", id: "bio-300ml" },
// // //                 { number: "7.4", name: "Biodegradable 500ml", id: "bio-500ml" },
// // //               ].map((item, index) => (
// // //                 <motion.div
// // //                   key={item.id}
// // //                   className="flex items-center p-2 md:p-3 bg-white rounded-md cursor-pointer text-sm md:text-base text-emerald-800 border border-transparent shadow hover:shadow-md transition-all duration-300"
// // //                   onClick={() => openProductGallery(item.id)}
// // //                   initial={{ x: 50, opacity: 0 }}
// // //                   animate={{ x: 0, opacity: 1 }}
// // //                   transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
// // //                   whileHover={{
// // //                     background: "#d1fae5",
// // //                     borderColor: "#10b981",
// // //                     x: 6,
// // //                     scale: 1.02,
// // //                   }}
// // //                   whileTap={{ scale: 0.97 }}
// // //                 >
// // //                   <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
// // //                     <Leaf className="w-4 h-4 md:w-5 md:h-5 mr-2 text-emerald-600" />
// // //                   </motion.div>
// // //                   <span className="font-bold mr-3 min-w-[45px]">{item.number}</span>
// // //                   <span className="flex-1">{item.name}</span>
// // //                   <motion.span
// // //                     className="ml-auto text-emerald-600 text-base font-bold"
// // //                     whileHover={{ x: 4 }}
// // //                     transition={{ duration: 0.2 }}
// // //                   >
// // //                     →
// // //                   </motion.span>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       ),
// // //     },
// // //     // Page 5 - THANK YOU PAGE
// // //     {
// // //       id: "thankyou",
// // //       type: "thankyou",
// // //       content: (
// // //         <div className="w-full h-full p-3 md:p-5 box-border bg-gradient-to-br from-white to-green-50 flex items-center justify-center relative overflow-hidden select-none">
// // //           {/* Floating Particles */}
// // //           {[
// // //             { top: 15, left: 20, delay: 0 },
// // //             { top: 35, left: 80, delay: 0.5 },
// // //             { top: 60, left: 15, delay: 1.0 },
// // //             { top: 25, left: 70, delay: 1.5 },
// // //             { top: 80, left: 85, delay: 2.0 },
// // //             { top: 45, left: 25, delay: 2.5 },
// // //             { top: 70, left: 60, delay: 3.0 },
// // //             { top: 90, left: 40, delay: 3.5 },
// // //           ].map((p, i) => (
// // //             <motion.div
// // //               key={i}
// // //               className="absolute w-1 h-1 bg-green-400/40 rounded-full"
// // //               style={{ top: `${p.top}%`, left: `${p.left}%` }}
// // //               animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
// // //               transition={{
// // //                 duration: 3 + i * 0.3,
// // //                 repeat: Number.POSITIVE_INFINITY,
// // //                 delay: p.delay,
// // //               }}
// // //             />
// // //           ))}
// // //           <motion.div
// // //             initial={{ scale: 0.8, opacity: 0 }}
// // //             animate={{ scale: 1, opacity: 1 }}
// // //             transition={{ duration: 0.8, ease: "backOut" }}
// // //             className="text-center text-green-800 z-10 w-full max-w-md"
// // //           >
// // //             {/* Logo */}
// // //             <motion.div
// // //               initial={{ y: -30, opacity: 0, rotate: -10 }}
// // //               animate={{ y: 0, opacity: 1, rotate: 0 }}
// // //               transition={{ delay: 0.3, duration: 0.8, ease: "backOut" }}
// // //               className="mb-3 flex flex-col items-center"
// // //             >
// // //               <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
// // //                 <Image
// // //                   src="/Vedic Jal.png"
// // //                   alt="VedicJal Logo"
// // //                   width={70}
// // //                   height={70}
// // //                   className="rounded-lg shadow-md border-2 border-white"
// // //                   onContextMenu={(e) => e.preventDefault()}
// // //                   draggable="false"
// // //                 />
// // //               </motion.div>
// // //             </motion.div>
// // //             {/* Heading */}
// // //             <motion.h1
// // //               initial={{ y: -20, opacity: 0 }}
// // //               animate={{ y: 0, opacity: 1 }}
// // //               transition={{ delay: 0.5, duration: 0.8 }}
// // //               className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 leading-tight"
// // //             >
// // //               Thank You
// // //             </motion.h1>
// // //             <motion.div
// // //               className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-3 rounded-full"
// // //               initial={{ scaleX: 0 }}
// // //               animate={{ scaleX: 1 }}
// // //               transition={{ delay: 0.7, duration: 0.8 }}
// // //             />
// // //             {/* Subtext */}
// // //             <motion.p
// // //               initial={{ y: 20, opacity: 0 }}
// // //               animate={{ y: 0, opacity: 1 }}
// // //               transition={{ delay: 0.9, duration: 0.5 }}
// // //               className="text-base md:text-lg font-semibold mb-2"
// // //             >
// // //               For choosing VedicJal
// // //             </motion.p>
// // //             <motion.p
// // //               initial={{ y: 20, opacity: 0 }}
// // //               animate={{ y: 0, opacity: 1 }}
// // //               transition={{ delay: 1.1, duration: 0.5 }}
// // //               className="text-sm md:text-base text-green-700 leading-snug mb-4"
// // //             >
// // //               Your trust in our premium handcrafted water bottles means the world to us.
// // //             </motion.p>
// // //             {/* Quote */}
// // //             <motion.div
// // //               initial={{ scale: 0.9, opacity: 0 }}
// // //               animate={{ scale: 1, opacity: 1 }}
// // //               transition={{ delay: 1.3, duration: 0.5 }}
// // //               className="p-3 px-4 border border-green-300 rounded-lg bg-green-100/50 inline-block text-green-700 font-medium italic text-sm md:text-base"
// // //             >
// // //               "Pure Water, Pure Life"
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>
// // //       ),
// // //     },
// // //     // Page 6 - Contact Us Page
// // //     {
// // //       id: "contact",
// // //       type: "contact",
// // //       content: (
// // //         <div className="w-full h-full p-4 md:p-6 box-border bg-gradient-to-br from-white to-green-50 flex flex-col justify-center items-center overflow-auto select-none">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, ease: "easeOut" }}
// // //             className="text-green-800 w-full max-w-md text-center space-y-3"
// // //           >
// // //             {/* Title */}
// // //             <motion.h1
// // //               initial={{ y: -20, opacity: 0 }}
// // //               animate={{ y: 0, opacity: 1 }}
// // //               transition={{ delay: 0.2, duration: 0.6 }}
// // //               className="text-xl sm:text-2xl font-bold font-serif"
// // //             >
// // //               Contact Us
// // //             </motion.h1>
// // //             {/* Divider */}
// // //             <motion.div
// // //               className="w-10 sm:w-12 h-1 bg-green-600 mx-auto rounded-full"
// // //               initial={{ scaleX: 0 }}
// // //               animate={{ scaleX: 1 }}
// // //               transition={{ delay: 0.3, duration: 0.6 }}
// // //             />
// // //             {/* Details */}
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 10 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: 0.5, duration: 0.6 }}
// // //               className="bg-white/90 p-4 rounded-xl shadow border border-green-200 text-xs sm:text-sm text-green-700 leading-relaxed space-y-1"
// // //             >
// // //               <p className="font-bold text-green-800 text-sm">Vedicjal</p>
// // //               <p>A brand owned by Anugya FMCG Industries</p>
// // //               <p>E-153 Forest Lane, Near Country Club</p>
// // //               <p>Sainik Farms, New Delhi – 110068</p>
// // //               <p>
// // //                 📞 <span className="text-green-800 font-medium">+91- 9810152783/9818088458</span>
// // //               </p>
// // //               <p>
// // //                 📧{" "}
// // //                 <a href="mailto:info@vedicjal.com" className="underline text-green-800 break-all">
// // //                   info@vedicjal.com
// // //                 </a>
// // //               </p>
// // //               <p>
// // //                 🌐{" "}
// // //                 <a
// // //                   href="https://vedicjal.com"
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="underline text-green-800 break-all"
// // //                 >
// // //                   www.vedicjal.com
// // //                 </a>
// // //               </p>
// // //               {/* Social Media */}
// // //               <div className="flex justify-center gap-4 pt-2 text-green-600">
// // //                 <a
// // //                   href="https://www.instagram.com/vedic_jal?utm_source=qr&igsh=MXI1OG90MjFyM2E0OA=="
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   aria-label="Instagram"
// // //                 >
// // //                   <Instagram className="w-5 h-5 hover:text-green-800" />
// // //                 </a>
// // //                 <a
// // //                   href="https://www.facebook.com/share/19N6P87t5x/"
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   aria-label="Facebook"
// // //                 >
// // //                   <Facebook className="w-5 h-5 hover:text-green-800" />
// // //                 </a>
// // //                 <a
// // //                   href="https://wa.me/message/HMB5Q7MZXTP3P1"
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   aria-label="WhatsApp"
// // //                 >
// // //                   <FaWhatsapp className="w-5 h-5 hover:text-green-800" />
// // //                 </a>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>
// // //       ),
// // //     },
// // //   ]

// // //   // Mobile-specific page order for single-page view
// // //   const mobilePages = [
// // //     0, // Cover
// // //     1, // Left image
// // //     2, // Right image
// // //     3, // Main index
// // //     4, // Bio index
// // //     5, // Thank you
// // //     6, // Contact
// // //   ]

// // //   // Desktop spreads: [leftPageIndex, rightPageIndex]
// // //   const spreads = [
// // //     [null, 0], // Spread 0: Cover (Right only)
// // //     [1, 2], // Spread 1: Image Left, Image Right
// // //     [3, 4], // Spread 2: Main Index, Biodegradable Index
// // //     [5, 6], // Spread 3: Thank You, Contact
// // //   ]

// // //   const totalSpreads = isMobile ? mobilePages.length : spreads.length

// // //   const getPageContent = (pageIndex) => {
// // //     if (pageIndex === null || typeof allPages[pageIndex] === "undefined") {
// // //       return null
// // //     }
// // //     return allPages[pageIndex].content
// // //   }

// // //   // Mobile: get current page content
// // //   const getCurrentMobilePageContent = () => {
// // //     if (!isMobile) return null
// // //     const pageIndex = mobilePages[displaySpread]
// // //     return getPageContent(pageIndex)
// // //   }

// // //   // Desktop: get left/right page content
// // //   const getCurrentLeftPageContent = () => {
// // //     if (isMobile) return null
// // //     const pageIndex = spreads[displaySpread][0]
// // //     return getPageContent(pageIndex)
// // //   }

// // //   const getCurrentRightPageContent = () => {
// // //     if (isMobile) return null
// // //     const pageIndex = spreads[displaySpread][1]
// // //     return getPageContent(pageIndex)
// // //   }

// // //   const getFlippingPageFrontContent = () => {
// // //     if (isMobile) {
// // //       const pageIndex = mobilePages[currentSpread]
// // //       return getPageContent(pageIndex)
// // //     } else {
// // //       if (flipDirection === "next") {
// // //         return getPageContent(spreads[currentSpread][1])
// // //       } else if (flipDirection === "prev") {
// // //         return getPageContent(spreads[currentSpread][0])
// // //       }
// // //     }
// // //     return null
// // //   }

// // //   const getFlippingPageBackContent = () => {
// // //     if (isMobile) {
// // //       const nextPageIdx = flipDirection === "next" ? mobilePages[currentSpread + 1] : mobilePages[currentSpread - 1]
// // //       return getPageContent(nextPageIdx)
// // //     } else {
// // //       if (flipDirection === "next") {
// // //         const nextPageIdx = spreads[currentSpread + 1]?.[1]
// // //         return getPageContent(nextPageIdx)
// // //       } else if (flipDirection === "prev") {
// // //         const prevPageIdx = spreads[currentSpread - 1]?.[0]
// // //         return getPageContent(prevPageIdx)
// // //       }
// // //     }
// // //     return null
// // //   }

// // //   const goToSpread = (spreadIndex) => {
// // //     if (isFlipping || spreadIndex < 0 || spreadIndex >= totalSpreads) return

// // //     const direction = spreadIndex > currentSpread ? "next" : "prev"
// // //     setFlipDirection(direction)
// // //     setIsFlipping(true)
// // //     setCurrentSpread(spreadIndex)

// // //     setTimeout(() => {
// // //       setDisplaySpread(spreadIndex)
// // //       setIsFlipping(false)
// // //       setFlipDirection("")
// // //     }, 800) // Longer animation for mobile
// // //   }

// // //   const nextSpread = () => {
// // //     if (currentSpread < totalSpreads - 1) {
// // //       goToSpread(currentSpread + 1)
// // //     }
// // //   }

// // //   const prevSpread = () => {
// // //     if (currentSpread > 0) {
// // //       goToSpread(currentSpread - 1)
// // //     }
// // //   }

// // //   const isClosedBook = displaySpread === 0 && !isMobile

// // //   // Sidebar resize handlers (desktop only)
// // //   const handleMouseDown = useCallback(
// // //     (e) => {
// // //       if (isMobile) return
// // //       setIsResizing(true)
// // //       e.preventDefault()
// // //     },
// // //     [isMobile],
// // //   )

// // //   const handleMouseMove = useCallback(
// // //     (e) => {
// // //       if (!isResizing || isMobile) return
// // //       const newWidth = e.clientX
// // //       if (newWidth >= 250 && newWidth <= 400) {
// // //         setSidebarWidth(newWidth)
// // //       }
// // //     },
// // //     [isResizing, isMobile],
// // //   )

// // //   const handleMouseUp = useCallback(() => {
// // //     setIsResizing(false)
// // //   }, [])

// // //   useEffect(() => {
// // //     if (isResizing) {
// // //       document.addEventListener("mousemove", handleMouseMove)
// // //       document.addEventListener("mouseup", handleMouseUp)
// // //       return () => {
// // //         document.removeEventListener("mousemove", handleMouseMove)
// // //         document.removeEventListener("mouseup", handleMouseUp)
// // //       }
// // //     }
// // //   }, [isResizing, handleMouseMove, handleMouseUp])

// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       const width = window.innerWidth
// // //       setWindowWidth(width)
// // //       setIsMobile(width <= 768)
// // //       if (width <= 768) {
// // //         setSidebarWidth(width)
// // //       }
// // //     }

// // //     if (typeof window !== "undefined") {
// // //       const width = window.innerWidth
// // //       setWindowWidth(width)
// // //       setIsMobile(width <= 768)
// // //       window.addEventListener("resize", handleResize)
// // //       return () => {
// // //         window.removeEventListener("resize", handleResize)
// // //       }
// // //     }
// // //   }, [])

// // //   // Enhanced Product Gallery Component with Amazon-style cards
// // //   const ProductGallery = ({ productId, closeGallery, colors }) => {
// // //     const product = productData[productId]
// // //     if (!product) return null

// // //     const galleryVariants = {
// // //       hidden: { opacity: 0, scale: 0.95 },
// // //       visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
// // //       exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } },
// // //     }

// // //     const itemVariants = {
// // //       hidden: { opacity: 0, y: 30 },
// // //       visible: { opacity: 1, y: 0 },
// // //     }

// // //     return (
// // //       <motion.div
// // //         variants={galleryVariants}
// // //         initial="hidden"
// // //         animate="visible"
// // //         exit="exit"
// // //         className="fixed inset-0 bg-black/95 z-[1000] flex flex-col select-none"
// // //       >
// // //         {/* Header */}
// // //         <div className="p-4 md:p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-md flex justify-between items-center border-b border-green-500/20">
// // //           <div className="flex items-center gap-3">
// // //             <Droplet className="w-6 h-6 text-green-400" />
// // //             <h2 className="text-white text-xl md:text-2xl font-semibold m-0">{product.title}</h2>
// // //           </div>
// // //           <motion.button
// // //             className="bg-white/20 border-none text-white text-2xl w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500/30"
// // //             onClick={closeGallery}
// // //             whileHover={{ scale: 1.1 }}
// // //             whileTap={{ scale: 0.9 }}
// // //           >
// // //             <X className="w-6 h-6" />
// // //           </motion.button>
// // //         </div>

// // //         {/* Gallery Grid */}
// // //         <motion.div
// // //           className="flex-1 p-4 md:p-6 overflow-y-auto"
// // //           variants={{
// // //             visible: {
// // //               transition: {
// // //                 staggerChildren: 0.08,
// // //               },
// // //             },
// // //           }}
// // //         >
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
// // //             {product.images.map((image, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 variants={itemVariants}
// // //                 className="bg-gradient-to-br from-white to-green-50 rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out cursor-pointer border border-gray-100 hover:border-green-400 hover:shadow-xl group"
// // //                 onClick={() => setSelectedProduct({ id: productId, imageIndex: index })}
// // //                 whileHover={{ y: -8, scale: 1.02 }}
// // //                 whileTap={{ scale: 0.98 }}
// // //               >
// // //                 {/* Image Container */}
// // //                 <div className="relative aspect-[4/3] overflow-hidden bg-green-50">
// // //                   <Image
// // //                     src={image || "/placeholder.svg?height=300&width=400"}
// // //                     alt={`${product.title} ${index + 1}`}
// // //                     fill
// // //                     className="object-contain transition-transform duration-300 group-hover:scale-105"
// // //                     onContextMenu={(e) => e.preventDefault()}
// // //                     draggable="false"
// // //                   />
// // //                   {/* Overlay on hover */}
// // //                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
// // //                     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
// // //                       Click to zoom
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 {/* Product Info */}
// // //                 <div className="p-4">
// // //                   <h3 className="text-gray-800 font-semibold text-base mb-2 line-clamp-2">
// // //                     {product.title} - Model {index + 1}
// // //                   </h3>
// // //                   <div className="flex items-center justify-between">
// // //                     {/* <span className="text-green-600 font-bold text-lg">Premium Quality</span> */}
// // //                     <div className="flex items-center gap-1 text-yellow-500">
// // //                       {[...Array(5)].map((_, i) => (
// // //                         <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
// // //                           <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
// // //                         </svg>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                   <p className="text-gray-600 text-sm mt-2">High-quality water bottle with premium finish</p>
// // //                   {/* Action Button */}
// // //                   <motion.button
// // //                     className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
// // //                     whileHover={{ scale: 1.02 }}
// // //                     whileTap={{ scale: 0.98 }}
// // //                   >
// // //                     View Details
// // //                   </motion.button>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </motion.div>

// // //         {/* Footer */}
// // //         <div className="p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-md border-t border-green-500/20">
// // //           <div className="text-center text-white/80 text-sm">
// // //             <p>Showing {product.images.length} models • Click any image to view in full size</p>
// // //           </div>
// // //         </div>
// // //       </motion.div>
// // //     )
// // //   }

// // //   // Zoomed Image Viewer Component
// // //   const ZoomedImageViewer = ({ productId, imageIndex, closeViewer }) => {
// // //     const product = productData[productId]
// // //     const imageUrl = product?.images[imageIndex]
// // //     const [zoom, setZoom] = useState(1)
// // //     const x = useMotionValue(0)
// // //     const y = useMotionValue(0)

// // //     const handleWheel = useCallback(
// // //       (e) => {
// // //         e.preventDefault()
// // //         const scaleAmount = 0.1
// // //         const newZoom = e.deltaY < 0 ? Math.min(3, zoom + scaleAmount) : Math.max(0.5, zoom - scaleAmount)
// // //         setZoom(newZoom)
// // //       },
// // //       [zoom],
// // //     )

// // //     const handlePan = useCallback(
// // //       (event, info) => {
// // //         x.set(x.get() + info.delta.x)
// // //         y.set(y.get() + info.delta.y)
// // //       },
// // //       [x, y],
// // //     )

// // //     if (!imageUrl) return null

// // //     return (
// // //       <motion.div
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         exit={{ opacity: 0 }}
// // //         className="fixed inset-0 bg-black/95 z-[1001] flex items-center justify-center select-none"
// // //       >
// // //         <motion.button
// // //           className="absolute top-4 right-4 bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-red-500/30"
// // //           onClick={closeViewer}
// // //           whileHover={{ scale: 1.1 }}
// // //           whileTap={{ scale: 0.9 }}
// // //         >
// // //           <X className="w-6 h-6" />
// // //         </motion.button>

// // //         <div className="relative max-w-[90vw] max-h-[90vh] overflow-hidden flex items-center justify-center">
// // //           <motion.img
// // //             src={imageUrl}
// // //             alt={product.title}
// // //             className="max-w-full max-h-full object-contain cursor-grab"
// // //             style={{
// // //               scale: zoom,
// // //               x: x,
// // //               y: y,
// // //             }}
// // //             onWheel={handleWheel}
// // //             onPan={handlePan}
// // //             onContextMenu={(e) => e.preventDefault()}
// // //             draggable="false"
// // //             initial={{ scale: 0.8, opacity: 0 }}
// // //             animate={{ scale: 1, opacity: 1 }}
// // //             transition={{ duration: 0.4 }}
// // //           />
// // //         </div>

// // //         <div className="absolute bottom-4 flex gap-2 bg-white/20 p-3 rounded-full backdrop-blur-md">
// // //           <motion.button
// // //             className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40"
// // //             onClick={() => setZoom((prev) => Math.min(3, prev + 0.1))}
// // //             whileHover={{ scale: 1.1 }}
// // //             whileTap={{ scale: 0.9 }}
// // //           >
// // //             <Plus className="w-5 h-5" />
// // //           </motion.button>
// // //           <motion.button
// // //             className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40"
// // //             onClick={() => setZoom((prev) => Math.max(0.5, prev - 0.1))}
// // //             whileHover={{ scale: 1.1 }}
// // //             whileTap={{ scale: 0.9 }}
// // //           >
// // //             <Minus className="w-5 h-5" />
// // //           </motion.button>
// // //           <motion.button
// // //             className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40"
// // //             onClick={() => {
// // //               setZoom(1)
// // //               x.set(0)
// // //               y.set(0)
// // //             }}
// // //             whileHover={{ scale: 1.1 }}
// // //             whileTap={{ scale: 0.9 }}
// // //           >
// // //             <Maximize className="w-5 h-5" />
// // //           </motion.button>
// // //         </div>
// // //       </motion.div>
// // //     )
// // //   }

// // //   // Component for rendering thumbnails in the sidebar
// // //   const SpreadThumbnail = ({ spreadIndex, isActive, onClick }) => {
// // //     if (isMobile) {
// // //       // Mobile: single page thumbnails
// // //       const pageIndex = mobilePages[spreadIndex]
// // //       const pageContent = getPageContent(pageIndex)
// // //       const pageLabels = ["Cover", "Image 1", "Image 2", "Index", "Bio", "Thanks", "Contact"]
// // //       return (
// // //         <motion.div
// // //           className="thumbnail flex-shrink-0 relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
// // //           style={{
// // //             marginRight: "0.5rem",
// // //             border: isActive ? `3px solid ${colors.primary}` : "3px solid transparent",
// // //             background: colors.backgroundWhite,
// // //             boxShadow: isActive ? `0 6px 25px ${colors.shadowMedium}` : `0 3px 12px ${colors.shadowLight}`,
// // //             height: "100px",
// // //             width: "80px",
// // //             minWidth: "80px",
// // //           }}
// // //           onClick={onClick}
// // //           whileHover={{
// // //             scale: isActive ? 1 : 1.05,
// // //             borderColor: colors.primary,
// // //             boxShadow: `0 6px 20px ${colors.shadowMedium}`,
// // //           }}
// // //           whileTap={{ scale: 0.95 }}
// // //         >
// // //           <div className="w-full h-full overflow-hidden relative bg-green-50 flex items-center justify-center">
// // //             <div className="scale-[0.06] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
// // //               {pageContent}
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-0 left-0 right-0 bg-green-800 text-white p-1 text-xs font-medium text-center h-5 flex items-center justify-center">
// // //             {pageLabels[spreadIndex]}
// // //           </div>
// // //         </motion.div>
// // //       )
// // //     } else {
// // //       // Desktop: spread thumbnails
// // //       const [leftPageIndex, rightPageIndex] = spreads[spreadIndex]
// // //       const leftPageContent = getPageContent(leftPageIndex)
// // //       const rightPageContent = getPageContent(rightPageIndex)
// // //       const spreadLabels = ["Cover", "Intro", "Index", "Thank You"]
// // //       return (
// // //         <motion.div
// // //           className="thumbnail flex-shrink-0 relative overflow-hidden rounded-md cursor-pointer transition-all duration-300 ease-in-out"
// // //           style={{
// // //             marginBottom: "0.5rem",
// // //             border: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
// // //             background: colors.backgroundWhite,
// // //             boxShadow: isActive ? `0 4px 20px ${colors.shadowMedium}` : `0 2px 8px ${colors.shadowLight}`,
// // //             height: "120px",
// // //             width: "auto",
// // //             minWidth: leftPageContent ? "160px" : "80px",
// // //           }}
// // //           onClick={onClick}
// // //           whileHover={{
// // //             scale: isActive ? 1 : 1.02,
// // //             borderColor: colors.primary,
// // //             boxShadow: `0 4px 16px ${colors.shadowMedium}`,
// // //           }}
// // //         >
// // //           {leftPageContent && (
// // //             <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden relative bg-green-50 flex items-center justify-center">
// // //               <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
// // //                 {leftPageContent}
// // //               </div>
// // //             </div>
// // //           )}
// // //           <div
// // //             className={`${leftPageContent ? "absolute right-0 top-0 w-1/2" : "w-full"} h-full overflow-hidden relative bg-green-50 flex items-center justify-center`}
// // //           >
// // //             <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
// // //               {rightPageContent}
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-0 left-0 right-0 bg-green-800 text-white p-1 px-2 text-xs font-medium text-center h-5 flex items-center justify-center">
// // //             {spreadLabels[spreadIndex]}
// // //           </div>
// // //         </motion.div>
// // //       )
// // //     }
// // //   }

// // //   return (
// // //     <>
// // //       <div className="flex h-screen bg-gradient-to-br from-green-50 to-green-100 font-sans overflow-hidden flex-col md:flex-row select-none">
// // //         {/* Resizable Sidebar */}
// // //         <div
// // //           className="relative flex flex-shrink-0 bg-white/95 backdrop-blur-xl border-r border-green-200 shadow-lg min-w-[250px] max-w-[400px] md:h-full md:flex-col w-full h-[120px] overflow-x-auto overflow-y-hidden md:overflow-x-hidden md:overflow-y-auto"
// // //           style={{
// // //             width: isMobile ? "100%" : `${sidebarWidth}px`,
// // //             height: isMobile ? "120px" : "100%",
// // //           }}
// // //         >
// // //           {/* Header - only shown on mobile */}
// // //           {isMobile && (
// // //             <div className="p-4 bg-white flex items-center sticky left-0 z-10 border-b border-green-200 min-w-max">
// // //               <h3 className="m-0 text-green-800 text-base font-semibold whitespace-nowrap">Page Navigation</h3>
// // //             </div>
// // //           )}
// // //           {/* Thumbnails */}
// // //           <div
// // //             className={`flex-1 w-full px-[3vw] flex ${isMobile ? "flex-row items-center overflow-x-auto" : "flex-col justify-center"}`}
// // //           >
// // //             {Array.from({ length: totalSpreads }).map((_, index) => (
// // //               <SpreadThumbnail
// // //                 key={index}
// // //                 spreadIndex={index}
// // //                 isActive={index === displaySpread}
// // //                 onClick={() => goToSpread(index)}
// // //               />
// // //             ))}
// // //           </div>
// // //           {/* Resize Handle - only on desktop */}
// // //           {!isMobile && (
// // //             <div
// // //               className="absolute top-0 right-0 w-1 cursor-col-resize z-10 transition-all duration-300 ease-in-out hover:bg-green-500 hover:opacity-50"
// // //               style={{ height: "100%" }}
// // //               onMouseDown={handleMouseDown}
// // //             />
// // //           )}
// // //         </div>

// // //         {/* Main Flipbook */}
// // //         <div className="flipbook-main flex-1 flex flex-col items-center justify-center p-2 md:p-8 relative overflow-hidden h-[calc(100vh-120px)] md:h-full">
// // //           <div
// // //             ref={flipBookRef}
// // //             className="relative mb-4"
// // //             style={{
// // //               width: isMobile ? "95%" : "min(90vw, 95vh * 1.2)",
// // //               height: isMobile ? "70%" : "min(75vh, 90vw / 1.2)",
// // //               maxWidth: "1400px",
// // //               maxHeight: "900px",
// // //               perspective: "1500px",
// // //             }}
// // //           >
// // //             {/* Book spine - only show when not closed book and not mobile */}
// // //             {!isClosedBook && !isMobile && (
// // //               <div className="absolute left-1/2 top-0 w-1.5 h-full bg-gradient-to-b from-green-600 to-green-800 -translate-x-1/2 z-10 rounded-md shadow-md" />
// // //             )}

// // //             {/* Mobile: Single page view */}
// // //             {isMobile && (
// // //               <motion.div
// // //                 key={displaySpread}
// // //                 initial={{ opacity: 0, x: flipDirection === "next" ? 100 : -100 }}
// // //                 animate={{ opacity: 1, x: 0 }}
// // //                 exit={{ opacity: 0, x: flipDirection === "next" ? -100 : 100 }}
// // //                 transition={{ duration: 0.6, ease: "easeInOut" }}
// // //                 className="absolute inset-0 bg-white border-2 border-green-200 shadow-2xl overflow-hidden rounded-xl"
// // //               >
// // //                 {getCurrentMobilePageContent()}
// // //               </motion.div>
// // //             )}

// // //             {/* Desktop: Dual page view */}
// // //             {!isMobile && (
// // //               <>
// // //                 {/* Left Page - only show when book is open */}
// // //                 {!isClosedBook && getCurrentLeftPageContent() && (
// // //                   <div className="absolute w-1/2 h-full bg-white border border-green-200 shadow-xl overflow-hidden left-0 rounded-l-xl">
// // //                     {getCurrentLeftPageContent()}
// // //                   </div>
// // //                 )}

// // //                 {/* Right Page */}
// // //                 <div
// // //                   className="absolute h-full bg-white border border-green-200 shadow-xl overflow-hidden right-0 rounded-r-xl transition-all duration-300 ease-in-out"
// // //                   style={{
// // //                     width: isClosedBook ? "50%" : "50%",
// // //                     left: isClosedBook ? "50%" : "auto",
// // //                     borderTopLeftRadius: isClosedBook ? "0.75rem" : "0",
// // //                     borderBottomLeftRadius: isClosedBook ? "0.75rem" : "0",
// // //                   }}
// // //                 >
// // //                   {getCurrentRightPageContent()}
// // //                 </div>

// // //                 {/* Flipping Page */}
// // //                 <AnimatePresence initial={false}>
// // //                   {isFlipping && (
// // //                     <motion.div
// // //                       key={currentSpread + "-" + flipDirection}
// // //                       initial={{ rotateY: flipDirection === "next" ? 0 : 0 }}
// // //                       animate={{ rotateY: flipDirection === "next" ? -180 : 180 }}
// // //                       exit={{ opacity: 0 }}
// // //                       transition={{ duration: 0.8, ease: "easeInOut" }}
// // //                       className="absolute w-1/2 h-full bg-white border border-green-200 shadow-xl overflow-hidden z-20 transform-style-preserve-3d"
// // //                       style={{
// // //                         transformOrigin: flipDirection === "next" ? "left center" : "right center",
// // //                         right: flipDirection === "next" ? 0 : "auto",
// // //                         left: flipDirection === "prev" ? 0 : "auto",
// // //                       }}
// // //                     >
// // //                       <div className="absolute w-full h-full backface-hidden">{getFlippingPageFrontContent()}</div>
// // //                       <div className="absolute w-full h-full backface-hidden" style={{ transform: "rotateY(180deg)" }}>
// // //                         {getFlippingPageBackContent()}
// // //                       </div>
// // //                     </motion.div>
// // //                   )}
// // //                 </AnimatePresence>
// // //               </>
// // //             )}
// // //           </div>

// // //           {/* Enhanced Navigation */}
// // //           <div className="flex items-center justify-center gap-4 bg-white/95 backdrop-blur-xl p-3 px-6 rounded-full shadow-lg border border-green-200 w-full max-w-xs md:max-w-md">
// // //             <motion.button
// // //               className="bg-green-600 text-white border-none py-2 px-4 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out shadow-md flex items-center justify-center w-12 h-10"
// // //               style={{
// // //                 background:
// // //                   displaySpread === 0
// // //                     ? colors.secondary
// // //                     : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// // //                 cursor: displaySpread === 0 ? "not-allowed" : "pointer",
// // //                 boxShadow: displaySpread === 0 ? "none" : "0 3px 12px rgba(34, 197, 94, 0.3)",
// // //               }}
// // //               onClick={prevSpread}
// // //               disabled={displaySpread === 0}
// // //               whileHover={displaySpread !== 0 ? { translateY: -3, boxShadow: "0 6px 20px rgba(34, 197, 94, 0.4)" } : {}}
// // //               whileTap={displaySpread !== 0 ? { translateY: 0, boxShadow: "0 3px 12px rgba(34, 197, 94, 0.3)" } : {}}
// // //             >
// // //               ←
// // //             </motion.button>
// // //             <div className="text-green-800 font-semibold text-sm p-0 px-3 min-w-[140px] text-center">
// // //               {isMobile
// // //                 ? displaySpread === 0
// // //                   ? "Cover"
// // //                   : displaySpread === 1
// // //                     ? "Image 1"
// // //                     : displaySpread === 2
// // //                       ? "Image 2"
// // //                       : displaySpread === 3
// // //                         ? "Index"
// // //                         : displaySpread === 4
// // //                           ? "Bio"
// // //                           : displaySpread === 5
// // //                             ? "Thanks"
// // //                             : "Contact"
// // //                 : displaySpread === 0
// // //                   ? "Cover"
// // //                   : displaySpread === 1
// // //                     ? "Intro"
// // //                     : displaySpread === 2
// // //                       ? "Index"
// // //                       : "Thank You"}{" "}
// // //               / {totalSpreads}
// // //             </div>
// // //             <motion.button
// // //               className="bg-green-600 text-white border-none py-2 px-4 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out shadow-md flex items-center justify-center w-12 h-10"
// // //               style={{
// // //                 background:
// // //                   displaySpread >= totalSpreads - 1
// // //                     ? colors.secondary
// // //                     : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// // //                 cursor: displaySpread >= totalSpreads - 1 ? "not-allowed" : "pointer",
// // //                 boxShadow: displaySpread >= totalSpreads - 1 ? "none" : "0 3px 12px rgba(34, 197, 94, 0.3)",
// // //               }}
// // //               onClick={nextSpread}
// // //               disabled={displaySpread >= totalSpreads - 1}
// // //               whileHover={
// // //                 displaySpread < totalSpreads - 1
// // //                   ? { translateY: -3, boxShadow: "0 6px 20px rgba(34, 197, 94, 0.4)" }
// // //                   : {}
// // //               }
// // //               whileTap={
// // //                 displaySpread < totalSpreads - 1
// // //                   ? { translateY: 0, boxShadow: "0 3px 12px rgba(34, 197, 94, 0.3)" }
// // //                   : {}
// // //               }
// // //             >
// // //               →
// // //             </motion.button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <AnimatePresence>
// // //         {selectedProduct && selectedProduct.imageIndex === undefined && (
// // //           <ProductGallery productId={selectedProduct.id} closeGallery={closeGallery} colors={colors} />
// // //         )}
// // //         {selectedProduct && selectedProduct.imageIndex !== undefined && (
// // //           <ZoomedImageViewer
// // //             productId={selectedProduct.id}
// // //             imageIndex={selectedProduct.imageIndex}
// // //             closeViewer={() => setSelectedProduct(null)}
// // //           />
// // //         )}
// // //       </AnimatePresence>
// // //     </>
// // //   )
// // // }

// // // export default FlipBook
// "use client"

// import { useState, useRef, useCallback, useEffect } from "react"
// import { motion, AnimatePresence, useMotionValue } from "framer-motion"
// import Image from "next/image"
// import { Droplet, Leaf, X, Plus, Minus, Maximize, Instagram, Facebook } from "lucide-react"
// import { FaWhatsapp } from "react-icons/fa"

// const FlipBook = () => {
//   const [currentSpread, setCurrentSpread] = useState(0)
//   const [displaySpread, setDisplaySpread] = useState(0)
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [isFlipping, setIsFlipping] = useState(false)
//   const [flipDirection, setFlipDirection] = useState("")
//   const [sidebarWidth, setSidebarWidth] = useState(300)
//   const [isResizing, setIsResizing] = useState(false)
//   const flipBookRef = useRef(null)
//   const [windowWidth, setWindowWidth] = useState(1024)
//   const [isMobile, setIsMobile] = useState(false)

//   // Product data moved back into FlipBook.tsx
//   const productData = {
//     "200ml": {
//       title: "200ml Water Bottles",
//       images: [
//         "/200ml/img1.png",
//         "/200ml/img2.png",
//         "/200ml/img3.png",
//         "/200ml/img4.png",
//         "/200ml/img5.png",
//         "/200ml/img6.png",
//         "/200ml/img7.png",
//         "/200ml/img8.png",
//         "/200ml/img9.png",
//         "/200ml/img10.png",
//         "/200ml/img11.png",
//         "/200ml/img12.png",
//         "/200ml/img13.png",
//         "/200ml/img14.png",
//         "/200ml/img15.png",
//         "/200ml/img16.png",
//         "/200ml/img17.png",
//         "/200ml/img18.png",
//         "/200ml/img19.png",
//         "/200ml/img20.png",
//         "/200ml/img21.png",
//         "/200ml/img22.png",
//         "/200ml/img23.png",
//         "/200ml/img24.png",
//         "/200ml/img25.png",
//         "/200ml/img26.png",
//         "/200ml/img27.png",
//         "/200ml/img28.png",
//         "/200ml/img29.png",
//         "/200ml/img30.png",
//         "/200ml/img31.png",
//         "/200ml/img32.png",
//         "/200ml/img33.png",
//         "/200ml/img34.png",
//         "/200ml/img35.png",
//         "/200ml/img36.png",
//         "/200ml/img37.png",
//         "/200ml/img38.png",
//       ],
//     },
//     "250ml": {
//       title: "250ml Water Bottles",
//       images: [
//         "/250ml/img1.png",
//         "/250ml/img2.png",
//         "/250ml/img3.png",
//         "/250ml/img4.png",
//         "/250ml/img5.png",
//         "/250ml/img6.png",
//       ],
//     },
//     "300ml": {
//       title: "300ml Water Bottles",
//       images: [
//         "/300ml/img1.png",
//         "/300ml/img2.png",
//         "/300ml/img3.png",
//         "/300ml/img4.png",
//         "/300ml/img5.png",
//         "/300ml/img6.png",
//         "/300ml/img7.png",
//         "/300ml/img8.png",
//       ],
//     },
//     "500ml": {
//       title: "500ml Water Bottles",
//       images: [
//         "/500ml/img1.png",
//         "/500ml/img2.png",
//         "/500ml/img3.png",
//         "/500ml/img4.png",
//         "/500ml/img5.png",
//         "/500ml/img6.png",
//         "/500ml/img7.png",
//         "/500ml/img8.png",
//         "/500ml/img9.png",
//         "/500ml/img10.png",
//         "/500ml/img11.png",
//         "/500ml/img12.png",
//         "/500ml/img13.png",
//         "/500ml/img14.png",
//         "/500ml/img15.png",
//         "/500ml/img16.png",
//       ],
//     },
//     "750ml": {
//       title: "750ml Water Bottles",
//       images: [
//         "/img1.png",
//         "/img2.png",
//         "/img3.png",
//         "/img4.png",
//         "/img5.png",
//         "/img6.png",
//         "/img7.png",
//         "/img8.png",
//         "/img9.png",
//         "/img10.png",
//         "/img11.png",
//         "/img12.png",
//         "/img13.png",
//         "/img14.png",
//         "/img15.png",
//         "/img16.png",
//         "/img17.png",
//         "/img18.png",
//         "/img19.png",
//         "/img20.png",
//         "/img21.png",
//         "/img22.png",
//         "/img23.png",
//       ],
//     },
//     "1liter": {
//       title: "1 Liter Water Bottles",
//       images: [
//         "/1lit/img1.png",
//         "/1lit/img2.png",
//         "/1lit/img3.png",
//         "/1lit/img4.png",
//         "/1lit/img5.png",
//         "/1lit/img6.png",
//         "/1lit/img7.png",
//         "/1lit/img8.png",
//         "/1lit/img9.png",
//         "/1lit/img10.png",
//         "/1lit/img11.png",
//         "/1lit/img12.png",
//       ],
//     },
//     "bio-200ml": {
//       title: "Biodegradable 200ml",
//       images: ["/200ml bio.jpeg"],
//     },
//     "bio-250ml": {
//       title: "Biodegradable 250ml",
//       images: ["/250ml bio.jpeg"],
//     },
//     "bio-300ml": {
//       title: "Biodegradable 300ml",
//       images: ["/300ml bio.jpeg"],
//     },
//     "bio-500ml": {
//       title: "Biodegradable 500ml",
//       images: ["/500ml bio.jpeg"],
//     },
//     "bio-750ml": {
//       title: "Biodegradable 750ml",
//       images: ["/750ml bio.jpeg"],
//     },
//   }

//   // Updated color palette to match VedicJal website (green theme)
//   const colors = {
//     primary: "#16a34a", // Green-600
//     primaryLight: "#bbf7d0", // Green-200
//     primaryDark: "#15803d", // Green-700
//     secondary: "#6b7280", // Gray-500
//     accent: "#059669", // Emerald-600
//     accentLight: "#a7f3d0", // Emerald-2200
//     textDark: "#1f2937", // Gray-800
//     textMedium: "#4b5563", // Gray-600
//     textLight: "#9ca3af", // Gray-400
//     backgroundLight: "#f0fdf4", // Green-50
//     backgroundWhite: "#ffffff",
//     borderLight: "#d1fae5", // Green-100
//     shadowLight: "rgba(34, 197, 94, 0.1)",
//     shadowMedium: "rgba(34, 197, 94, 0.2)",
//     shadowStrong: "rgba(34, 197, 94, 0.3)",
//     brandGreen: "#16a34a",
//     brandDarkGreen: "#15803d",
//     brandLightGreen: "#22c55e",
//   }

//   const openProductGallery = (productId) => {
//     setSelectedProduct({ id: productId, imageIndex: undefined })
//   }

//   const closeGallery = () => {
//     setSelectedProduct(null)
//   }

//   const allPages = [
//     // Page 0 - Cover Page
//     {
//       id: "cover",
//       type: "cover",
//       content: (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="w-full h-full p-0 relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl shadow-xl flex flex-col justify-center items-center select-none"
//         >
//           {/* Decorative Top & Bottom Strips */}
//           <motion.div
//             className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-br from-green-500/20 to-green-400/15 -skew-y-3 origin-top-left"
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           />
//           <motion.div
//             className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-tl from-green-400/15 to-green-500/20 skew-y-3 origin-bottom-right"
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           />
//           {/* Floating Particles */}
//           {[
//             { top: 20, left: 10 },
//             { top: 32, left: 25 },
//             { top: 44, left: 40 },
//             { top: 56, left: 55 },
//             { top: 68, left: 70 },
//             { top: 80, left: 85 },
//           ].map((p, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1.5 h-1.5 bg-green-400/30 rounded-full"
//               style={{ top: `${p.top}%`, left: `${p.left}%` }}
//               animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
//               transition={{ duration: 2 + i * 0.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
//             />
//           ))}
//           {/* Main Content */}
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="relative z-10 p-4 text-center max-w-md w-[92%]"
//           >
//             {/* Logo & Title */}
//             <div className="mb-3 flex flex-col items-center">
//               <motion.div
//                 initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
//                 animate={{ scale: 1, opacity: 1, rotate: 0 }}
//                 transition={{ delay: 0.7, duration: 0.8, ease: "backOut" }}
//                 whileHover={{ scale: 1.05, rotate: 2 }}
//               >
//                 <Image
//                   src="/Vedic Jal.png"
//                   alt="VedicJal Logo"
//                   width={100}
//                   height={100}
//                   className="rounded-xl shadow-xl border-4 border-white bg-white mb-1"
//                   onContextMenu={(e) => e.preventDefault()}
//                   draggable="false"
//                 />
//               </motion.div>
//               <motion.h1
//                 className="text-3xl md:text-4xl font-bold text-green-800 font-serif mb-1"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.9, duration: 0.6 }}
//               >
//                 VedicJal
//               </motion.h1>
//               <motion.p
//                 className="text-sm md:text-base text-green-600 font-medium"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.1, duration: 0.6 }}
//               >
//                 Pure Water, Pure Life
//               </motion.p>
//             </div>
//             {/* Welcome Box */}
//             <motion.div
//               initial={{ y: 30, opacity: 0, scale: 0.95 }}
//               animate={{ y: 0, opacity: 1, scale: 1 }}
//               transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
//               className="bg-white/80 backdrop-blur-md rounded-xl p-3 mt-3 mb-3 shadow-md border border-green-200"
//             >
//               <h2 className="text-lg md:text-xl font-semibold text-green-800 font-serif m-0">
//                 Welcome to VedicJal Online Brochure
//               </h2>
//               <p className="text-green-600 mt-1 text-sm">Discover our customized range of premium water bottles</p>
//             </motion.div>
//             {/* Divider */}
//             <motion.div
//               className="flex items-center justify-center my-3"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ delay: 1.5, duration: 0.8 }}
//             >
//               <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-green-600/50" />
//               <motion.div
//                 className="mx-2 w-2.5 h-2.5 bg-green-500 rounded-full"
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//               />
//               <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-green-600/50" />
//             </motion.div>
//             {/* Footer Quote */}
//             <motion.p
//               className="text-xs md:text-sm text-green-700 italic mt-2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.7, duration: 0.6 }}
//             >
//               "Bringing purity to your hands"
//             </motion.p>
//           </motion.div>
//         </motion.div>
//       ),
//     },
//     // Page 1 - Full-fit Image Left
//     {
//       id: "image-left",
//       type: "fullimage",
//       content: (
//         <motion.div
//           className="w-full aspect-[3/4] relative overflow-hidden select-none"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <Image
//             src="/page1.jpg"
//             alt="VedicJal Workshop - Page 1"
//             fill
//             style={{ objectFit: "cover" }}
//             onContextMenu={(e) => e.preventDefault()}
//             draggable="false"
//           />
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           />
//         </motion.div>
//       ),
//     },
//     // Page 2 - Full-fit Image Right
//     {
//       id: "image-right",
//       type: "fullimage",
//       content: (
//         <motion.div
//           className="w-full aspect-[3/4] relative overflow-hidden select-none"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <Image
//             src="/page2.jpg"
//             alt="VedicJal Workshop - Page 2"
//             fill
//             style={{ objectFit: "cover" }}
//             onContextMenu={(e) => e.preventDefault()}
//             draggable="false"
//           />
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           />
//         </motion.div>
//       ),
//     },
//     // Page 3 - Main Index (ml bottles)
//     {
//       id: "main-index",
//       type: "index-main",
//       content: (
//         <div className="w-full h-full p-3 md:p-6 box-border bg-gradient-to-br from-white to-green-50 font-serif flex flex-col overflow-y-auto select-none scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-transparent">
//           {/* Title Section */}
//           <motion.div
//             initial={{ y: -30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-center mb-4"
//           >
//             <h1 className="text-xl md:text-3xl text-green-800 font-bold m-0">PRODUCT INDEX</h1>
//             <motion.div
//               className="w-16 h-1 bg-green-600 mx-auto my-2 rounded-full"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//             />
//             <p className="text-xs md:text-sm text-green-700 font-medium m-0">
//               Click on any item to view the product gallery
//             </p>
//           </motion.div>
//           {/* Product List */}
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="flex-1 w-full max-w-[92vw] mx-auto"
//           >
//             <div className="grid grid-cols-1 gap-2">
//               {[
//                 { number: "1.", name: "200ml", id: "200ml" },
//                 { number: "2.", name: "250ml", id: "250ml" },
//                 { number: "3.", name: "300ml", id: "300ml" },
//                 { number: "4.", name: "500ml", id: "500ml" },
//                 { number: "5.", name: "750ml", id: "750ml" },
//                 { number: "6.", name: "1 Liter", id: "1liter" },
//               ].map((item, index) => (
//                 <motion.div
//                   key={item.id}
//                   className="flex items-center p-2 md:p-3 bg-white rounded-md cursor-pointer text-sm md:text-base text-green-800 border border-transparent shadow hover:shadow-md transition-all duration-300"
//                   onClick={() => openProductGallery(item.id)}
//                   initial={{ x: -50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
//                   whileHover={{
//                     background: "#ecfdf5",
//                     borderColor: "#22c55e",
//                     x: 6,
//                     scale: 1.02,
//                   }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
//                     <Droplet className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-600" />
//                   </motion.div>
//                   <span className="font-bold mr-3 min-w-[32px]">{item.number}</span>
//                   <span className="flex-1">{item.name}</span>
//                   <motion.span
//                     className="ml-auto text-green-600 text-base font-bold"
//                     whileHover={{ x: 4 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     →
//                   </motion.span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       ),
//     },
//     // Page 4 - Biodegradable Index
//     {
//       id: "bio-index",
//       type: "index-bio",
//       content: (
//         <div className="w-full h-full p-3 md:p-6 box-border bg-gradient-to-br from-white to-emerald-50 font-serif flex flex-col overflow-y-auto select-none scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-transparent">
//           {/* Header */}
//           <motion.div
//             initial={{ y: -30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-center mb-4"
//           >
//             <h1 className="text-xl md:text-3xl text-emerald-700 font-bold m-0">BIODEGRADABLE COLLECTION</h1>
//             <motion.div
//               className="w-16 h-1 bg-emerald-600 mx-auto my-2 rounded-full"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//             />
//             <p className="text-xs md:text-sm text-emerald-700 font-medium m-0">
//               Eco-friendly options for a sustainable future
//             </p>
//           </motion.div>
//           {/* Biodegradable Items List */}
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="flex-1 w-full max-w-[92vw] mx-auto"
//           >
//             <div className="grid grid-cols-1 gap-2">
//               {[
//                 { number: "7.1", name: "Biodegradable 200ml", id: "bio-200ml" },
//                 { number: "7.2", name: "Biodegradable 250ml", id: "bio-250ml" },
//                 { number: "7.3", name: "Biodegradable 300ml", id: "bio-300ml" },
//                 { number: "7.4", name: "Biodegradable 500ml", id: "bio-500ml" },
//                 { number: "7.5", name: "Biodegradable 750ml", id: "bio-750ml" },
//               ].map((item, index) => (
//                 <motion.div
//                   key={item.id}
//                   className="flex items-center p-2 md:p-3 bg-white rounded-md cursor-pointer text-sm md:text-base text-emerald-800 border border-transparent shadow hover:shadow-md transition-all duration-300"
//                   onClick={() => openProductGallery(item.id)}
//                   initial={{ x: 50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
//                   whileHover={{
//                     background: "#d1fae5",
//                     borderColor: "#10b981",
//                     x: 6,
//                     scale: 1.02,
//                   }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
//                     <Leaf className="w-4 h-4 md:w-5 md:h-5 mr-2 text-emerald-600" />
//                   </motion.div>
//                   <span className="font-bold mr-3 min-w-[45px]">{item.number}</span>
//                   <span className="flex-1">{item.name}</span>
//                   <motion.span
//                     className="ml-auto text-emerald-600 text-base font-bold"
//                     whileHover={{ x: 4 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     →
//                   </motion.span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       ),
//     },
//     // Page 5 - THANK YOU PAGE
//     {
//       id: "thankyou",
//       type: "thankyou",
//       content: (
//         <div className="w-full h-full p-3 md:p-5 box-border bg-gradient-to-br from-white to-green-50 flex items-center justify-center relative overflow-hidden select-none">
//           {/* Floating Particles */}
//           {[
//             { top: 15, left: 20, delay: 0 },
//             { top: 35, left: 80, delay: 0.5 },
//             { top: 60, left: 15, delay: 1.0 },
//             { top: 25, left: 70, delay: 1.5 },
//             { top: 80, left: 85, delay: 2.0 },
//             { top: 45, left: 25, delay: 2.5 },
//             { top: 70, left: 60, delay: 3.0 },
//             { top: 90, left: 40, delay: 3.5 },
//           ].map((p, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-green-400/40 rounded-full"
//               style={{ top: `${p.top}%`, left: `${p.left}%` }}
//               animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
//               transition={{
//                 duration: 3 + i * 0.3,
//                 repeat: Number.POSITIVE_INFINITY,
//                 delay: p.delay,
//               }}
//             />
//           ))}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "backOut" }}
//             className="text-center text-green-800 z-10 w-full max-w-md"
//           >
//             {/* Logo */}
//             <motion.div
//               initial={{ y: -30, opacity: 0, rotate: -10 }}
//               animate={{ y: 0, opacity: 1, rotate: 0 }}
//               transition={{ delay: 0.3, duration: 0.8, ease: "backOut" }}
//               className="mb-3 flex flex-col items-center"
//             >
//               <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
//                 <Image
//                   src="/Vedic Jal.png"
//                   alt="VedicJal Logo"
//                   width={70}
//                   height={70}
//                   className="rounded-lg shadow-md border-2 border-white"
//                   onContextMenu={(e) => e.preventDefault()}
//                   draggable="false"
//                 />
//               </motion.div>
//             </motion.div>
//             {/* Heading */}
//             <motion.h1
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 leading-tight"
//             >
//               Thank You
//             </motion.h1>
//             <motion.div
//               className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-3 rounded-full"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ delay: 0.7, duration: 0.8 }}
//             />
//             {/* Subtext */}
//             <motion.p
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.9, duration: 0.5 }}
//               className="text-base md:text-lg font-semibold mb-2"
//             >
//               For choosing VedicJal
//             </motion.p>
//             <motion.p
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 1.1, duration: 0.5 }}
//               className="text-sm md:text-base text-green-700 leading-snug mb-4"
//             >
//               Your trust in our premium handcrafted water bottles means the world to us.
//             </motion.p>
//             {/* Quote */}
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 1.3, duration: 0.5 }}
//               className="p-3 px-4 border border-green-300 rounded-lg bg-green-100/50 inline-block text-green-700 font-medium italic text-sm md:text-base"
//             >
//               "Pure Water, Pure Life"
//             </motion.div>
//           </motion.div>
//         </div>
//       ),
//     },
//     // Page 6 - Contact Us Page
//     {
//       id: "contact",
//       type: "contact",
//       content: (
//         <div className="w-full h-full p-4 md:p-6 box-border bg-gradient-to-br from-white to-green-50 flex flex-col justify-center items-center overflow-auto select-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-green-800 w-full max-w-md text-center space-y-3"
//           >
//             {/* Title */}
//             <motion.h1
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               className="text-xl sm:text-2xl font-bold font-serif"
//             >
//               Contact Us
//             </motion.h1>
//             {/* Divider */}
//             <motion.div
//               className="w-10 sm:w-12 h-1 bg-green-600 mx-auto rounded-full"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             />
//             {/* Details */}
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.6 }}
//               className="bg-white/90 p-4 rounded-xl shadow border border-green-200 text-xs sm:text-sm text-green-700 leading-relaxed space-y-1"
//             >
//               <p className="font-bold text-green-800 text-sm">Vedicjal</p>
//               <p>A brand owned by Anugya FMCG Industries</p>
//               <p>E-153 Forest Lane, Near Country Club</p>
//               <p>Sainik Farms, New Delhi – 110068</p>
//               <p>
//                 📞 <span className="text-green-800 font-medium">+91- 9810152783/9818088458</span>
//               </p>
//               <p>
//                 📧{" "}
//                 <a href="mailto:info@vedicjal.com" className="underline text-green-800 break-all">
//                   info@vedicjal.com
//                 </a>
//               </p>
//               <p>
//                 🌐{" "}
//                 <a
//                   href="https://vedicjal.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="underline text-green-800 break-all"
//                 >
//                   www.vedicjal.com
//                 </a>
//               </p>
//               {/* Social Media */}
//               <div className="flex justify-center gap-4 pt-2 text-green-600">
//                 <a
//                   href="https://www.instagram.com/vedic_jal?utm_source=qr&igsh=MXI1OG90MjFyM2E0OA=="
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Instagram"
//                 >
//                   <Instagram className="w-5 h-5 hover:text-green-800" />
//                 </a>
//                 <a
//                   href="https://www.facebook.com/share/19N6P87t5x/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Facebook"
//                 >
//                   <Facebook className="w-5 h-5 hover:text-green-800" />
//                 </a>
//                 <a
//                   href="https://wa.me/message/HMB5Q7MZXTP3P1"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="WhatsApp"
//                 >
//                   <FaWhatsapp className="w-5 h-5 hover:text-green-800" />
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       ),
//     },
//   ]

//   // Mobile-specific page order for single-page view
//   const mobilePages = [
//     0, // Cover
//     1, // Left image
//     2, // Right image
//     3, // Main index
//     4, // Bio index
//     5, // Thank you
//     6, // Contact
//   ]

//   // Desktop spreads: [leftPageIndex, rightPageIndex]
//   const spreads = [
//     [null, 0], // Spread 0: Cover (Right only)
//     [1, 2], // Spread 1: Image Left, Image Right
//     [3, 4], // Spread 2: Main Index, Biodegradable Index
//     [5, 6], // Spread 3: Thank You, Contact
//   ]

//   const totalSpreads = isMobile ? mobilePages.length : spreads.length

//   const getPageContent = (pageIndex) => {
//     if (pageIndex === null || typeof allPages[pageIndex] === "undefined") {
//       return null
//     }
//     return allPages[pageIndex].content
//   }

//   // Mobile: get current page content
//   const getCurrentMobilePageContent = () => {
//     if (!isMobile) return null
//     const pageIndex = mobilePages[displaySpread]
//     return getPageContent(pageIndex)
//   }

//   // Desktop: get left/right page content
//   const getCurrentLeftPageContent = () => {
//     if (isMobile) return null
//     const pageIndex = spreads[displaySpread][0]
//     return getPageContent(pageIndex)
//   }

//   const getCurrentRightPageContent = () => {
//     if (isMobile) return null
//     const pageIndex = spreads[displaySpread][1]
//     return getPageContent(pageIndex)
//   }

//   const getFlippingPageFrontContent = () => {
//     if (isMobile) {
//       const pageIndex = mobilePages[currentSpread]
//       return getPageContent(pageIndex)
//     } else {
//       if (flipDirection === "next") {
//         return getPageContent(spreads[currentSpread][1])
//       } else if (flipDirection === "prev") {
//         return getPageContent(spreads[currentSpread][0])
//       }
//     }
//     return null
//   }

//   const getFlippingPageBackContent = () => {
//     if (isMobile) {
//       const nextPageIdx = flipDirection === "next" ? mobilePages[currentSpread + 1] : mobilePages[currentSpread - 1]
//       return getPageContent(nextPageIdx)
//     } else {
//       if (flipDirection === "next") {
//         const nextPageIdx = spreads[currentSpread + 1]?.[1]
//         return getPageContent(nextPageIdx)
//       } else if (flipDirection === "prev") {
//         const prevPageIdx = spreads[currentSpread - 1]?.[0]
//         return getPageContent(prevPageIdx)
//       }
//     }
//     return null
//   }

//   const goToSpread = (spreadIndex) => {
//     if (isFlipping || spreadIndex < 0 || spreadIndex >= totalSpreads) return
//     const direction = spreadIndex > currentSpread ? "next" : "prev"
//     setFlipDirection(direction)
//     setIsFlipping(true)
//     setCurrentSpread(spreadIndex)
//     setTimeout(() => {
//       setDisplaySpread(spreadIndex)
//       setIsFlipping(false)
//       setFlipDirection("")
//     }, 800) // Longer animation for mobile
//   }

//   const nextSpread = () => {
//     if (currentSpread < totalSpreads - 1) {
//       goToSpread(currentSpread + 1)
//     }
//   }

//   const prevSpread = () => {
//     if (currentSpread > 0) {
//       goToSpread(currentSpread - 1)
//     }
//   }

//   const isClosedBook = displaySpread === 0 && !isMobile

//   // Sidebar resize handlers (desktop only)
//   const handleMouseDown = useCallback(
//     (e) => {
//       if (isMobile) return
//       setIsResizing(true)
//       e.preventDefault()
//     },
//     [isMobile],
//   )

//   const handleMouseMove = useCallback(
//     (e) => {
//       if (!isResizing || isMobile) return
//       const newWidth = e.clientX
//       if (newWidth >= 250 && newWidth <= 400) {
//         setSidebarWidth(newWidth)
//       }
//     },
//     [isResizing, isMobile],
//   )

//   const handleMouseUp = useCallback(() => {
//     setIsResizing(false)
//   }, [])

//   useEffect(() => {
//     if (isResizing) {
//       document.addEventListener("mousemove", handleMouseMove)
//       document.addEventListener("mouseup", handleMouseUp)
//       return () => {
//         document.removeEventListener("mousemove", handleMouseMove)
//         document.removeEventListener("mouseup", handleMouseUp)
//       }
//     }
//   }, [isResizing, handleMouseMove, handleMouseUp])

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth
//       setWindowWidth(width)
//       setIsMobile(width <= 768)
//       if (width <= 768) {
//         setSidebarWidth(width)
//       }
//     }
//     if (typeof window !== "undefined") {
//       const width = window.innerWidth
//       setWindowWidth(width)
//       setIsMobile(width <= 768)
//       window.addEventListener("resize", handleResize)
//       return () => {
//         window.removeEventListener("resize", handleResize)
//       }
//     }
//   }, [])

//   // Enhanced Product Gallery Component with Amazon-style cards
//   const ProductGallery = ({ productId, closeGallery, colors }) => {
//     const product = productData[productId]
//     if (!product) return null

//     const galleryVariants = {
//       hidden: { opacity: 0, scale: 0.95 },
//       visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
//       exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } },
//     }

//     const itemVariants = {
//       hidden: { opacity: 0, y: 30 },
//       visible: { opacity: 1, y: 0 },
//     }

//     return (
//       <motion.div
//         variants={galleryVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed inset-0 bg-black/95 z-[1000] flex flex-col select-none"
//       >
//         {/* Header */}
//         <div className="p-4 md:p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-md flex justify-between items-center border-b border-green-500/20">
//           <div className="flex items-center gap-3">
//             <Droplet className="w-6 h-6 text-green-400" />
//             <h2 className="text-white text-xl md:text-2xl font-semibold m-0">{product.title}</h2>
//           </div>
//           <motion.button
//             className="bg-white/20 border-none text-white text-2xl w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500/30"
//             onClick={closeGallery}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <X className="w-6 h-6" />
//           </motion.button>
//         </div>
//         {/* Gallery Grid */}
//         <motion.div
//           className="flex-1 p-4 md:p-6 overflow-y-auto"
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.08,
//               },
//             },
//           }}
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
//             {product.images.map((image, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-gradient-to-br from-white to-green-50 rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out cursor-pointer border border-gray-100 hover:border-green-400 hover:shadow-xl group"
//                 onClick={() => setSelectedProduct({ id: productId, imageIndex: index })}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {/* Image Container */}
//                 <div className="relative aspect-[4/3] overflow-hidden bg-green-50">
//                   <Image
//                     src={image || "/placeholder.svg?height=300&width=400"}
//                     alt={`${product.title} ${index + 1}`}
//                     fill
//                     className="object-contain transition-transform duration-300 group-hover:scale-105"
//                     onContextMenu={(e) => e.preventDefault()}
//                     draggable="false"
//                   />
//                   {/* Overlay on hover */}
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
//                     <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
//                       Click to zoom
//                     </div>
//                   </div>
//                 </div>
//                 {/* Product Info */}
//                 <div className="p-4">
//                   <h3 className="text-gray-800 font-semibold text-base mb-2 line-clamp-2">
//                     {product.title} - Model {index + 1}
//                   </h3>
//                   <div className="flex items-center justify-between">
//                     {/* <span className="text-green-600 font-bold text-lg">Premium Quality</span> */}
//                     <div className="flex items-center gap-1 text-yellow-500">
//                       {[...Array(5)].map((_, i) => (
//                         <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
//                           <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                   <p className="text-gray-600 text-sm mt-2">High-quality water bottle with premium finish</p>
//                   {/* Action Button */}
//                   <motion.button
//                     className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     View Details
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//         {/* Footer */}
//         <div className="p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-md border-t border-green-500/20">
//           <div className="text-center text-white/80 text-sm">
//             <p>Showing {product.images.length} models • Click any image to view in full size</p>
//           </div>
//         </div>
//       </motion.div>
//     )
//   }

//   // Zoomed Image Viewer Component
//   const ZoomedImageViewer = ({ productId, imageIndex, closeViewer }) => {
//     const product = productData[productId]
//     const imageUrl = product?.images[imageIndex]
//     const [zoom, setZoom] = useState(1)
//     const x = useMotionValue(0)
//     const y = useMotionValue(0)

//     const handleWheel = useCallback(
//       (e) => {
//         e.preventDefault()
//         const scaleAmount = 0.1
//         const newZoom = e.deltaY < 0 ? Math.min(3, zoom + scaleAmount) : Math.max(0.5, zoom - scaleAmount)
//         setZoom(newZoom)
//       },
//       [zoom],
//     )

//     const handlePan = useCallback(
//       (event, info) => {
//         x.set(x.get() + info.delta.x)
//         y.set(y.get() + info.delta.y)
//       },
//       [x, y],
//     )

//     if (!imageUrl) return null

//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black/95 z-[1001] flex items-center justify-center select-none"
//       >
//         <motion.button
//           className="absolute top-4 right-4 bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-red-500/30"
//           onClick={closeViewer}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <X className="w-6 h-6" />
//         </motion.button>

//         <div className="relative w-[90vw] h-[90vh] overflow-hidden flex items-center justify-center">
//           <motion.div
//             className="relative w-full h-full cursor-grab" // This div will be the actual element that scales and pans
//             style={{
//               x: x,
//               y: y,
//               scale: zoom,
//             }}
//             onWheel={handleWheel}
//             onPan={handlePan}
//             onContextMenu={(e) => e.preventDefault()}
//             draggable="false"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.4 }}
//           >
//             <Image
//               src={imageUrl || "/placeholder.svg?height=800&width=600"}
//               alt={product.title}
//               fill
//               style={{ objectFit: "contain" }} // Image initially fits the motion.div
//               onContextMenu={(e) => e.preventDefault()}
//               draggable="false"
//             />
//           </motion.div>
//         </div>

//         {/* Added z-[1002] to ensure buttons are clickable */}
//         <div className="absolute bottom-4 flex gap-2 bg-white/20 p-3 rounded-full backdrop-blur-md z-[1002]">
//           <motion.button
//             className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40"
//             onClick={() => setZoom((prev) => Math.min(3, prev + 0.1))}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <Plus className="w-5 h-5" />
//           </motion.button>
//           <motion.button
//             className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40"
//             onClick={() => setZoom((prev) => Math.max(0.5, prev - 0.1))}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <Minus className="w-5 h-5" />
//           </motion.button>
//           <motion.button
//             className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40"
//             onClick={() => {
//               setZoom(1)
//               x.set(0)
//               y.set(0)
//             }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <Maximize className="w-5 h-5" />
//           </motion.button>
//         </div>
//       </motion.div>
//     )
//   }

//   // Component for rendering thumbnails in the sidebar
//   const SpreadThumbnail = ({ spreadIndex, isActive, onClick }) => {
//     if (isMobile) {
//       // Mobile: single page thumbnails
//       const pageIndex = mobilePages[spreadIndex]
//       const pageContent = getPageContent(pageIndex)
//       const pageLabels = ["Cover", "Image 1", "Image 2", "Index", "Bio", "Thanks", "Contact"]
//       return (
//         <motion.div
//           className="thumbnail flex-shrink-0 relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
//           style={{
//             marginRight: "0.5rem",
//             border: isActive ? `3px solid ${colors.primary}` : "3px solid transparent",
//             background: colors.backgroundWhite,
//             boxShadow: isActive ? `0 6px 25px ${colors.shadowMedium}` : `0 3px 12px ${colors.shadowLight}`,
//             height: "100px",
//             width: "80px",
//             minWidth: "80px",
//           }}
//           onClick={onClick}
//           whileHover={{
//             scale: isActive ? 1 : 1.05,
//             borderColor: colors.primary,
//             boxShadow: `0 6px 20px ${colors.shadowMedium}`,
//           }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <div className="w-full h-full overflow-hidden relative bg-green-50 flex items-center justify-center">
//             <div className="scale-[0.06] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
//               {pageContent}
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 bg-green-800 text-white p-1 text-xs font-medium text-center h-5 flex items-center justify-center">
//             {pageLabels[spreadIndex]}
//           </div>
//         </motion.div>
//       )
//     } else {
//       // Desktop: spread thumbnails
//       const [leftPageIndex, rightPageIndex] = spreads[spreadIndex]
//       const leftPageContent = getPageContent(leftPageIndex)
//       const rightPageContent = getPageContent(rightPageIndex)
//       const spreadLabels = ["Cover", "Intro", "Index", "Thank You"]
//       return (
//         <motion.div
//           className="thumbnail flex-shrink-0 relative overflow-hidden rounded-md cursor-pointer transition-all duration-300 ease-in-out"
//           style={{
//             marginBottom: "0.5rem",
//             border: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
//             background: colors.backgroundWhite,
//             boxShadow: isActive ? `0 4px 20px ${colors.shadowMedium}` : `0 2px 8px ${colors.shadowLight}`,
//             height: "120px",
//             width: "auto",
//             minWidth: leftPageContent ? "160px" : "80px",
//           }}
//           onClick={onClick}
//           whileHover={{
//             scale: isActive ? 1 : 1.02,
//             borderColor: colors.primary,
//             boxShadow: `0 4px 16px ${colors.shadowMedium}`,
//           }}
//         >
//           {leftPageContent && (
//             <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden relative bg-green-50 flex items-center justify-center">
//               <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
//                 {leftPageContent}
//               </div>
//             </div>
//           )}
//           <div
//             className={`${leftPageContent ? "absolute right-0 top-0 w-1/2" : "w-full"} h-full overflow-hidden relative bg-green-50 flex items-center justify-center`}
//           >
//             <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
//               {rightPageContent}
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 bg-green-800 text-white p-1 px-2 text-xs font-medium text-center h-5 flex items-center justify-center">
//             {spreadLabels[spreadIndex]}
//           </div>
//         </motion.div>
//       )
//     }
//   }

//   return (
//     <>
//       <div className="flex h-screen bg-gradient-to-br from-green-50 to-green-100 font-sans overflow-hidden flex-col md:flex-row select-none">
//         {/* Resizable Sidebar */}
//         <div
//           className="relative flex flex-shrink-0 bg-white/95 backdrop-blur-xl border-r border-green-200 shadow-lg min-w-[250px] max-w-[400px] md:h-full md:flex-col w-full h-[120px] overflow-x-auto overflow-y-hidden md:overflow-x-hidden md:overflow-y-auto"
//           style={{
//             width: isMobile ? "100%" : `${sidebarWidth}px`,
//             height: isMobile ? "120px" : "100%",
//           }}
//         >
//           {/* Header - only shown on mobile */}
//           {isMobile && (
//             <div className="p-4 bg-white flex items-center sticky left-0 z-10 border-b border-green-200 min-w-max">
//               <h3 className="m-0 text-green-800 text-base font-semibold whitespace-nowrap">Page Navigation</h3>
//             </div>
//           )}
//           {/* Thumbnails */}
//           <div
//             className={`flex-1 w-full px-[3vw] flex ${isMobile ? "flex-row items-center overflow-x-auto" : "flex-col justify-center"}`}
//           >
//             {Array.from({ length: totalSpreads }).map((_, index) => (
//               <SpreadThumbnail
//                 key={index}
//                 spreadIndex={index}
//                 isActive={index === displaySpread}
//                 onClick={() => goToSpread(index)}
//               />
//             ))}
//           </div>
//           {/* Resize Handle - only on desktop */}
//           {!isMobile && (
//             <div
//               className="absolute top-0 right-0 w-1 cursor-col-resize z-10 transition-all duration-300 ease-in-out hover:bg-green-500 hover:opacity-50"
//               style={{ height: "100%" }}
//               onMouseDown={handleMouseDown}
//             />
//           )}
//         </div>
//         {/* Main Flipbook */}
//         <div className="flipbook-main flex-1 flex flex-col items-center justify-center p-2 md:p-8 relative overflow-hidden h-[calc(100vh-120px)] md:h-full">
//           <div
//             ref={flipBookRef}
//             className="relative mb-4"
//             style={{
//               width: isMobile ? "95%" : "min(90vw, 95vh * 1.2)",
//               height: isMobile ? "70%" : "min(75vh, 90vw / 1.2)",
//               maxWidth: "1400px",
//               maxHeight: "900px",
//               perspective: "1500px",
//             }}
//           >
//             {/* Book spine - only show when not closed book and not mobile */}
//             {!isClosedBook && !isMobile && (
//               <div className="absolute left-1/2 top-0 w-1.5 h-full bg-gradient-to-b from-green-600 to-green-800 -translate-x-1/2 z-10 rounded-md shadow-md" />
//             )}
//             {/* Mobile: Single page view */}
//             {isMobile && (
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={displaySpread}
//                   initial={{ opacity: 0, x: flipDirection === "next" ? 100 : -100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: flipDirection === "next" ? -100 : 100 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                   className="absolute inset-0 bg-white border-2 border-green-200 shadow-2xl overflow-hidden rounded-xl"
//                 >
//                   {getCurrentMobilePageContent()}
//                 </motion.div>
//               </AnimatePresence>
//             )}
//             {/* Desktop: Dual page view */}
//             {!isMobile && (
//               <>
//                 {/* Left Page - only show when book is open */}
//                 {!isClosedBook && getCurrentLeftPageContent() && (
//                   <div className="absolute w-1/2 h-full bg-white border border-green-200 shadow-xl overflow-hidden left-0 rounded-l-xl">
//                     {getCurrentLeftPageContent()}
//                   </div>
//                 )}
//                 {/* Right Page */}
//                 <div
//                   className="absolute h-full bg-white border border-green-200 shadow-xl overflow-hidden right-0 rounded-r-xl transition-all duration-300 ease-in-out"
//                   style={{
//                     width: isClosedBook ? "50%" : "50%",
//                     left: isClosedBook ? "50%" : "auto",
//                     borderTopLeftRadius: isClosedBook ? "0.75rem" : "0",
//                     borderBottomLeftRadius: isClosedBook ? "0.75rem" : "0",
//                   }}
//                 >
//                   {getCurrentRightPageContent()}
//                 </div>
//                 {/* Flipping Page */}
//                 <AnimatePresence initial={false}>
//                   {isFlipping && (
//                     <motion.div
//                       key={currentSpread + "-" + flipDirection}
//                       initial={{ rotateY: flipDirection === "next" ? 0 : 0 }}
//                       animate={{ rotateY: flipDirection === "next" ? -180 : 180 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.8, ease: "easeInOut" }}
//                       className="absolute w-1/2 h-full bg-white border border-green-200 shadow-xl overflow-hidden z-20 transform-style-preserve-3d"
//                       style={{
//                         transformOrigin: flipDirection === "next" ? "left center" : "right center",
//                         right: flipDirection === "next" ? 0 : "auto",
//                         left: flipDirection === "prev" ? 0 : "auto",
//                       }}
//                     >
//                       <div className="absolute w-full h-full backface-hidden">{getFlippingPageFrontContent()}</div>
//                       <div className="absolute w-full h-full backface-hidden" style={{ transform: "rotateY(180deg)" }}>
//                         {getFlippingPageBackContent()}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </>
//             )}
//           </div>
//           {/* Enhanced Navigation */}
//           <div className="flex items-center justify-center gap-4 bg-white/95 backdrop-blur-xl p-3 px-6 rounded-full shadow-lg border border-green-200 w-full max-w-xs md:max-w-md">
//             <motion.button
//               className="bg-green-600 text-white border-none py-2 px-4 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out shadow-md flex items-center justify-center w-12 h-10"
//               style={{
//                 background:
//                   displaySpread === 0
//                     ? colors.secondary
//                     : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
//                 cursor: displaySpread === 0 ? "not-allowed" : "pointer",
//                 boxShadow: displaySpread === 0 ? "none" : "0 3px 12px rgba(34, 197, 94, 0.3)",
//               }}
//               onClick={prevSpread}
//               disabled={displaySpread === 0}
//               whileHover={displaySpread !== 0 ? { translateY: -3, boxShadow: "0 6px 20px rgba(34, 197, 94, 0.4)" } : {}}
//               whileTap={displaySpread !== 0 ? { translateY: 0, boxShadow: "0 3px 12px rgba(34, 197, 94, 0.3)" } : {}}
//             >
//               ←
//             </motion.button>
//             <div className="text-green-800 font-semibold text-sm p-0 px-3 min-w-[140px] text-center">
//               {isMobile
//                 ? displaySpread === 0
//                   ? "Cover"
//                   : displaySpread === 1
//                     ? "Image 1"
//                     : displaySpread === 2
//                       ? "Image 2"
//                       : displaySpread === 3
//                         ? "Index"
//                         : displaySpread === 4
//                           ? "Bio"
//                           : displaySpread === 5
//                             ? "Thanks"
//                             : "Contact"
//                 : displaySpread === 0
//                   ? "Cover"
//                   : displaySpread === 1
//                     ? "Intro"
//                     : displaySpread === 2
//                       ? "Index"
//                       : "Thank You"}{" "}
//               / {totalSpreads}
//             </div>
//             <motion.button
//               className="bg-green-600 text-white border-none py-2 px-4 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out shadow-md flex items-center justify-center w-12 h-10"
//               style={{
//                 background:
//                   displaySpread >= totalSpreads - 1
//                     ? colors.secondary
//                     : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
//                 cursor: displaySpread >= totalSpreads - 1 ? "not-allowed" : "pointer",
//                 boxShadow: displaySpread >= totalSpreads - 1 ? "none" : "0 3px 12px rgba(34, 197, 94, 0.3)",
//               }}
//               onClick={nextSpread}
//               disabled={displaySpread >= totalSpreads - 1}
//               whileHover={
//                 displaySpread < totalSpreads - 1
//                   ? { translateY: -3, boxShadow: "0 6px 20px rgba(34, 197, 94, 0.4)" }
//                   : {}
//               }
//               whileTap={
//                 displaySpread < totalSpreads - 1
//                   ? { translateY: 0, boxShadow: "0 3px 12px rgba(34, 197, 94, 0.3)" }
//                   : {}
//               }
//             >
//               →
//             </motion.button>
//           </div>
//         </div>
//       </div>
//       <AnimatePresence>
//         {selectedProduct && selectedProduct.imageIndex === undefined && (
//           <ProductGallery productId={selectedProduct.id} closeGallery={closeGallery} colors={colors} />
//         )}
//         {selectedProduct && selectedProduct.imageIndex !== undefined && (
//           <ZoomedImageViewer
//             productId={selectedProduct.id}
//             imageIndex={selectedProduct.imageIndex}
//             closeViewer={() => setSelectedProduct(null)}
//           />
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// export default FlipBook
"use client"
import { useState, useRef, useCallback, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue } from "framer-motion"
import Image from "next/image"
import { Droplet, Leaf, X, Plus, Minus, Maximize, Instagram, Facebook } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa"
import WatermarkedImage from "@/components/watermarked-image" // Import the new component

const FlipBook = () => {
  const [currentSpread, setCurrentSpread] = useState(0)
  const [displaySpread, setDisplaySpread] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState("")
  const [sidebarWidth, setSidebarWidth] = useState(300)
  const [isResizing, setIsResizing] = useState(false)
  const flipBookRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(1024)
  const [isMobile, setIsMobile] = useState(false)

  // Product data moved back into FlipBook.tsx
  const productData = {
    "200ml": {
      title: "200ml Water Bottles",
      images: [
        "/200ml/img1.png",
        "/200ml/img2.png",
        "/200ml/img3.png",
        "/200ml/img4.png",
        "/200ml/img5.png",
        "/200ml/img6.png",
        "/200ml/img7.png",
        "/200ml/img8.png",
        "/200ml/img9.png",
        "/200ml/img10.png",
        "/200ml/img11.png",
        "/200ml/img12.png",
        "/200ml/img13.png",
        "/200ml/img14.png",
        "/200ml/img15.png",
        "/200ml/img16.png",
        "/200ml/img17.png",
        "/200ml/img18.png",
        "/200ml/img19.png",
        "/200ml/img20.png",
        "/200ml/img21.png",
        "/200ml/img22.png",
        "/200ml/img23.png",
        "/200ml/img24.png",
        "/200ml/img25.png",
        "/200ml/img26.png",
        "/200ml/img27.png",
        "/200ml/img28.png",
        "/200ml/img29.png",
        "/200ml/img30.png",
        "/200ml/img31.png",
        "/200ml/img32.png",
        "/200ml/img33.png",
        "/200ml/img34.png",
        "/200ml/img35.png",
        "/200ml/img36.png",
        "/200ml/img37.png",
        "/200ml/img38.png",
      ],
    },
    "250ml": {
      title: "250ml Water Bottles",
      images: [
        "/250ml/img1.png",
        "/250ml/img2.png",
        "/250ml/img3.png",
        "/250ml/img4.png",
        "/250ml/img5.png",
        "/250ml/img6.png",
      ],
    },
    "300ml": {
      title: "300ml Water Bottles",
      images: [
        "/300ml/img1.png",
        "/300ml/img2.png",
        "/300ml/img3.png",
        "/300ml/img4.png",
        "/300ml/img5.png",
        "/300ml/img6.png",
        "/300ml/img7.png",
        "/300ml/img8.png",
      ],
    },
    "500ml": {
      title: "500ml Water Bottles",
      images: [
        "/500ml/img1.png",
        "/500ml/img2.png",
        "/500ml/img3.png",
        "/500ml/img4.png",
        "/500ml/img5.png",
        "/500ml/img6.png",
        "/500ml/img7.png",
        "/500ml/img8.png",
        "/500ml/img9.png",
        "/500ml/img10.png",
        "/500ml/img11.png",
        "/500ml/img12.png",
        "/500ml/img13.png",
        "/500ml/img14.png",
        "/500ml/img15.png",
        "/500ml/img16.png",
      ],
    },
    "750ml": {
      title: "750ml Water Bottles",
      images: [
        "/750ml/img1.png", // Corrected path from user's "/img1.png"
        "/750ml/img2.png",
        "/750ml/img3.png",
        "/750ml/img4.png",
        "/750ml/img5.png",
        "/750ml/img6.png",
        "/750ml/img7.png",
        "/750ml/img8.png",
        "/750ml/img9.png",
        "/750ml/img10.png",
        "/750ml/img11.png",
        "/750ml/img12.png",
        "/750ml/img13.png",
        "/750ml/img14.png",
        "/750ml/img15.png",
        "/750ml/img16.png",
        "/750ml/img17.png",
        "/750ml/img18.png",
        "/750ml/img19.png",
        "/750ml/img20.png",
        "/750ml/img21.png",
        "/750ml/img22.png",
        "/750ml/img23.png",
      ],
    },
    "1liter": {
      title: "1 Liter Water Bottles",
      images: [
        "/1lit/img1.png",
        "/1lit/img2.png",
        "/1lit/img3.png",
        "/1lit/img4.png",
        "/1lit/img5.png",
        "/1lit/img6.png",
        "/1lit/img7.png",
        "/1lit/img8.png",
        "/1lit/img9.png",
        "/1lit/img10.png",
        "/1lit/img11.png",
        "/1lit/img12.png",
      ],
    },
    "bio-200ml": {
      title: "Biodegradable 200ml",
      images: ["/bio/200ml bio.jpeg"], // Corrected path
    },
    "bio-250ml": {
      title: "Biodegradable 250ml",
      images: ["/bio/250ml bio.jpeg"], // Corrected path
    },
    "bio-300ml": {
      title: "Biodegradable 300ml",
      images: ["/bio/300ml bio.jpeg"], // Corrected path
    },
    "bio-500ml": {
      title: "Biodegradable 500ml",
      images: ["/bio/500ml bio.jpeg"], // Corrected path
    },
    "bio-750ml": {
      title: "Biodegradable 750ml",
      images: ["/bio/750ml bio.jpeg"], // Corrected path
    },
  }
  // Updated color palette to match VedicJal website (green theme)
  const colors = {
    primary: "#16a34a", // Green-600
    primaryLight: "#bbf7d0", // Green-200
    primaryDark: "#15803d", // Green-700
    secondary: "#6b7280", // Gray-500
    accent: "#059669", // Emerald-600
    accentLight: "#a7f3d0", // Emerald-2200
    textDark: "#1f2937", // Gray-800
    textMedium: "#4b5563", // Gray-600
    textLight: "#9ca3af", // Gray-400
    backgroundLight: "#f0fdf4", // Green-50
    backgroundWhite: "#ffffff",
    borderLight: "#d1fae5", // Green-100
    shadowLight: "rgba(34, 197, 94, 0.1)",
    shadowMedium: "rgba(34, 197, 94, 0.2)",
    shadowStrong: "rgba(34, 197, 94, 0.3)",
    brandGreen: "#16a34a",
    brandDarkGreen: "#15803d",
    brandLightGreen: "#22c55e",
  }
  const openProductGallery = (productId) => {
    setSelectedProduct({ id: productId, imageIndex: undefined })
  }
  const closeGallery = () => {
    setSelectedProduct(null)
  }
  const allPages = [
    // Page 0 - Cover Page
    {
      id: "cover",
      type: "cover",
      content: (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full p-0 relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl shadow-xl flex flex-col justify-center items-center select-none"
        >
          {/* Decorative Top & Bottom Strips */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-br from-green-500/20 to-green-400/15 -skew-y-3 origin-top-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-tl from-green-400/15 to-green-500/20 skew-y-3 origin-bottom-right"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Floating Particles */}
          {[
            { top: 20, left: 10 },
            { top: 32, left: 25 },
            { top: 44, left: 40 },
            { top: 56, left: 55 },
            { top: 68, left: 70 },
            { top: 80, left: 85 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-green-400/30 rounded-full"
              style={{ top: `${p.top}%`, left: `${p.left}%` }}
              animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2 + i * 0.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
            />
          ))}
          {/* Main Content */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 p-4 text-center max-w-md w-[92%]"
          >
            {/* Logo & Title */}
            <div className="mb-3 flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: "backOut" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Image
                  src="/Vedic Jal.png"
                  alt="VedicJal Logo"
                  width={100}
                  height={100}
                  className="rounded-xl shadow-xl border-4 border-white bg-white mb-1"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </motion.div>
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-green-800 font-serif mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                VedicJal
              </motion.h1>
              <motion.p
                className="text-sm md:text-base text-green-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                Pure Water, Pure Life
              </motion.p>
            </div>
            {/* Welcome Box */}
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-md rounded-xl p-3 mt-3 mb-3 shadow-md border border-green-200"
            >
              <h2 className="text-lg md:text-xl font-semibold text-green-800 font-serif m-0">
                Welcome to VedicJal Online Brochure
              </h2>
              <p className="text-green-600 mt-1 text-sm">Discover our customized range of premium water bottles</p>
            </motion.div>
            {/* Divider */}
            <motion.div
              className="flex items-center justify-center my-3"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-green-600/50" />
              <motion.div
                className="mx-2 w-2.5 h-2.5 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-green-600/50" />
            </motion.div>
            {/* Footer Quote */}
            <motion.p
              className="text-xs md:text-sm text-green-700 italic mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.6 }}
            >
              "Bringing purity to your hands"
            </motion.p>
          </motion.div>
        </motion.div>
      ),
    },
    // Page 1 - Full-fit Image Left
    {
      id: "image-left",
      type: "fullimage",
      content: (
        <motion.div
          className="w-full aspect-[3/4] relative overflow-hidden select-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/page1.jpg"
            alt="VedicJal Workshop - Page 1"
            fill
            style={{ objectFit: "cover" }}
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>
      ),
    },
    // Page 2 - Full-fit Image Right
    {
      id: "image-right",
      type: "fullimage",
      content: (
        <motion.div
          className="w-full aspect-[3/4] relative overflow-hidden select-none"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/page2.jpg"
            alt="VedicJal Workshop - Page 2"
            fill
            style={{ objectFit: "cover" }}
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>
      ),
    },
    // Page 3 - Main Index (ml bottles)
    {
      id: "main-index",
      type: "index-main",
      content: (
        <div className="w-full h-full p-3 md:p-6 box-border bg-gradient-to-br from-white to-green-50 font-serif flex flex-col overflow-y-auto select-none scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-transparent">
          {/* Title Section */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-4"
          >
            <h1 className="text-xl md:text-3xl text-green-800 font-bold m-0">PRODUCT INDEX</h1>
            <motion.div
              className="w-16 h-1 bg-green-600 mx-auto my-2 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <p className="text-xs md:text-sm text-green-700 font-medium m-0">
              Click on any item to view the product gallery
            </p>
          </motion.div>
          {/* Product List */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 w-full max-w-[92vw] mx-auto"
          >
            <div className="grid grid-cols-1 gap-2">
              {[
                { number: "1.", name: "200ml", id: "200ml" },
                { number: "2.", name: "250ml", id: "250ml" },
                { number: "3.", name: "300ml", id: "300ml" },
                { number: "4.", name: "500ml", id: "500ml" },
                { number: "5.", name: "750ml", id: "750ml" },
                { number: "6.", name: "1 Liter", id: "1liter" },
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex items-center p-2 md:p-3 bg-white rounded-md cursor-pointer text-sm md:text-base text-green-800 border border-transparent shadow hover:shadow-md transition-all duration-300"
                  onClick={() => openProductGallery(item.id)}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{
                    background: "#ecfdf5",
                    borderColor: "#22c55e",
                    x: 6,
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                    <Droplet className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-600" />
                  </motion.div>
                  <span className="font-bold mr-3 min-w-[32px]">{item.number}</span>
                  <span className="flex-1">{item.name}</span>
                  <motion.span
                    className="ml-auto text-green-600 text-base font-bold"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      ),
    },
    // Page 4 - Biodegradable Index
    {
      id: "bio-index",
      type: "index-bio",
      content: (
        <div className="w-full h-full p-3 md:p-6 box-border bg-gradient-to-br from-white to-emerald-50 font-serif flex flex-col overflow-y-auto select-none scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-transparent">
          {/* Header */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-4"
          >
            <h1 className="text-xl md:text-3xl text-emerald-700 font-bold m-0">BIODEGRADABLE COLLECTION</h1>
            <motion.div
              className="w-16 h-1 bg-emerald-600 mx-auto my-2 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <p className="text-xs md:text-sm text-emerald-700 font-medium m-0">
              Eco-friendly options for a sustainable future
            </p>
          </motion.div>
          {/* Biodegradable Items List */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 w-full max-w-[92vw] mx-auto"
          >
            <div className="grid grid-cols-1 gap-2">
              {[
                { number: "7.1", name: "Biodegradable 200ml", id: "bio-200ml" },
                { number: "7.2", name: "Biodegradable 250ml", id: "bio-250ml" },
                { number: "7.3", name: "Biodegradable 300ml", id: "bio-300ml" },
                { number: "7.4", name: "Biodegradable 500ml", id: "bio-500ml" },
                { number: "7.5", name: "Biodegradable 750ml", id: "bio-750ml" },
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex items-center p-2 md:p-3 bg-white rounded-md cursor-pointer text-sm md:text-base text-emerald-800 border border-transparent shadow hover:shadow-md transition-all duration-300"
                  onClick={() => openProductGallery(item.id)}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{
                    background: "#d1fae5",
                    borderColor: "#10b981",
                    x: 6,
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                    <Leaf className="w-4 h-4 md:w-5 md:h-5 mr-2 text-emerald-600" />
                  </motion.div>
                  <span className="font-bold mr-3 min-w-[45px]">{item.number}</span>
                  <span className="flex-1">{item.name}</span>
                  <motion.span
                    className="ml-auto text-emerald-600 text-base font-bold"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      ),
    },
    // Page 5 - THANK YOU PAGE
    {
      id: "thankyou",
      type: "thankyou",
      content: (
        <div className="w-full h-full p-3 md:p-5 box-border bg-gradient-to-br from-white to-green-50 flex items-center justify-center relative overflow-hidden select-none">
          {/* Floating Particles */}
          {[
            { top: 15, left: 20, delay: 0 },
            { top: 35, left: 80, delay: 0.5 },
            { top: 60, left: 15, delay: 1.0 },
            { top: 25, left: 70, delay: 1.5 },
            { top: 80, left: 85, delay: 2.0 },
            { top: 45, left: 25, delay: 2.5 },
            { top: 70, left: 60, delay: 3.0 },
            { top: 90, left: 40, delay: 3.5 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400/40 rounded-full"
              style={{ top: `${p.top}%`, left: `${p.left}%` }}
              animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                delay: p.delay,
              }}
            />
          ))}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="text-center text-green-800 z-10 w-full max-w-md"
          >
            {/* Logo */}
            <motion.div
              initial={{ y: -30, opacity: 0, rotate: -10 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "backOut" }}
              className="mb-3 flex flex-col items-center"
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/Vedic Jal.png"
                  alt="VedicJal Logo"
                  width={70}
                  height={70}
                  className="rounded-lg shadow-md border-2 border-white"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </motion.div>
            </motion.div>
            {/* Heading */}
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 leading-tight"
            >
              Thank You
            </motion.h1>
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-3 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
            {/* Subtext */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-base md:text-lg font-semibold mb-2"
            >
              For choosing VedicJal
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="text-sm md:text-base text-green-700 leading-snug mb-4"
            >
              Your trust in our premium handcrafted water bottles means the world to us.
            </motion.p>
            {/* Quote */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="p-3 px-4 border border-green-300 rounded-lg bg-green-100/50 inline-block text-green-700 font-medium italic text-sm md:text-base"
            >
              "Pure Water, Pure Life"
            </motion.div>
          </motion.div>
        </div>
      ),
    },
    // Page 6 - Contact Us Page
    {
      id: "contact",
      type: "contact",
      content: (
        <div className="w-full h-full p-4 md:p-6 box-border bg-gradient-to-br from-white to-green-50 flex flex-col justify-center items-center overflow-auto select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-green-800 w-full max-w-md text-center space-y-3"
          >
            {/* Title */}
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl sm:text-2xl font-bold font-serif"
            >
              Contact Us
            </motion.h1>
            {/* Divider */}
            <motion.div
              className="w-10 sm:w-12 h-1 bg-green-600 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white/90 p-4 rounded-xl shadow border border-green-200 text-xs sm:text-sm text-green-700 leading-relaxed space-y-1"
            >
              <p className="font-bold text-green-800 text-sm">Vedicjal</p>
              <p>A brand owned by Anugya FMCG Industries</p>
              <p>E-153 Forest Lane, Near Country Club</p>
              <p>Sainik Farms, New Delhi – 110068</p>
              <p>
                📞 <span className="text-green-800 font-medium">+91- 9810152783/9818088458</span>
              </p>
              <p>
                📧{" "}
                <a href="mailto:info@vedicjal.com" className="underline text-green-800 break-all">
                  info@vedicjal.com
                </a>
              </p>
              <p>
                🌐{" "}
                <a
                  href="https://vedicjal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-green-800 break-all"
                >
                  www.vedicjal.com
                </a>
              </p>
              {/* Social Media */}
              <div className="flex justify-center gap-4 pt-2 text-green-600">
                <a
                  href="https://www.instagram.com/vedic_jal?utm_source=qr&igsh=MXI1OG90MjFyM2E0OA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 hover:text-green-800" />
                </a>
                <a
                  href="https://www.facebook.com/share/19N6P87t5x/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 hover:text-green-800" />
                </a>
                <a
                  href="https://wa.me/message/HMB5Q7MZXTP3P1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 hover:text-green-800" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      ),
    },
  ]
  // Mobile-specific page order for single-page view
  const mobilePages = [
    0, // Cover
    1, // Left image
    2, // Right image
    3, // Main index
    4, // Bio index
    5, // Thank you
    6, // Contact
  ]
  // Desktop spreads: [leftPageIndex, rightPageIndex]
  const spreads = [
    [null, 0], // Spread 0: Cover (Right only)
    [1, 2], // Spread 1: Image Left, Image Right
    [3, 4], // Spread 2: Main Index, Biodegradable Index
    [5, 6], // Spread 3: Thank You, Contact
  ]
  const totalSpreads = isMobile ? mobilePages.length : spreads.length
  const getPageContent = (pageIndex) => {
    if (pageIndex === null || typeof allPages[pageIndex] === "undefined") {
      return null
    }
    return allPages[pageIndex].content
  }
  // Mobile: get current page content
  const getCurrentMobilePageContent = () => {
    if (!isMobile) return null
    const pageIndex = mobilePages[displaySpread]
    return getPageContent(pageIndex)
  }
  // Desktop: get left/right page content
  const getCurrentLeftPageContent = () => {
    if (isMobile) return null
    const pageIndex = spreads[displaySpread][0]
    return getPageContent(pageIndex)
  }
  const getCurrentRightPageContent = () => {
    if (isMobile) return null
    const pageIndex = spreads[displaySpread][1]
    return getPageContent(pageIndex)
  }
  const getFlippingPageFrontContent = () => {
    if (isMobile) {
      const pageIndex = mobilePages[currentSpread]
      return getPageContent(pageIndex)
    } else {
      if (flipDirection === "next") {
        return getPageContent(spreads[currentSpread][1])
      } else if (flipDirection === "prev") {
        return getPageContent(spreads[currentSpread][0])
      }
    }
    return null
  }
  const getFlippingPageBackContent = () => {
    if (isMobile) {
      const nextPageIdx = flipDirection === "next" ? mobilePages[currentSpread + 1] : mobilePages[currentSpread - 1]
      return getPageContent(nextPageIdx)
    } else {
      if (flipDirection === "next") {
        const nextPageIdx = spreads[currentSpread + 1]?.[1]
        return getPageContent(nextPageIdx)
      } else if (flipDirection === "prev") {
        const prevPageIdx = spreads[currentSpread - 1]?.[0]
        return getPageContent(prevPageIdx)
      }
    }
    return null
  }
  const goToSpread = (spreadIndex) => {
    if (isFlipping || spreadIndex < 0 || spreadIndex >= totalSpreads) return
    const direction = spreadIndex > currentSpread ? "next" : "prev"
    setFlipDirection(direction)
    setIsFlipping(true)
    setCurrentSpread(spreadIndex)
    setTimeout(() => {
      setDisplaySpread(spreadIndex)
      setIsFlipping(false)
      setFlipDirection("")
    }, 800) // Longer animation for mobile
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
  const isClosedBook = displaySpread === 0 && !isMobile
  // Sidebar resize handlers (desktop only)
  const handleMouseDown = useCallback(
    (e) => {
      if (isMobile) return
      setIsResizing(true)
      e.preventDefault()
    },
    [isMobile],
  )
  const handleMouseMove = useCallback(
    (e) => {
      if (!isResizing || isMobile) return
      const newWidth = e.clientX
      if (newWidth >= 250 && newWidth <= 400) {
        setSidebarWidth(newWidth)
      }
    },
    [isResizing, isMobile],
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
      const width = window.innerWidth
      setWindowWidth(width)
      setIsMobile(width <= 768)
      if (width <= 768) {
        setSidebarWidth(width)
      }
    }
    if (typeof window !== "undefined") {
      const width = window.innerWidth
      setWindowWidth(width)
      setIsMobile(width <= 768)
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])
  // Enhanced Product Gallery Component with Amazon-style cards
  const ProductGallery = ({ productId, closeGallery, colors }) => {
    const product = productData[productId]
    if (!product) return null
    const galleryVariants = {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
      exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } },
    }
    const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    }
    return (
      <motion.div
        variants={galleryVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-black/95 z-[1000] flex flex-col select-none"
      >
        {/* Header */}
        <div className="p-4 md:p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-md flex justify-between items-center border-b border-green-500/20">
          <div className="flex items-center gap-3">
            <Droplet className="w-6 h-6 text-green-400" />
            <h2 className="text-white text-xl md:text-2xl font-semibold m-0">{product.title}</h2>
          </div>
          <motion.button
            className="bg-white/20 border-none text-white text-2xl w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500/30"
            onClick={closeGallery}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>
        {/* Gallery Grid */}
        <motion.div
          className="flex-1 p-4 md:p-6 overflow-y-auto"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
            {product.images.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-white to-green-50 rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out cursor-pointer border border-gray-100 hover:border-green-400 hover:shadow-xl group"
                onClick={() => setSelectedProduct({ id: productId, imageIndex: index })}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-green-50">
                  <WatermarkedImage // Use WatermarkedImage here
                    src={image || "/placeholder.svg?height=300&width=400"}
                    alt={`${product.title} ${index + 1}`}
                    fill
                    objectFit="contain"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                      Click to zoom
                    </div>
                  </div>
                </div>
                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-gray-800 font-semibold text-base mb-2 line-clamp-2">
                    {product.title} - Model {index + 1}
                  </h3>
                  <div className="flex items-center justify-between">
                    {/* <span className="text-green-600 font-bold text-lg">Premium Quality</span> */}
                    <div className="flex items-center gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">High-quality water bottle with premium finish</p>
                  {/* Action Button */}
                  <motion.button
                    className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Footer */}
        <div className="p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-md border-t border-green-500/20">
          <div className="text-center text-white/80 text-sm">
            <p>Showing {product.images.length} models • Click any image to view in full size</p>
          </div>
        </div>
      </motion.div>
    )
  }
  // Zoomed Image Viewer Component
  const ZoomedImageViewer = ({ productId, imageIndex, closeViewer }) => {
    const product = productData[productId]
    const imageUrl = product?.images[imageIndex]
    const [zoom, setZoom] = useState(1)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const handleWheel = useCallback(
      (e) => {
        e.preventDefault()
        const scaleAmount = 0.1
        const newZoom = e.deltaY < 0 ? Math.min(3, zoom + scaleAmount) : Math.max(0.5, zoom - scaleAmount)
        setZoom(newZoom)
      },
      [zoom],
    )
    const handlePan = useCallback(
      (event, info) => {
        x.set(x.get() + info.delta.x)
        y.set(y.get() + info.delta.y)
      },
      [x, y],
    )
    if (!imageUrl) return null
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-[1001] flex items-center justify-center select-none"
      >
        <motion.button
          className="absolute top-4 right-4 bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-red-500/30"
          onClick={closeViewer}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-6 h-6" />
        </motion.button>
        <div className="relative w-[90vw] h-[90vh] overflow-hidden flex items-center justify-center">
          <motion.div
            className="relative w-full h-full cursor-grab" // This div will be the actual element that scales and pans
            style={{
              x: x,
              y: y,
              scale: zoom,
            }}
            onWheel={handleWheel}
            onPan={handlePan}
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <WatermarkedImage // Use WatermarkedImage here
              src={imageUrl || "/placeholder.svg?height=800&width=600"}
              alt={product.title}
              fill
              objectFit="contain" // Image initially fits the motion.div
            />
          </motion.div>
        </div>
        {/* Added z-[1002] to ensure buttons are clickable */}
        <div className="absolute bottom-4 flex gap-2 bg-white/20 p-3 rounded-full backdrop-blur-md z-[1002]">
          <motion.button
            className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40"
            onClick={() => setZoom((prev) => Math.min(3, prev + 0.1))}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Plus className="w-5 h-5" />
          </motion.button>
          <motion.button
            className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40"
            onClick={() => setZoom((prev) => Math.max(0.5, prev - 0.1))}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Minus className="w-5 h-5" />
          </motion.button>
          <motion.button
            className="bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40"
            onClick={() => {
              setZoom(1)
              x.set(0)
              y.set(0)
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Maximize className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    )
  }
  // Component for rendering thumbnails in the sidebar
  const SpreadThumbnail = ({ spreadIndex, isActive, onClick }) => {
    if (isMobile) {
      // Mobile: single page thumbnails
      const pageIndex = mobilePages[spreadIndex]
      const pageContent = getPageContent(pageIndex)
      const pageLabels = ["Cover", "Image 1", "Image 2", "Index", "Bio", "Thanks", "Contact"]
      return (
        <motion.div
          className="thumbnail flex-shrink-0 relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
          style={{
            marginRight: "0.5rem",
            border: isActive ? `3px solid ${colors.primary}` : "3px solid transparent",
            background: colors.backgroundWhite,
            boxShadow: isActive ? `0 6px 25px ${colors.shadowMedium}` : `0 3px 12px ${colors.shadowLight}`,
            height: "100px",
            width: "80px",
            minWidth: "80px",
          }}
          onClick={onClick}
          whileHover={{
            scale: isActive ? 1 : 1.05,
            borderColor: colors.primary,
            boxShadow: `0 6px 20px ${colors.shadowMedium}`,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-full h-full overflow-hidden relative bg-green-50 flex items-center justify-center">
            <div className="scale-[0.06] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
              {pageContent}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-green-800 text-white p-1 text-xs font-medium text-center h-5 flex items-center justify-center">
            {pageLabels[spreadIndex]}
          </div>
        </motion.div>
      )
    } else {
      // Desktop: spread thumbnails
      const [leftPageIndex, rightPageIndex] = spreads[spreadIndex]
      const leftPageContent = getPageContent(leftPageIndex)
      const rightPageContent = getPageContent(rightPageIndex)
      const spreadLabels = ["Cover", "Intro", "Index", "Thank You"]
      return (
        <motion.div
          className="thumbnail flex-shrink-0 relative overflow-hidden rounded-md cursor-pointer transition-all duration-300 ease-in-out"
          style={{
            marginBottom: "0.5rem",
            border: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
            background: colors.backgroundWhite,
            boxShadow: isActive ? `0 4px 20px ${colors.shadowMedium}` : `0 2px 8px ${colors.shadowLight}`,
            height: "120px",
            width: "auto",
            minWidth: leftPageContent ? "160px" : "80px",
          }}
          onClick={onClick}
          whileHover={{
            scale: isActive ? 1 : 1.02,
            borderColor: colors.primary,
            boxShadow: `0 4px 16px ${colors.shadowMedium}`,
          }}
          whileTap={{ scale: 0.95 }}
        >
          {leftPageContent && (
            <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden relative bg-green-50 flex items-center justify-center">
              <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
                {leftPageContent}
              </div>
            </div>
          )}
          <div
            className={`${leftPageContent ? "absolute right-0 top-0 w-1/2" : "w-full"} h-full overflow-hidden relative bg-green-50 flex items-center justify-center`}
          >
            <div className="scale-[0.08] origin-center w-[1200px] h-[800px] pointer-events-none overflow-hidden">
              {rightPageContent}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-green-800 text-white p-1 px-2 text-xs font-medium text-center h-5 flex items-center justify-center">
            {spreadLabels[spreadIndex]}
          </div>
        </motion.div>
      )
    }
  }
  return (
    <>
      <div className="flex h-screen bg-gradient-to-br from-green-50 to-green-100 font-sans overflow-hidden flex-col md:flex-row select-none">
        {/* Resizable Sidebar */}
        <div
          className="relative flex flex-shrink-0 bg-white/95 backdrop-blur-xl border-r border-green-200 shadow-lg min-w-[250px] max-w-[400px] md:h-full md:flex-col w-full h-[120px] overflow-x-auto overflow-y-hidden md:overflow-x-hidden md:overflow-y-auto"
          style={{
            width: isMobile ? "100%" : `${sidebarWidth}px`,
            height: isMobile ? "120px" : "100%",
          }}
        >
          {/* Header - only shown on mobile */}
          {isMobile && (
            <div className="p-4 bg-white flex items-center sticky left-0 z-10 border-b border-green-200 min-w-max">
              <h3 className="m-0 text-green-800 text-base font-semibold whitespace-nowrap">Page Navigation</h3>
            </div>
          )}
          {/* Thumbnails */}
          <div
            className={`flex-1 w-full px-[3vw] flex ${isMobile ? "flex-row items-center overflow-x-auto" : "flex-col justify-center"}`}
          >
            {Array.from({ length: totalSpreads }).map((_, index) => (
              <SpreadThumbnail
                key={index}
                spreadIndex={index}
                isActive={index === displaySpread}
                onClick={() => goToSpread(index)}
              />
            ))}
          </div>
          {/* Resize Handle - only on desktop */}
          {!isMobile && (
            <div
              className="absolute top-0 right-0 w-1 cursor-col-resize z-10 transition-all duration-300 ease-in-out hover:bg-green-500 hover:opacity-50"
              style={{ height: "100%" }}
              onMouseDown={handleMouseDown}
            />
          )}
        </div>
        {/* Main Flipbook */}
        <div className="flipbook-main flex-1 flex flex-col items-center justify-center p-2 md:p-8 relative overflow-hidden h-[calc(100vh-120px)] md:h-full">
          <div
            ref={flipBookRef}
            className="relative mb-4"
            style={{
              width: isMobile ? "95%" : "min(90vw, 95vh * 1.2)",
              height: isMobile ? "70%" : "min(75vh, 90vw / 1.2)",
              maxWidth: "1400px",
              maxHeight: "900px",
              perspective: "1500px",
            }}
          >
            {/* Book spine - only show when not closed book and not mobile */}
            {!isClosedBook && !isMobile && (
              <div className="absolute left-1/2 top-0 w-1.5 h-full bg-gradient-to-b from-green-600 to-green-800 -translate-x-1/2 z-10 rounded-md shadow-md" />
            )}
            {/* Mobile: Single page view */}
            {isMobile && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={displaySpread}
                  initial={{ opacity: 0, x: flipDirection === "next" ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: flipDirection === "next" ? -100 : 100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white border-2 border-green-200 shadow-2xl overflow-hidden rounded-xl"
                >
                  {getCurrentMobilePageContent()}
                </motion.div>
              </AnimatePresence>
            )}
            {/* Desktop: Dual page view */}
            {!isMobile && (
              <>
                {/* Left Page - only show when book is open */}
                {!isClosedBook && getCurrentLeftPageContent() && (
                  <div className="absolute w-1/2 h-full bg-white border border-green-200 shadow-xl overflow-hidden left-0 rounded-l-xl">
                    {getCurrentLeftPageContent()}
                  </div>
                )}
                {/* Right Page */}
                <div
                  className="absolute h-full bg-white border border-green-200 shadow-xl overflow-hidden right-0 rounded-r-xl transition-all duration-300 ease-in-out"
                  style={{
                    width: isClosedBook ? "50%" : "50%",
                    left: isClosedBook ? "50%" : "auto",
                    borderTopLeftRadius: isClosedBook ? "0.75rem" : "0",
                    borderBottomLeftRadius: isClosedBook ? "0.75rem" : "0",
                  }}
                >
                  {getCurrentRightPageContent()}
                </div>
                {/* Flipping Page */}
                <AnimatePresence initial={false}>
                  {isFlipping && (
                    <motion.div
                      key={currentSpread + "-" + flipDirection}
                      initial={{ rotateY: flipDirection === "next" ? 0 : 0 }}
                      animate={{ rotateY: flipDirection === "next" ? -180 : 180 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute w-1/2 h-full bg-white border border-green-200 shadow-xl overflow-hidden z-20 transform-style-preserve-3d"
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
              </>
            )}
          </div>
          {/* Enhanced Navigation */}
          <div className="flex items-center justify-center gap-4 bg-white/95 backdrop-blur-xl p-3 px-6 rounded-full shadow-lg border border-green-200 w-full max-w-xs md:max-w-md">
            <motion.button
              className="bg-green-600 text-white border-none py-2 px-4 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out shadow-md flex items-center justify-center w-12 h-10"
              style={{
                background:
                  displaySpread === 0
                    ? colors.secondary
                    : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                cursor: displaySpread === 0 ? "not-allowed" : "pointer",
                boxShadow: displaySpread === 0 ? "none" : "0 3px 12px rgba(34, 197, 94, 0.3)",
              }}
              onClick={prevSpread}
              disabled={displaySpread === 0}
              whileHover={displaySpread !== 0 ? { translateY: -3, boxShadow: "0 6px 20px rgba(34, 197, 94, 0.4)" } : {}}
              whileTap={displaySpread !== 0 ? { translateY: 0, boxShadow: "0 3px 12px rgba(34, 197, 94, 0.3)" } : {}}
            >
              ←
            </motion.button>
            <div className="text-green-800 font-semibold text-sm p-0 px-3 min-w-[140px] text-center">
              {isMobile
                ? displaySpread === 0
                  ? "Cover"
                  : displaySpread === 1
                    ? "Image 1"
                    : displaySpread === 2
                      ? "Image 2"
                      : displaySpread === 3
                        ? "Index"
                        : displaySpread === 4
                          ? "Bio"
                          : displaySpread === 5
                            ? "Thanks"
                            : "Contact"
                : displaySpread === 0
                  ? "Cover"
                  : displaySpread === 1
                    ? "Intro"
                    : displaySpread === 2
                      ? "Index"
                      : "Thank You"}{" "}
              / {totalSpreads}
            </div>
            <motion.button
              className="bg-green-600 text-white border-none py-2 px-4 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out shadow-md flex items-center justify-center w-12 h-10"
              style={{
                background:
                  displaySpread >= totalSpreads - 1
                    ? colors.secondary
                    : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                cursor: displaySpread >= totalSpreads - 1 ? "not-allowed" : "pointer",
                boxShadow: displaySpread >= totalSpreads - 1 ? "none" : "0 3px 12px rgba(34, 197, 94, 0.3)",
              }}
              onClick={nextSpread}
              disabled={displaySpread >= totalSpreads - 1}
              whileHover={
                displaySpread < totalSpreads - 1
                  ? { translateY: -3, boxShadow: "0 6px 20px rgba(34, 197, 94, 0.4)" }
                  : {}
              }
              whileTap={
                displaySpread < totalSpreads - 1
                  ? { translateY: 0, boxShadow: "0 3px 12px rgba(34, 197, 94, 0.3)" }
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
