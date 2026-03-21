import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { servicesData } from "@/lib/servicesData";

const Services = () => {
  return (
    <div>
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-[hsl(var(--glow))] text-sm font-semibold tracking-wider uppercase mb-3 animate-hero-fade">Our Expertise</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--section-dark-foreground))] animate-hero-fade" style={{ animationDelay: "200ms" }}>
            Our Services
          </h1>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 70}>
                <Link
                  to={`/services/${service.id}`}
                  className="group relative block overflow-hidden rounded-2xl aspect-[4/3] hover:shadow-xl hover:shadow-[hsl(var(--primary)/0.08)] transition-all duration-300"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.9)] via-[hsl(var(--hero-overlay)/0.4)] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-[hsl(var(--section-dark-foreground))] font-bold text-xl mb-2">{service.name}</h3>
                    <p className="text-[hsl(var(--section-dark-foreground)/0.6)] text-sm mb-3 line-clamp-2">{service.description}</p>
                    <span className="flex items-center gap-1 text-[hsl(var(--glow))] text-sm font-medium group-hover:gap-2 transition-all">
                      Learn more <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
