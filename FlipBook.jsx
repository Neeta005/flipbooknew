// // "use client"
// // import { useState, useRef, useCallback } from "react"

// // const FlipBook = () => {
// //   const [isOpen, setIsOpen] = useState(false)
// //   const [currentSpread, setCurrentSpread] = useState(0)
// //   const [selectedProduct, setSelectedProduct] = useState(null)
// //   const [isFlipping, setIsFlipping] = useState(false)
// //   const [flipDirection, setFlipDirection] = useState("")
// //   const [sidebarWidth, setSidebarWidth] = useState(300)
// //   const [isResizing, setIsResizing] = useState(false)
// //   const flipBookRef = useRef(null)

// //   // Color palette
// //   const colors = {
// //     primary: "#3b82f6",
// //     primaryLight: "#dbeafe",
// //     secondary: "#64748b",
// //     accent: "#06b6d4",
// //     textDark: "#1e293b",
// //     textMedium: "#475569",
// //     textLight: "#64748b",
// //     backgroundLight: "#f8fafc",
// //     backgroundWhite: "#ffffff",
// //     borderLight: "#e2e8f0",
// //     shadowLight: "rgba(15, 23, 42, 0.08)",
// //     shadowMedium: "rgba(15, 23, 42, 0.12)",
// //   }

// //   // Sample product data
// //   const products = [
// //     {
// //       id: 1,
// //       name: "Ceramic Planter Black",
// //       image: "/placeholder.svg?height=300&width=300",
// //       gallery: [
// //         "/placeholder.svg?height=500&width=500",
// //         "/placeholder.svg?height=500&width=500",
// //         "/placeholder.svg?height=500&width=500",
// //       ],
// //       price: "$45.99",
// //       description: "Elegant black ceramic planter with modern design",
// //     },
// //     {
// //       id: 2,
// //       name: "Ceramic Planter Blue",
// //       image: "/placeholder.svg?height=300&width=300",
// //       gallery: [
// //         "/placeholder.svg?height=500&width=500",
// //         "/placeholder.svg?height=500&width=500",
// //         "/placeholder.svg?height=500&width=500",
// //       ],
// //       price: "$42.99",
// //       description: "Beautiful blue ceramic planter with glossy finish",
// //     },
// //     {
// //       id: 3,
// //       name: "Ceramic Planter Green",
// //       image: "/placeholder.svg?height=300&width=300",
// //       gallery: [
// //         "/placeholder.svg?height=500&width=500",
// //         "/placeholder.svg?height=500&width=500",
// //         "/placeholder.svg?height=500&width=500",
// //       ],
// //       price: "$48.99",
// //       description: "Natural green ceramic planter perfect for herbs",
// //     },
// //     {
// //       id: 4,
// //       name: "Ceramic Bowl Black",
// //       image: "/placeholder.svg?height=300&width=300",
// //       gallery: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
// //       price: "$28.99",
// //       description: "Sleek black ceramic bowl for modern dining",
// //     },
// //     {
// //       id: 5,
// //       name: "Ceramic Bowl Blue",
// //       image: "/placeholder.svg?height=300&width=300",
// //       gallery: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
// //       price: "$26.99",
// //       description: "Vibrant blue ceramic bowl with artistic patterns",
// //     },
// //     {
// //       id: 6,
// //       name: "Ceramic Bowl Green",
// //       image: "/placeholder.svg?height=300&width=300",
// //       gallery: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
// //       price: "$29.99",
// //       description: "Earthy green ceramic bowl with natural texture",
// //     },
// //   ]

// //   const pages = [
// //     // Page 0 - Cover Page
// //     {
// //       type: "cover",
// //       content: (
// //         <div
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             padding: 0,
// //             position: "relative",
// //             overflow: "hidden",
// //           }}
// //         >
// //           <div
// //             style={{
// //               width: "100%",
// //               height: "100%",
// //               background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #e2e8f0 100%)",
// //               position: "relative",
// //             }}
// //           >
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 top: 0,
// //                 left: 0,
// //                 right: 0,
// //                 bottom: 0,
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 padding: "5rem",
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   textAlign: "center",
// //                   color: colors.textDark,
// //                   zIndex: 2,
// //                   width: "100%",
// //                   maxWidth: "500px",
// //                 }}
// //               >
// //                 <div
// //                   style={{
// //                     marginBottom: "4rem",
// //                     display: "flex",
// //                     flexDirection: "column",
// //                     alignItems: "center",
// //                   }}
// //                 >
// //                   <img
// //                     src="\Vedic Jal.png"
// //                     alt="VedicJal Logo"
// //                     style={{
// //                       width: "160px",
// //                       height: "160px",
// //                       marginBottom: "2.5rem",
// //                       borderRadius: "24px",
// //                       boxShadow: `0 12px 40px ${colors.shadowMedium}`,
// //                       border: `4px solid ${colors.backgroundWhite}`,
// //                     }}
// //                   />
// //                   <h1
// //                     style={{
// //                       fontSize: "5.5rem",
// //                       fontWeight: 800,
// //                       margin: 0,
// //                       background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //                       WebkitBackgroundClip: "text",
// //                       WebkitTextFillColor: "transparent",
// //                       backgroundClip: "text",
// //                       letterSpacing: "-3px",
// //                       lineHeight: 1.1,
// //                       fontFamily: "Inter, sans-serif",
// //                     }}
// //                   >
// //                     VedicJal
// //                   </h1>
// //                   {/* <p
// //                     style={{
// //                       fontSize: "1.5rem",
// //                       margin: "1.5rem 0 0 0",
// //                       color: colors.textMedium,
// //                       fontWeight: 400,
// //                       letterSpacing: "0.5px",
// //                     }}
// //                   >
// //                     Artisan Ceramics Collection
// //                   </p> */}
// //                 </div>

// //                 <div
// //                   style={{
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     margin: "4rem 0",
// //                     gap: "2rem",
// //                   }}
// //                 >
// //                   <div
// //                     style={{
// //                       width: "100px",
// //                       height: "3px",
// //                       background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //                       borderRadius: "2px",
// //                     }}
// //                   ></div>
// //                   <div
// //                     style={{
// //                       fontSize: "1.2rem",
// //                       fontWeight: 600,
// //                       padding: "1rem 2rem",
// //                       border: `2px solid ${colors.primary}`,
// //                       borderRadius: "10px",
// //                       color: colors.primary,
// //                       background: colors.primaryLight,
// //                     }}
// //                   >
                    
// //                   </div>
// //                   <div
// //                     style={{
// //                       width: "100px",
// //                       height: "3px",
// //                       background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //                       borderRadius: "2px",
// //                     }}
// //                   ></div>
// //                 </div>

// //                 <div style={{ marginTop: "3rem" }}>
// //                   <h2
// //                     style={{
// //                       fontSize: "2.5rem",
// //                       margin: 0,
// //                       fontWeight: 600,
// //                       color: colors.textDark,
// //                       lineHeight: 1.3,
// //                     }}
// //                   >
// //                     Premium Handcrafted
// //                   </h2>
// //                   <h3
// //                     style={{
// //                       fontSize: "2rem",
// //                       margin: "1rem 0 0 0",
// //                       fontWeight: 400,
// //                       color: colors.textMedium,
// //                     }}
// //                   >
// //                     Ceramic Products
// //                   </h3>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ),
// //     },

// //     // Page 1 - Welcome
// //     {
// //       type: "welcome",
// //       content: (
// //         <div
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             padding: "4rem",
// //             boxSizing: "border-box",
// //             display: "flex",
// //             flexDirection: "column",
// //             position: "relative",
// //             background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
// //           }}
// //         >
// //           <div
// //             style={{
// //               height: "100%",
// //               display: "flex",
// //               flexDirection: "column",
// //               justifyContent: "space-between",
// //             }}
// //           >
// //             <div
// //               style={{
// //                 textAlign: "center",
// //                 marginBottom: "3rem",
// //               }}
// //             >
// //               <h1
// //   style={{
// //     fontSize: "4.5rem",
// //     margin: 0,
// //     marginTop: "2rem",
// //     fontWeight: 700,
// //     lineHeight: 1.2,
// //     fontFamily: "Inter, sans-serif",
// //     background: "linear-gradient(90deg, #4F46E5, #06B6D4)", // Indigo to cyan
// //     WebkitBackgroundClip: "text",
// //     WebkitTextFillColor: "transparent",
// //   }}
// // >
// //   Welcome to VedicJal online brochure for customized range
// // </h1>

// //               <div
// //                 style={{
// //                   width: "120px",
// //                   height: "5px",
// //                   background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //                   margin: "2rem auto",
// //                   borderRadius: "3px",
// //                 }}
// //               ></div>
// //               {/* <h2
// //                 style={{
// //                   fontSize: "2.25rem",
// //                   color: colors.textMedium,
// //                   margin: 0,
// //                   fontWeight: 400,
// //                 }}
// //               >
// //                 Discover Our Artisan Collection
// //               </h2> */}
// //             </div>

// //             <div
// //               style={{
// //                 display: "flex",
// //                 gap: "4rem",
// //                 alignItems: "center",
// //                 flex: 1,
// //               }}
// //             >
// //               {/* <div style={{ flex: 1 }}>
// //                 <p
// //                   style={{
// //                     fontSize: "1.5rem",
// //                     lineHeight: 1.8,
// //                     color: colors.textMedium,
// //                     marginBottom: "3rem",
// //                   }}
// //                 >
// //                   Step into a world where traditional craftsmanship meets contemporary design. Our ceramic collection
// //                   represents decades of expertise, bringing you pieces that are not just functional, but works of art.
// //                 </p>

// //                 <div
// //                   style={{
// //                     display: "flex",
// //                     flexDirection: "column",
// //                     gap: "2rem",
// //                   }}
// //                 >
// //                   {[
// //                     { icon: "🏺", text: "Handcrafted Excellence" },
// //                     { icon: "🌿", text: "Eco-Friendly Materials" },
// //                     { icon: "✨", text: "Premium Quality" },
// //                     { icon: "🎨", text: "Artistic Design" },
// //                   ].map((feature, index) => (
// //                     <div
// //                       key={index}
// //                       style={{
// //                         display: "flex",
// //                         alignItems: "center",
// //                         gap: "2rem",
// //                         fontSize: "1.375rem",
// //                         color: colors.textDark,
// //                         padding: "1.5rem",
// //                         background: colors.backgroundWhite,
// //                         borderRadius: "16px",
// //                         boxShadow: `0 4px 12px ${colors.shadowLight}`,
// //                         border: `1px solid ${colors.borderLight}`,
// //                       }}
// //                     >
// //                       <span
// //                         style={{
// //                           fontSize: "2.5rem",
// //                           width: "60px",
// //                           height: "60px",
// //                           display: "flex",
// //                           alignItems: "center",
// //                           justifyContent: "center",
// //                           background: colors.primaryLight,
// //                           borderRadius: "16px",
// //                         }}
// //                       >
// //                         {feature.icon}
// //                       </span>
// //                       <span>{feature.text}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div> */}

// //               {/* <div style={{ flex: "0 0 400px" }}>
// //                 <img
// //                   src="/placeholder.svg?height=350&width=400"
// //                   alt="Artisan at work"
// //                   style={{
// //                     width: "100%",
// //                     height: "auto",
// //                     borderRadius: "20px",
// //                     boxShadow: `0 16px 40px ${colors.shadowMedium}`,
// //                     border: `1px solid ${colors.borderLight}`,
// //                   }}
// //                 />
// //               </div> */}
// //             </div>

// //             <div
// //               style={{
// //                 textAlign: "center",
// //                 marginTop: "3rem",
// //               }}
// //             >
// //               {/* <p
// //                 style={{
// //                   fontSize: "1.375rem",
// //                   fontStyle: "italic",
// //                   color: colors.textMedium,
// //                   margin: 0,
// //                   padding: "2rem",
// //                   borderLeft: `5px solid ${colors.primary}`,
// //                   background: colors.primaryLight,
// //                   borderRadius: "0 16px 16px 0",
// //                 }}
// //               >
// //                 "Every piece tells a story of tradition, passion, and artistic excellence."
// //               </p> */}
// //             </div>
// //           </div>
// //         </div>
// //       ),
// //     },

// //     // Page 2-4 - Full Page Images
// //   // Replace the existing Array.from section with this:
// // ...[
// //   // Page 2 - Our Workshop
// //   {
// //     type: "fullimage",
// //     content: (
// //       <div style={{ width: "100%", height: "100%", padding: 0, position: "relative" }}>
// //         <img
// //           src="/page3.jpg"  // Your actual image path
// //           alt="Our Workshop"
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             objectFit: "cover"
// //           }}
// //         />
// //         {/* <div style={{
// //           position: "absolute",
// //           bottom: 0,
// //           left: 0,
// //           right: 0,
// //           background: "linear-gradient(transparent, rgba(30, 41, 59, 0.9))",
// //           color: "white",
// //           padding: "4rem",
// //           textAlign: "center"
// //         }}>
// //           <h3 style={{ fontSize: "3.5rem", margin: "0 0 1.5rem 0", fontWeight: 700 }}>
// //             Our Workshop
// //           </h3>
// //           <p style={{ fontSize: "1.75rem", margin: 0, opacity: 0.95 }}>
// //             Where tradition meets innovation
// //           </p>
// //         </div> */}
// //       </div>
// //     ),
// //   },
// //   // Page 3 - Our Collection
  
// //  // ... existing code ...

// // // Page 3 - Full Page Image (modified)
// // {
// //   type: "fullimage",
// //   content: (
// //     <div style={{ 
// //       width: "100%", 
// //       height: "100%", 
// //       padding: 0, 
// //       position: "relative",
// //       overflow: "hidden"
// //     }}>
// //       <img
// //         src="/page3.jpg"
// //         alt="Our Workshop"
// //         style={{
// //           width: "100%",
// //           height: "100%",
// //           objectFit: "cover"
// //         }}
// //       />
// //     </div>
// //   ),
// // },

// // // Page 4 - Full Page Image (modified)
// // {
// //   type: "fullimage",
// //   content: (
// //     <div style={{ 
// //       width: "100%", 
// //       height: "100%", 
// //       padding: 0, 
// //       position: "relative",
// //       overflow: "hidden"
// //     }}>
// //       <img
// //         src="/images/collection.jpg"
// //         alt="Our Collection"
// //         style={{
// //           width: "100%",
// //           height: "100%",
// //           objectFit: "cover"
// //         }}
// //       />
// //     </div>
// //   ),
// // },

// // // ... existing code ...
// // ],

// //     // Page 5 - Products Gallery
// //     {
// //       type: "products",
// //       content: (
// //         <div
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             padding: "4rem",
// //             boxSizing: "border-box",
// //             display: "flex",
// //             flexDirection: "column",
// //             position: "relative",
// //             background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
// //           }}
// //         >
// //           <div
// //             style={{
// //               textAlign: "center",
// //               marginBottom: "3rem",
// //             }}
// //           >
// //             <h2
// //               style={{
// //                 fontSize: "4rem",
// //                 color: colors.textDark,
// //                 margin: "0 0 1.5rem 0",
// //                 fontWeight: 700,
// //                 lineHeight: 1.2,
// //                 fontFamily: "Inter, sans-serif",
// //               }}
// //             >
// //               Our Premium Collection
// //             </h2>
// //             <p
// //               style={{
// //                 color: colors.textMedium,
// //                 margin: "0 0 2.5rem 0",
// //                 fontSize: "1.5rem",
// //               }}
// //             >
// //               Click on any item to view detailed gallery
// //             </p>
// //           </div>

// //           <div
// //             style={{
// //               display: "grid",
// //               gridTemplateColumns: "repeat(3, 1fr)",
// //               gap: "2.5rem",
// //               flex: 1,
// //             }}
// //           >
// //             {products.map((product) => (
// //               <div
// //                 key={product.id}
// //                 style={{
// //                   background: colors.backgroundWhite,
// //                   borderRadius: "20px",
// //                   overflow: "hidden",
// //                   boxShadow: `0 6px 20px ${colors.shadowLight}`,
// //                   transition: "all 0.3s ease",
// //                   cursor: "pointer",
// //                   border: `1px solid ${colors.borderLight}`,
// //                   transform: "translateY(0)",
// //                 }}
// //                 onClick={() => setSelectedProduct(product)}
// //                 onMouseEnter={(e) => {
// //                   e.target.style.transform = "translateY(-8px)"
// //                   e.target.style.boxShadow = `0 16px 40px ${colors.shadowMedium}`
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.target.style.transform = "translateY(0)"
// //                   e.target.style.boxShadow = `0 6px 20px ${colors.shadowLight}`
// //                 }}
// //               >
// //                 <div
// //                   style={{
// //                     position: "relative",
// //                     overflow: "hidden",
// //                   }}
// //                 >
// //                   <img
// //                     src={product.image || "/placeholder.svg"}
// //                     alt={product.name}
// //                     style={{
// //                       width: "100%",
// //                       height: "220px",
// //                       objectFit: "cover",
// //                       transition: "transform 0.3s ease",
// //                     }}
// //                   />
// //                   <div
// //                     style={{
// //                       position: "absolute",
// //                       top: 0,
// //                       left: 0,
// //                       right: 0,
// //                       bottom: 0,
// //                       background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //                       display: "flex",
// //                       alignItems: "center",
// //                       justifyContent: "center",
// //                       opacity: 0,
// //                       transition: "opacity 0.3s ease",
// //                     }}
// //                   >
// //                     <span
// //                       style={{
// //                         color: "white",
// //                         fontWeight: 600,
// //                         fontSize: "1.125rem",
// //                         padding: "1rem 2rem",
// //                         border: "2px solid white",
// //                         borderRadius: "10px",
// //                         background: "rgba(255, 255, 255, 0.1)",
// //                         backdropFilter: "blur(10px)",
// //                       }}
// //                     >
// //                       View Gallery
// //                     </span>
// //                   </div>
// //                 </div>
// //                 <div style={{ padding: "2rem" }}>
// //                   <h3
// //                     style={{
// //                       fontSize: "1.375rem",
// //                       fontWeight: 600,
// //                       color: colors.textDark,
// //                       margin: "0 0 0.75rem 0",
// //                       lineHeight: 1.4,
// //                     }}
// //                   >
// //                     {product.name}
// //                   </h3>
// //                   <p
// //                     style={{
// //                       fontSize: "1.625rem",
// //                       fontWeight: 700,
// //                       color: colors.primary,
// //                       margin: "0 0 1rem 0",
// //                     }}
// //                   >
// //                     {product.price}
// //                   </p>
// //                   <p
// //                     style={{
// //                       fontSize: "1rem",
// //                       color: colors.textLight,
// //                       margin: 0,
// //                       lineHeight: 1.6,
// //                     }}
// //                   >
// //                     {product.description}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ),
// //     },

// //     // Page 6 - Contact
// //     {
// //       type: "contact",
// //       content: (
// //         <div
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             padding: "4rem",
// //             boxSizing: "border-box",
// //             display: "flex",
// //             flexDirection: "column",
// //             position: "relative",
// //             background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
// //           }}
// //         >
// //           <div
// //             style={{
// //               height: "100%",
// //               display: "flex",
// //               flexDirection: "column",
// //             }}
// //           >
// //             <h2
// //               style={{
// //                 fontSize: "4rem",
// //                 color: colors.textDark,
// //                 textAlign: "center",
// //                 margin: "0 0 3.5rem 0",
// //                 fontWeight: 700,
// //                 lineHeight: 1.2,
// //                 fontFamily: "Inter, sans-serif",
// //               }}
// //             >
// //               Get In Touch
// //             </h2>

// //             <div
// //               style={{
// //                 display: "flex",
// //                 gap: "4rem",
// //                 flex: 1,
// //                 alignItems: "center",
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   flex: 1,
// //                   display: "flex",
// //                   flexDirection: "column",
// //                   gap: "2rem",
// //                 }}
// //               >
// //                 {[
// //                   { icon: "📧", title: "Email", info: "info@vedicjal.com" },
// //                   { icon: "📞", title: "Phone", info: "+91 99532 35139" },
// //                   { icon: "🌐", title: "Website", info: "www.vedicjal.com" },
// //                   { icon: "📍", title: "Address", info: "Ceramic Industrial Area\nGujarat, India" },
// //                 ].map((contact, index) => (
// //                   <div
// //                     key={index}
// //                     style={{
// //                       display: "flex",
// //                       alignItems: "flex-start",
// //                       gap: "2rem",
// //                       padding: "2.5rem",
// //                       background: colors.backgroundWhite,
// //                       borderRadius: "20px",
// //                       boxShadow: `0 6px 20px ${colors.shadowLight}`,
// //                       border: `1px solid ${colors.borderLight}`,
// //                       transition: "all 0.3s ease",
// //                     }}
// //                   >
// //                     <span
// //                       style={{
// //                         fontSize: "2.25rem",
// //                         width: "60px",
// //                         height: "60px",
// //                         display: "flex",
// //                         alignItems: "center",
// //                         justifyContent: "center",
// //                         background: colors.primaryLight,
// //                         borderRadius: "16px",
// //                         color: colors.primary,
// //                       }}
// //                     >
// //                       {contact.icon}
// //                     </span>
// //                     <div>
// //                       <strong
// //                         style={{
// //                           display: "block",
// //                           color: colors.textDark,
// //                           marginBottom: "0.75rem",
// //                           fontSize: "1.375rem",
// //                           fontWeight: 600,
// //                         }}
// //                       >
// //                         {contact.title}
// //                       </strong>
// //                       <p
// //                         style={{
// //                           margin: 0,
// //                           color: colors.textMedium,
// //                           fontSize: "1.125rem",
// //                           lineHeight: 1.6,
// //                           whiteSpace: "pre-line",
// //                         }}
// //                       >
// //                         {contact.info}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>

// //               <div style={{ flex: "0 0 350px" }}>
// //                 <img
// //                   src="/placeholder.svg?height=300&width=350"
// //                   alt="Our Factory"
// //                   style={{
// //                     width: "100%",
// //                     height: "auto",
// //                     borderRadius: "20px",
// //                     boxShadow: `0 16px 40px ${colors.shadowMedium}`,
// //                     border: `1px solid ${colors.borderLight}`,
// //                   }}
// //                 />
// //               </div>
// //             </div>

// //             <div
// //               style={{
// //                 textAlign: "center",
// //                 marginTop: "3rem",
// //                 paddingTop: "2rem",
// //                 borderTop: `1px solid ${colors.borderLight}`,
// //               }}
// //             >
// //               <p
// //                 style={{
// //                   color: colors.textMedium,
// //                   fontStyle: "italic",
// //                   margin: 0,
// //                   fontSize: "1.25rem",
// //                 }}
// //               >
// //                 Thank you for choosing VedicJal. We look forward to serving you!
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       ),
// //     },
// //   ]

// //   const totalSpreads = Math.ceil(pages.length / 2)

// //   const goToSpread = (spreadIndex) => {
// //     if (isFlipping || spreadIndex < 0 || spreadIndex >= totalSpreads) return

// //     const direction = spreadIndex > currentSpread ? "next" : "prev"
// //     setFlipDirection(direction)
// //     setIsFlipping(true)

// //     setTimeout(() => {
// //       setCurrentSpread(spreadIndex)
// //     }, 300)

// //     setTimeout(() => {
// //       setIsFlipping(false)
// //       setFlipDirection("")
// //     }, 600)
// //   }

// //   const nextSpread = () => {
// //     if (currentSpread < totalSpreads - 1) {
// //       goToSpread(currentSpread + 1)
// //     }
// //   }

// //   const prevSpread = () => {
// //     if (currentSpread > 0) {
// //       goToSpread(currentSpread - 1)
// //     }
// //   }

// //   const openFlipBook = () => {
// //     setIsOpen(true)
// //   }

// //   const closeFlipBook = () => {
// //     setIsOpen(false)
// //     setCurrentSpread(0)
// //   }

