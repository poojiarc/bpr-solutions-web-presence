import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Wrench, GraduationCap, Briefcase, FolderOpen, Phone, Menu, X, ChevronDown, ChevronRight, Heart, icons } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import bprLogo from "@/assets/bpr-logo.svg";
import { servicesData } from "@/lib/servicesData";

const getIcon = (name: string): LucideIcon => {
  return (icons as Record<string, LucideIcon>)[name] || icons["Circle"];
};

const careersDropdownItems = [
  { label: "Culture", path: "/careers?tab=culture", icon: Heart },
  { label: "Jobs", path: "/careers?tab=jobs", icon: Briefcase },
];

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "About", path: "/about", icon: Info },
  { label: "Services", path: "/services", icon: Wrench, hasDropdown: true },
  { label: "Internships", path: "/internships", icon: GraduationCap },
  { label: "Careers", path: "/careers", icon: Briefcase, hasCareersDropdown: true },
  { label: "Projects", path: "/projects", icon: FolderOpen },
  { label: "Contact", path: "/contact", icon: Phone },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const careersRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setCareersOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (careersRef.current && !careersRef.current.contains(e.target as Node)) {
        setCareersOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(var(--nav-bg)/0.95)] shadow-lg shadow-[hsl(var(--glow)/0.05)] backdrop-blur-md"
          : "bg-[hsl(var(--nav-bg))]"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={bprLogo} alt="BPR Solutions" className="h-12 lg:h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              if (item.hasDropdown) {
                return (
                  <div key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive || servicesOpen
                          ? "text-[hsl(var(--glow))]"
                          : "text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--glow))]"
                      }`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Mega dropdown */}
                    {servicesOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-[hsl(var(--nav-bg))] border border-[hsl(var(--border)/0.2)] rounded-xl shadow-2xl shadow-[hsl(var(--glow)/0.1)] overflow-hidden"
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <div className="flex">
                          {/* Left: service list */}
                          <div className="w-[240px] border-r border-[hsl(var(--border)/0.15)] py-2">
                            {servicesData.map((service, i) => {
                              const SvcIcon = getIcon(service.icon);
                              return (
                                <Link
                                  key={service.id}
                                  to={`/services/${service.id}`}
                                  className={`flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                                    i === activeService
                                      ? "bg-[hsl(var(--glow)/0.15)] text-[hsl(var(--glow))]"
                                      : "text-[hsl(var(--nav-foreground)/0.7)] hover:text-[hsl(var(--glow))] hover:bg-[hsl(var(--glow)/0.05)]"
                                  }`}
                                  onMouseEnter={() => setActiveService(i)}
                                >
                                  <SvcIcon className="w-4 h-4" />
                                  <span className="flex-1">{service.name}</span>
                                  <ChevronRight className="w-3 h-3" />
                                </Link>
                              );
                            })}
                          </div>

                          {/* Right: sub-services as icon cards */}
                          <div className="flex-1 p-5">
                            <h4 className="text-[hsl(var(--glow))] font-semibold mb-4 text-sm uppercase tracking-wider">
                              {servicesData[activeService]?.name} Services
                            </h4>
                            <div className="grid grid-cols-3 gap-3">
                              {servicesData[activeService]?.subServices.map((sub) => {
                                const SubIcon = getIcon(sub.icon);
                                return (
                                  <div
                                    key={sub.name}
                                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-[hsl(var(--glow)/0.04)] border border-[hsl(var(--glow)/0.08)] hover:border-[hsl(var(--glow)/0.2)] hover:bg-[hsl(var(--glow)/0.08)] transition-colors cursor-default"
                                  >
                                    <div className="p-2 rounded-lg bg-[hsl(var(--glow)/0.1)]">
                                      <SubIcon className="w-5 h-5 text-[hsl(var(--glow))]" />
                                    </div>
                                    <span className="text-[hsl(var(--nav-foreground)/0.75)] text-[11px] text-center leading-tight font-medium">
                                      {sub.name}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                            <Link
                              to={`/services/${servicesData[activeService]?.id}`}
                              className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-[hsl(var(--glow))] hover:underline"
                            >
                              View full details →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[hsl(var(--glow))]"
                      : "text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--glow))]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Contact CTA desktop */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            Contact Us
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[hsl(var(--nav-foreground))]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[hsl(var(--nav-bg))] border-t border-[hsl(var(--border)/0.15)] pb-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center gap-3 px-6 py-3 text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--glow))] transition-colors"
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
