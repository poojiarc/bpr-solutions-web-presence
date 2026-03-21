import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import ImageSlider from "@/components/ImageSlider";

const aboutImages = [hero1, hero2, hero3, hero4];

const About = () => {
  return (
    <div>
      {/* Page header */}
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-[hsl(var(--glow))] text-sm font-semibold tracking-wider uppercase mb-3 animate-hero-fade">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--section-dark-foreground))] animate-hero-fade" style={{ animationDelay: "200ms" }}>
            About BPR Solutions
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-bold text-foreground mb-6">Welcome to BPR Solutions</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                BPR Solutions Pvt. Ltd. is a global engineering and technology solutions provider specializing in Telecom Engineering | GIS Drafting & Mapping | LiDAR | BIM, CYCLONE Modeling | FTTH/FTTx engineering | PERMITS | AutoCAD. Headquartered in Visakhapatnam, India, we support clients worldwide by delivering high-precision, cost-effective, and innovative digital engineering solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of experienced engineers and technicians work with cutting-edge technology to deliver projects with accuracy, efficiency, and on-time delivery. We serve clients across telecom, infrastructure, construction, and environmental sectors.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <ImageSlider images={aboutImages} className="w-full aspect-[4/3] rounded-2xl" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why clients choose us */}
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <ImageSlider images={[hero3, hero4, hero1]} className="w-full aspect-[4/3] rounded-2xl" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-[hsl(var(--section-dark-foreground))] mb-6">Why Clients Choose Us</h2>
              <ul className="space-y-4">
                {[
                  "Global delivery and offshore development capability",
                  "High-accuracy, detail-rich, and clash-free models",
                  "Cost-efficient and scalable solutions",
                  "On-time delivery with strict quality control",
                  "Expertise across multiple industries and platforms",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[hsl(var(--section-dark-foreground)/0.8)]">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--glow))] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0}>
              <div className="p-8 rounded-2xl bg-card border border-border h-full">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver reliable, innovative, and value-driven engineering solutions that empower clients to execute projects with clarity, efficiency, and confidence.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="p-8 rounded-2xl bg-card border border-border h-full">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creating exemplary services to the customer with consistency in services, uniformity in pricing and continuous upgradation of human potential.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-dark py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              {[
                { num: "200+", label: "Projects Completed" },
                { num: "5+", label: "Years Experience" },
                { num: "50+", label: "Global Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl lg:text-4xl font-bold text-[hsl(var(--glow))]">{stat.num}</div>
                  <div className="text-sm text-[hsl(var(--section-dark-foreground)/0.6)] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Partner with BPR Solutions for reliable and innovative engineering solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:brightness-110 active:scale-[0.97] transition-all"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