// //   const getCurrentLeftPage = () => {
// //     return pages[currentSpread * 2]
// //   }

// //   const getCurrentRightPage = () => {
// //     return pages[currentSpread * 2 + 1]
// //   }

// //   const getNextRightPage = () => {
// //     return pages[(currentSpread + 1) * 2 + 1]
// //   }

// //   const getPrevLeftPage = () => {
// //     return pages[(currentSpread - 1) * 2]
// //   }

// //   // Sidebar resize handlers
// //   const handleMouseDown = useCallback((e) => {
// //     setIsResizing(true)
// //     e.preventDefault()
// //   }, [])

// //   const handleMouseMove = useCallback(
// //     (e) => {
// //       if (!isResizing) return

// //       const newWidth = e.clientX
// //       if (newWidth >= 250 && newWidth <= 400) {
// //         setSidebarWidth(newWidth)
// //       }
// //     },
// //     [isResizing],
// //   )

// //   const handleMouseUp = useCallback(() => {
// //     setIsResizing(false)
// //   }, [])

// //   // Add event listeners for resize
// //   useState(() => {
// //     if (isResizing) {
// //       document.addEventListener("mousemove", handleMouseMove)
// //       document.addEventListener("mouseup", handleMouseUp)
// //       return () => {
// //         document.removeEventListener("mousemove", handleMouseMove)
// //         document.removeEventListener("mouseup", handleMouseUp)
// //       }
// //     }
// //   }, [isResizing, handleMouseMove, handleMouseUp])

// //   if (!isOpen) {
// //     return (
// //       <div
// //         style={{
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           minHeight: "100vh",
// //           background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
// //           padding: "2rem",
// //         }}
// //       >
// //         <div
// //           style={{
// //             textAlign: "center",
// //             background: colors.backgroundWhite,
// //             padding: "4rem 3rem",
// //             borderRadius: "24px",
// //             boxShadow: `0 25px 50px ${colors.shadowLight}`,
// //             maxWidth: "450px",
// //             border: `1px solid ${colors.borderLight}`,
// //           }}
// //         >
// //           <div style={{ marginBottom: "1.5rem" }}>
// //             <img
// //               src="/placeholder.svg?height=80&width=80"
// //               alt="Catalog"
// //               style={{
// //                 width: "100px",
// //                 height: "100px",
// //                 borderRadius: "12px",
// //               }}
// //             />
// //           </div>
// //           <h2
// //             style={{
// //               color: colors.textDark,
// //               marginBottom: "0.75rem",
// //               fontSize: "2.25rem",
// //               fontWeight: 700,
// //               fontFamily: "Inter, sans-serif",
// //             }}
// //           >
// //             VedicJal Catalog
// //           </h2>
// //           <p
// //             style={{
// //               color: colors.textMedium,
// //               marginBottom: "2.5rem",
// //               fontSize: "1.125rem",
// //               lineHeight: 1.6,
// //             }}
// //           >
// //             Explore our premium ceramic collection
// //           </p>
// //           <button
// //             style={{
// //               background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //               color: "white",
// //               border: "none",
// //               padding: "1.25rem 2.5rem",
// //               borderRadius: "50px",
// //               fontSize: "1.125rem",
// //               fontWeight: 600,
// //               cursor: "pointer",
// //               transition: "all 0.3s ease",
// //               display: "flex",
// //               alignItems: "center",
// //               gap: "0.75rem",
// //               margin: "0 auto",
// //               boxShadow: "0 4px 14px rgba(59, 130, 246, 0.3)",
// //             }}
// //             onClick={openFlipBook}
// //             onMouseEnter={(e) => {
// //               e.target.style.transform = "translateY(-2px)"
// //               e.target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)"
// //             }}
// //             onMouseLeave={(e) => {
// //               e.target.style.transform = "translateY(0)"
// //               e.target.style.boxShadow = "0 4px 14px rgba(59, 130, 246, 0.3)"
// //             }}
// //           >
// //             <span>📖</span>
// //             Open Catalog
// //           </button>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         height: "100vh",
// //         background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
// //         fontFamily: "Inter, sans-serif",
// //       }}
// //     >
// //       {/* Resizable Sidebar */}
// //       <div
// //         style={{
// //           width: `${sidebarWidth}px`,
// //           background: "rgba(255, 255, 255, 0.95)",
// //           backdropFilter: "blur(20px)",
// //           borderRight: `1px solid ${colors.borderLight}`,
// //           display: "flex",
// //           flexDirection: "column",
// //           overflowY: "auto",
// //           boxShadow: `4px 0 20px ${colors.shadowLight}`,
// //           position: "relative",
// //           minWidth: "250px",
// //           maxWidth: "400px",
// //         }}
// //       >
// //         <div
// //           style={{
// //             padding: "1.5rem",
// //             borderBottom: `1px solid ${colors.borderLight}`,
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //             background: colors.backgroundWhite,
// //           }}
// //         >
// //           <h3
// //             style={{
// //               margin: 0,
// //               color: colors.textDark,
// //               fontSize: "1.125rem",
// //               fontWeight: 600,
// //             }}
// //           >
// //             Pages
// //           </h3>
// //           <button
// //             style={{
// //               background: "none",
// //               border: "none",
// //               fontSize: "1.5rem",
// //               cursor: "pointer",
// //               color: colors.textMedium,
// //               padding: "0.5rem",
// //               width: "36px",
// //               height: "36px",
// //               borderRadius: "50%",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               transition: "all 0.2s ease",
// //             }}
// //             onClick={closeFlipBook}
// //             onMouseEnter={(e) => {
// //               e.target.style.background = colors.primaryLight
// //               e.target.style.color = colors.primary
// //             }}
// //             onMouseLeave={(e) => {
// //               e.target.style.background = "none"
// //               e.target.style.color = colors.textMedium
// //             }}
// //           >
// //             ×
// //           </button>
// //         </div>

// //         <div
// //           style={{
// //             flex: 1,
// //             padding: "1rem",
// //             background: colors.backgroundLight,
// //           }}
// //         >
// //           {pages.map((page, index) => (
// //             <div
// //               key={index}
// //               style={{
// //                 marginBottom: "0.75rem",
// //                 border:
// //                   Math.floor(index / 2) === currentSpread ? `2px solid ${colors.primary}` : "2px solid transparent",
// //                 borderRadius: "12px",
// //                 overflow: "hidden",
// //                 cursor: "pointer",
// //                 transition: "all 0.3s ease",
// //                 position: "relative",
// //                 background: colors.backgroundWhite,
// //                 boxShadow:
// //                   Math.floor(index / 2) === currentSpread
// //                     ? `0 4px 20px rgba(59, 130, 246, 0.25)`
// //                     : `0 2px 8px ${colors.shadowLight}`,
// //                 transform: "scale(1)",
// //               }}
// //               onClick={() => goToSpread(Math.floor(index / 2))}
// //               onMouseEnter={(e) => {
// //                 if (Math.floor(index / 2) !== currentSpread) {
// //                   e.target.style.borderColor = colors.primary
// //                   e.target.style.transform = "scale(1.02)"
// //                   e.target.style.boxShadow = `0 4px 16px ${colors.shadowMedium}`
// //                 }
// //               }}
// //               onMouseLeave={(e) => {
// //                 if (Math.floor(index / 2) !== currentSpread) {
// //                   e.target.style.borderColor = "transparent"
// //                   e.target.style.transform = "scale(1)"
// //                   e.target.style.boxShadow = `0 2px 8px ${colors.shadowLight}`
// //                 }
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   transform: "scale(0.15)",
// //                   transformOrigin: "top left",
// //                   width: "666.67%",
// //                   height: "666.67%",
// //                   pointerEvents: "none",
// //                 }}
// //               >
// //                 {page.content}
// //               </div>
// //               <span
// //                 style={{
// //                   position: "absolute",
// //                   bottom: "6px",
// //                   right: "6px",
// //                   background: colors.textDark,
// //                   color: "white",
// //                   padding: "4px 8px",
// //                   borderRadius: "6px",
// //                   fontSize: "0.75rem",
// //                   fontWeight: 500,
// //                 }}
// //               >
// //                 {index + 1}
// //               </span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Resize Handle */}
// //         <div
// //           style={{
// //             position: "absolute",
// //             top: 0,
// //             right: 0,
// //             width: "4px",
// //             height: "100%",
// //             background: "transparent",
// //             cursor: "col-resize",
// //             zIndex: 10,
// //           }}
// //           onMouseDown={handleMouseDown}
// //           onMouseEnter={(e) => {
// //             e.target.style.background = colors.primary
// //             e.target.style.opacity = "0.5"
// //           }}
// //           onMouseLeave={(e) => {
// //             e.target.style.background = "transparent"
// //           }}
// //         />
// //       </div>

// //       {/* Main Flipbook */}
// //       <div
// //         style={{
// //           flex: 1,
// //           display: "flex",
// //           flexDirection: "column",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           padding: "2rem",
// //           position: "relative",
// //         }}
// //       >
// //         <div
// //           ref={flipBookRef}
// //           style={{
// //             width: "900px",
// //             height: "800px",
// //             position: "relative",
// //             perspective: "1500px",
// //             marginBottom: "1rem",
// //           }}
// //         >
// //           <div
// //             style={{
// //               position: "absolute",
// //               left: "50%",
// //               top: 0,
// //               width: "6px",
// //               height: "100%",
// //               background: `linear-gradient(to bottom, ${colors.secondary}, ${colors.textMedium})`,
// //               transform: "translateX(-50%)",
// //               zIndex: 10,
// //               borderRadius: "3px",
// //               boxShadow: `0 0 10px ${colors.shadowLight}`,
// //             }}
// //           ></div>

// //           {/* Left Page */}
// //           <div
// //             style={{
// //               position: "absolute",
// //               width: "50%",
// //               height: "100%",
// //               background: colors.backgroundWhite,
// //               border: `1px solid ${colors.borderLight}`,
// //               boxShadow: `0 8px 32px ${colors.shadowMedium}`,
// //               overflow: "hidden",
// //               left: 0,
// //               borderTopLeftRadius: "12px",
// //               borderBottomLeftRadius: "12px",
// //             }}
// //           >
// //             {getCurrentLeftPage() && getCurrentLeftPage().content}
// //           </div>

// //           {/* Right Page */}
// //           <div
// //             style={{
// //               position: "absolute",
// //               width: "50%",
// //               height: "100%",
// //               background: colors.backgroundWhite,
// //               border: `1px solid ${colors.borderLight}`,
// //               boxShadow: `0 8px 32px ${colors.shadowMedium}`,
// //               overflow: "hidden",
// //               right: 0,
// //               borderTopRightRadius: "12px",
// //               borderBottomRightRadius: "12px",
// //             }}
// //           >
// //             {getCurrentRightPage() && getCurrentRightPage().content}
// //           </div>

// //           {/* Flipping Page */}
// //           {isFlipping && (
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 width: "50%",
// //                 height: "100%",
// //                 background: colors.backgroundWhite,
// //                 border: `1px solid ${colors.borderLight}`,
// //                 boxShadow: `0 8px 32px ${colors.shadowMedium}`,
// //                 overflow: "hidden",
// //                 zIndex: 20,
// //                 transformStyle: "preserve-3d",
// //                 transition: "transform 0.6s ease-in-out",
// //                 ...(flipDirection === "next"
// //                   ? {
// //                       right: 0,
// //                       transformOrigin: "left center",
// //                       animation: "flipNext 0.6s ease-in-out",
// //                     }
// //                   : {
// //                       left: 0,
// //                       transformOrigin: "right center",
// //                       animation: "flipPrev 0.6s ease-in-out",
// //                     }),
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   position: "absolute",
// //                   width: "100%",
// //                   height: "100%",
// //                   backfaceVisibility: "hidden",
// //                 }}
// //               >
// //                 {flipDirection === "next" && getCurrentRightPage() && getCurrentRightPage().content}
// //                 {flipDirection === "prev" && getPrevLeftPage() && getPrevLeftPage().content}
// //               </div>
// //               <div
// //                 style={{
// //                   position: "absolute",
// //                   width: "100%",
// //                   height: "100%",
// //                   backfaceVisibility: "hidden",
// //                   transform: "rotateY(180deg)",
// //                 }}
// //               >
// //                 {flipDirection === "next" && getNextRightPage() && getNextRightPage().content}
// //                 {flipDirection === "prev" && getCurrentLeftPage() && getCurrentLeftPage().content}
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Compact Navigation */}
// //         <div
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             gap: "1rem",
// //             background: "rgba(255, 255, 255, 0.95)",
// //             backdropFilter: "blur(20px)",
// //             padding: "0.5rem 1rem",
// //             borderRadius: "30px",
// //             boxShadow: `0 4px 16px ${colors.shadowMedium}`,
// //             border: `1px solid ${colors.borderLight}`,
// //           }}
// //         >
// //           <button
// //             style={{
// //               background:
// //                 currentSpread === 0
// //                   ? colors.secondary
// //                   : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //               color: "white",
// //               border: "none",
// //               padding: "0.5rem 1rem",
// //               borderRadius: "15px",
// //               cursor: currentSpread === 0 ? "not-allowed" : "pointer",
// //               fontWeight: 600,
// //               fontSize: "0.8rem",
// //               transition: "all 0.3s ease",
// //               boxShadow: currentSpread === 0 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
// //               minWidth: "40px",
// //               height: "32px",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //             onClick={prevSpread}
// //             disabled={currentSpread === 0}
// //             onMouseEnter={(e) => {
// //               if (currentSpread !== 0) {
// //                 e.target.style.transform = "translateY(-1px)"
// //                 e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.4)"
// //               }
// //             }}
// //             onMouseLeave={(e) => {
// //               if (currentSpread !== 0) {
// //                 e.target.style.transform = "translateY(0)"
// //                 e.target.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.3)"
// //               }
// //             }}
// //           >
// //             ←
// //           </button>

// //           <div
// //             style={{
// //               color: colors.textDark,
// //               fontWeight: 600,
// //               fontSize: "0.8rem",
// //               padding: "0 0.5rem",
// //             }}
// //           >
// //             {currentSpread * 2 + 1}-{Math.min(currentSpread * 2 + 2, pages.length)} / {pages.length}
// //           </div>

// //           <button
// //             style={{
// //               background:
// //                 currentSpread >= totalSpreads - 1
// //                   ? colors.secondary
// //                   : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //               color: "white",
// //               border: "none",
// //               padding: "0.5rem 1rem",
// //               borderRadius: "15px",
// //               cursor: currentSpread >= totalSpreads - 1 ? "not-allowed" : "pointer",
// //               fontWeight: 600,
// //               fontSize: "0.8rem",
// //               transition: "all 0.3s ease",
// //               boxShadow: currentSpread >= totalSpreads - 1 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
// //               minWidth: "40px",
// //               height: "32px",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //             onClick={nextSpread}
// //             disabled={currentSpread >= totalSpreads - 1}
// //             onMouseEnter={(e) => {
// //               if (currentSpread < totalSpreads - 1) {
// //                 e.target.style.transform = "translateY(-1px)"
// //                 e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.4)"
// //               }
// //             }}
// //             onMouseLeave={(e) => {
// //               if (currentSpread < totalSpreads - 1) {
// //                 e.target.style.transform = "translateY(0)"
// //                 e.target.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.3)"
// //               }
// //             }}
// //           >
// //             →
// //           </button>
// //         </div>
// //       </div>

// //       {/* Product Gallery Modal */}
// //       {selectedProduct && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             top: 0,
// //             left: 0,
// //             right: 0,
// //             bottom: 0,
// //             background: "rgba(30, 41, 59, 0.95)",
// //             backdropFilter: "blur(10px)",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             zIndex: 1000,
// //             padding: "2rem",
// //           }}
// //           onClick={() => setSelectedProduct(null)}
// //         >
// //           <div
// //             style={{
// //               background: colors.backgroundWhite,
// //               borderRadius: "20px",
// //               maxWidth: "90vw",
// //               maxHeight: "90vh",
// //               overflowY: "auto",
// //               position: "relative",
// //               padding: "3rem",
// //               boxShadow: `0 25px 50px ${colors.shadowMedium}`,
// //               border: `1px solid ${colors.borderLight}`,
// //             }}
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <button
// //               style={{
// //                 position: "absolute",
// //                 top: "1.5rem",
// //                 right: "1.5rem",
// //                 background: colors.textMedium,
// //                 color: "white",
// //                 border: "none",
// //                 width: "44px",
// //                 height: "44px",
// //                 borderRadius: "50%",
// //                 fontSize: "1.5rem",
// //                 cursor: "pointer",
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 zIndex: 10,
// //                 transition: "all 0.2s ease",
// //               }}
// //               onClick={() => setSelectedProduct(null)}
// //               onMouseEnter={(e) => {
// //                 e.target.style.background = colors.textDark
// //                 e.target.style.transform = "scale(1.05)"
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.target.style.background = colors.textMedium
// //                 e.target.style.transform = "scale(1)"
// //               }}
// //             >
// //               ×
// //             </button>

// //             <div
// //               style={{
// //                 textAlign: "center",
// //                 marginBottom: "2.5rem",
// //                 paddingRight: "4rem",
// //               }}
// //             >
// //               <h2
// //                 style={{
// //                   fontSize: "2.5rem",
// //                   color: colors.textDark,
// //                   margin: "0 0 0.75rem 0",
// //                   fontWeight: 700,
// //                 }}
// //               >
// //                 {selectedProduct.name}
// //               </h2>
// //               <p
// //                 style={{
// //                   fontSize: "1.75rem",
// //                   color: colors.primary,
// //                   fontWeight: 700,
// //                   margin: "0 0 1rem 0",
// //                 }}
// //               >
// //                 {selectedProduct.price}
// //               </p>
// //               <p
// //                 style={{
// //                   color: colors.textMedium,
// //                   fontSize: "1.125rem",
// //                   margin: 0,
// //                   lineHeight: 1.6,
// //                 }}
// //               >
// //                 {selectedProduct.description}
// //               </p>
// //             </div>

// //             <div
// //               style={{
// //                 display: "grid",
// //                 gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
// //                 gap: "2rem",
// //               }}
// //             >
// //               {selectedProduct.gallery.map((image, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     borderRadius: "16px",
// //                     overflow: "hidden",
// //                     boxShadow: `0 8px 24px ${colors.shadowLight}`,
// //                     border: `1px solid ${colors.borderLight}`,
// //                   }}
// //                 >
// //                   <img
// //                     src={image || "/placeholder.svg"}
// //                     alt={`${selectedProduct.name} view ${index + 1}`}
// //                     style={{
// //                       width: "100%",
// //                       height: "300px",
// //                       objectFit: "cover",
// //                       transition: "transform 0.3s ease",
// //                     }}
// //                     onMouseEnter={(e) => {
// //                       e.target.style.transform = "scale(1.05)"
// //                     }}
// //                     onMouseLeave={(e) => {
// //                       e.target.style.transform = "scale(1)"
// //                     }}
// //                   />
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Add CSS animations via style tag */}
// //       <style jsx>{`
// //         @keyframes flipNext {
// //           0% { transform: rotateY(0deg); }
// //           100% { transform: rotateY(-180deg); }
// //         }
// //         @keyframes flipPrev {
// //           0% { transform: rotateY(0deg); }
// //           100% { transform: rotateY(180deg); }
// //         }
        
// //         @media (max-width: 1600px) {
// //           .book { width: 1100px !important; height: 950px !important; }
// //         }
// //         @media (max-width: 1400px) {
// //           .book { width: 1000px !important; height: 850px !important; }
// //         }
// //         @media (max-width: 1200px) {
// //           .book { width: 900px !important; height: 750px !important; }
// //         }
// //         @media (max-width: 1024px) {
// //           .book { width: 800px !important; height: 650px !important; }
// //         }
// //         @media (max-width: 768px) {
// //           .flipbook-container { flex-direction: column !important; }
// //           .sidebar { width: 100% !important; height: 120px !important; flex-direction: row !important; overflow-x: auto !important; }
// //           .book { width: 90vw !important; height: 67.5vw !important; max-width: 750px !important; max-height: 562px !important; }
// //         }
// //       `}</style>
// //     </div>
// //   )
// // }

// // export default FlipBook
// // "use client"

// // import { useState, useRef, useCallback, useEffect } from "react"

// // const FlipBook = () => {
// //   const [isOpen, setIsOpen] = useState(false)
// //   const [currentSpread, setCurrentSpread] = useState(0)
// //   const [selectedProduct, setSelectedProduct] = useState(null)
// //   const [isFlipping, setIsFlipping] = useState(false)
// //   const [flipDirection, setFlipDirection] = useState("")
// //   const [sidebarWidth, setSidebarWidth] = useState(300)
// //   const [isResizing, setIsResizing] = useState(false)
// //   const flipBookRef = useRef(null)
// //   const [windowWidth, setWindowWidth] = useState(1024) // Default to desktop width

// //   // Color palette
// //   const colors = {
// //     primary: "#3b82f6",
// //     primaryLight: "#dbeafe",
// //     secondary: "#64748b",
// //     accent: "#06b6d4",
// //     textDark: "#1e293b",
// //     textMedium: "#475569",
// //     textLight: "#64748b",
// //     backgroundLight: "#f8fafc",
// //     backgroundWhite: "#ffffff",
// //     borderLight: "#e2e8f0",
// //     shadowLight: "rgba(15, 23, 42, 0.08)",
// //     shadowMedium: "rgba(15, 23, 42, 0.12)",
// //   }

// //   // Sample product data
// //   const products = [
// //     {
// //       id: 1,
// //       name: "Ceramic Planter Black",
// //       image: "/placeholder.svg?height=300&width=300",
// //       gallery: [
// //         "/placeholder.svg?height=500&width=500",
// //         "/placeholder.svg?height=500&width=500",
// //         "/placeholder.svg?height=500&width=500",
// //       ],
// //       price: "$45.99",
// //       description: "Elegant black ceramic planter with modern design",
// //     },
// //     {
// //       id: 2,
// //       name: "Ceramic Planter Blue",
// //       image: "/placeholder.svg?height=300&width=300",
// //       gallery: [
// //         "/placeholder.svg?height=500&width=500",
// //         "/placeholder.svg?height=500&width=500",
// //         "/placeholder.svg?height=500&width=500",
// //       ],
// //       price: "$42.99",
// //       description: "Beautiful blue ceramic planter with glossy finish",
// //     },
// //     {
// //       id: 3,
// //       name: "Ceramic Planter Green",
// //       image: "/placeholder.svg?height=300&width=300",
// //       gallery: [
// //         "/placeholder.svg?height=500&width=500",
// //         "/placeholder.svg?height=500&width=500",
// //         "/placeholder.svg?height=500&width=500",
// //       ],
// //       price: "$48.99",
// //       description: "Natural green ceramic planter perfect for herbs",
// //     },
// //     {
// //       id: 4,
// //       name: "Ceramic Bowl Black",
// //       image: "/placeholder.svg?height=300&width=300",
// //       gallery: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
// //       price: "$28.99",
// //       description: "Sleek black ceramic bowl for modern dining",
// //     },
// //     {
// //       id: 5,
// //       name: "Ceramic Bowl Blue",
// //       image: "/placeholder.svg?height=300&width=300",
// //       gallery: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
// //       price: "$26.99",
// //       description: "Vibrant blue ceramic bowl with artistic patterns",
// //     },
// //     {
// //       id: 6,
// //       name: "Ceramic Bowl Green",
// //       image: "/placeholder.svg?height=300&width=300",
// //       gallery: ["/placeholder.svg?height=500&width=500", "/placeholder.svg?height=500&width=500"],
// //       price: "$29.99",
// //       description: "Earthy green ceramic bowl with natural texture",
// //     },
// //   ]

