import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import ImageSlider from "@/components/ImageSlider";
import { servicesData } from "@/lib/servicesData";

const heroImages = [hero1, hero2, hero3, hero4];
const aboutImages = [hero2, hero3, hero4];

const Index = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setHeroIndex((p) => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === heroIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay)/0.92)] via-[hsl(var(--hero-overlay)/0.75)] to-[hsl(var(--hero-overlay)/0.4)]" />

        {/* Floating social icons - Left */}
        <div className="hidden lg:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-10">
          {[
            { icon: Phone, href: "tel:+919676356969", label: "Phone" },
            { icon: Mail, href: "mailto:tjyothi@bprsolutions.in", label: "Email" },
            { icon: Instagram, href: "https://www.instagram.com/bprsolutions.2000?igsh=YnZ2bXh4aG10amU=", label: "Instagram" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-10 h-10 rounded-full bg-[hsl(var(--section-dark-foreground)/0.1)] border border-[hsl(var(--section-dark-foreground)/0.2)] backdrop-blur-sm flex items-center justify-center text-[hsl(var(--section-dark-foreground)/0.7)] hover:text-[hsl(var(--glow))] hover:border-[hsl(var(--glow)/0.5)] hover:bg-[hsl(var(--glow)/0.1)] transition-all active:scale-[0.95]"
              aria-label={item.label}
            >
              <item.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Floating social icons - Right */}
        <div className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-10">
          {[
            { icon: Facebook, href: "https://www.facebook.com/share/1ERFjH3DS7/", label: "Facebook" },
            { icon: Linkedin, href: "https://www.linkedin.com/company/109966290/admin/dashboard/", label: "LinkedIn" },
            { icon: MapPin, href: "/contact", label: "Location" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-10 h-10 rounded-full bg-[hsl(var(--section-dark-foreground)/0.1)] border border-[hsl(var(--section-dark-foreground)/0.2)] backdrop-blur-sm flex items-center justify-center text-[hsl(var(--section-dark-foreground)/0.7)] hover:text-[hsl(var(--glow))] hover:border-[hsl(var(--glow)/0.5)] hover:bg-[hsl(var(--glow)/0.1)] transition-all active:scale-[0.95]"
              aria-label={item.label}
            >
              <item.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <p className="text-[hsl(var(--glow))] text-sm font-semibold tracking-[0.2em] uppercase mb-4 animate-hero-fade">
              Engineering Excellence
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[hsl(var(--section-dark-foreground))] leading-[1.1] mb-6 animate-hero-fade" style={{ animationDelay: "200ms" }}>
              Empowering Growth Through Digital Engineering
            </h1>
            <p className="text-lg text-[hsl(var(--section-dark-foreground)/0.75)] mb-8 max-w-xl animate-hero-fade" style={{ animationDelay: "400ms" }}>
              BPR Solutions is a global engineering and technology solutions provider specializing in Telecom, GIS, LiDAR, BIM, CYCLONE Modeling, Survey, Clinical Annotation, and innovative digital solutions.
            </p>
            <div className="flex flex-wrap gap-4 animate-hero-fade" style={{ animationDelay: "600ms" }}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:brightness-110 active:scale-[0.97] transition-all"
              >
                Our Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[hsl(var(--section-dark-foreground)/0.3)] text-[hsl(var(--section-dark-foreground))] font-semibold hover:bg-[hsl(var(--section-dark-foreground)/0.1)] active:scale-[0.97] transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Hero indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === heroIndex ? "bg-[hsl(var(--glow))] w-8" : "bg-[hsl(var(--section-dark-foreground)/0.3)]"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-[hsl(var(--primary))] text-sm font-semibold tracking-wider uppercase mb-3">About Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                Welcome to BPR Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                BPR Solutions Pvt. Ltd. is a global engineering and technology solutions provider specializing in Telecom Engineering, GIS Drafting & Mapping, LiDAR, BIM, CYCLONE Modeling, FTTH/FTTx engineering, PERMITS, and AutoCAD. Headquartered in Visakhapatnam, India, we support clients worldwide by delivering high-precision, cost-effective, and innovative digital engineering solutions.
              </p>


              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-semibold hover:underline"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <ImageSlider images={aboutImages} className="w-full aspect-[4/3] rounded-2xl" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-[hsl(var(--glow))] text-sm font-semibold tracking-wider uppercase mb-3">What We Do</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--section-dark-foreground))]">Our Services</h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {servicesData.slice(0, 8).map((service, i) => {
              // Give each card 3 rotating background images using hero + service images
              const bgImages = [
                service.image,
                heroImages[(i) % heroImages.length],
                heroImages[(i + 2) % heroImages.length],
              ];
              return (
                <ScrollReveal key={service.id} delay={i * 80}>
                  <ServiceCard
                    to={`/services/${service.id}`}
                    images={bgImages}
                    name={service.name}
                    interval={3500 + i * 400}
                  />
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:brightness-110 active:scale-[0.97] transition-all"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-[hsl(var(--primary))] text-sm font-semibold tracking-wider uppercase mb-3">Get In Touch</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Partner with BPR Solutions for reliable and innovative engineering solutions.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Phone, label: "Call Us", value: "+91 96763 56969", href: "tel:+919676356969" },
              { icon: Mail, label: "Email", value: "tjyothi@bprsolutions.in", href: "mailto:tjyothi@bprsolutions.in" },
              { icon: MapPin, label: "Visit", value: "Visakhapatnam, AP", href: "/contact" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <a
                  href={item.href}
                  className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-card border border-border hover:border-[hsl(var(--primary)/0.3)] hover:shadow-lg hover:shadow-[hsl(var(--primary)/0.05)] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary))] group-hover:text-[hsl(var(--primary-foreground))] transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-foreground">{item.label}</span>
                  <span className="text-sm text-muted-foreground text-center">{item.value}</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
