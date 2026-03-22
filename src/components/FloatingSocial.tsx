// import { Phone, Mail, Instagram, Facebook, Linkedin, MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// const FloatingSocial = () => {
//   return (
//     <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-[999] flex flex-col gap-4">

//       {/* Phone */}
//       <a href="tel:+919676356969" className="group">
//         <IconBox>
//           <Phone className="icon" />
//         </IconBox>
//       </a>

//       {/* Email */}
//       <a href="mailto:tjyothi@bprsolutions.in" className="group">
//         <IconBox>
//           <Mail className="icon" />
//         </IconBox>
//       </a>

//       {/* Instagram */}
//       <a href="https://www.instagram.com/bprsolutions.2000" target="_blank" rel="noreferrer" className="group">
//         <IconBox>
//           <Instagram className="icon" />
//         </IconBox>
//       </a>

//       {/* Facebook */}
//       <a href="https://www.facebook.com/share/1ERFjH3DS7/" target="_blank" rel="noreferrer" className="group">
//         <IconBox>
//           <Facebook className="icon" />
//         </IconBox>
//       </a>

//       {/* LinkedIn */}
//       <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group">
//         <IconBox>
//           <Linkedin className="icon" />
//         </IconBox>
//       </a>

//       {/* Location */}
//       <Link to="/contact" className="group">
//         <IconBox>
//           <MapPin className="icon" />
//         </IconBox>
//       </Link>

//     </div>
//   );
// };

// /* Reusable Icon Style */
// const IconBox = ({ children }: any) => (
//   <div
//     className="
//     w-11 h-11 flex items-center justify-center rounded-full
//     bg-white/10 backdrop-blur-md border border-white/20
//     shadow-lg
//     hover:bg-[hsl(var(--glow))] 
//     transition-all duration-300
//   "
//   >
//     {children}
//   </div>
// );

// export default FloatingSocial;

import { Phone, Mail, Instagram, Facebook, Linkedin, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingSocial = () => {
  return (
    <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-[999] flex flex-col gap-4">

      {/* Phone */}
      <a href="tel:+919676356969" className="group">
        <IconBox>
          <Phone className="w-5 h-5" />
        </IconBox>
      </a>

      {/* Email */}
      <a href="mailto:tjyothi@bprsolutions.in" className="group">
        <IconBox>
          <Mail className="w-5 h-5" />
        </IconBox>
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/bprsolutions.2000" target="_blank" rel="noreferrer" className="group">
        <IconBox>
          <Instagram className="w-5 h-5" />
        </IconBox>
      </a>

      {/* Facebook */}
      <a href="https://www.facebook.com/share/1ERFjH3DS7/" target="_blank" rel="noreferrer" className="group">
        <IconBox>
          <Facebook className="w-5 h-5" />
        </IconBox>
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group">
        <IconBox>
          <Linkedin className="w-5 h-5" />
        </IconBox>
      </a>

      {/* Location */}
      <Link to="/contact" className="group">
        <IconBox>
          <MapPin className="w-5 h-5" />
        </IconBox>
      </Link>

    </div>
  );
};

/* ✅ Reusable Icon Style */
const IconBox = ({ children }: any) => (
  <div
    className="
    w-11 h-11 flex items-center justify-center rounded-full
    bg-white/90 backdrop-blur-lg
    border border-gray-200
    shadow-md
    text-gray-700

    hover:bg-[hsl(var(--glow))] 
    hover:text-white
    hover:border-[hsl(var(--glow))]
    hover:scale-110 active:scale-95

    transition-all duration-300
  "
  >
    {children}
  </div>
);

export default FloatingSocial;