// //   const pages = [
// //     // Page 0 - Cover Page
// //     {
// //       type: "cover",
// //       content: (
// //         <div
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             padding: 0,
// //             position: "relative",
// //             overflow: "hidden",
// //           }}
// //         >
// //           <div
// //             style={{
// //               width: "100%",
// //               height: "100%",
// //               background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #e2e8f0 100%)",
// //               position: "relative",
// //             }}
// //           >
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 top: 0,
// //                 left: 0,
// //                 right: 0,
// //                 bottom: 0,
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 padding: "clamp(1rem, 3vw, 3rem)",
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   textAlign: "center",
// //                   color: colors.textDark,
// //                   zIndex: 2,
// //                   width: "100%",
// //                   maxWidth: "85%",
// //                 }}
// //               >
// //                 <div
// //                   style={{
// //                     marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
// //                     display: "flex",
// //                     flexDirection: "column",
// //                     alignItems: "center",
// //                   }}
// //                 >
// //                   <img
// //                     src="/Vedic Jal.png"
// //                     alt="VedicJal Logo"
// //                     style={{
// //                       width: "clamp(60px, 8vw, 120px)",
// //                       height: "clamp(60px, 8vw, 120px)",
// //                       marginBottom: "clamp(0.5rem, 2vw, 1.5rem)",
// //                       borderRadius: "20px",
// //                       boxShadow: `0 8px 30px ${colors.shadowMedium}`,
// //                       border: `3px solid ${colors.backgroundWhite}`,
// //                     }}
// //                   />
// //                   <h1
// //                     style={{
// //                       fontSize: "clamp(1.5rem, 5vw, 4rem)",
// //                       fontWeight: 800,
// //                       margin: 0,
// //                       background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //                       WebkitBackgroundClip: "text",
// //                       WebkitTextFillColor: "transparent",
// //                       backgroundClip: "text",
// //                       letterSpacing: "-0.02em",
// //                       lineHeight: 0.9,
// //                       fontFamily: "Inter, sans-serif",
// //                     }}
// //                   >
// //                     VedicJal
// //                   </h1>
// //                 </div>
// //                 <div
// //                   style={{
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     margin: "clamp(1rem, 3vw, 2rem) 0",
// //                     gap: "clamp(0.5rem, 2vw, 1rem)",
// //                   }}
// //                 >
// //                   <div
// //                     style={{
// //                       width: "clamp(30px, 6vw, 60px)",
// //                       height: "2px",
// //                       background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //                       borderRadius: "1px",
// //                     }}
// //                   ></div>
                 
// //                   <div
// //                     style={{
// //                       width: "clamp(30px, 6vw, 60px)",
// //                       height: "2px",
// //                       background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //                       borderRadius: "1px",
// //                     }}
// //                   ></div>
// //                 </div>
// //                 <div style={{ marginTop: "clamp(1rem, 2.5vw, 2rem)" }}>
// //                   <h2
// //                     style={{
// //                       fontSize: "clamp(0.9rem, 2.5vw, 1.8rem)",
// //                       margin: 0,
// //                       fontWeight: 600,
// //                       color: colors.textDark,
// //                       lineHeight: 1.2,
// //                     }}
// //                   >
// //                     Premium Handcrafted
// //                   </h2>
// //                   {/* <h3
// //                     style={{
// //                       fontSize: "clamp(0.8rem, 2vw, 1.5rem)",
// //                       margin: "clamp(0.3rem, 1vw, 0.7rem) 0 0 0",
// //                       fontWeight: 400,
// //                       color: colors.textMedium,
// //                     }}
// //                   >
// //                     Ceramic Products
// //                   </h3> */}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ),
// //     },
// //     // Page 1 - Welcome
// //     {
// //       type: "welcome",
// //       content: (
// //         <div
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             padding: "clamp(1rem, 2.5vw, 2rem)",
// //             boxSizing: "border-box",
// //             display: "flex",
// //             flexDirection: "column",
// //             position: "relative",
// //             background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
// //             overflow: "hidden",
// //           }}
// //         >
// //           <div
// //             style={{
// //               height: "100%",
// //               display: "flex",
// //               flexDirection: "column",
// //               justifyContent: "center",
// //               alignItems: "center",
// //               textAlign: "center",
// //             }}
// //           >
// //             <div
// //               style={{
// //                 marginBottom: "clamp(1rem, 2vw, 1.5rem)",
// //                 maxWidth: "90%",
// //               }}
// //             >
// //               <h1
// //                 style={{
// //                   fontSize: "clamp(1rem, 2.5vw, 2.5rem)",
// //                   margin: 0,
// //                   fontWeight: 700,
// //                   lineHeight: 1.1,
// //                   fontFamily: "Inter, sans-serif",
// //                   background: "linear-gradient(90deg, #4F46E5, #06B6D4)",
// //                   WebkitBackgroundClip: "text",
// //                   WebkitTextFillColor: "transparent",
// //                   wordWrap: "break-word",
// //                   hyphens: "auto",
// //                 }}
// //               >
// //                 Welcome to VedicJal online brochure for customized range
// //               </h1>
// //               <div
// //                 style={{
// //                   width: "clamp(40px, 8vw, 80px)",
// //                   height: "3px",
// //                   background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //                   margin: "clamp(0.5rem, 1.5vw, 1rem) auto",
// //                   borderRadius: "3px",
// //                 }}
// //               ></div>
// //             </div>
// //           </div>
// //         </div>
// //       ),
// //     },
// //     // Page 2 - Our Workshop
// //     {
// //       type: "fullimage",
// //       content: (
// //         <div style={{ width: "100%", height: "100%", padding: 0, position: "relative", overflow: "hidden" }}>
// //           <img
// //             src="/page1.jpg"
// //             alt="Our Workshop"
// //             style={{
// //               width: "100%",
// //               height: "100%",
// //               objectFit: "cover",
// //             }}
// //           />
       
// //         </div>
// //       ),
// //     },
// //     // Page 3 - Full Page Image
// //     {
// //       type: "fullimage",
// //       content: (
// //         <div style={{ width: "100%", height: "100%", padding: 0, position: "relative", overflow: "hidden" }}>
// //           <img
// //             src="/page2.jpg"
// //             alt="Our Workshop"
// //             style={{
// //               width: "100%",
// //               height: "100%",
// //               objectFit: "cover",
// //             }}
// //           />
// //         </div>
// //       ),
// //     },
// //     // Page 4 - Full Page Image
// //     {
// //       type: "fullimage",
// //       content: (
// //         <div
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             padding: 0,
// //             position: "relative",
// //             overflow: "hidden",
// //           }}
// //         >
// //           <img
// //             src="/page3.jpg"
// //             alt="Our Collection"
// //             style={{
// //               width: "100%",
// //               height: "100%",
// //               objectFit: "cover",
// //             }}
// //           />
// //         </div>
// //       ),
// //     },
// //     // Page 5 - Products Gallery
// //   {
// //   type: "title",
// //   content: (
// //     <div
// //       style={{
// //         width: "100%",
// //         height: "100%",
// //         padding: "clamp(2rem, 4vw, 4rem)",
// //         boxSizing: "border-box",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
// //       }}
// //     >
// //       <h2
// //         style={{
// //           fontSize: "clamp(1.5rem, 5vw, 4rem)",
// //           color: colors.textDark,
// //           textAlign: "center",
// //           margin: 0,
// //           fontWeight: 700,
// //           lineHeight: 1.2,
// //           fontFamily: "Inter, sans-serif",
// //         }}
// //       >
// //         Our Premium Collection
// //       </h2>
// //     </div>
// //   ),
// // },
// // {
// //   type: "products-page-1",
// //   content: (
// //     <div
// //       style={{
// //         width: "100%",
// //         height: "100%",
// //         padding: "clamp(1rem, 2.5vw, 2rem)",
// //         boxSizing: "border-box",
// //         display: "grid",
// //         gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
// //         gap: "clamp(1rem, 2vw, 2rem)",
// //         background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
// //       }}
// //     >
// //       {products.slice(0, 4).map((product) => (
// //         <div
// //           key={product.id}
// //           style={{
// //             background: colors.backgroundWhite,
// //             borderRadius: "12px",
// //             overflow: "hidden",
// //             boxShadow: `0 4px 15px ${colors.shadowLight}`,
// //             transition: "all 0.3s ease",
// //             cursor: "pointer",
// //             border: `1px solid ${colors.borderLight}`,
// //           }}
// //           onClick={() => setSelectedProduct(product)}
// //           onMouseEnter={(e) => {
// //             e.currentTarget.style.transform = "translateY(-4px)"
// //             e.currentTarget.style.boxShadow = `0 8px 25px ${colors.shadowMedium}`
// //           }}
// //           onMouseLeave={(e) => {
// //             e.currentTarget.style.transform = "translateY(0)"
// //             e.currentTarget.style.boxShadow = `0 4px 15px ${colors.shadowLight}`
// //           }}
// //         >
// //           <img
// //             src={product.image || "/placeholder.svg"}
// //             alt={product.name}
// //             style={{
// //               width: "100%",
// //               height: "clamp(120px, 20vw, 180px)",
// //               objectFit: "cover",
// //             }}
// //           />
// //           <div style={{ padding: "clamp(0.7rem, 2vw, 1.3rem)" }}>
// //             <h3
// //               style={{
// //                 fontSize: "clamp(0.7rem, 1.8vw, 1.1rem)",
// //                 fontWeight: 600,
// //                 color: colors.textDark,
// //                 marginBottom: "0.5rem",
// //               }}
// //             >
// //               {product.name}
// //             </h3>
// //             <p
// //               style={{
// //                 fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
// //                 fontWeight: 700,
// //                 color: colors.primary,
// //                 marginBottom: "0.5rem",
// //               }}
// //             >
// //               {product.price}
// //             </p>
// //             <p
// //               style={{
// //                 fontSize: "clamp(0.6rem, 1.5vw, 0.85rem)",
// //                 color: colors.textLight,
// //                 overflow: "hidden",
// //                 textOverflow: "ellipsis",
// //                 display: "-webkit-box",
// //                 WebkitLineClamp: 2,
// //                 WebkitBoxOrient: "vertical",
// //               }}
// //             >
// //               {product.description}
// //             </p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   ),
// // },
// // {
// //   type: "products-page-2",
// //   content: (
// //     <div
// //       style={{
// //         width: "100%",
// //         height: "100%",
// //         padding: "clamp(1rem, 2.5vw, 2rem)",
// //         boxSizing: "border-box",
// //         display: "grid",
// //         gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
// //         gap: "clamp(1rem, 2vw, 2rem)",
// //         background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
// //       }}
// //     >
// //       {products.slice(4, 8).map((product) => (
// //         <div
// //           key={product.id}
// //           style={{
// //             background: colors.backgroundWhite,
// //             borderRadius: "12px",
// //             overflow: "hidden",
// //             boxShadow: `0 4px 15px ${colors.shadowLight}`,
// //             transition: "all 0.3s ease",
// //             cursor: "pointer",
// //             border: `1px solid ${colors.borderLight}`,
// //           }}
// //           onClick={() => setSelectedProduct(product)}
// //           onMouseEnter={(e) => {
// //             e.currentTarget.style.transform = "translateY(-4px)"
// //             e.currentTarget.style.boxShadow = `0 8px 25px ${colors.shadowMedium}`
// //           }}
// //           onMouseLeave={(e) => {
// //             e.currentTarget.style.transform = "translateY(0)"
// //             e.currentTarget.style.boxShadow = `0 4px 15px ${colors.shadowLight}`
// //           }}
// //         >
// //           <img
// //             src={product.image || "/placeholder.svg"}
// //             alt={product.name}
// //             style={{
// //               width: "100%",
// //               height: "clamp(120px, 20vw, 180px)",
// //               objectFit: "cover",
// //             }}
// //           />
// //           <div style={{ padding: "clamp(0.7rem, 2vw, 1.3rem)" }}>
// //             <h3
// //               style={{
// //                 fontSize: "clamp(0.7rem, 1.8vw, 1.1rem)",
// //                 fontWeight: 600,
// //                 color: colors.textDark,
// //                 marginBottom: "0.5rem",
// //               }}
// //             >
// //               {product.name}
// //             </h3>
// //             <p
// //               style={{
// //                 fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
// //                 fontWeight: 700,
// //                 color: colors.primary,
// //                 marginBottom: "0.5rem",
// //               }}
// //             >
// //               {product.price}
// //             </p>
// //             <p
// //               style={{
// //                 fontSize: "clamp(0.6rem, 1.5vw, 0.85rem)",
// //                 color: colors.textLight,
// //                 overflow: "hidden",
// //                 textOverflow: "ellipsis",
// //                 display: "-webkit-box",
// //                 WebkitLineClamp: 2,
// //                 WebkitBoxOrient: "vertical",
// //               }}
// //             >
// //               {product.description}
// //             </p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   ),
// // },


// //   ]

// //   const totalSpreads = Math.ceil(pages.length / 2)

// //   const goToSpread = (spreadIndex) => {
// //     if (isFlipping || spreadIndex < 0 || spreadIndex >= totalSpreads) return
// //     const direction = spreadIndex > currentSpread ? "next" : "prev"
// //     setFlipDirection(direction)
// //     setIsFlipping(true)
// //     setTimeout(() => {
// //       setCurrentSpread(spreadIndex)
// //     }, 300)
// //     setTimeout(() => {
// //       setIsFlipping(false)
// //       setFlipDirection("")
// //     }, 600)
// //   }

// //   const nextSpread = () => {
// //     if (currentSpread < totalSpreads - 1) {
// //       goToSpread(currentSpread + 1)
// //     }
// //   }

// //   const prevSpread = () => {
// //     if (currentSpread > 0) {
// //       goToSpread(currentSpread - 1)
// //     }
// //   }

// //   const openFlipBook = () => {
// //     setIsOpen(true)
// //   }

// //   const closeFlipBook = () => {
// //     setIsOpen(false)
// //     setCurrentSpread(0)
// //   }

// //   const getCurrentLeftPage = () => {
// //     return pages[currentSpread * 2]
// //   }

// //   const getCurrentRightPage = () => {
// //     return pages[currentSpread * 2 + 1]
// //   }

// //   const getNextRightPage = () => {
// //     return pages[(currentSpread + 1) * 2 + 1]
// //   }

// //   const getPrevLeftPage = () => {
// //     return pages[(currentSpread - 1) * 2]
// //   }

// //   // Sidebar resize handlers
// //   const handleMouseDown = useCallback((e) => {
// //     setIsResizing(true)
// //     e.preventDefault()
// //   }, [])

// //   const handleMouseMove = useCallback(
// //     (e) => {
// //       if (!isResizing) return
// //       const newWidth = e.clientX
// //       if (newWidth >= 250 && newWidth <= 400) {
// //         setSidebarWidth(newWidth)
// //       }
// //     },
// //     [isResizing],
// //   )

// //   const handleMouseUp = useCallback(() => {
// //     setIsResizing(false)
// //   }, [])

// //   // Add event listeners for resize
// //   useEffect(() => {
// //     if (isResizing) {
// //       document.addEventListener("mousemove", handleMouseMove)
// //       document.addEventListener("mouseup", handleMouseUp)
// //       return () => {
// //         document.removeEventListener("mousemove", handleMouseMove)
// //         document.removeEventListener("mouseup", handleMouseUp)
// //       }
// //     }
// //   }, [isResizing, handleMouseMove, handleMouseUp])

// //   // Handle window resize
// //   useEffect(() => {
// //     const handleResize = () => {
// //       setWindowWidth(window.innerWidth)
// //     }

// //     // Set initial width
// //     if (typeof window !== "undefined") {
// //       setWindowWidth(window.innerWidth)
// //       window.addEventListener("resize", handleResize)

// //       return () => {
// //         window.removeEventListener("resize", handleResize)
// //       }
// //     }
// //   }, [])

// //   if (!isOpen) {
// //     return (
// //       <div
// //         style={{
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           minHeight: "100vh",
// //           background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
// //           padding: "2rem",
// //         }}
// //       >
// //         <div
// //           style={{
// //             textAlign: "center",
// //             background: colors.backgroundWhite,
// //             padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)",
// //             borderRadius: "24px",
// //             boxShadow: `0 25px 50px ${colors.shadowLight}`,
// //             maxWidth: "450px",
// //             border: `1px solid ${colors.borderLight}`,
// //           }}
// //         >
// //           <div style={{ marginBottom: "1.5rem" }}>
// //             <img
// //               src="/placeholder.svg?height=80&width=80"
// //               alt="Catalog"
// //               style={{
// //                 width: "clamp(60px, 8vw, 100px)",
// //                 height: "clamp(60px, 8vw, 100px)",
// //                 borderRadius: "12px",
// //               }}
// //             />
// //           </div>
// //           <h2
// //             style={{
// //               color: colors.textDark,
// //               marginBottom: "0.75rem",
// //               fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
// //               fontWeight: 700,
// //               fontFamily: "Inter, sans-serif",
// //             }}
// //           >
// //             VedicJal Catalog
// //           </h2>
// //           <p
// //             style={{
// //               color: colors.textMedium,
// //               marginBottom: "2.5rem",
// //               fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
// //               lineHeight: 1.6,
// //             }}
// //           >
// //             Explore our premium ceramic collection
// //           </p>
// //           <button
// //             style={{
// //               background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //               color: "white",
// //               border: "none",
// //               padding: "clamp(1rem, 2.5vw, 1.25rem) clamp(1.5rem, 4vw, 2.5rem)",
// //               borderRadius: "50px",
// //               fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
// //               fontWeight: 600,
// //               cursor: "pointer",
// //               transition: "all 0.3s ease",
// //               display: "flex",
// //               alignItems: "center",
// //               gap: "0.75rem",
// //               margin: "0 auto",
// //               boxShadow: "0 4px 14px rgba(59, 130, 246, 0.3)",
// //             }}
// //             onClick={openFlipBook}
// //             onMouseEnter={(e) => {
// //               e.target.style.transform = "translateY(-2px)"
// //               e.target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)"
// //             }}
// //             onMouseLeave={(e) => {
// //               e.target.style.transform = "translateY(0)"
// //               e.target.style.boxShadow = "0 4px 14px rgba(59, 130, 246, 0.3)"
// //             }}
// //           >
// //             <span>📖</span>
// //             Open Catalog
// //           </button>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         height: "100vh",
// //         background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
// //         fontFamily: "Inter, sans-serif",
// //         overflow: "hidden",
// //       }}
// //     >
// //       {/* Resizable Sidebar */}
// //       <div
// //         style={{
// //           width: `${sidebarWidth}px`,
// //           background: "rgba(255, 255, 255, 0.95)",
// //           backdropFilter: "blur(20px)",
// //           borderRight: `1px solid ${colors.borderLight}`,
// //           display: "flex",
// //           flexDirection: "column",
// //           overflowY: "auto",
// //           boxShadow: `4px 0 20px ${colors.shadowLight}`,
// //           position: "relative",
// //           minWidth: "250px",
// //           maxWidth: "400px",
// //         }}
// //       >
// //         <div
// //           style={{
// //             padding: "1.5rem",
// //             borderBottom: `1px solid ${colors.borderLight}`,
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //             background: colors.backgroundWhite,
// //           }}
// //         >
// //           <h3
// //             style={{
// //               margin: 0,
// //               color: colors.textDark,
// //               fontSize: "1.125rem",
// //               fontWeight: 600,
// //             }}
// //           >
// //             Pages
// //           </h3>
// //           <button
// //             style={{
// //               background: "none",
// //               border: "none",
// //               fontSize: "1.5rem",
// //               cursor: "pointer",
// //               color: colors.textMedium,
// //               padding: "0.5rem",
// //               width: "36px",
// //               height: "36px",
// //               borderRadius: "50%",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               transition: "all 0.2s ease",
// //             }}
// //             onClick={closeFlipBook}
// //             onMouseEnter={(e) => {
// //               e.target.style.background = colors.primaryLight
// //               e.target.style.color = colors.primary
// //             }}
// //             onMouseLeave={(e) => {
// //               e.target.style.background = "none"
// //               e.target.style.color = colors.textMedium
// //             }}
// //           >
// //             ×
// //           </button>
// //         </div>
// //         <div
// //           style={{
// //             flex: 1,
// //             padding: "1rem",
// //             background: colors.backgroundLight,
// //           }}
// //         >
// //           {pages.map((page, index) => (
// //             <div
// //               key={index}
// //               style={{
// //                 marginBottom: "0.75rem",
// //                 border:
// //                   Math.floor(index / 2) === currentSpread ? `2px solid ${colors.primary}` : "2px solid transparent",
// //                 borderRadius: "12px",
// //                 overflow: "hidden",
// //                 cursor: "pointer",
// //                 transition: "all 0.3s ease",
// //                 position: "relative",
// //                 background: colors.backgroundWhite,
// //                 boxShadow:
// //                   Math.floor(index / 2) === currentSpread
// //                     ? `0 4px 20px rgba(59, 130, 246, 0.25)`
// //                     : `0 2px 8px ${colors.shadowLight}`,
// //                 transform: "scale(1)",
// //               }}
// //               onClick={() => goToSpread(Math.floor(index / 2))}
// //               onMouseEnter={(e) => {
// //                 if (Math.floor(index / 2) !== currentSpread) {
// //                   e.target.style.borderColor = colors.primary
// //                   e.target.style.transform = "scale(1.02)"
// //                   e.target.style.boxShadow = `0 4px 16px ${colors.shadowMedium}`
// //                 }
// //               }}
// //               onMouseLeave={(e) => {
// //                 if (Math.floor(index / 2) !== currentSpread) {
// //                   e.target.style.borderColor = "transparent"
// //                   e.target.style.transform = "scale(1)"
// //                   e.target.style.boxShadow = `0 2px 8px ${colors.shadowLight}`
// //                 }
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   transform: "scale(0.15)",
// //                   transformOrigin: "top left",
// //                   width: "666.67%",
// //                   height: "666.67%",
// //                   pointerEvents: "none",
// //                 }}
// //               >
// //                 {page.content}
// //               </div>
// //               <span
// //                 style={{
// //                   position: "absolute",
// //                   bottom: "6px",
// //                   right: "6px",
// //                   background: colors.textDark,
// //                   color: "white",
// //                   padding: "4px 8px",
// //                   borderRadius: "6px",
// //                   fontSize: "0.75rem",
// //                   fontWeight: 500,
// //                 }}
// //               >
// //                 {index + 1}
// //               </span>
// //             </div>
// //           ))}
// //         </div>
// //         {/* Resize Handle */}
// //         <div
// //           style={{
// //             position: "absolute",
// //             top: 0,
// //             right: 0,
// //             width: "4px",
// //             height: "100%",
// //             background: "transparent",
// //             cursor: "col-resize",
// //             zIndex: 10,
// //           }}
// //           onMouseDown={handleMouseDown}
// //           onMouseEnter={(e) => {
// //             e.target.style.background = colors.primary
// //             e.target.style.opacity = "0.5"
// //           }}
// //           onMouseLeave={(e) => {
// //             e.target.style.background = "transparent"
// //           }}
// //         />
// //       </div>

