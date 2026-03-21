import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, icons } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { servicesData } from "@/lib/servicesData";
import type { LucideIcon } from "lucide-react";

const getIcon = (name: string): LucideIcon => {
  return (icons as Record<string, LucideIcon>)[name] || icons["Circle"];
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = servicesData[activeIndex];
  const ActiveServiceIcon = getIcon(active.icon);

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
        </div>
      </section>

      {/* Services layout — Polosoft style */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar — service list */}
            <div className="lg:w-[300px] flex-shrink-0">
              <nav className="bg-card rounded-2xl border border-border overflow-hidden">
                {servicesData.map((service, i) => {
                  const Icon = getIcon(service.icon);
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveIndex(i)}
                      className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-colors duration-200 border-b border-border last:border-b-0 group ${
                        isActive
                          ? "bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))]"
                          : "hover:bg-[hsl(var(--primary)/0.04)] text-foreground"
                      }`}
                    >
                      <div className={`p-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-[hsl(var(--primary)/0.15)]"
                          : "bg-[hsl(var(--primary)/0.06)] group-hover:bg-[hsl(var(--primary)/0.1)]"
                      }`}>
                        <Icon className={`w-5 h-5 ${isActive ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--primary)/0.7)]"}`} />
                      </div>
                      <span className="flex-1 font-medium text-sm">{service.name}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-[hsl(var(--primary))]" : "text-muted-foreground"}`} />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Right panel — sub-services grid */}
            <div className="flex-1 min-w-0">
              {/* Service title */}
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{active.name} Services</h2>
                <p className="text-muted-foreground mt-2 text-sm max-w-2xl">{active.description}</p>
              </div>

              {/* Sub-services as icon cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {active.subServices.map((sub, i) => {
                  const SubIcon = getIcon(sub.icon);
                  return (
                    <div
                      key={sub.name}
                      className="flex flex-col items-center gap-3 p-5 rounded-xl bg-[hsl(var(--primary)/0.03)] border border-[hsl(var(--primary)/0.08)] hover:border-[hsl(var(--primary)/0.25)] hover:bg-[hsl(var(--primary)/0.06)] hover:shadow-md hover:shadow-[hsl(var(--primary)/0.05)] transition-all duration-200 cursor-default group"
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <div className="p-4 rounded-xl bg-[hsl(var(--primary)/0.08)] group-hover:bg-[hsl(var(--primary)/0.14)] transition-colors">
                        <SubIcon className="w-7 h-7 text-[hsl(var(--primary))]" />
                      </div>
                      <span className="text-xs font-medium text-foreground text-center leading-tight">
                        {sub.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* View full service page link */}
              <div className="mt-8">
                <Link
                  to={`/services/${active.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all"
                >
                  View {active.name} Details
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
