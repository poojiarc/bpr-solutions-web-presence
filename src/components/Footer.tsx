// import { Link } from "react-router-dom";
// import { Home, Info, Wrench, GraduationCap, Briefcase, FolderOpen, Phone, MapPin, Mail, Clock, Instagram } from "lucide-react";
// import bprLogo from "@/assets/bpr-logo.svg";

// const Footer = () => {
//   return (
//     <footer className="section-dark">
//       <div className="container mx-auto px-4 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Company info */}
//           <div>
//             <img src={bprLogo} alt="BPR Solutions" className="h-12 mb-4" />
//             <p className="text-[hsl(var(--footer-foreground))] text-sm leading-relaxed">
//               A global engineering and technology solutions provider specializing in Telecom, GIS, LiDAR, BIM, and digital engineering services.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-[hsl(var(--section-dark-foreground))] font-semibold mb-4 text-lg">Quick Links</h3>
//             <ul className="space-y-2.5">
//               {[
//                 { label: "Home", path: "/", icon: Home },
//                 { label: "About Us", path: "/about", icon: Info },
//                 { label: "Services", path: "/services", icon: Wrench },
//                 { label: "Internships", path: "/internships", icon: GraduationCap },
//                 { label: "Careers", path: "/careers", icon: Briefcase },
//                 { label: "Projects", path: "/projects", icon: FolderOpen },
//                 { label: "Contact Us", path: "/contact", icon: Phone },
//               ].map((link) => {
//                 const Icon = link.icon;
//                 return (
//                   <li key={link.label}>
//                     <Link to={link.path} className="flex items-center gap-2 text-[hsl(var(--footer-foreground))] hover:text-[hsl(var(--glow))] text-sm transition-colors">
//                       <Icon className="w-4 h-4 text-[hsl(var(--glow))]" />
//                       {link.label}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-[hsl(var(--section-dark-foreground))] font-semibold mb-4 text-lg">Services</h3>
//             <ul className="space-y-2.5">
//               {["Telecom", "GIS", "Cyclone", "BIM", "LiDAR", "Survey", "Data Annotation"].map((s) => (
//                 <li key={s}>
//                   <Link to="/services" className="flex items-center gap-2 text-[hsl(var(--footer-foreground))] hover:text-[hsl(var(--glow))] text-sm transition-colors">
//                     <Wrench className="w-4 h-4" />
//                     {s}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-[hsl(var(--section-dark-foreground))] font-semibold mb-4 text-lg">Contact Info</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-2 text-[hsl(var(--footer-foreground))] text-sm">
//                 <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                 <a href="tel:+919676356969" className="hover:text-[hsl(var(--glow))] transition-colors">+91 96763 56969</a>
//               </li>
//               <li className="flex items-start gap-2 text-[hsl(var(--footer-foreground))] text-sm">
//                 <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                 <a href="mailto:tjyothi@bprsolutions.in" className="hover:text-[hsl(var(--glow))] transition-colors">tjyothi@bprsolutions.in</a>
//               </li>
//               <li className="flex items-start gap-2 text-[hsl(var(--footer-foreground))] text-sm">
//                 <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                 <span>2nd floor, Above ICICI Bank, GCC Layout, Plot No. 19, Chaitanya Nagar, Kommadi, Visakhapatnam, AP 530048</span>
//               </li>
//               <li className="flex items-start gap-2 text-[hsl(var(--footer-foreground))] text-sm">
//                 <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                 <span>Mon–Sat: 8 hrs | Sunday: Closed</span>
//               </li>
//               <li className="flex items-start gap-2 text-[hsl(var(--footer-foreground))] text-sm">
//                 <Instagram className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                 <a href="https://instagram.com/bprsolutions" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--glow))] transition-colors">Instagram</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-[hsl(var(--border)/0.15)]">
//         <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-center gap-2 text-[hsl(var(--footer-foreground))] text-sm">
//           <span>Made with ❤️ by</span>
//           <a
        