// //       {/* Main Flipbook */}
// //       <div
// //         style={{
// //           flex: 1,
// //           display: "flex",
// //           flexDirection: "column",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           padding: "clamp(1rem, 3vw, 2rem)",
// //           position: "relative",
// //           overflow: "hidden",
// //         }}
// //       >
// //         <div
// //           ref={flipBookRef}
// //           style={{
// //             width: "min(90vw, 95vh * 1.2)",
// //             height: "min(75vh, 90vw / 1.2)",
// //             maxWidth: "1400px",
// //             maxHeight: "900px",
// //             position: "relative",
// //             perspective: "1500px",
// //             marginBottom: "1rem",
// //           }}
// //         >
// //           <div
// //             style={{
// //               position: "absolute",
// //               left: "50%",
// //               top: 0,
// //               width: "6px",
// //               height: "100%",
// //               background: `linear-gradient(to bottom, ${colors.secondary}, ${colors.textMedium})`,
// //               transform: "translateX(-50%)",
// //               zIndex: 10,
// //               borderRadius: "3px",
// //               boxShadow: `0 0 10px ${colors.shadowLight}`,
// //             }}
// //           ></div>
// //           {/* Left Page */}
// //           <div
// //             style={{
// //               position: "absolute",
// //               width: "50%",
// //               height: "100%",
// //               background: colors.backgroundWhite,
// //               border: `1px solid ${colors.borderLight}`,
// //               boxShadow: `0 8px 32px ${colors.shadowMedium}`,
// //               overflow: "hidden",
// //               left: 0,
// //               borderTopLeftRadius: "12px",
// //               borderBottomLeftRadius: "12px",
// //             }}
// //           >
// //             {getCurrentLeftPage() && getCurrentLeftPage().content}
// //           </div>
// //           {/* Right Page */}
// //           <div
// //             style={{
// //               position: "absolute",
// //               width: "50%",
// //               height: "100%",
// //               background: colors.backgroundWhite,
// //               border: `1px solid ${colors.borderLight}`,
// //               boxShadow: `0 8px 32px ${colors.shadowMedium}`,
// //               overflow: "hidden",
// //               right: 0,
// //               borderTopRightRadius: "12px",
// //               borderBottomRightRadius: "12px",
// //             }}
// //           >
// //             {getCurrentRightPage() && getCurrentRightPage().content}
// //           </div>
// //           {/* Flipping Page */}
// //           {isFlipping && (
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 width: "50%",
// //                 height: "100%",
// //                 background: colors.backgroundWhite,
// //                 border: `1px solid ${colors.borderLight}`,
// //                 boxShadow: `0 8px 32px ${colors.shadowMedium}`,
// //                 overflow: "hidden",
// //                 zIndex: 20,
// //                 transformStyle: "preserve-3d",
// //                 transition: "transform 0.6s ease-in-out",
// //                 ...(flipDirection === "next"
// //                   ? {
// //                       right: 0,
// //                       transformOrigin: "left center",
// //                       animation: "flipNext 0.6s ease-in-out",
// //                     }
// //                   : {
// //                       left: 0,
// //                       transformOrigin: "right center",
// //                       animation: "flipPrev 0.6s ease-in-out",
// //                     }),
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   position: "absolute",
// //                   width: "100%",
// //                   height: "100%",
// //                   backfaceVisibility: "hidden",
// //                 }}
// //               >
// //                 {flipDirection === "next" && getCurrentRightPage() && getCurrentRightPage().content}
// //                 {flipDirection === "prev" && getPrevLeftPage() && getPrevLeftPage().content}
// //               </div>
// //               <div
// //                 style={{
// //                   position: "absolute",
// //                   width: "100%",
// //                   height: "100%",
// //                   backfaceVisibility: "hidden",
// //                   transform: "rotateY(180deg)",
// //                 }}
// //               >
// //                 {flipDirection === "next" && getNextRightPage() && getNextRightPage().content}
// //                 {flipDirection === "prev" && getCurrentLeftPage() && getCurrentLeftPage().content}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //         {/* Compact Navigation */}
// //         <div
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             gap: "1rem",
// //             background: "rgba(255, 255, 255, 0.95)",
// //             backdropFilter: "blur(20px)",
// //             padding: "0.5rem 1rem",
// //             borderRadius: "30px",
// //             boxShadow: `0 4px 16px ${colors.shadowMedium}`,
// //             border: `1px solid ${colors.borderLight}`,
// //           }}
// //         >
// //           <button
// //             style={{
// //               background:
// //                 currentSpread === 0
// //                   ? colors.secondary
// //                   : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //               color: "white",
// //               border: "none",
// //               padding: "0.5rem 1rem",
// //               borderRadius: "15px",
// //               cursor: currentSpread === 0 ? "not-allowed" : "pointer",
// //               fontWeight: 600,
// //               fontSize: "0.8rem",
// //               transition: "all 0.3s ease",
// //               boxShadow: currentSpread === 0 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
// //               minWidth: "40px",
// //               height: "32px",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //             onClick={prevSpread}
// //             disabled={currentSpread === 0}
// //             onMouseEnter={(e) => {
// //               if (currentSpread !== 0) {
// //                 e.target.style.transform = "translateY(-1px)"
// //                 e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.4)"
// //               }
// //             }}
// //             onMouseLeave={(e) => {
// //               if (currentSpread !== 0) {
// //                 e.target.style.transform = "translateY(0)"
// //                 e.target.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.3)"
// //               }
// //             }}
// //           >
// //             ←
// //           </button>
// //           <div
// //             style={{
// //               color: colors.textDark,
// //               fontWeight: 600,
// //               fontSize: "0.8rem",
// //               padding: "0 0.5rem",
// //             }}
// //           >
// //             {currentSpread * 2 + 1}-{Math.min(currentSpread * 2 + 2, pages.length)} / {pages.length}
// //           </div>
// //           <button
// //             style={{
// //               background:
// //                 currentSpread >= totalSpreads - 1
// //                   ? colors.secondary
// //                   : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //               color: "white",
// //               border: "none",
// //               padding: "0.5rem 1rem",
// //               borderRadius: "15px",
// //               cursor: currentSpread >= totalSpreads - 1 ? "not-allowed" : "pointer",
// //               fontWeight: 600,
// //               fontSize: "0.8rem",
// //               transition: "all 0.3s ease",
// //               boxShadow: currentSpread >= totalSpreads - 1 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
// //               minWidth: "40px",
// //               height: "32px",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //             onClick={nextSpread}
// //             disabled={currentSpread >= totalSpreads - 1}
// //             onMouseEnter={(e) => {
// //               if (currentSpread < totalSpreads - 1) {
// //                 e.target.style.transform = "translateY(-1px)"
// //                 e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.4)"
// //               }
// //             }}
// //             onMouseLeave={(e) => {
// //               if (currentSpread < totalSpreads - 1) {
// //                 e.target.style.transform = "translateY(0)"
// //                 e.target.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.3)"
// //               }
// //             }}
// //           >
// //             →
// //           </button>
// //         </div>
// //       </div>

// //       {/* Product Gallery Modal */}
// //       {selectedProduct && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             top: 0,
// //             left: 0,
// //             right: 0,
// //             bottom: 0,
// //             background: "rgba(30, 41, 59, 0.95)",
// //             backdropFilter: "blur(10px)",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             zIndex: 1000,
// //             padding: "2rem",
// //           }}
// //           onClick={() => setSelectedProduct(null)}
// //         >
// //           <div
// //             style={{
// //               background: colors.backgroundWhite,
// //               borderRadius: "20px",
// //               maxWidth: "90vw",
// //               maxHeight: "90vh",
// //               overflowY: "auto",
// //               position: "relative",
// //               padding: "clamp(2rem, 4vw, 3rem)",
// //               boxShadow: `0 25px 50px ${colors.shadowMedium}`,
// //               border: `1px solid ${colors.borderLight}`,
// //             }}
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <button
// //               style={{
// //                 position: "absolute",
// //                 top: "1.5rem",
// //                 right: "1.5rem",
// //                 background: colors.textMedium,
// //                 color: "white",
// //                 border: "none",
// //                 width: "44px",
// //                 height: "44px",
// //                 borderRadius: "50%",
// //                 fontSize: "1.5rem",
// //                 cursor: "pointer",
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 zIndex: 10,
// //                 transition: "all 0.2s ease",
// //               }}
// //               onClick={() => setSelectedProduct(null)}
// //               onMouseEnter={(e) => {
// //                 e.target.style.background = colors.textDark
// //                 e.target.style.transform = "scale(1.05)"
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.target.style.background = colors.textMedium
// //                 e.target.style.transform = "scale(1)"
// //               }}
// //             >
// //               ×
// //             </button>
// //             <div
// //               style={{
// //                 textAlign: "center",
// //                 marginBottom: "2.5rem",
// //                 paddingRight: "4rem",
// //               }}
// //             >
// //               <h2
// //                 style={{
// //                   fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
// //                   color: colors.textDark,
// //                   margin: "0 0 0.75rem 0",
// //                   fontWeight: 700,
// //                 }}
// //               >
// //                 {selectedProduct.name}
// //               </h2>
// //               <p
// //                 style={{
// //                   fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
// //                   color: colors.primary,
// //                   fontWeight: 700,
// //                   margin: "0 0 1rem 0",
// //                 }}
// //               >
// //                 {selectedProduct.price}
// //               </p>
// //               <p
// //                 style={{
// //                   color: colors.textMedium,
// //                   fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
// //                   margin: 0,
// //                   lineHeight: 1.6,
// //                 }}
// //               >
// //                 {selectedProduct.description}
// //               </p>
// //             </div>
// //             <div
// //               style={{
// //                 display: "grid",
// //                 gridTemplateColumns: "repeat(auto-fit, minmax(clamp(250px, 30vw, 350px), 1fr))",
// //                 gap: "2rem",
// //               }}
// //             >
// //               {selectedProduct.gallery.map((image, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     borderRadius: "16px",
// //                     overflow: "hidden",
// //                     boxShadow: `0 8px 24px ${colors.shadowLight}`,
// //                     border: `1px solid ${colors.borderLight}`,
// //                   }}
// //                 >
// //                   <img
// //                     src={image || "/placeholder.svg"}
// //                     alt={`${selectedProduct.name} view ${index + 1}`}
// //                     style={{
// //                       width: "100%",
// //                       height: "clamp(200px, 25vw, 300px)",
// //                       objectFit: "cover",
// //                       transition: "transform 0.3s ease",
// //                     }}
// //                     onMouseEnter={(e) => {
// //                       e.target.style.transform = "scale(1.05)"
// //                     }}
// //                     onMouseLeave={(e) => {
// //                       e.target.style.transform = "scale(1)"
// //                     }}
// //                   />
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Add CSS animations via style tag */}
// //       <style jsx>{`
// //         @keyframes flipNext {
// //           0% { transform: rotateY(0deg); }
// //           100% { transform: rotateY(-180deg); }
// //         }
// //         @keyframes flipPrev {
// //           0% { transform: rotateY(0deg); }
// //           100% { transform: rotateY(180deg); }
// //         }

// //         @media (max-width: 768px) {
// //           .flipbook-container { 
// //             flex-direction: column !important; 
// //           }
// //           .sidebar { 
// //             width: 100% !important; 
// //             height: 120px !important; 
// //             flex-direction: row !important; 
// //             overflow-x: auto !important; 
// //             overflow-y: hidden !important;
// //           }
// //           .page-thumbnails {
// //             display: flex !important;
// //             flex-direction: row !important;
// //             gap: 0.5rem !important;
// //             padding: 0.5rem !important;
// //           }
// //           .thumbnail {
// //             flex: 0 0 80px !important;
// //             height: 60px !important;
// //             margin-bottom: 0 !important;
// //           }
// //           .resize-handle {
// //             display: none !important;
// //           }
// //         }

// //         @media (max-width: 480px) {
// //           .flipbook-main {
// //             padding: 0.5rem !important;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   )
// // }

// // export default FlipBook

// "use client";

// import { useState, useRef, useCallback, useEffect } from "react";

// const FlipBook = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentSpread, setCurrentSpread] = useState(0);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isFlipping, setIsFlipping] = useState(false);
//   const [flipDirection, setFlipDirection] = useState("");
//   const [sidebarWidth, setSidebarWidth] = useState(300);
//   const [isResizing, setIsResizing] = useState(false);
//   const flipBookRef = useRef(null);
//   const [windowWidth, setWindowWidth] = useState(1024);

//   // Color palette
//   const colors = {
//     primary: "#3b82f6",
//     primaryLight: "#dbeafe",
//     secondary: "#64748b",
//     accent: "#06b6d4",
//     textDark: "#1e293b",
//     textMedium: "#475569",
//     textLight: "#64748b",
//     backgroundLight: "#f8fafc",
//     backgroundWhite: "#ffffff",
//     borderLight: "#e2e8f0",
//     shadowLight: "rgba(15, 23, 42, 0.08)",
//     shadowMedium: "rgba(15, 23, 42, 0.12)",
//     shadowStrong: "rgba(15, 23, 42, 0.3)",
//   };

//   // Product data for galleries
//   const productData = {
//     "200ml": {
//       title: "200ml Water Bottles",
//       images: [
//         "/placeholder.svg?height=400&width=300&text=200ml+Bottle+1",
//         "/placeholder.svg?height=400&width=300&text=200ml+Bottle+2",
//         "/placeholder.svg?height=400&width=300&text=200ml+Bottle+3",
//         "/placeholder.svg?height=400&width=300&text=200ml+Bottle+4",
//       ],
//     },
//     "250ml": {
//       title: "250ml Water Bottles",
//       images: [
//         "/placeholder.svg?height=400&width=300&text=250ml+Bottle+1",
//         "/placeholder.svg?height=400&width=300&text=250ml+Bottle+2",
//         "/placeholder.svg?height=400&width=300&text=250ml+Bottle+3",
//         "/placeholder.svg?height=400&width=300&text=250ml+Bottle+4",
//       ],
//     },
//     "300ml": {
//       title: "300ml Water Bottles",
//       images: [
//         "/placeholder.svg?height=400&width=300&text=300ml+Bottle+1",
//         "/placeholder.svg?height=400&width=300&text=300ml+Bottle+2",
//         "/placeholder.svg?height=400&width=300&text=300ml+Bottle+3",
//         "/placeholder.svg?height=400&width=300&text=300ml+Bottle+4",
//       ],
//     },
//     "500ml": {
//       title: "500ml Water Bottles",
//       images: [
//         "/placeholder.svg?height=400&width=300&text=500ml+Bottle+1",
//         "/placeholder.svg?height=400&width=300&text=500ml+Bottle+2",
//         "/placeholder.svg?height=400&width=300&text=500ml+Bottle+3",
//         "/placeholder.svg?height=400&width=300&text=500ml+Bottle+4",
//       ],
//     },
//     "700ml": {
//       title: "700ml Water Bottles",
//       images: [
//         "/placeholder.svg?height=400&width=300&text=700ml+Bottle+1",
//         "/placeholder.svg?height=400&width=300&text=700ml+Bottle+2",
//         "/placeholder.svg?height=400&width=300&text=700ml+Bottle+3",
//         "/placeholder.svg?height=400&width=300&text=700ml+Bottle+4",
//       ],
//     },
//     "1liter": {
//       title: "1 Liter Water Bottles",
//       images: [
//         "/placeholder.svg?height=400&width=300&text=1L+Bottle+1",
//         "/placeholder.svg?height=400&width=300&text=1L+Bottle+3",
//         "/placeholder.svg?height=400&width=300&text=1L+Bottle+2",
//         "/placeholder.svg?height=400&width=300&text=1L+Bottle+4",
//       ],
//     },
//     "bio-200ml": {
//       title: "Biodegradable 200ml",
//       images: [
//         "/placeholder.svg?height=400&width=300&text=Bio+200ml+1",
//         "/placeholder.svg?height=400&width=300&text=Bio+200ml+2",
//         "/placeholder.svg?height=400&width=300&text=Bio+200ml+3",
//         "/placeholder.svg?height=400&width=300&text=Bio+200ml+4",
//       ],
//     },
//     "bio-250ml": {
//       title: "Biodegradable 250ml",
//       images: [
//         "/placeholder.svg?height=400&width=300&text=Bio+250ml+1",
//         "/placeholder.svg?height=400&width=300&text=Bio+250ml+2",
//         "/placeholder.svg?height=400&width=300&text=Bio+250ml+3",
//         "/placeholder.svg?height=400&width=300&text=Bio+250ml+4",
//       ],
//     },
//     "bio-300ml": {
//       title: "Biodegradable 300ml",
//       images: [
//         "/placeholder.svg?height=400&width=300&text=Bio+300ml+1",
//         "/placeholder.svg?height=400&width=300&text=Bio+300ml+2",
//         "/placeholder.svg?height=400&width=300&text=Bio+300ml+3",
//         "/placeholder.svg?height=400&width=300&text=Bio+300ml+4",
//       ],
//     },
//     "bio-500ml": {
//       title: "Biodegradable 500ml",
//       images: [
//         "/placeholder.svg?height=400&width=300&text=Bio+500ml+1",
//         "/placeholder.svg?height=400&width=300&text=Bio+500ml+2",
//         "/placeholder.svg?height=400&width=300&text=Bio+500ml+3",
//         "/placeholder.svg?height=400&width=300&text=Bio+500ml+4",
//       ],
//     },
//   };

//   // Open product gallery
//   const openProductGallery = (productId) => {
//     setSelectedProduct(productId);
//   };

//   // Close gallery
//   const closeGallery = () => {
//     setSelectedProduct(null);
//   };

//   const pages = [
//     // Page 0 - Cover Page (CLOSED BOOK - SINGLE PAGE)
//     {
//       type: "cover",
//       isClosedBook: true,
//       content: (
//         <div
//           style={{
//             width: "100%",
//             height: "100%",
//             padding: 0,
//             position: "relative",
//             overflow: "hidden",
//             background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)",
//             border: "1px solid #e2e8f0",
//             borderRadius: "12px",
//             boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           {/* Decorative elements */}
//           <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(56,182,255,0.1) 100%)", transform: "skewY(-4deg)", transformOrigin: "top left" }} />
//           <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(135deg, rgba(56,182,255,0.1) 0%, rgba(14,165,233,0.15) 100%)", transform: "skewY(4deg)", transformOrigin: "bottom right" }} />
//           <div style={{ position: "absolute", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, rgba(14,165,233,0) 70%)", top: "18%", left: "8%" }} />
//           <div style={{ position: "absolute", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,182,255,0.08) 0%, rgba(56,182,255,0) 70%)", bottom: "12%", right: "8%" }} />

//           {/* Main content */}
//           <div style={{ position: "relative", zIndex: 2, padding: "1.5rem 1.5rem", textAlign: "center", maxWidth: "800px", width: "90%" }}>
            
//             {/* Logo and title */}
//             <div style={{ marginBottom: "0.75rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
//               <img
//                 src="/Vedic Jal.png"
//                 alt="VedicJal Logo"
//                 style={{
//                   width: "100px",
//                   height: "100px",
//                   borderRadius: "16px",
//                   boxShadow: "0 4px 14px rgba(2,132,199,0.2)",
//                   border: "3px solid white",
//                   background: "white",
//                   marginBottom: "0.4rem",
//                 }}
//               />
//               <h1 style={{ fontSize: "2.2rem", fontWeight: 700, margin: "0 0 0.4rem 0", color: "#0369a1", fontFamily: "'Georgia', serif" }}>
//                 VedicJal
//               </h1>
//               <p style={{ fontSize: "1rem", color: "#0ea5e9", margin: 0, fontWeight: 500 }}>
//                 Pure Water, Pure Life
//               </p>
//             </div>

//             {/* Welcome Box */}
//             <div style={{
//               background: "rgba(255,255,255,0.75)",
//               backdropFilter: "blur(8px)",
//               borderRadius: "12px",
//               padding: "0.9rem",
//               marginTop: "0.8rem",
//               marginBottom: "0.8rem",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
//               border: "1px solid rgba(224,242,254,0.8)"
//             }}>
//               <h2 style={{
//                 fontSize: "1.5rem",
//                 fontWeight: 600,
//                 color: "#075985",
//                 fontFamily: "'Georgia', serif",
//                 margin: 0
//               }}>
//                 Welcome to vedicjal online brochure for customized range
//               </h2>
//             </div>

//             {/* Divider */}
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0.6rem 0" }}>
//               <div style={{ height: "2px", flex: 1, background: "linear-gradient(90deg, rgba(2,132,199,0) 0%, rgba(2,132,199,0.5) 100%)" }} />
//               <div style={{ height: "2px", flex: 1, background: "linear-gradient(90deg, rgba(2,132,199,0.5) 0%, rgba(2,132,199,0) 100%)" }} />
//             </div>

//             {/* Footer text */}
//             <p style={{
//               fontSize: "0.88rem",
//               color: "#64748b",
//               fontStyle: "italic",
//               margin: 0,
//               marginTop: "0.5rem",
//             }}>
//               "Bringing purity to your hands"
//             </p>
//           </div>
//         </div>
//       )
//     },

//     // Page 1 - Full-fit Image
//     {
//       type: "fullimage-left",
//       content: (
//         <div style={{ width: "100%", height: "100%", padding: 0, position: "relative", overflow: "hidden" }}>
//           <img
//             src="/page1.jpg"
//             alt="VedicJal Workshop - Page 1"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//             }}
//           />
//         </div>
//       ),
//     },

//     // Page 2 - Full-fit Image
//     {
//       type: "fullimage-right",
//       content: (
//         <div style={{ width: "100%", height: "100%", padding: 0, position: "relative", overflow: "hidden" }}>
//           <img
//             src="/page2.jpg"
//             alt="VedicJal Workshop - Page 2"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//             }}
//           />
//         </div>
//       ),
//     },

//     // Page 3 - INDEX PAGE
//     {
//       type: "index",
//       content: (
//         <div
//           style={{
//             width: "100%",
//             height: "100%",
//             padding: "2vh 4vw",
//             boxSizing: "border-box",
//             background: "#ffffff",
//             fontFamily: "Georgia, serif",
//             display: "flex",
//             flexDirection: "column",
//             overflow: "auto",
//           }}
//         >
//           {/* Header */}
//           <div style={{ textAlign: "center", marginBottom: "1.5vh" }}>
//             <h1
//               style={{
//                 fontSize: "clamp(24px, 4vw, 36px)",
//                 color: "#8B4513",
//                 margin: "0 0 0.5vh 0",
//                 fontWeight: "bold",
//               }}
//             >
//               INDEX
//             </h1>
//             <div
//               style={{
//                 width: "80px",
//                 height: "2px",
//                 background: "#8B4513",
//                 margin: "0 auto 0.5vh",
//               }}
//             />
//             <p style={{ fontSize: "clamp(12px, 1.5vw, 16px)", color: "#555", margin: 0 }}>
//               Click on any item to view the product gallery.
//             </p>
//           </div>

//           {/* Index Content Container */}
//           <div style={{ flex: 1, width: "100%", maxWidth: "90vw", margin: "0 auto" }}>
//             <div>
//               {[
//                 { number: "1.", name: "200ml", id: "200ml" },
//                 { number: "2.", name: "250ml", id: "250ml" },
//                 { number: "3.", name: "300ml", id: "300ml" },
//                 { number: "4.", name: "500ml", id: "500ml" },
//                 { number: "5.", name: "700ml", id: "700ml" },
//                 { number: "6.", name: "1 Liter", id: "1liter" },
//               ].map((item) => (
//                 <div
//                   key={item.id}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     padding: "1vh 1.5vw",
//                     marginBottom: "0.8vh",
//                     background: "#f8f9fa",
//                     borderRadius: "6px",
//                     cursor: "pointer",
//                     fontSize: "clamp(14px, 2vw, 18px)",
//                     fontWeight: 500,
//                     color: "#333",
//                     border: "1px solid transparent",
//                     transition: "all 0.3s ease",
//                   }}
//                   onClick={() => openProductGallery(item.id)}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = "#e3f2fd";
//                     e.currentTarget.style.borderColor = "#2196f3";
//                     e.currentTarget.style.transform = "translateX(6px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = "#f8f9fa";
//                     e.currentTarget.style.borderColor = "transparent";
//                     e.currentTarget.style.transform = "translateX(0)";
//                   }}
//                 >
//                   <span style={{ fontWeight: "bold", marginRight: "12px", color: "#8B4513", minWidth: "35px" }}>
//                     {item.number}
//                   </span>
//                   <span>{item.name}</span>
//                   <span style={{ marginLeft: "auto", color: "#2196f3", fontSize: "1em" }}>→</span>
//                 </div>
//               ))}
//             </div>

