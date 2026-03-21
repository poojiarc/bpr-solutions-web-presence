import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import { servicesData } from "@/lib/servicesData";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const heroImages = [hero1, hero2, hero3, hero4];

const Services = () => {
  return (
    <div>
      {/* Page header */}
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-[hsl(var(--glow))] text-sm font-semibold tracking-wider uppercase mb-3 animate-hero-fade">
            Our Expertise
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--section-dark-foreground))] animate-hero-fade" style={{ animationDelay: "200ms" }}>
            Our Services
          </h1>
          <p className="text-[hsl(var(--section-dark-foreground)/0.7)] mt-4 max-w-2xl mx-auto animate-hero-fade" style={{ animationDelay: "400ms" }}>
            Explore our comprehensive range of engineering and technology solutions designed to drive your projects forward.
          </p>
        </div>
      </section>

      {/* Services grid with auto-scrolling background cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map((service, i) => {
              const bgImages = [
                service.image,
                heroImages[i % heroImages.length],
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
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-[hsl(var(--section-dark-foreground))] mb-4">
              Need a custom solution?
            </h2>
            <p className="text-[hsl(var(--section-dark-foreground)/0.7)] mb-6 max-w-lg mx-auto">
              Contact us to discuss your project requirements and discover how BPR Solutions can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:brightness-110 active:scale-[0.97] transition-all"
            >
              Get in Touch <ChevronRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