//               href="https://staffarc.in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1 text-orange-600 hover:underline"
//             >
//               <img
//                 src="https://www.staffarc.in/images/Staffarc-logo.png"
//                 alt="StaffArc logo"
//                 className="h-5 w-5 object-contain"
//               />
//               StaffArc
//             </a>
//         </div>
//         <div className="text-center pb-4 text-xs text-[hsl(var(--footer-foreground)/0.5)]">
//           © 2026 BPR Solutions. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Link } from "react-router-dom";
import {
  Home,
  Info,
  Wrench,
  GraduationCap,
  Briefcase,
  FolderOpen,
  Phone,
  MapPin,
  Mail,
  Clock,
  Instagram,
  Radio,
  Globe,
  CloudLightning,
  Building2,
  Radar,
  Map,
  Brain
} from "lucide-react";
import bprLogo from "@/assets/bpr-logo.svg";

const Footer = () => {
  const services = [
    { name: "Telecom", icon: Radio },
    { name: "GIS", icon: Globe },
    { name: "Cyclone", icon: CloudLightning },
    { name: "BIM", icon: Building2 },
    { name: "LiDAR", icon: Radar },
    { name: "Survey", icon: Map },
    { name: "Data Annotation", icon: Brain },
  ];

  return (
    <footer className="section-dark">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company info */}
          <div>
            <img src={bprLogo} alt="BPR Solutions" className="h-12 mb-4" />
            <p className="text-[hsl(var(--footer-foreground))] text-sm leading-relaxed">
              A global engineering and technology solutions provider specializing in Telecom, GIS, LiDAR, BIM, and digital engineering services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[hsl(var(--section-dark-foreground))] font-semibold mb-4 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/", icon: Home },
                { label: "About Us", path: "/about", icon: Info },
                { label: "Services", path: "/services", icon: Wrench },
                { label: "Internships", path: "/internships", icon: GraduationCap },
                { label: "Careers", path: "/careers", icon: Briefcase },
                { label: "Projects", path: "/projects", icon: FolderOpen },
                { label: "Contact Us", path: "/contact", icon: Phone },
              ].map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-[hsl(var(--footer-foreground))] hover:text-[hsl(var(--glow))] text-sm transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[hsl(var(--glow))]" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[hsl(var(--section-dark-foreground))] font-semibold mb-4 text-lg">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.name}>
                    <Link
                      to="/services"
                      className="flex items-center gap-2 text-[hsl(var(--footer-foreground))] hover:text-[hsl(var(--glow))] text-sm transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[hsl(var(--glow))]" />
                      {service.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[hsl(var(--section-dark-foreground))] font-semibold mb-4 text-lg">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[hsl(var(--footer-foreground))] text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--glow))]" />

                <a
                  href="tel:+919676356969"
                  className="hover:text-[hsl(var(--glow))] transition-colors"
                >
                  +91 96763 56969
                </a>
              </li>

              <li className="flex items-start gap-2 text-[hsl(var(--footer-foreground))] text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--glow))]" />
                <a
                  href="mailto:tjyothi@bprsolutions.in"
                  className="hover:text-[hsl(var(--glow))] transition-colors"
                >
                  tjyothi@bprsolutions.in
                </a>
              </li>

              <li className="flex items-start gap-2 text-[hsl(var(--footer-foreground))] text-sm">
                
<MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--glow))]" />

                <span>
                  2nd floor, Above ICICI Bank, GCC Layout, Plot No. 19,
                  Chaitanya Nagar, Kommadi, Visakhapatnam, AP 530048
                </span>
              </li>

              <li className="flex items-start gap-2 text-[hsl(var(--footer-foreground))] text-sm">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--glow))]" />
                <span>Mon–Sat: 8 hrs | Sunday: Closed</span>
              </li>

              <li className="flex items-start gap-2 text-[hsl(var(--footer-foreground))] text-sm">
                <Instagram className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(var(--glow))]" />
                <a
                  href="https://instagram.com/bprsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[hsl(var(--glow))] transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[hsl(var(--border)/0.15)]">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-center gap-2 text-[hsl(var(--footer-foreground))] text-sm">
          <span>Made with ❤️ by</span>
          <a
            href="https://staffarc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange-600 hover:underline"
          >
            <img
              src="https://www.staffarc.in/images/Staffarc-logo.png"
              alt="StaffArc logo"
              className="h-5 w-5 object-contain"
            />
            StaffArc
          </a>
        </div>

        <div className="text-center pb-4 text-xs text-[hsl(var(--footer-foreground)/0.5)]">
          © 2026 BPR Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