//             {/* Biodegradable */}
//             <div style={{ marginTop: "2vh" }}>
//               <h2
//                 style={{
//                   fontSize: "clamp(18px, 2.5vw, 22px)",
//                   fontWeight: "bold",
//                   color: "#8B4513",
//                   marginBottom: "1vh",
//                 }}
//               >
//                 7. Biodegradable
//               </h2>
//               <div style={{ paddingLeft: "1vw" }}>
//                 {[
//                   { number: "7.1", name: "Biodegradable 200ml", id: "bio-200ml" },
//                   { number: "7.2", name: "Biodegradable 250ml", id: "bio-250ml" },
//                   { number: "7.3", name: "Biodegradable 300ml", id: "bio-300ml" },
//                   { number: "7.4", name: "Biodegradable 500ml", id: "bio-500ml" },
//                 ].map((item) => (
//                   <div
//                     key={item.id}
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       padding: "1vh 1.5vw",
//                       marginBottom: "0.6vh",
//                       background: "#f1f8e9",
//                       borderRadius: "6px",
//                       cursor: "pointer",
//                       fontSize: "clamp(14px, 2vw, 18px)",
//                       fontWeight: 500,
//                       color: "#333",
//                       border: "1px solid transparent",
//                       transition: "all 0.3s ease",
//                     }}
//                     onClick={() => openProductGallery(item.id)}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.background = "#c8e6c9";
//                       e.currentTarget.style.borderColor = "#4caf50";
//                       e.currentTarget.style.transform = "translateX(6px)";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.background = "#f1f8e9";
//                       e.currentTarget.style.borderColor = "transparent";
//                       e.currentTarget.style.transform = "translateX(0)";
//                     }}
//                   >
//                     <span style={{ fontWeight: "bold", marginRight: "12px", color: "#4caf50", minWidth: "45px" }}>
//                       {item.number}
//                     </span>
//                     <span>{item.name}</span>
//                     <span style={{ marginLeft: "auto", color: "#4caf50", fontSize: "1em" }}>→</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ),
//     },

//     // Page 4 - THANK YOU PAGE
//     {
//       type: "thankyou",
//       content: (
//         <div
//           style={{
//             width: "100%",
//             height: "100%",
//             padding: "clamp(16px, 3vh, 32px)",
//             boxSizing: "border-box",
//             background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "relative",
//             overflow: "hidden",
//           }}
//         >
//           <div
//             style={{
//               textAlign: "center",
//               color: colors.textDark,
//               zIndex: 2,
//               width: "100%",
//               maxWidth: "680px",
//             }}
//           >
//             {/* Logo */}
//             <div
//               style={{
//                 marginBottom: "0.6rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <img
//                 src="/Vedic Jal.png"
//                 alt="VedicJal Logo"
//                 style={{
//                   width: "70px",
//                   height: "70px",
//                   marginBottom: "0.4rem",
//                   borderRadius: "14px",
//                   boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
//                   border: "2.5px solid #ffffff",
//                 }}
//               />
//             </div>

//             {/* Heading */}
//             <h1
//               style={{
//                 fontSize: "clamp(1.8rem, 6vw, 3rem)",
//                 fontWeight: 800,
//                 margin: "0 0 0.6rem 0",
//                 background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//                 lineHeight: 0.95,
//                 fontFamily: "Inter, sans-serif",
//               }}
//             >
//               Thank You
//             </h1>

//             {/* Divider */}
//             <div
//               style={{
//                 width: "70px",
//                 height: "2px",
//                 background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
//                 margin: "0 auto 0.8rem auto",
//                 borderRadius: "1px",
//               }}
//             />

//             {/* Subtext */}
//             <p
//               style={{
//                 fontSize: "clamp(0.95rem, 2.4vw, 1.2rem)",
//                 margin: "0 0 0.4rem 0",
//                 fontWeight: 600,
//                 color: colors.textDark,
//                 fontFamily: "Inter, sans-serif",
//               }}
//             >
//               For choosing VedicJal
//             </p>

//             {/* Body text */}
//             <p
//               style={{
//                 fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
//                 fontWeight: 400,
//                 color: colors.textMedium,
//                 fontFamily: "Inter, sans-serif",
//                 lineHeight: 1.5,
//                 maxWidth: "380px",
//                 margin: "0 auto 1rem auto",
//               }}
//             >
//               Your trust in our premium handcrafted water bottles means the world to us.
//             </p>

//             {/* Quote */}
//             <div
//               style={{
//                 padding: "0.6rem 1.4rem",
//                 border: `1.5px solid ${colors.borderLight}`,
//                 borderRadius: "10px",
//                 background: "rgba(59, 130, 246, 0.05)",
//                 display: "inline-block",
//                 boxShadow: `0 2px 10px ${colors.shadowLight}`,
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: "1rem",
//                   margin: 0,
//                   fontWeight: 500,
//                   color: colors.primary,
//                   fontFamily: "Inter, sans-serif",
//                   fontStyle: "italic",
//                 }}
//               >
//                 "Pure Water, Pure Life"
//               </p>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   const totalSpreads = 3; // Cover (0), Image Spread (1), Index+ThankYou (2)

//   const goToSpread = (spreadIndex) => {
//     if (isFlipping || spreadIndex < 0 || spreadIndex >= totalSpreads) return;
//     const direction = spreadIndex > currentSpread ? "next" : "prev";
//     setFlipDirection(direction);
//     setIsFlipping(true);
//     setTimeout(() => {
//       setCurrentSpread(spreadIndex);
//     }, 300);
//     setTimeout(() => {
//       setIsFlipping(false);
//       setFlipDirection("");
//     }, 600);
//   };

//   const nextSpread = () => {
//     if (currentSpread < totalSpreads - 1) {
//       goToSpread(currentSpread + 1);
//     }
//   };

//   const prevSpread = () => {
//     if (currentSpread > 0) {
//       goToSpread(currentSpread - 1);
//     }
//   };

//   const openFlipBook = () => {
//     setIsOpen(true);
//   };

//   const closeFlipBook = () => {
//     setIsOpen(false);
//     setCurrentSpread(0);
//     setSelectedProduct(null);
//   };

//   const getCurrentLeftPage = () => {
//     if (currentSpread === 0) return null; // Cover page has no left page
//     const leftPageIndex = currentSpread * 2 - 1;
//     return pages[leftPageIndex] || null;
//   };

//   const getCurrentRightPage = () => {
//     if (currentSpread === 0) {
//       return pages[0]; // Cover page
//     }
//     const rightPageIndex = currentSpread * 2;
//     return pages[rightPageIndex] || null;
//   };

//   const getNextRightPage = () => {
//     return pages[(currentSpread + 1) * 2];
//   };

//   const getPrevLeftPage = () => {
//     return pages[(currentSpread - 1) * 2 - 1];
//   };

//   const isClosedBook = currentSpread === 0;

//   // Sidebar resize handlers
//   const handleMouseDown = useCallback((e) => {
//     setIsResizing(true);
//     e.preventDefault();
//   }, []);

//   const handleMouseMove = useCallback(
//     (e) => {
//       if (!isResizing || windowWidth <= 768) return;
//       const newWidth = e.clientX;
//       if (newWidth >= 250 && newWidth <= 400) {
//         setSidebarWidth(newWidth);
//       }
//     },
//     [isResizing, windowWidth],
//   );

//   const handleMouseUp = useCallback(() => {
//     setIsResizing(false);
//   }, []);

//   useEffect(() => {
//     if (isResizing) {
//       document.addEventListener("mousemove", handleMouseMove);
//       document.addEventListener("mouseup", handleMouseUp);
//       return () => {
//         document.removeEventListener("mousemove", handleMouseMove);
//         document.removeEventListener("mouseup", handleMouseUp);
//       };
//     }
//   }, [isResizing, handleMouseMove, handleMouseUp]);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//       if (window.innerWidth <= 768) {
//         setSidebarWidth(window.innerWidth);
//       }
//     };

//     if (typeof window !== "undefined") {
//       setWindowWidth(window.innerWidth);
//       window.addEventListener("resize", handleResize);
//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }
//   }, []);

//   // Product Gallery Component
//   const ProductGallery = ({ productId }) => {
//     const product = productData[productId];
//     if (!product) return null;

//     return (
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: "rgba(0, 0, 0, 0.9)",
//           zIndex: 1000,
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <div
//           style={{
//             padding: "1rem 2rem",
//             background: "rgba(255, 255, 255, 0.1)",
//             backdropFilter: "blur(10px)",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h2
//             style={{
//               color: "white",
//               fontSize: "1.5rem",
//               fontWeight: 600,
//               margin: 0,
//             }}
//           >
//             {product.title}
//           </h2>
//           <button
//             style={{
//               background: "rgba(255, 255, 255, 0.2)",
//               border: "none",
//               color: "white",
//               fontSize: "1.5rem",
//               width: "40px",
//               height: "40px",
//               borderRadius: "50%",
//               cursor: "pointer",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               transition: "all 0.3s ease",
//             }}
//             onClick={closeGallery}
//             onMouseEnter={(e) => {
//               e.target.style.background = "rgba(255, 255, 255, 0.3)";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = "rgba(255, 255, 255, 0.2)";
//             }}
//           >
//             ×
//           </button>
//         </div>

//         <div
//           style={{
//             flex: 1,
//             padding: "2rem",
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: "1.5rem",
//             overflowY: "auto",
//           }}
//         >
//           {product.images.map((image, index) => (
//             <div
//               key={index}
//               style={{
//                 background: "rgba(255, 255, 255, 0.1)",
//                 borderRadius: "12px",
//                 overflow: "hidden",
//                 transition: "all 0.3s ease",
//                 cursor: "pointer",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "scale(1.05)";
//                 e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "scale(1)";
//                 e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
//               }}
//             >
//               <img
//                 src={image || "/placeholder.svg"}
//                 alt={`${product.title} ${index + 1}`}
//                 style={{
//                   width: "100%",
//                   height: "300px",
//                   objectFit: "cover",
//                 }}
//               />
//               <div
//                 style={{
//                   padding: "1rem",
//                   color: "white",
//                   textAlign: "center",
//                 }}
//               >
//                 <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 500 }}>Model {index + 1}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   if (!isOpen) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           minHeight: "100vh",
//           background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
//           padding: "2rem",
//         }}
//       >
//         <div
//           style={{
//             textAlign: "center",
//             background: colors.backgroundWhite,
//             padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)",
//             borderRadius: "24px",
//             boxShadow: `0 25px 50px ${colors.shadowLight}`,
//             maxWidth: "450px",
//             border: `1px solid ${colors.borderLight}`,
//           }}
//         >
//           <div style={{ marginBottom: "1.5rem" }}>
//             <img
//               src="/Vedic Jal.png"
//               alt="VedicJal Logo"
//               style={{
//                 width: "clamp(60px, 8vw, 100px)",
//                 height: "clamp(60px, 8vw, 100px)",
//                 borderRadius: "12px",
//               }}
//             />
//           </div>
//           <h2
//             style={{
//               color: colors.textDark,
//               marginBottom: "0.75rem",
//               fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
//               fontWeight: 700,
//               fontFamily: "Inter, sans-serif",
//             }}
//           >
//             VedicJal Catalog
//           </h2>
//           <p
//             style={{
//               color: colors.textMedium,
//               marginBottom: "2.5rem",
//               fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
//               lineHeight: 1.6,
//             }}
//           >
//             Explore our premium water bottle collection
//           </p>
//           <button
//             style={{
//               background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
//               color: "white",
//               border: "none",
//               padding: "clamp(1rem, 2.5vw, 1.25rem) clamp(1.5rem, 4vw, 2.5rem)",
//               borderRadius: "50px",
//               fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
//               fontWeight: 600,
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               display: "flex",
//               alignItems: "center",
//               gap: "0.75rem",
//               margin: "0 auto",
//               boxShadow: "0 4px 14px rgba(59, 130, 246, 0.3)",
//             }}
//             onClick={openFlipBook}
//             onMouseEnter={(e) => {
//               e.target.style.transform = "translateY(-2px)";
//               e.target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = "translateY(0)";
//               e.target.style.boxShadow = "0 4px 14px rgba(59, 130, 246, 0.3)";
//             }}
//           >
//             <span>📖</span>
//             Open Catalog
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Show gallery if selected
//   if (selectedProduct) {
//     return <ProductGallery productId={selectedProduct} />;
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         height: "100vh",
//         background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
//         fontFamily: "Inter, sans-serif",
//         overflow: "hidden",
//         flexDirection: windowWidth <= 768 ? "column" : "row",
//       }}
//     >
//       {/* Resizable Sidebar */}
//       <div
//         className="sidebar"
//         style={{
//           width: windowWidth <= 768 ? "100%" : `${sidebarWidth}px`,
//           height: windowWidth <= 768 ? "120px" : "100%",
//           background: "rgba(255, 255, 255, 0.95)",
//           backdropFilter: "blur(20px)",
//           borderRight: `1px solid ${colors.borderLight}`,
//           display: "flex",
//           flexDirection: windowWidth <= 768 ? "row" : "column",
//           overflow: windowWidth <= 768 ? "auto hidden" : "auto",
//           boxShadow: `4px 0 20px ${colors.shadowLight}`,
//           position: "relative",
//           minWidth: "250px",
//           maxWidth: windowWidth <= 768 ? "100%" : "400px",
//           paddingRight: "6px",
//           zIndex: 20,
//         }}
//       >
//         {/* Header - only shown on mobile */}
//         {windowWidth <= 768 && (
//           <div
//             style={{
//               padding: "1rem",
//               background: colors.backgroundWhite,
//               display: "flex",
//               alignItems: "center",
//               position: "sticky",
//               left: 0,
//               zIndex: 10,
//               borderBottom: `1px solid ${colors.borderLight}`,
//               minWidth: "max-content",
//             }}
//           >
//             <h3
//               style={{
//                 margin: 0,
//                 color: colors.textDark,
//                 fontSize: "1rem",
//                 fontWeight: 600,
//                 whiteSpace: "nowrap",
//               }}
//             >
//               Page Navigation
//             </h3>
//             <button
//               style={{
//                 background: "none",
//                 border: "none",
//                 fontSize: "1.5rem",
//                 cursor: "pointer",
//                 color: colors.textMedium,
//                 padding: "0.5rem",
//                 width: "36px",
//                 height: "36px",
//                 borderRadius: "50%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transition: "all 0.2s ease",
//                 marginLeft: "1rem",
//               }}
//               onClick={closeFlipBook}
//               onMouseEnter={(e) => {
//                 e.target.style.background = colors.primaryLight;
//                 e.target.style.color = colors.primary;
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background = "none";
//                 e.target.style.color = colors.textMedium;
//               }}
//             >
//               ×
//             </button>
//           </div>
//         )}

//         {/* Thumbnails */}
//         <div
//           className="page-thumbnails"
//           style={{
//             flex: 1,
//             padding: windowWidth <= 768 ? "0.5rem" : "0.5rem",
//             background: colors.backgroundLight,
//             display: "flex",
//             flexDirection: windowWidth <= 768 ? "row" : "column",
//             gap: windowWidth <= 768 ? "0.5rem" : "0",
//           }}
//         >
//           {pages.map((page, index) => {
//             let targetSpread = index === 0 ? 0 : Math.ceil(index / 2);
//             const isActive = targetSpread === currentSpread;

