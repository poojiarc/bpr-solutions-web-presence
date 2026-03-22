// import { useState, useEffect } from "react";

// interface ImageSliderProps {
//   images: string[];
//   className?: string;
//   interval?: number;
// }

// const ImageSlider = ({ images, className = "", interval = 4000 }: ImageSliderProps) => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     if (images.length <= 1) return;
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, interval);
//     return () => clearInterval(timer);
//   }, [images.length, interval]);

//   return (
//     <div className={`relative overflow-hidden ${className}`}>
//       {images.map((img, i) => (
//         <img
//           key={i}
//           src={img}
//           alt=""
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//             i === current ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// export default ImageSlider;



// import { Phone, Mail, Instagram, Linkedin, MapPin } from "lucide-react";
// import ImageSlider from "@/components/ImageSlider";
// import hero1 from "@/assets/hero-1.jpg";
// import hero2 from "@/assets/hero-2.jpg";
// import hero3 from "@/assets/hero-3.jpg";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="relative h-screen overflow-hidden">

//       {/* ✅ Background Image Slider */}
//       <ImageSlider images={[hero1, hero2, hero3]} />

//       {/* ✅ Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-0" />

//       {/* ✅ RIGHT SIDE FLOATING ICONS */}
//       <div className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 md:gap-4">

//         <a href="tel:+919676356969" className="group">
//           <div className="w-10 h-10 flex items-center justify-center rounded-full 
//           bg-white/10 backdrop-blur-md border border-white/20 
//           hover:bg-[hsl(var(--glow))] transition-all">
//             <Phone className="w-5 h-5 text-white group-hover:text-black" />
//           </div>
//         </a>

//         <a href="mailto:tjyothi@bprsolutions.in" className="group">
//           <div className="w-10 h-10 flex items-center justify-center rounded-full 
//           bg-white/10 backdrop-blur-md border border-white/20 
//           hover:bg-[hsl(var(--glow))] transition-all">
//             <Mail className="w-5 h-5 text-white group-hover:text-black" />
//           </div>
//         </a>

//         <a href="https://instagram.com/bprsolutions" target="_blank" rel="noreferrer" className="group">
//           <div className="w-10 h-10 flex items-center justify-center rounded-full 
//           bg-white/10 backdrop-blur-md border border-white/20 
//           hover:bg-[hsl(var(--glow))] transition-all">
//             <Instagram className="w-5 h-5 text-white group-hover:text-black" />
//           </div>
//         </a>

//         <a href="#" className="group">
//           <div className="w-10 h-10 flex items-center justify-center rounded-full 
//           bg-white/10 backdrop-blur-md border border-white/20 
//           hover:bg-[hsl(var(--glow))] transition-all">
//             <Linkedin className="w-5 h-5 text-white group-hover:text-black" />
//           </div>
//         </a>

//         <a href="#" className="group">
//           <div className="w-10 h-10 flex items-center justify-center rounded-full 
//           bg-white/10 backdrop-blur-md border border-white/20 
//           hover:bg-[hsl(var(--glow))] transition-all">
//             <MapPin className="w-5 h-5 text-white group-hover:text-black" />
//           </div>
//         </a>

//       </div>

//       {/* ✅ HERO CONTENT */}
//       <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center">
//         <div className="max-w-3xl text-white">

//           <p className="uppercase tracking-widest text-sm text-blue-400 mb-4">
//             ENGINEERING EXCELLENCE
//           </p>

//           <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
//             Empowering Growth Through Digital Engineering
//           </h1>

//           <p className="text-lg text-gray-300 mb-8">
//             BPR Solutions is a global engineering and technology solutions provider
//             specializing in Telecom, GIS, LiDAR, BIM, Cyclone Modeling, Survey,
//            Data Annotation, and innovative digital solutions.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Link
//               to="/services"
//               className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:brightness-110 transition"
//             >
//               Our Services →
//             </Link>

//             <Link
//               to="/contact"
//               className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition"
//             >
//               Contact Us
//             </Link>
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default Hero;


import { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
  className?: string;
  interval?: number;
}

const ImageSlider = ({
  images,
  className = "",
  interval = 5000,
}: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);

  const validImages = images.filter(Boolean);

  useEffect(() => {
    if (validImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % validImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [validImages.length, interval]);

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {validImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="background"
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
