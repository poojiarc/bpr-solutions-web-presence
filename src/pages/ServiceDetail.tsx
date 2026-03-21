import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ImageSlider from "@/components/ImageSlider";
import { servicesData } from "@/lib/servicesData";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Service not found</h1>
        <Link to="/services" className="text-[hsl(var(--primary))] hover:underline">← Back to Services</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <ImageSlider images={[service.image, hero1, hero2]} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay)/0.92)] via-[hsl(var(--hero-overlay)/0.7)] to-[hsl(var(--hero-overlay)/0.4)]" />
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[hsl(var(--glow))] text-sm font-medium mb-4 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--section-dark-foreground))] animate-hero-fade">
              {service.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-bold text-foreground mb-6">{service.name} Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>
              <h3 className="text-xl font-semibold text-foreground mb-4">What we offer:</h3>
              <ul className="space-y-3">
                {service.subServices.map((sub) => (
                  <li key={sub.name} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--primary))] flex-shrink-0" />
                    {sub.name}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <ImageSlider images={[service.image, hero3, hero1]} className="w-full aspect-[4/3] rounded-2xl" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-[hsl(var(--section-dark-foreground))] mb-4">
              Interested in {service.name} services?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:brightness-110 active:scale-[0.97] transition-all"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