//             return (
//               <div
//                 key={index}
//                 className="thumbnail"
//                 style={{
//                   marginBottom: windowWidth <= 768 ? 0 : "0.5rem",
//                   border: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
//                   borderRadius: "6px",
//                   overflow: "hidden",
//                   cursor: "pointer",
//                   transition: "all 0.3s ease",
//                   background: colors.backgroundWhite,
//                   boxShadow: isActive
//                     ? `0 4px 20px rgba(59, 130, 246, 0.25)`
//                     : `0 2px 8px ${colors.shadowLight}`,
//                   height: windowWidth <= 768 ? "100px" : "120px",
//                   width: windowWidth <= 768 ? "80px" : "auto",
//                   minWidth: windowWidth <= 768 ? "80px" : "auto",
//                   flexShrink: 0,
//                   position: "relative",
//                 }}
//                 onClick={() => goToSpread(targetSpread)}
//                 onMouseEnter={(e) => {
//                   if (!isActive) {
//                     e.currentTarget.style.borderColor = colors.primary;
//                     e.currentTarget.style.transform = "scale(1.02)";
//                     e.currentTarget.style.boxShadow = `0 4px 16px ${colors.shadowMedium}`;
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (!isActive) {
//                     e.currentTarget.style.borderColor = "transparent";
//                     e.currentTarget.style.transform = "scale(1)";
//                     e.currentTarget.style.boxShadow = `0 2px 8px ${colors.shadowLight}`;
//                   }
//                 }}
//               >
//                 {/* Thumbnail preview */}
//                 <div
//                   style={{
//                     width: "100%",
//                     height: windowWidth <= 768 ? "80px" : "100px",
//                     overflow: "hidden",
//                     position: "relative",
//                     background: "#f8f9fa",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <div
//                     style={{
//                       transform: "scale(0.08)",
//                       transformOrigin: "center center",
//                       width: "1200px",
//                       height: "800px",
//                       pointerEvents: "none",
//                       overflow: "hidden",
//                     }}
//                   >
//                     {page && page.content}
//                   </div>
//                 </div>
//                 {/* Page number */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: "0",
//                     left: "0",
//                     right: "0",
//                     background: colors.textDark,
//                     color: "white",
//                     padding: "4px 8px",
//                     fontSize: "0.7rem",
//                     fontWeight: 500,
//                     textAlign: "center",
//                     height: "20px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {index + 1}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Resize Handle - only on desktop */}
//         {windowWidth > 768 && (
//           <div
//             style={{
//               position: "absolute",
//               top: 0,
//               right: 0,
//               width: "4px",
//               height: "100%",
//               background: "transparent",
//               cursor: "col-resize",
//               zIndex: 10,
//             }}
//             onMouseDown={handleMouseDown}
//             onMouseEnter={(e) => {
//               e.target.style.background = colors.primary;
//               e.target.style.opacity = "0.5";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = "transparent";
//             }}
//           />
//         )}
//       </div>

//       {/* Main Flipbook */}
//       <div
//         className="flipbook-main"
//         style={{
//           flex: 1,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: windowWidth <= 768 ? "0.5rem" : "clamp(1rem, 3vw, 2rem)",
//           position: "relative",
//           overflow: "hidden",
//           height: windowWidth <= 768 ? "calc(100vh - 120px)" : "100%",
//         }}
//       >
//         <div
//           ref={flipBookRef}
//           style={{
//             width: windowWidth <= 768 ? "95%" : "min(90vw, 95vh * 1.2)",
//             height: windowWidth <= 768 ? "70%" : "min(75vh, 90vw / 1.2)",
//             maxWidth: "1400px",
//             maxHeight: "900px",
//             position: "relative",
//             perspective: "1500px",
//             marginBottom: "1rem",
//           }}
//         >
//           {/* Book spine - only show when not closed book */}
//           {!isClosedBook && (
//             <div
//               style={{
//                 position: "absolute",
//                 left: "50%",
//                 top: 0,
//                 width: "6px",
//                 height: "100%",
//                 background: `linear-gradient(to bottom, ${colors.secondary}, ${colors.textMedium})`,
//                 transform: "translateX(-50%)",
//                 zIndex: 10,
//                 borderRadius: "3px",
//                 boxShadow: `0 0 10px ${colors.shadowLight}`,
//               }}
//             />
//           )}

//           {/* Left Page - hide for closed book */}
//           {!isClosedBook && (
//             <div
//               style={{
//                 position: "absolute",
//                 width: "50%",
//                 height: "100%",
//                 background: colors.backgroundWhite,
//                 border: `1px solid ${colors.borderLight}`,
//                 boxShadow: `0 8px 32px ${colors.shadowMedium}`,
//                 overflow: "hidden",
//                 left: 0,
//                 borderTopLeftRadius: "12px",
//                 borderBottomLeftRadius: "12px",
//               }}
//             >
//               {getCurrentLeftPage() && getCurrentLeftPage().content}
//             </div>
//           )}

//           {/* Right Page */}
//           <div
//             style={{
//               position: "absolute",
//               width: isClosedBook ? "100%" : "50%",
//               height: "100%",
//               background: colors.backgroundWhite,
//               border: `1px solid ${colors.borderLight}`,
//               boxShadow: `0 8px 32px ${colors.shadowMedium}`,
//               overflow: "hidden",
//               right: 0,
//               left: isClosedBook ? 0 : "auto",
//               borderTopRightRadius: "12px",
//               borderBottomRightRadius: "12px",
//               borderTopLeftRadius: isClosedBook ? "12px" : "0",
//               borderBottomLeftRadius: isClosedBook ? "12px" : "0",
//             }}
//           >
//             {getCurrentRightPage() && getCurrentRightPage().content}
//           </div>

//           {/* Flipping Page */}
//           {isFlipping && (
//             <div
//               style={{
//                 position: "absolute",
//                 width: "50%",
//                 height: "100%",
//                 background: colors.backgroundWhite,
//                 border: `1px solid ${colors.borderLight}`,
//                 boxShadow: `0 8px 32px ${colors.shadowMedium}`,
//                 overflow: "hidden",
//                 zIndex: 20,
//                 transformStyle: "preserve-3d",
//                 transition: "transform 0.6s ease-in-out",
//                 ...(flipDirection === "next"
//                   ? {
//                       right: 0,
//                       transformOrigin: "left center",
//                       animation: "flipNext 0.6s ease-in-out",
//                     }
//                   : {
//                       left: 0,
//                       transformOrigin: "right center",
//                       animation: "flipPrev 0.6s ease-in-out",
//                     }),
//               }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   width: "100%",
//                   height: "100%",
//                   backfaceVisibility: "hidden",
//                 }}
//               >
//                 {flipDirection === "next" && getCurrentRightPage() && getCurrentRightPage().content}
//                 {flipDirection === "prev" && getPrevLeftPage() && getPrevLeftPage().content}
//               </div>
//               <div
//                 style={{
//                   position: "absolute",
//                   width: "100%",
//                   height: "100%",
//                   backfaceVisibility: "hidden",
//                   transform: "rotateY(180deg)",
//                 }}
//               >
//                 {flipDirection === "next" && getNextRightPage() && getNextRightPage().content}
//                 {flipDirection === "prev" && getCurrentLeftPage() && getCurrentLeftPage().content}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Compact Navigation */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "1rem",
//             background: "rgba(255, 255, 255, 0.95)",
//             backdropFilter: "blur(20px)",
//             padding: "0.5rem 1rem",
//             borderRadius: "30px",
//             boxShadow: `0 4px 16px ${colors.shadowMedium}`,
//             border: `1px solid ${colors.borderLight}`,
//             width: windowWidth <= 480 ? "95%" : "auto",
//           }}
//         >
//           <button
//             style={{
//               background:
//                 currentSpread === 0
//                   ? colors.secondary
//                   : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
//               color: "white",
//               border: "none",
//               padding: "0.5rem 1rem",
//               borderRadius: "15px",
//               cursor: currentSpread === 0 ? "not-allowed" : "pointer",
//               fontWeight: 600,
//               fontSize: "0.8rem",
//               transition: "all 0.3s ease",
//               boxShadow: currentSpread === 0 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
//               minWidth: "40px",
//               height: "32px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             onClick={prevSpread}
//             disabled={currentSpread === 0}
//             onMouseEnter={(e) => {
//               if (currentSpread !== 0) {
//                 e.target.style.transform = "translateY(-1px)";
//                 e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.4)";
//               }
//             }}
//             onMouseLeave={(e) => {
//               if (currentSpread !== 0) {
//                 e.target.style.transform = "translateY(0)";
//                 e.target.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.3)";
//               }
//             }}
//           >
//             ←
//           </button>
//           <div
//             style={{
//               color: colors.textDark,
//               fontWeight: 600,
//               fontSize: "0.8rem",
//               padding: "0 0.5rem",
//               minWidth: "120px",
//               textAlign: "center",
//             }}
//           >
//             {currentSpread === 0
//               ? "Cover"
//               : currentSpread === 1
//                 ? "Intro"
//                 : currentSpread === 2
//                   ? "Index & Thank You"
//                   : `Spread ${currentSpread}`}{" "}
//             / {totalSpreads}
//           </div>
//           <button
//             style={{
//               background:
//                 currentSpread >= totalSpreads - 1
//                   ? colors.secondary
//                   : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
//               color: "white",
//               border: "none",
//               padding: "0.5rem 1rem",
//               borderRadius: "15px",
//               cursor: currentSpread >= totalSpreads - 1 ? "not-allowed" : "pointer",
//               fontWeight: 600,
//               fontSize: "0.8rem",
//               transition: "all 0.3s ease",
//               boxShadow: currentSpread >= totalSpreads - 1 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
//               minWidth: "40px",
//               height: "32px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             onClick={nextSpread}
//             disabled={currentSpread >= totalSpreads - 1}
//             onMouseEnter={(e) => {
//               if (currentSpread < totalSpreads - 1) {
//                 e.target.style.transform = "translateY(-1px)";
//                 e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.4)";
//               }
//             }}
//             onMouseLeave={(e) => {
//               if (currentSpread < totalSpreads - 1) {
//                 e.target.style.transform = "translateY(0)";
//                 e.target.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.3)";
//               }
//             }}
//           >
//             →
//           </button>
//         </div>
//       </div>

//       {/* CSS animations */}
//       <style>
//         {`
//         @keyframes flipNext {
//           0% { transform: rotateY(0deg); }
//           100% { transform: rotateY(-180deg); }
//         }
//         @keyframes flipPrev {
//           0% { transform: rotateY(0deg); }
//           100% { transform: rotateY(180deg); }
//         }

//         @media (max-width: 768px) {
//           .sidebar { 
//             height: 120px !important; 
//             flex-direction: row !important; 
//             overflow-x: auto !important; 
//             overflow-y: hidden !important;
//             max-width: 100% !important;
//           }
//           .page-thumbnails {
//             display: flex !important;
//             flex-direction: row !important;
//             gap: 0.5rem !important;
//             padding: 0.5rem !important;
//           }
//           .thumbnail {
//             flex: 0 0 80px !important;
//             height: 100px !important;
//             margin-bottom: 0 !important;
//           }
//         }

//         @media (max-width: 480px) {
//           .flipbook-main {
//             padding: 0.5rem !important;
//           }
//           .thumbnail {
//             width: 70px !important;
//             min-width: 70px !important;
//           }
//         }
//         `}
//       </style>
//     </div>
//   );
// };

// export default FlipBook;


// // "use client";

// // import { useState, useRef, useCallback, useEffect } from "react"

// // const FlipBook = () => {
// //   const [isOpen, setIsOpen] = useState(false)
// //   const [currentSpread, setCurrentSpread] = useState(0)
// //   const [selectedProduct, setSelectedProduct] = useState(null)
// //   const [isFlipping, setIsFlipping] = useState(false)
// //   const [flipDirection, setFlipDirection] = useState("")
// //   const [sidebarWidth, setSidebarWidth] = useState(300)
// //   const [isResizing, setIsResizing] = useState(false)
// //   const flipBookRef = useRef(null)
// //   const [windowWidth, setWindowWidth] = useState(1024)

// //   // Color palette
// //   const colors = {
// //     primary: "#3b82f6",
// //     primaryLight: "#dbeafe",
// //     secondary: "#64748b",
// //     accent: "#06b6d4",
// //     textDark: "#1e293b",
// //     textMedium: "#475569",
// //     textLight: "#64748b",
// //     backgroundLight: "#f8fafc",
// //     backgroundWhite: "#ffffff",
// //     borderLight: "#e2e8f0",
// //     shadowLight: "rgba(15, 23, 42, 0.08)",
// //     shadowMedium: "rgba(15, 23, 42, 0.12)",
// //     shadowStrong: "rgba(15, 23, 42, 0.3)",
// //   }

// //   // Product data for galleries
// //   const productData = {
// //     "200ml": {
// //       title: "200ml Water Bottles",
// //       images: [
// //         "/placeholder.svg?height=400&width=300&text=200ml+Bottle+1",
// //         "/placeholder.svg?height=400&width=300&text=200ml+Bottle+2",
// //         "/placeholder.svg?height=400&width=300&text=200ml+Bottle+3",
// //         "/placeholder.svg?height=400&width=300&text=200ml+Bottle+4",
// //       ],
// //     },
// //     "250ml": {
// //       title: "250ml Water Bottles",
// //       images: [
// //         "/placeholder.svg?height=400&width=300&text=250ml+Bottle+1",
// //         "/placeholder.svg?height=400&width=300&text=250ml+Bottle+2",
// //         "/placeholder.svg?height=400&width=300&text=250ml+Bottle+3",
// //         "/placeholder.svg?height=400&width=300&text=250ml+Bottle+4",
// //       ],
// //     },
// //     "300ml": {
// //       title: "300ml Water Bottles",
// //       images: [
// //         "/placeholder.svg?height=400&width=300&text=300ml+Bottle+1",
// //         "/placeholder.svg?height=400&width=300&text=300ml+Bottle+2",
// //         "/placeholder.svg?height=400&width=300&text=300ml+Bottle+3",
// //         "/placeholder.svg?height=400&width=300&text=300ml+Bottle+4",
// //       ],
// //     },
// //     "500ml": {
// //       title: "500ml Water Bottles",
// //       images: [
// //         "/placeholder.svg?height=400&width=300&text=500ml+Bottle+1",
// //         "/placeholder.svg?height=400&width=300&text=500ml+Bottle+2",
// //         "/placeholder.svg?height=400&width=300&text=500ml+Bottle+3",
// //         "/placeholder.svg?height=400&width=300&text=500ml+Bottle+4",
// //       ],
// //     },
// //     "700ml": {
// //       title: "700ml Water Bottles",
// //       images: [
// //         "/placeholder.svg?height=400&width=300&text=700ml+Bottle+1",
// //         "/placeholder.svg?height=400&width=300&text=700ml+Bottle+2",
// //         "/placeholder.svg?height=400&width=300&text=700ml+Bottle+3",
// //         "/placeholder.svg?height=400&width=300&text=700ml+Bottle+4",
// //       ],
// //     },
// //     "1liter": {
// //       title: "1 Liter Water Bottles",
// //       images: [
// //         "/placeholder.svg?height=400&width=300&text=1L+Bottle+1",
// //         "/placeholder.svg?height=400&width=300&text=1L+Bottle+3",
// //         "/placeholder.svg?height=400&width=300&text=1L+Bottle+2",
// //         "/placeholder.svg?height=400&width=300&text=1L+Bottle+4",
// //       ],
// //     },
// //     "bio-200ml": {
// //       title: "Biodegradable 200ml",
// //       images: [
// //         "/placeholder.svg?height=400&width=300&text=Bio+200ml+1",
// //         "/placeholder.svg?height=400&width=300&text=Bio+200ml+2",
// //         "/placeholder.svg?height=400&width=300&text=Bio+200ml+3",
// //         "/placeholder.svg?height=400&width=300&text=Bio+200ml+4",
// //       ],
// //     },
// //     "bio-250ml": {
// //       title: "Biodegradable 250ml",
// //       images: [
// //         "/placeholder.svg?height=400&width=300&text=Bio+250ml+1",
// //         "/placeholder.svg?height=400&width=300&text=Bio+250ml+2",
// //         "/placeholder.svg?height=400&width=300&text=Bio+250ml+3",
// //         "/placeholder.svg?height=400&width=300&text=Bio+250ml+4",
// //       ],
// //     },
// //     "bio-300ml": {
// //       title: "Biodegradable 300ml",
// //       images: [
// //         "/placeholder.svg?height=400&width=300&text=Bio+300ml+1",
// //         "/placeholder.svg?height=400&width=300&text=Bio+300ml+2",
// //         "/placeholder.svg?height=400&width=300&text=Bio+300ml+3",
// //         "/placeholder.svg?height=400&width=300&text=Bio+300ml+4",
// //       ],
// //     },
// //     "bio-500ml": {
// //       title: "Biodegradable 500ml",
// //       images: [
// //         "/placeholder.svg?height=400&width=300&text=Bio+500ml+1",
// //         "/placeholder.svg?height=400&width=300&text=Bio+500ml+2",
// //         "/placeholder.svg?height=400&width=300&text=Bio+500ml+3",
// //         "/placeholder.svg?height=400&width=300&text=Bio+500ml+4",
// //       ],
// //     },
// //   }

// //   // Open product gallery
// //   const openProductGallery = (productId) => {
// //     setSelectedProduct(productId)
// //   }

// //   // Close gallery
// //   const closeGallery = () => {
// //     setSelectedProduct(null)
// //   }

// //   const pages = [
// //     // Page 0 - Cover Page (CLOSED BOOK - SINGLE PAGE)
// //    // Replace your current cover page (page 0) with this updated version
// // {
// //   type: "cover",
// //   isClosedBook: true,
// //   content: (
// //     <div
// //       style={{
// //         width: "100%",
// //         height: "100%",
// //         padding: 0,
// //         position: "relative",
// //         overflow: "hidden",
// //         background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)",
// //         border: "1px solid #e2e8f0",
// //         borderRadius: "12px",
// //         boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "center",
// //         alignItems: "center",
// //       }}
// //     >
// //       {/* Decorative elements */}
// //       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(56,182,255,0.1) 100%)", transform: "skewY(-4deg)", transformOrigin: "top left" }} />
// //       <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(135deg, rgba(56,182,255,0.1) 0%, rgba(14,165,233,0.15) 100%)", transform: "skewY(4deg)", transformOrigin: "bottom right" }} />
// //       <div style={{ position: "absolute", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, rgba(14,165,233,0) 70%)", top: "18%", left: "8%" }} />
// //       <div style={{ position: "absolute", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,182,255,0.08) 0%, rgba(56,182,255,0) 70%)", bottom: "12%", right: "8%" }} />

// //       {/* Main content */}
// //       <div style={{ position: "relative", zIndex: 2, padding: "1.5rem 1.5rem", textAlign: "center", maxWidth: "800px", width: "90%" }}>
        
// //         {/* Logo and title */}
// //         <div style={{ marginBottom: "0.75rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
// //           <img
// //             src="/Vedic Jal.png"
// //             alt="VedicJal Logo"
// //             style={{
// //               width: "100px",
// //               height: "100px",
// //               borderRadius: "16px",
// //               boxShadow: "0 4px 14px rgba(2,132,199,0.2)",
// //               border: "3px solid white",
// //               background: "white",
// //               marginBottom: "0.4rem",
// //             }}
// //           />
// //           <h1 style={{ fontSize: "2.2rem", fontWeight: 700, margin: "0 0 0.4rem 0", color: "#0369a1", fontFamily: "'Georgia', serif" }}>
// //             VedicJal
// //           </h1>
// //           <p style={{ fontSize: "1rem", color: "#0ea5e9", margin: 0, fontWeight: 500 }}>
// //             Pure Water, Pure Life
// //           </p>
// //         </div>

// //         {/* Welcome Box */}
// //         <div style={{
// //           background: "rgba(255,255,255,0.75)",
// //           backdropFilter: "blur(8px)",
// //           borderRadius: "12px",
// //           padding: "0.9rem",
// //           marginTop: "0.8rem",
// //           marginBottom: "0.8rem",
// //           boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
// //           border: "1px solid rgba(224,242,254,0.8)"
// //         }}>
// //           <h2 style={{
// //             fontSize: "1.5rem",
// //             fontWeight: 600,
// //             color: "#075985",
// //             fontFamily: "'Georgia', serif",
// //             margin: 0
// //           }}>
// //             Welcome to vedicjal online brochure for customized range
// //           </h2>
// //         </div>

// //         {/* Divider */}
// //         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0.6rem 0" }}>
// //           <div style={{ height: "2px", flex: 1, background: "linear-gradient(90deg, rgba(2,132,199,0) 0%, rgba(2,132,199,0.5) 100%)" }} />
// //           <div style={{ height: "2px", flex: 1, background: "linear-gradient(90deg, rgba(2,132,199,0.5) 0%, rgba(2,132,199,0) 100%)" }} />
// //         </div>

// //         {/* Footer text */}
// //         <p style={{
// //           fontSize: "0.88rem",
// //           color: "#64748b",
// //           fontStyle: "italic",
// //           margin: 0,
// //           marginTop: "0.5rem",
// //         }}>
// //           "Bringing purity to your hands"
// //         </p>
// //       </div>
// //     </div>
// //   )
// // },

// //     // Page 1 - Full-fit Image
// //     {
// //       type: "fullimage-left",
// //       content: (
// //         <div style={{ width: "100%", height: "100%", padding: 0, position: "relative", overflow: "hidden" }}>
// //           <img
// //             src="/page1.jpg"
// //             alt="VedicJal Workshop - Page 1"
// //             style={{
// //               width: "100%",
// //               height: "100%",
// //               objectFit: "cover",
// //             }}
// //           />
// //         </div>
// //       ),
// //     },

// //     // Page 2 - Full-fit Image
// //     {
// //       type: "fullimage-right",
// //       content: (
// //         <div style={{ width: "100%", height: "100%", padding: 0, position: "relative", overflow: "hidden" }}>
// //           <img
// //             src="/page2.jpg"
// //             alt="VedicJal Workshop - Page 2"
// //             style={{
// //               width: "100%",
// //               height: "100%",
// //               objectFit: "cover",
// //             }}
// //           />
// //         </div>
// //       ),
// //     },

// //     // Page 3 - INDEX PAGE
// //  {
// //   type: "index",
// //   content: (
// //     <div
// //       style={{
// //         width: "100%",
// //         height: "100%",
// //         padding: "2vh 4vw",
// //         boxSizing: "border-box",
// //         background: "#ffffff",
// //         fontFamily: "Georgia, serif",
// //         display: "flex",
// //         flexDirection: "column",
// //         overflow: "auto",
// //       }}
// //     >
// //       {/* Header */}
// //       <div style={{ textAlign: "center", marginBottom: "1.5vh" }}>
// //         <h1
// //           style={{
// //             fontSize: "clamp(24px, 4vw, 36px)",
// //             color: "#8B4513",
// //             margin: "0 0 0.5vh 0",
// //             fontWeight: "bold",
// //           }}
// //         >
// //           INDEX
// //         </h1>
// //         <div
// //           style={{
// //             width: "80px",
// //             height: "2px",
// //             background: "#8B4513",
// //             margin: "0 auto 0.5vh",
// //           }}
// //         />
// //         <p style={{ fontSize: "clamp(12px, 1.5vw, 16px)", color: "#555", margin: 0 }}>
// //           Click on any item to view the product gallery.
// //         </p>
// //       </div>

// //       {/* Index Content Container */}
// //       <div style={{ flex: 1, width: "100%", maxWidth: "90vw", margin: "0 auto" }}>
// //         <div>
// //           {[
// //             { number: "1.", name: "200ml", id: "200ml" },
// //             { number: "2.", name: "250ml", id: "250ml" },
// //             { number: "3.", name: "300ml", id: "300ml" },
// //             { number: "4.", name: "500ml", id: "500ml" },
// //             { number: "5.", name: "700ml", id: "700ml" },
// //             { number: "6.", name: "1 Liter", id: "1liter" },
// //           ].map((item) => (
// //             <div
// //               key={item.id}
// //               style={{
// //                 display: "flex",
// //                 alignItems: "center",
// //                 padding: "1vh 1.5vw",
// //                 marginBottom: "0.8vh",
// //                 background: "#f8f9fa",
// //                 borderRadius: "6px",
// //                 cursor: "pointer",
// //                 fontSize: "clamp(14px, 2vw, 18px)",
// //                 fontWeight: 500,
// //                 color: "#333",
// //                 border: "1px solid transparent",
// //                 transition: "all 0.3s ease",
// //               }}
// //               onClick={() => openProductGallery(item.id)}
// //               onMouseEnter={(e) => {
// //                 e.currentTarget.style.background = "#e3f2fd";
// //                 e.currentTarget.style.borderColor = "#2196f3";
// //                 e.currentTarget.style.transform = "translateX(6px)";
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.currentTarget.style.background = "#f8f9fa";
// //                 e.currentTarget.style.borderColor = "transparent";
// //                 e.currentTarget.style.transform = "translateX(0)";
// //               }}
// //             >
// //               <span style={{ fontWeight: "bold", marginRight: "12px", color: "#8B4513", minWidth: "35px" }}>
// //                 {item.number}
// //               </span>
// //               <span>{item.name}</span>
// //               <span style={{ marginLeft: "auto", color: "#2196f3", fontSize: "1em" }}>→</span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Biodegradable */}
// //         <div style={{ marginTop: "2vh" }}>
// //           <h2
// //             style={{
// //               fontSize: "clamp(18px, 2.5vw, 22px)",
// //               fontWeight: "bold",
// //               color: "#8B4513",
// //               marginBottom: "1vh",
// //             }}
// //           >
// //             7. Biodegradable
// //           </h2>
// //           <div style={{ paddingLeft: "1vw" }}>
// //             {[
// //               { number: "7.1", name: "Biodegradable 200ml", id: "bio-200ml" },
// //               { number: "7.2", name: "Biodegradable 250ml", id: "bio-250ml" },
// //               { number: "7.3", name: "Biodegradable 300ml", id: "bio-300ml" },
// //               { number: "7.4", name: "Biodegradable 500ml", id: "bio-500ml" },
// //             ].map((item) => (
// //               <div
// //                 key={item.id}
// //                 style={{
// //                   display: "flex",
// //                   alignItems: "center",
// //                   padding: "1vh 1.5vw",
// //                   marginBottom: "0.6vh",
// //                   background: "#f1f8e9",
// //                   borderRadius: "6px",
// //                   cursor: "pointer",
// //                   fontSize: "clamp(14px, 2vw, 18px)",
// //                   fontWeight: 500,
// //                   color: "#333",
// //                   border: "1px solid transparent",
// //                   transition: "all 0.3s ease",
// //                 }}
// //                 onClick={() => openProductGallery(item.id)}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.background = "#c8e6c9";
// //                   e.currentTarget.style.borderColor = "#4caf50";
// //                   e.currentTarget.style.transform = "translateX(6px)";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.background = "#f1f8e9";
// //                   e.currentTarget.style.borderColor = "transparent";
// //                   e.currentTarget.style.transform = "translateX(0)";
// //                 }}
// //               >
// //                 <span style={{ fontWeight: "bold", marginRight: "12px", color: "#4caf50", minWidth: "45px" }}>
// //                   {item.number}
// //                 </span>
// //                 <span>{item.name}</span>
// //                 <span style={{ marginLeft: "auto", color: "#4caf50", fontSize: "1em" }}>→</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   ),
// // },

// //     // Page 4 - THANK YOU PAGE
// //   {
// //   type: "thankyou",
// //   content: (
// //     <div
// //       style={{
// //         width: "100%",
// //         height: "100%",
// //         padding: "clamp(16px, 3vh, 32px)",
// //         boxSizing: "border-box",
// //         background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         position: "relative",
// //         overflow: "hidden",
// //       }}
// //     >
// //       <div
// //         style={{
// //           textAlign: "center",
// //           color: colors.textDark,
// //           zIndex: 2,
// //           width: "100%",
// //           maxWidth: "680px",
// //         }}
// //       >
// //         {/* Logo */}
// //         <div
// //           style={{
// //             marginBottom: "0.6rem",
// //             display: "flex",
// //             flexDirection: "column",
// //             alignItems: "center",
// //           }}
// //         >
// //           <img
// //             src="/Vedic Jal.png"
// //             alt="VedicJal Logo"
// //             style={{
// //               width: "70px",
// //               height: "70px",
// //               marginBottom: "0.4rem",
// //               borderRadius: "14px",
// //               boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
// //               border: "2.5px solid #ffffff",
// //             }}
// //           />
// //         </div>

// //         {/* Heading */}
// //         <h1
// //           style={{
// //             fontSize: "clamp(1.8rem, 6vw, 3rem)",
// //             fontWeight: 800,
// //             margin: "0 0 0.6rem 0",
// //             background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //             WebkitBackgroundClip: "text",
// //             WebkitTextFillColor: "transparent",
// //             backgroundClip: "text",
// //             lineHeight: 0.95,
// //             fontFamily: "Inter, sans-serif",
// //           }}
// //         >
// //           Thank You
// //         </h1>

// //         {/* Divider */}
// //         <div
// //           style={{
// //             width: "70px",
// //             height: "2px",
// //             background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //             margin: "0 auto 0.8rem auto",
// //             borderRadius: "1px",
// //           }}
// //         />

// //         {/* Subtext */}
// //         <p
// //           style={{
// //             fontSize: "clamp(0.95rem, 2.4vw, 1.2rem)",
// //             margin: "0 0 0.4rem 0",
// //             fontWeight: 600,
// //             color: colors.textDark,
// //             fontFamily: "Inter, sans-serif",
// //           }}
// //         >
// //           For choosing VedicJal
// //         </p>

// //         {/* Body text */}
// //         <p
// //           style={{
// //             fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
// //             fontWeight: 400,
// //             color: colors.textMedium,
// //             fontFamily: "Inter, sans-serif",
// //             lineHeight: 1.5,
// //             maxWidth: "380px",
// //             margin: "0 auto 1rem auto",
// //           }}
// //         >
// //           Your trust in our premium handcrafted water bottles means the world to us.
// //         </p>

// //         {/* Quote */}
// //         <div
// //           style={{
// //             padding: "0.6rem 1.4rem",
// //             border: `1.5px solid ${colors.borderLight}`,
// //             borderRadius: "10px",
// //             background: "rgba(59, 130, 246, 0.05)",
// //             display: "inline-block",
// //             boxShadow: `0 2px 10px ${colors.shadowLight}`,
// //           }}
// //         >
// //           <p
// //             style={{
// //               fontSize: "1rem",
// //               margin: 0,
// //               fontWeight: 500,
// //               color: colors.primary,
// //               fontFamily: "Inter, sans-serif",
// //               fontStyle: "italic",
// //             }}
// //           >
// //             "Pure Water, Pure Life"
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   ),
// // },
// //   ]

// //   const totalSpreads = 3 // Cover (0), Image Spread (1), Index+ThankYou (2)

// //   const goToSpread = (spreadIndex) => {
// //     if (isFlipping || spreadIndex < 0 || spreadIndex >= totalSpreads) return
// //     const direction = spreadIndex > currentSpread ? "next" : "prev"
// //     setFlipDirection(direction)
// //     setIsFlipping(true)
// //     setTimeout(() => {
// //       setCurrentSpread(spreadIndex)
// //     }, 300)
// //     setTimeout(() => {
// //       setIsFlipping(false)
// //       setFlipDirection("")
// //     }, 600)
// //   }

// //   const nextSpread = () => {
// //     if (currentSpread < totalSpreads - 1) {
// //       goToSpread(currentSpread + 1)
// //     }
// //   }

// //   const prevSpread = () => {
// //     if (currentSpread > 0) {
// //       goToSpread(currentSpread - 1)
// //     }
// //   }

// //   const openFlipBook = () => {
// //     setIsOpen(true)
// //   }

// //   const closeFlipBook = () => {
// //     setIsOpen(false)
// //     setCurrentSpread(0)
// //     setSelectedProduct(null)
// //   }

// //   const getCurrentLeftPage = () => {
// //     if (currentSpread === 0) return null // Cover page has no left page
// //     const leftPageIndex = currentSpread * 2 - 1
// //     return pages[leftPageIndex] || null
// //   }

// //   const getCurrentRightPage = () => {
// //     if (currentSpread === 0) {
// //       return pages[0] // Cover page
// //     }
// //     const rightPageIndex = currentSpread * 2
// //     return pages[rightPageIndex] || null
// //   }

// //   const getNextRightPage = () => {
// //     return pages[(currentSpread + 1) * 2]
// //   }

// //   const getPrevLeftPage = () => {
// //     return pages[(currentSpread - 1) * 2 - 1]
// //   }

// //   const isClosedBook = currentSpread === 0

// //   // Sidebar resize handlers
// //   const handleMouseDown = useCallback((e) => {
// //     setIsResizing(true)
// //     e.preventDefault()
// //   }, [])

// //   const handleMouseMove = useCallback(
// //     (e) => {
// //       if (!isResizing) return
// //       const newWidth = e.clientX
// //       if (newWidth >= 250 && newWidth <= 400) {
// //         setSidebarWidth(newWidth)
// //       }
// //     },
// //     [isResizing],
// //   )

// //   const handleMouseUp = useCallback(() => {
// //     setIsResizing(false)
// //   }, [])

// //   useEffect(() => {
// //     if (isResizing) {
// //       document.addEventListener("mousemove", handleMouseMove)
// //       document.addEventListener("mouseup", handleMouseUp)
// //       return () => {
// //         document.removeEventListener("mousemove", handleMouseMove)
// //         document.removeEventListener("mouseup", handleMouseUp)
// //       }
// //     }
// //   }, [isResizing, handleMouseMove, handleMouseUp])

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setWindowWidth(window.innerWidth)
// //     }

// //     if (typeof window !== "undefined") {
// //       setWindowWidth(window.innerWidth)
// //       window.addEventListener("resize", handleResize)
// //       return () => {
// //         window.removeEventListener("resize", handleResize)
// //       }
// //     }
// //   }, [])

// //   // Product Gallery Component
// //   const ProductGallery = ({ productId }) => {
// //     const product = productData[productId]
// //     if (!product) return null

// //     return (
// //       <div
// //         style={{
// //           position: "fixed",
// //           top: 0,
// //           left: 0,
// //           right: 0,
// //           bottom: 0,
// //           background: "rgba(0, 0, 0, 0.9)",
// //           zIndex: 1000,
// //           display: "flex",
// //           flexDirection: "column",
// //         }}
// //       >
// //         <div
// //           style={{
// //             padding: "1rem 2rem",
// //             background: "rgba(255, 255, 255, 0.1)",
// //             backdropFilter: "blur(10px)",
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //           }}
// //         >
// //           <h2
// //             style={{
// //               color: "white",
// //               fontSize: "1.5rem",
// //               fontWeight: 600,
// //               margin: 0,
// //             }}
// //           >
// //             {product.title}
// //           </h2>
// //           <button
// //             style={{
// //               background: "rgba(255, 255, 255, 0.2)",
// //               border: "none",
// //               color: "white",
// //               fontSize: "1.5rem",
// //               width: "40px",
// //               height: "40px",
// //               borderRadius: "50%",
// //               cursor: "pointer",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               transition: "all 0.3s ease",
// //             }}
// //             onClick={closeGallery}
// //             onMouseEnter={(e) => {
// //               e.target.style.background = "rgba(255, 255, 255, 0.3)"
// //             }}
// //             onMouseLeave={(e) => {
// //               e.target.style.background = "rgba(255, 255, 255, 0.2)"
// //             }}
// //           >
// //             ×
// //           </button>
// //         </div>

// //         <div
// //           style={{
// //             flex: 1,
// //             padding: "2rem",
// //             display: "grid",
// //             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// //             gap: "1.5rem",
// //             overflowY: "auto",
// //           }}
// //         >
// //           {product.images.map((image, index) => (
// //             <div
// //               key={index}
// //               style={{
// //                 background: "rgba(255, 255, 255, 0.1)",
// //                 borderRadius: "12px",
// //                 overflow: "hidden",
// //                 transition: "all 0.3s ease",
// //                 cursor: "pointer",
// //               }}
// //               onMouseEnter={(e) => {
// //                 e.currentTarget.style.transform = "scale(1.05)"
// //                 e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)"
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.currentTarget.style.transform = "scale(1)"
// //                 e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"
// //               }}
// //             >
// //               <img
// //                 src={image || "/placeholder.svg"}
// //                 alt={`${product.title} ${index + 1}`}
// //                 style={{
// //                   width: "100%",
// //                   height: "300px",
// //                   objectFit: "cover",
// //                 }}
// //               />
// //               <div
// //                 style={{
// //                   padding: "1rem",
// //                   color: "white",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 500 }}>Model {index + 1}</h3>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     )
// //   }

// //   if (!isOpen) {
// //     return (
// //       <div
// //         style={{
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           minHeight: "100vh",
// //           background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
// //           padding: "2rem",
// //         }}
// //       >
// //         <div
// //           style={{
// //             textAlign: "center",
// //             background: colors.backgroundWhite,
// //             padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)",
// //             borderRadius: "24px",
// //             boxShadow: `0 25px 50px ${colors.shadowLight}`,
// //             maxWidth: "450px",
// //             border: `1px solid ${colors.borderLight}`,
// //           }}
// //         >
// //           <div style={{ marginBottom: "1.5rem" }}>
// //             <img
// //               src="/Vedic Jal.png"
// //               alt="VedicJal Logo"
// //               style={{
// //                 width: "clamp(60px, 8vw, 100px)",
// //                 height: "clamp(60px, 8vw, 100px)",
// //                 borderRadius: "12px",
// //               }}
// //             />
// //           </div>
// //           <h2
// //             style={{
// //               color: colors.textDark,
// //               marginBottom: "0.75rem",
// //               fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
// //               fontWeight: 700,
// //               fontFamily: "Inter, sans-serif",
// //             }}
// //           >
// //             VedicJal Catalog
// //           </h2>
// //           <p
// //             style={{
// //               color: colors.textMedium,
// //               marginBottom: "2.5rem",
// //               fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
// //               lineHeight: 1.6,
// //             }}
// //           >
// //             Explore our premium water bottle collection
// //           </p>
// //           <button
// //             style={{
// //               background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //               color: "white",
// //               border: "none",
// //               padding: "clamp(1rem, 2.5vw, 1.25rem) clamp(1.5rem, 4vw, 2.5rem)",
// //               borderRadius: "50px",
// //               fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
// //               fontWeight: 600,
// //               cursor: "pointer",
// //               transition: "all 0.3s ease",
// //               display: "flex",
// //               alignItems: "center",
// //               gap: "0.75rem",
// //               margin: "0 auto",
// //               boxShadow: "0 4px 14px rgba(59, 130, 246, 0.3)",
// //             }}
// //             onClick={openFlipBook}
// //             onMouseEnter={(e) => {
// //               e.target.style.transform = "translateY(-2px)"
// //               e.target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)"
// //             }}
// //             onMouseLeave={(e) => {
// //               e.target.style.transform = "translateY(0)"
// //               e.target.style.boxShadow = "0 4px 14px rgba(59, 130, 246, 0.3)"
// //             }}
// //           >
// //             <span>📖</span>
// //             Open Catalog
// //           </button>
// //         </div>
// //       </div>
// //     )
// //   }

// //   // Show gallery if selected
// //   if (selectedProduct) {
// //     return <ProductGallery productId={selectedProduct} />
// //   }

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         height: "100vh",
// //         background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
// //         fontFamily: "Inter, sans-serif",
// //         overflow: "hidden",
// //       }}
// //     >
// //       {/* Resizable Sidebar */}
// //    <div
// //   style={{
// //     width: `${sidebarWidth}px`,
// //     background: "rgba(255, 255, 255, 0.95)",
// //     backdropFilter: "blur(20px)",
// //     borderRight: `1px solid ${colors.borderLight}`,
// //     display: "flex",
// //     flexDirection: "column",
// //     overflowY: "auto",
// //     boxShadow: `4px 0 20px ${colors.shadowLight}`,
// //     position: "relative",
// //     minWidth: "250px",
// //     maxWidth: "400px",
// //     paddingRight: "6px", // 👈 Creates space from scrollbar
// //   }}
// // >
// //   {/* Header */}
// //   <div
// //     style={{
// //       padding: "1rem 1.5rem",
// //       borderBottom: `1px solid ${colors.borderLight}`,
// //       display: "flex",
// //       justifyContent: "space-between",
// //       alignItems: "center",
// //       background: colors.backgroundWhite,
// //     }}
// //   >
// //     <h3
// //       style={{
// //         margin: 0,
// //         color: colors.textDark,
// //         fontSize: "1.125rem",
// //         fontWeight: 600,
// //       }}
// //     >
// //       Pages
// //     </h3>
// //     <button
// //       style={{
// //         background: "none",
// //         border: "none",
// //         fontSize: "1.5rem",
// //         cursor: "pointer",
// //         color: colors.textMedium,
// //         padding: "0.5rem",
// //         width: "36px",
// //         height: "36px",
// //         borderRadius: "50%",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         transition: "all 0.2s ease",
// //       }}
// //       onClick={closeFlipBook}
// //       onMouseEnter={(e) => {
// //         e.target.style.background = colors.primaryLight
// //         e.target.style.color = colors.primary
// //       }}
// //       onMouseLeave={(e) => {
// //         e.target.style.background = "none"
// //         e.target.style.color = colors.textMedium
// //       }}
// //     >
// //       ×
// //     </button>
// //   </div>

// //   {/* Thumbnails */}
// //   <div
// //     style={{
// //       flex: 1,
// //       padding: "0.5rem",
// //       background: colors.backgroundLight,
// //     }}
// //   >
// //     {pages.map((page, index) => {
// //       let targetSpread = index === 0 ? 0 : Math.ceil(index / 2)
// //       const isActive = targetSpread === currentSpread

// //       return (
// //        <div
// //           key={index}
// //           style={{
// //             marginBottom: "0.5rem",
// //             border: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
// //             borderRadius: "6px",
// //             overflow: "hidden",
// //             cursor: "pointer",
// //             transition: "all 0.3s ease",
// //             background: colors.backgroundWhite,
// //             boxShadow: isActive
// //               ? `0 4px 20px rgba(59, 130, 246, 0.25)`
// //               : `0 2px 8px ${colors.shadowLight}`,
// //             height: "120px", // Fixed height for thumbnails
// //             position: "relative",
// //           }}
// //           onClick={() => goToSpread(targetSpread)}
// //           onMouseEnter={(e) => {
// //             if (!isActive) {
// //               e.currentTarget.style.borderColor = colors.primary
// //               e.currentTarget.style.transform = "scale(1.02)"
// //               e.currentTarget.style.boxShadow = `0 4px 16px ${colors.shadowMedium}`
// //             }
// //           }}
// //           onMouseLeave={(e) => {
// //             if (!isActive) {
// //               e.currentTarget.style.borderColor = "transparent"
// //               e.currentTarget.style.transform = "scale(1)"
// //               e.currentTarget.style.boxShadow = `0 2px 8px ${colors.shadowLight}`
// //             }
// //           }}
// //         >
// //           {/* Thumbnail preview */}
// //           <div
// //             style={{
// //               width: "100%",
// //               height: "100px", // Specific height for thumbnail
// //               overflow: "hidden",
// //               position: "relative",
// //               background: "#f8f9fa",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //           >
// //             <div
// //               style={{
// //                 transform: "scale(0.08)",
// //                 transformOrigin: "center center",
// //                 width: "1200px", // Simulated page width
// //                 height: "800px", // Simulated page height
// //                 pointerEvents: "none",
// //                 overflow: "hidden",
// //               }}
// //             >
// //               {page && page.content}
// //             </div>
// //           </div>
// //           {/* Page number */}
// //           <div
// //             style={{
// //               position: "absolute",
// //               bottom: "0",
// //               left: "0",
// //               right: "0",
// //               background: colors.textDark,
// //               color: "white",
// //               padding: "4px 8px",
// //               fontSize: "0.7rem",
// //               fontWeight: 500,
// //               textAlign: "center",
// //               height: "20px",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //           >
// //             Page {index + 1}
// //           </div>
// //         </div>
// //       )
// //     })}
// //   </div>

// //   {/* Resize Handle */}
// //   <div
// //     style={{
// //       position: "absolute",
// //       top: 0,
// //       right: 0,
// //       width: "4px",
// //       height: "100%",
// //       background: "transparent",
// //       cursor: "col-resize",
// //       zIndex: 10,
// //     }}
// //     onMouseDown={handleMouseDown}
// //     onMouseEnter={(e) => {
// //       e.target.style.background = colors.primary
// //       e.target.style.opacity = "0.5"
// //     }}
// //     onMouseLeave={(e) => {
// //       e.target.style.background = "transparent"
// //     }}
// //   />
// // </div>


// //       {/* Main Flipbook */}
// //       <div
// //         style={{
// //           flex: 1,
// //           display: "flex",
// //           flexDirection: "column",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           padding: "clamp(1rem, 3vw, 2rem)",
// //           position: "relative",
// //           overflow: "hidden",
// //         }}
// //       >
// //         <div
// //           ref={flipBookRef}
// //           style={{
// //             width: "min(90vw, 95vh * 1.2)",
// //             height: "min(75vh, 90vw / 1.2)",
// //             maxWidth: "1400px",
// //             maxHeight: "900px",
// //             position: "relative",
// //             perspective: "1500px",
// //             marginBottom: "1rem",
// //           }}
// //         >
// //           {/* Book spine - only show when not closed book */}
// //           {!isClosedBook && (
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 left: "50%",
// //                 top: 0,
// //                 width: "6px",
// //                 height: "100%",
// //                 background: `linear-gradient(to bottom, ${colors.secondary}, ${colors.textMedium})`,
// //                 transform: "translateX(-50%)",
// //                 zIndex: 10,
// //                 borderRadius: "3px",
// //                 boxShadow: `0 0 10px ${colors.shadowLight}`,
// //               }}
// //             />
// //           )}

// //           {/* Left Page - hide for closed book */}
// //           {!isClosedBook && (
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 width: "50%",
// //                 height: "100%",
// //                 background: colors.backgroundWhite,
// //                 border: `1px solid ${colors.borderLight}`,
// //                 boxShadow: `0 8px 32px ${colors.shadowMedium}`,
// //                 overflow: "hidden",
// //                 left: 0,
// //                 borderTopLeftRadius: "12px",
// //                 borderBottomLeftRadius: "12px",
// //               }}
// //             >
// //               {getCurrentLeftPage() && getCurrentLeftPage().content}
// //             </div>
// //           )}

// //           {/* Right Page */}
// //           <div
// //             style={{
// //               position: "absolute",
// //               width: isClosedBook ? "100%" : "50%",
// //               height: "100%",
// //               background: colors.backgroundWhite,
// //               border: `1px solid ${colors.borderLight}`,
// //               boxShadow: `0 8px 32px ${colors.shadowMedium}`,
// //               overflow: "hidden",
// //               right: 0,
// //               left: isClosedBook ? 0 : "auto",
// //               borderTopRightRadius: "12px",
// //               borderBottomRightRadius: "12px",
// //               borderTopLeftRadius: isClosedBook ? "12px" : "0",
// //               borderBottomLeftRadius: isClosedBook ? "12px" : "0",
// //             }}
// //           >
// //             {getCurrentRightPage() && getCurrentRightPage().content}
// //           </div>

// //           {/* Flipping Page */}
// //           {isFlipping && (
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 width: "50%",
// //                 height: "100%",
// //                 background: colors.backgroundWhite,
// //                 border: `1px solid ${colors.borderLight}`,
// //                 boxShadow: `0 8px 32px ${colors.shadowMedium}`,
// //                 overflow: "hidden",
// //                 zIndex: 20,
// //                 transformStyle: "preserve-3d",
// //                 transition: "transform 0.6s ease-in-out",
// //                 ...(flipDirection === "next"
// //                   ? {
// //                       right: 0,
// //                       transformOrigin: "left center",
// //                       animation: "flipNext 0.6s ease-in-out",
// //                     }
// //                   : {
// //                       left: 0,
// //                       transformOrigin: "right center",
// //                       animation: "flipPrev 0.6s ease-in-out",
// //                     }),
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   position: "absolute",
// //                   width: "100%",
// //                   height: "100%",
// //                   backfaceVisibility: "hidden",
// //                 }}
// //               >
// //                 {flipDirection === "next" && getCurrentRightPage() && getCurrentRightPage().content}
// //                 {flipDirection === "prev" && getPrevLeftPage() && getPrevLeftPage().content}
// //               </div>
// //               <div
// //                 style={{
// //                   position: "absolute",
// //                   width: "100%",
// //                   height: "100%",
// //                   backfaceVisibility: "hidden",
// //                   transform: "rotateY(180deg)",
// //                 }}
// //               >
// //                 {flipDirection === "next" && getNextRightPage() && getNextRightPage().content}
// //                 {flipDirection === "prev" && getCurrentLeftPage() && getCurrentLeftPage().content}
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Compact Navigation */}
// //         <div
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             gap: "1rem",
// //             background: "rgba(255, 255, 255, 0.95)",
// //             backdropFilter: "blur(20px)",
// //             padding: "0.5rem 1rem",
// //             borderRadius: "30px",
// //             boxShadow: `0 4px 16px ${colors.shadowMedium}`,
// //             border: `1px solid ${colors.borderLight}`,
// //           }}
// //         >
// //           <button
// //             style={{
// //               background:
// //                 currentSpread === 0
// //                   ? colors.secondary
// //                   : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //               color: "white",
// //               border: "none",
// //               padding: "0.5rem 1rem",
// //               borderRadius: "15px",
// //               cursor: currentSpread === 0 ? "not-allowed" : "pointer",
// //               fontWeight: 600,
// //               fontSize: "0.8rem",
// //               transition: "all 0.3s ease",
// //               boxShadow: currentSpread === 0 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
// //               minWidth: "40px",
// //               height: "32px",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //             onClick={prevSpread}
// //             disabled={currentSpread === 0}
// //             onMouseEnter={(e) => {
// //               if (currentSpread !== 0) {
// //                 e.target.style.transform = "translateY(-1px)"
// //                 e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.4)"
// //               }
// //             }}
// //             onMouseLeave={(e) => {
// //               if (currentSpread !== 0) {
// //                 e.target.style.transform = "translateY(0)"
// //                 e.target.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.3)"
// //               }
// //             }}
// //           >
// //             ←
// //           </button>
// //           <div
// //             style={{
// //               color: colors.textDark,
// //               fontWeight: 600,
// //               fontSize: "0.8rem",
// //               padding: "0 0.5rem",
// //             }}
// //           >
// //             {currentSpread === 0
// //               ? "Cover"
// //               : currentSpread === 1
// //                 ? "Intro"
// //                 : currentSpread === 2
// //                   ? "Index & Thank You"
// //                   : `Spread ${currentSpread}`}{" "}
// //             / {totalSpreads}
// //           </div>
// //           <button
// //             style={{
// //               background:
// //                 currentSpread >= totalSpreads - 1
// //                   ? colors.secondary
// //                   : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
// //               color: "white",
// //               border: "none",
// //               padding: "0.5rem 1rem",
// //               borderRadius: "15px",
// //               cursor: currentSpread >= totalSpreads - 1 ? "not-allowed" : "pointer",
// //               fontWeight: 600,
// //               fontSize: "0.8rem",
// //               transition: "all 0.3s ease",
// //               boxShadow: currentSpread >= totalSpreads - 1 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
// //               minWidth: "40px",
// //               height: "32px",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //             onClick={nextSpread}
// //             disabled={currentSpread >= totalSpreads - 1}
// //             onMouseEnter={(e) => {
// //               if (currentSpread < totalSpreads - 1) {
// //                 e.target.style.transform = "translateY(-1px)"
// //                 e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.4)"
// //               }
// //             }}
// //             onMouseLeave={(e) => {
// //               if (currentSpread < totalSpreads - 1) {
// //                 e.target.style.transform = "translateY(0)"
// //                 e.target.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.3)"
// //               }
// //             }}
// //           >
// //             →
// //           </button>
// //         </div>
// //       </div>

// //       {/* CSS animations */}
// //       <style>
// //         {`
// //         @keyframes flipNext {
// //           0% { transform: rotateY(0deg); }
// //           100% { transform: rotateY(-180deg); }
// //         }
// //         @keyframes flipPrev {
// //           0% { transform: rotateY(0deg); }
// //           100% { transform: rotateY(180deg); }
// //         }

// //         @media (max-width: 768px) {
// //           .flipbook-container { 
// //             flex-direction: column !important; 
// //           }
// //           .sidebar { 
// //             width: 100% !important; 
// //             height: 120px !important; 
// //             flex-direction: row !important; 
// //             overflow-x: auto !important; 
// //             overflow-y: hidden !important;
// //           }
// //           .page-thumbnails {
// //             display: flex !important;
// //             flex-direction: row !important;
// //             gap: 0.5rem !important;
// //             padding: 0.5rem !important;
// //           }
// //           .thumbnail {
// //             flex: 0 0 80px !important;
// //             height: 60px !important;
// //             margin-bottom: 0 !important;
// //           }
// //           .resize-handle {
// //             display: none !important;
// //           }
// //         }

// //         @media (max-width: 480px) {
// //           .flipbook-main {
// //             padding: 0.5rem !important;
// //           }
// //         }
// //         `}
// //       </style>
// //     </div>
// //   )
// // }

// // export default FlipBook


"use client";

import { useState, useRef, useCallback, useEffect } from "react";

const FlipBook = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("");
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [isResizing, setIsResizing] = useState(false);
  const flipBookRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(1024);

  // Color palette
  const colors = {
    primary: "#3b82f6",
    primaryLight: "#dbeafe",
    secondary: "#64748b",
    accent: "#06b6d4",
    textDark: "#1e293b",
    textMedium: "#475569",
    textLight: "#64748b",
    backgroundLight: "#f8fafc",
    backgroundWhite: "#ffffff",
    borderLight: "#e2e8f0",
    shadowLight: "rgba(15, 23, 42, 0.08)",
    shadowMedium: "rgba(15, 23, 42, 0.12)",
    shadowStrong: "rgba(15, 23, 42, 0.3)",
  };

  // Product data for galleries
  const productData = {
    "200ml": {
      title: "200ml Water Bottles",
      images: [
        "/placeholder.svg?height=400&width=300&text=200ml+Bottle+1",
        "/placeholder.svg?height=400&width=300&text=200ml+Bottle+2",
        "/placeholder.svg?height=400&width=300&text=200ml+Bottle+3",
        "/placeholder.svg?height=400&width=300&text=200ml+Bottle+4",
      ],
    },
    "250ml": {
      title: "250ml Water Bottles",
      images: [
        "/placeholder.svg?height=400&width=300&text=250ml+Bottle+1",
        "/placeholder.svg?height=400&width=300&text=250ml+Bottle+2",
        "/placeholder.svg?height=400&width=300&text=250ml+Bottle+3",
        "/placeholder.svg?height=400&width=300&text=250ml+Bottle+4",
      ],
    },
    "300ml": {
      title: "300ml Water Bottles",
      images: [
        "/placeholder.svg?height=400&width=300&text=300ml+Bottle+1",
        "/placeholder.svg?height=400&width=300&text=300ml+Bottle+2",
        "/placeholder.svg?height=400&width=300&text=300ml+Bottle+3",
        "/placeholder.svg?height=400&width=300&text=300ml+Bottle+4",
      ],
    },
    "500ml": {
      title: "500ml Water Bottles",
      images: [
        "/placeholder.svg?height=400&width=300&text=500ml+Bottle+1",
        "/placeholder.svg?height=400&width=300&text=500ml+Bottle+2",
        "/placeholder.svg?height=400&width=300&text=500ml+Bottle+3",
        "/placeholder.svg?height=400&width=300&text=500ml+Bottle+4",
      ],
    },
    "700ml": {
      title: "700ml Water Bottles",
      images: [
        "/placeholder.svg?height=400&width=300&text=700ml+Bottle+1",
        "/placeholder.svg?height=400&width=300&text=700ml+Bottle+2",
        "/placeholder.svg?height=400&width=300&text=700ml+Bottle+3",
        "/placeholder.svg?height=400&width=300&text=700ml+Bottle+4",
      ],
    },
    "1liter": {
      title: "1 Liter Water Bottles",
      images: [
        "/placeholder.svg?height=400&width=300&text=1L+Bottle+1",
        "/placeholder.svg?height=400&width=300&text=1L+Bottle+3",
        "/placeholder.svg?height=400&width=300&text=1L+Bottle+2",
        "/placeholder.svg?height=400&width=300&text=1L+Bottle+4",
      ],
    },
    "bio-200ml": {
      title: "Biodegradable 200ml",
      images: [
        "/placeholder.svg?height=400&width=300&text=Bio+200ml+1",
        "/placeholder.svg?height=400&width=300&text=Bio+200ml+2",
        "/placeholder.svg?height=400&width=300&text=Bio+200ml+3",
        "/placeholder.svg?height=400&width=300&text=Bio+200ml+4",
      ],
    },
    "bio-250ml": {
      title: "Biodegradable 250ml",
      images: [
        "/placeholder.svg?height=400&width=300&text=Bio+250ml+1",
        "/placeholder.svg?height=400&width=300&text=Bio+250ml+2",
        "/placeholder.svg?height=400&width=300&text=Bio+250ml+3",
        "/placeholder.svg?height=400&width=300&text=Bio+250ml+4",
      ],
    },
    "bio-300ml": {
      title: "Biodegradable 300ml",
      images: [
        "/placeholder.svg?height=400&width=300&text=Bio+300ml+1",
        "/placeholder.svg?height=400&width=300&text=Bio+300ml+2",
        "/placeholder.svg?height=400&width=300&text=Bio+300ml+3",
        "/placeholder.svg?height=400&width=300&text=Bio+300ml+4",
      ],
    },
    "bio-500ml": {
      title: "Biodegradable 500ml",
      images: [
        "/placeholder.svg?height=400&width=300&text=Bio+500ml+1",
        "/placeholder.svg?height=400&width=300&text=Bio+500ml+2",
        "/placeholder.svg?height=400&width=300&text=Bio+500ml+3",
        "/placeholder.svg?height=400&width=300&text=Bio+500ml+4",
      ],
    },
  };

  // Open product gallery
  const openProductGallery = (productId) => {
    setSelectedProduct(productId);
  };

  // Close gallery
  const closeGallery = () => {
    setSelectedProduct(null);
  };

  const pages = [
    // Page 0 - Cover Page (CLOSED BOOK - SINGLE PAGE)
    {
      type: "cover",
      isClosedBook: true,
      content: (
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: 0,
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Decorative elements */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(56,182,255,0.1) 100%)", transform: "skewY(-4deg)", transformOrigin: "top left" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(135deg, rgba(56,182,255,0.1) 0%, rgba(14,165,233,0.15) 100%)", transform: "skewY(4deg)", transformOrigin: "bottom right" }} />
          <div style={{ position: "absolute", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, rgba(14,165,233,0) 70%)", top: "18%", left: "8%" }} />
          <div style={{ position: "absolute", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,182,255,0.08) 0%, rgba(56,182,255,0) 70%)", bottom: "12%", right: "8%" }} />

          {/* Main content */}
          <div style={{ position: "relative", zIndex: 2, padding: "1.5rem 1.5rem", textAlign: "center", maxWidth: "800px", width: "90%" }}>
            
            {/* Logo and title */}
            <div style={{ marginBottom: "0.75rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src="/Vedic Jal.png"
                alt="VedicJal Logo"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 14px rgba(2,132,199,0.2)",
                  border: "3px solid white",
                  background: "white",
                  marginBottom: "0.4rem",
                }}
              />
              <h1 style={{ fontSize: "2.2rem", fontWeight: 700, margin: "0 0 0.4rem 0", color: "#0369a1", fontFamily: "'Georgia', serif" }}>
                VedicJal
              </h1>
              <p style={{ fontSize: "1rem", color: "#0ea5e9", margin: 0, fontWeight: 500 }}>
                Pure Water, Pure Life
              </p>
            </div>

            {/* Welcome Box */}
            <div style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(8px)",
              borderRadius: "12px",
              padding: "0.9rem",
              marginTop: "0.8rem",
              marginBottom: "0.8rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              border: "1px solid rgba(224,242,254,0.8)"
            }}>
              <h2 style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#075985",
                fontFamily: "'Georgia', serif",
                margin: 0
              }}>
                Welcome to vedicjal online brochure for customized range
              </h2>
            </div>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0.6rem 0" }}>
              <div style={{ height: "2px", flex: 1, background: "linear-gradient(90deg, rgba(2,132,199,0) 0%, rgba(2,132,199,0.5) 100%)" }} />
              <div style={{ height: "2px", flex: 1, background: "linear-gradient(90deg, rgba(2,132,199,0.5) 0%, rgba(2,132,199,0) 100%)" }} />
            </div>

            {/* Footer text */}
            <p style={{
              fontSize: "0.88rem",
              color: "#64748b",
              fontStyle: "italic",
              margin: 0,
              marginTop: "0.5rem",
            }}>
              "Bringing purity to your hands"
            </p>
          </div>
        </div>
      )
    },

    // Page 1 - Full-fit Image
    {
      type: "fullimage-left",
      content: (
        <div style={{ width: "100%", height: "100%", padding: 0, position: "relative", overflow: "hidden" }}>
          <img
            src="/page1.jpg"
            alt="VedicJal Workshop - Page 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ),
    },

    // Page 2 - Full-fit Image
    {
      type: "fullimage-right",
      content: (
        <div style={{ width: "100%", height: "100%", padding: 0, position: "relative", overflow: "hidden" }}>
          <img
            src="/page2.jpg"
            alt="VedicJal Workshop - Page 2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ),
    },

    // Page 3 - INDEX PAGE
    {
      type: "index",
      content: (
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "2vh 4vw",
            boxSizing: "border-box",
            background: "#ffffff",
            fontFamily: "Georgia, serif",
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "1.5vh" }}>
            <h1
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                color: "#8B4513",
                margin: "0 0 0.5vh 0",
                fontWeight: "bold",
              }}
            >
              INDEX
            </h1>
            <div
              style={{
                width: "80px",
                height: "2px",
                background: "#8B4513",
                margin: "0 auto 0.5vh",
              }}
            />
            <p style={{ fontSize: "clamp(12px, 1.5vw, 16px)", color: "#555", margin: 0 }}>
              Click on any item to view the product gallery.
            </p>
          </div>

          {/* Index Content Container */}
          <div style={{ flex: 1, width: "100%", maxWidth: "90vw", margin: "0 auto" }}>
            <div>
              {[
                { number: "1.", name: "200ml", id: "200ml" },
                { number: "2.", name: "250ml", id: "250ml" },
                { number: "3.", name: "300ml", id: "300ml" },
                { number: "4.", name: "500ml", id: "500ml" },
                { number: "5.", name: "700ml", id: "700ml" },
                { number: "6.", name: "1 Liter", id: "1liter" },
              ].map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1vh 1.5vw",
                    marginBottom: "0.8vh",
                    background: "#f8f9fa",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "clamp(14px, 2vw, 18px)",
                    fontWeight: 500,
                    color: "#333",
                    border: "1px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => openProductGallery(item.id)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#e3f2fd";
                    e.currentTarget.style.borderColor = "#2196f3";
                    e.currentTarget.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f8f9fa";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span style={{ fontWeight: "bold", marginRight: "12px", color: "#8B4513", minWidth: "35px" }}>
                    {item.number}
                  </span>
                  <span>{item.name}</span>
                  <span style={{ marginLeft: "auto", color: "#2196f3", fontSize: "1em" }}>→</span>
                </div>
              ))}
            </div>

            {/* Biodegradable */}
            <div style={{ marginTop: "2vh" }}>
              <h2
                style={{
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  fontWeight: "bold",
                  color: "#8B4513",
                  marginBottom: "1vh",
                }}
              >
                7. Biodegradable
              </h2>
              <div style={{ paddingLeft: "1vw" }}>
                {[
                  { number: "7.1", name: "Biodegradable 200ml", id: "bio-200ml" },
                  { number: "7.2", name: "Biodegradable 250ml", id: "bio-250ml" },
                  { number: "7.3", name: "Biodegradable 300ml", id: "bio-300ml" },
                  { number: "7.4", name: "Biodegradable 500ml", id: "bio-500ml" },
                ].map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "1vh 1.5vw",
                      marginBottom: "0.6vh",
                      background: "#f1f8e9",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "clamp(14px, 2vw, 18px)",
                      fontWeight: 500,
                      color: "#333",
                      border: "1px solid transparent",
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => openProductGallery(item.id)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#c8e6c9";
                      e.currentTarget.style.borderColor = "#4caf50";
                      e.currentTarget.style.transform = "translateX(6px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#f1f8e9";
                      e.currentTarget.style.borderColor = "transparent";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <span style={{ fontWeight: "bold", marginRight: "12px", color: "#4caf50", minWidth: "45px" }}>
                      {item.number}
                    </span>
                    <span>{item.name}</span>
                    <span style={{ marginLeft: "auto", color: "#4caf50", fontSize: "1em" }}>→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Page 4 - THANK YOU PAGE
    {
      type: "thankyou",
      content: (
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "clamp(16px, 3vh, 32px)",
            boxSizing: "border-box",
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: colors.textDark,
              zIndex: 2,
              width: "100%",
              maxWidth: "680px",
            }}
          >
            {/* Logo */}
            <div
              style={{
                marginBottom: "0.6rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="/Vedic Jal.png"
                alt="VedicJal Logo"
                style={{
                  width: "70px",
                  height: "70px",
                  marginBottom: "0.4rem",
                  borderRadius: "14px",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                  border: "2.5px solid #ffffff",
                }}
              />
            </div>

            {/* Heading */}
            <h1
              style={{
                fontSize: "clamp(1.8rem, 6vw, 3rem)",
                fontWeight: 800,
                margin: "0 0 0.6rem 0",
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 0.95,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Thank You
            </h1>

            {/* Divider */}
            <div
              style={{
                width: "70px",
                height: "2px",
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                margin: "0 auto 0.8rem auto",
                borderRadius: "1px",
              }}
            />

            {/* Subtext */}
            <p
              style={{
                fontSize: "clamp(0.95rem, 2.4vw, 1.2rem)",
                margin: "0 0 0.4rem 0",
                fontWeight: 600,
                color: colors.textDark,
                fontFamily: "Inter, sans-serif",
              }}
            >
              For choosing VedicJal
            </p>

            {/* Body text */}
            <p
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                fontWeight: 400,
                color: colors.textMedium,
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.5,
                maxWidth: "380px",
                margin: "0 auto 1rem auto",
              }}
            >
              Your trust in our premium handcrafted water bottles means the world to us.
            </p>

            {/* Quote */}
            <div
              style={{
                padding: "0.6rem 1.4rem",
                border: `1.5px solid ${colors.borderLight}`,
                borderRadius: "10px",
                background: "rgba(59, 130, 246, 0.05)",
                display: "inline-block",
                boxShadow: `0 2px 10px ${colors.shadowLight}`,
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  margin: 0,
                  fontWeight: 500,
                  color: colors.primary,
                  fontFamily: "Inter, sans-serif",
                  fontStyle: "italic",
                }}
              >
                "Pure Water, Pure Life"
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const totalSpreads = 3; // Cover (0), Image Spread (1), Index+ThankYou (2)

  const goToSpread = (spreadIndex) => {
    if (isFlipping || spreadIndex < 0 || spreadIndex >= totalSpreads) return;
    const direction = spreadIndex > currentSpread ? "next" : "prev";
    setFlipDirection(direction);
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentSpread(spreadIndex);
    }, 300);
    setTimeout(() => {
      setIsFlipping(false);
      setFlipDirection("");
    }, 600);
  };

  const nextSpread = () => {
    if (currentSpread < totalSpreads - 1) {
      goToSpread(currentSpread + 1);
    }
  };

  const prevSpread = () => {
    if (currentSpread > 0) {
      goToSpread(currentSpread - 1);
    }
  };

  const getCurrentLeftPage = () => {
    if (currentSpread === 0) return null; // Cover page has no left page
    const leftPageIndex = currentSpread * 2 - 1;
    return pages[leftPageIndex] || null;
  };

  const getCurrentRightPage = () => {
    if (currentSpread === 0) {
      return pages[0]; // Cover page
    }
    const rightPageIndex = currentSpread * 2;
    return pages[rightPageIndex] || null;
  };

  const getNextRightPage = () => {
    return pages[(currentSpread + 1) * 2];
  };

  const getPrevLeftPage = () => {
    return pages[(currentSpread - 1) * 2 - 1];
  };

  const isClosedBook = currentSpread === 0;

  // Sidebar resize handlers
  const handleMouseDown = useCallback((e) => {
    setIsResizing(true);
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isResizing || windowWidth <= 768) return;
      const newWidth = e.clientX;
      if (newWidth >= 250 && newWidth <= 400) {
        setSidebarWidth(newWidth);
      }
    },
    [isResizing, windowWidth],
  );

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isResizing, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 768) {
        setSidebarWidth(window.innerWidth);
      }
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Product Gallery Component
  const ProductGallery = ({ productId }) => {
    const product = productData[productId];
    if (!product) return null;

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.9)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "1rem 2rem",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "1.5rem",
              fontWeight: 600,
              margin: 0,
            }}
          >
            {product.title}
          </h2>
          <button
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onClick={closeGallery}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.2)";
            }}
          >
            ×
          </button>
        </div>

        <div
          style={{
            flex: 1,
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            overflowY: "auto",
          }}
        >
          {product.images.map((image, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${product.title} ${index + 1}`}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  padding: "1rem",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 500 }}>Model {index + 1}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Show gallery if selected
  if (selectedProduct) {
    return <ProductGallery productId={selectedProduct} />;
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
        fontFamily: "Inter, sans-serif",
        overflow: "hidden",
        flexDirection: windowWidth <= 768 ? "column" : "row",
      }}
    >
      {/* Resizable Sidebar */}
      <div
        className="sidebar"
        style={{
          width: windowWidth <= 768 ? "100%" : `${sidebarWidth}px`,
          height: windowWidth <= 768 ? "120px" : "100%",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderRight: `1px solid ${colors.borderLight}`,
          display: "flex",
          flexDirection: windowWidth <= 768 ? "row" : "column",
          overflow: windowWidth <= 768 ? "auto hidden" : "auto",
          boxShadow: `4px 0 20px ${colors.shadowLight}`,
          position: "relative",
          minWidth: "250px",
          maxWidth: windowWidth <= 768 ? "100%" : "400px",
          paddingRight: "6px",
          zIndex: 20,
        }}
      >
        {/* Header - only shown on mobile */}
        {windowWidth <= 768 && (
          <div
            style={{
              padding: "1rem",
              background: colors.backgroundWhite,
              display: "flex",
              alignItems: "center",
              position: "sticky",
              left: 0,
              zIndex: 10,
              borderBottom: `1px solid ${colors.borderLight}`,
              minWidth: "max-content",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: colors.textDark,
                fontSize: "1rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              Page Navigation
            </h3>
          </div>
        )}

        {/* Thumbnails */}
        <div
          className="page-thumbnails"
          style={{
            flex: 1,
            padding: windowWidth <= 768 ? "0.5rem" : "0.5rem",
            background: colors.backgroundLight,
            display: "flex",
            flexDirection: windowWidth <= 768 ? "row" : "column",
            gap: windowWidth <= 768 ? "0.5rem" : "0",
          }}
        >
          {pages.map((page, index) => {
            let targetSpread = index === 0 ? 0 : Math.ceil(index / 2);
            const isActive = targetSpread === currentSpread;

            return (
              <div
                key={index}
                className="thumbnail"
                style={{
                  marginBottom: windowWidth <= 768 ? 0 : "0.5rem",
                  border: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
                  borderRadius: "6px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: colors.backgroundWhite,
                  boxShadow: isActive
                    ? `0 4px 20px rgba(59, 130, 246, 0.25)`
                    : `0 2px 8px ${colors.shadowLight}`,
                  height: windowWidth <= 768 ? "100px" : "120px",
                  width: windowWidth <= 768 ? "80px" : "auto",
                  minWidth: windowWidth <= 768 ? "80px" : "auto",
                  flexShrink: 0,
                  position: "relative",
                }}
                onClick={() => goToSpread(targetSpread)}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = colors.primary;
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow = `0 4px 16px ${colors.shadowMedium}`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = `0 2px 8px ${colors.shadowLight}`;
                  }
                }}
              >
                {/* Thumbnail preview */}
                <div
                  style={{
                    width: "100%",
                    height: windowWidth <= 768 ? "80px" : "100px",
                    overflow: "hidden",
                    position: "relative",
                    background: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      transform: "scale(0.08)",
                      transformOrigin: "center center",
                      width: "1200px",
                      height: "800px",
                      pointerEvents: "none",
                      overflow: "hidden",
                    }}
                  >
                    {page && page.content}
                  </div>
                </div>
                {/* Page number */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    background: colors.textDark,
                    color: "white",
                    padding: "4px 8px",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    textAlign: "center",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Resize Handle - only on desktop */}
        {windowWidth > 768 && (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "4px",
              height: "100%",
              background: "transparent",
              cursor: "col-resize",
              zIndex: 10,
            }}
            onMouseDown={handleMouseDown}
            onMouseEnter={(e) => {
              e.target.style.background = colors.primary;
              e.target.style.opacity = "0.5";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
            }}
          />
        )}
      </div>

      {/* Main Flipbook */}
      <div
        className="flipbook-main"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: windowWidth <= 768 ? "0.5rem" : "clamp(1rem, 3vw, 2rem)",
          position: "relative",
          overflow: "hidden",
          height: windowWidth <= 768 ? "calc(100vh - 120px)" : "100%",
        }}
      >
        <div
          ref={flipBookRef}
          style={{
            width: windowWidth <= 768 ? "95%" : "min(90vw, 95vh * 1.2)",
            height: windowWidth <= 768 ? "70%" : "min(75vh, 90vw / 1.2)",
            maxWidth: "1400px",
            maxHeight: "900px",
            position: "relative",
            perspective: "1500px",
            marginBottom: "1rem",
          }}
        >
          {/* Book spine - only show when not closed book */}
          {!isClosedBook && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                width: "6px",
                height: "100%",
                background: `linear-gradient(to bottom, ${colors.secondary}, ${colors.textMedium})`,
                transform: "translateX(-50%)",
                zIndex: 10,
                borderRadius: "3px",
                boxShadow: `0 0 10px ${colors.shadowLight}`,
              }}
            />
          )}

          {/* Left Page - hide for closed book */}
          {!isClosedBook && (
            <div
              style={{
                position: "absolute",
                width: "50%",
                height: "100%",
                background: colors.backgroundWhite,
                border: `1px solid ${colors.borderLight}`,
                boxShadow: `0 8px 32px ${colors.shadowMedium}`,
                overflow: "hidden",
                left: 0,
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
              }}
            >
              {getCurrentLeftPage() && getCurrentLeftPage().content}
            </div>
          )}

          {/* Right Page */}
          <div
            style={{
              position: "absolute",
              width: isClosedBook ? "100%" : "50%",
              height: "100%",
              background: colors.backgroundWhite,
              border: `1px solid ${colors.borderLight}`,
              boxShadow: `0 8px 32px ${colors.shadowMedium}`,
              overflow: "hidden",
              right: 0,
              left: isClosedBook ? 0 : "auto",
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
              borderTopLeftRadius: isClosedBook ? "12px" : "0",
              borderBottomLeftRadius: isClosedBook ? "12px" : "0",
            }}
          >
            {getCurrentRightPage() && getCurrentRightPage().content}
          </div>

          {/* Flipping Page */}
          {isFlipping && (
            <div
              style={{
                position: "absolute",
                width: "50%",
                height: "100%",
                background: colors.backgroundWhite,
                border: `1px solid ${colors.borderLight}`,
                boxShadow: `0 8px 32px ${colors.shadowMedium}`,
                overflow: "hidden",
                zIndex: 20,
                transformStyle: "preserve-3d",
                transition: "transform 0.6s ease-in-out",
                ...(flipDirection === "next"
                  ? {
                      right: 0,
                      transformOrigin: "left center",
                      animation: "flipNext 0.6s ease-in-out",
                    }
                  : {
                      left: 0,
                      transformOrigin: "right center",
                      animation: "flipPrev 0.6s ease-in-out",
                    }),
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                }}
              >
                {flipDirection === "next" && getCurrentRightPage() && getCurrentRightPage().content}
                {flipDirection === "prev" && getPrevLeftPage() && getPrevLeftPage().content}
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                {flipDirection === "next" && getNextRightPage() && getNextRightPage().content}
                {flipDirection === "prev" && getCurrentLeftPage() && getCurrentLeftPage().content}
              </div>
            </div>
          )}
        </div>

        {/* Compact Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            padding: "0.5rem 1rem",
            borderRadius: "30px",
            boxShadow: `0 4px 16px ${colors.shadowMedium}`,
            border: `1px solid ${colors.borderLight}`,
            width: windowWidth <= 480 ? "95%" : "auto",
          }}
        >
          <button
            style={{
              background:
                currentSpread === 0
                  ? colors.secondary
                  : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "15px",
              cursor: currentSpread === 0 ? "not-allowed" : "pointer",
              fontWeight: 600,
              fontSize: "0.8rem",
              transition: "all 0.3s ease",
              boxShadow: currentSpread === 0 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
              minWidth: "40px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={prevSpread}
            disabled={currentSpread === 0}
            onMouseEnter={(e) => {
              if (currentSpread !== 0) {
                e.target.style.transform = "translateY(-1px)";
                e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.4)";
              }
            }}
            onMouseLeave={(e) => {
              if (currentSpread !== 0) {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.3)";
              }
            }}
          >
            ←
          </button>
          <div
            style={{
              color: colors.textDark,
              fontWeight: 600,
              fontSize: "0.8rem",
              padding: "0 0.5rem",
              minWidth: "120px",
              textAlign: "center",
            }}
          >
            {currentSpread === 0
              ? "Cover"
              : currentSpread === 1
                ? "Intro"
                : currentSpread === 2
                  ? "Index & Thank You"
                  : `Spread ${currentSpread}`}{" "}
            / {totalSpreads}
          </div>
          <button
            style={{
              background:
                currentSpread >= totalSpreads - 1
                  ? colors.secondary
                  : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "15px",
              cursor: currentSpread >= totalSpreads - 1 ? "not-allowed" : "pointer",
              fontWeight: 600,
              fontSize: "0.8rem",
              transition: "all 0.3s ease",
              boxShadow: currentSpread >= totalSpreads - 1 ? "none" : "0 2px 8px rgba(59, 130, 246, 0.3)",
              minWidth: "40px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={nextSpread}
            disabled={currentSpread >= totalSpreads - 1}
            onMouseEnter={(e) => {
              if (currentSpread < totalSpreads - 1) {
                e.target.style.transform = "translateY(-1px)";
                e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.4)";
              }
            }}
            onMouseLeave={(e) => {
              if (currentSpread < totalSpreads - 1) {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.3)";
              }
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* CSS animations */}
      <style>
        {`
        @keyframes flipNext {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-180deg); }
        }
        @keyframes flipPrev {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(180deg); }
        }

        @media (max-width: 768px) {
          .sidebar { 
            height: 120px !important; 
            flex-direction: row !important; 
            overflow-x: auto !important; 
            overflow-y: hidden !important;
            max-width: 100% !important;
          }
          .page-thumbnails {
            display: flex !important;
            flex-direction: row !important;
            gap: 0.5rem !important;
            padding: 0.5rem !important;
          }
          .thumbnail {
            flex: 0 0 80px !important;
            height: 100px !important;
            margin-bottom: 0 !important;
          }
        }

        @media (max-width: 480px) {
          .flipbook-main {
            padding: 0.5rem !important;
          }
          .thumbnail {
            width: 70px !important;
            min-width: 70px !important;
          }
        }
        `}
      </style>
    </div>
  );
};

export default FlipBook;