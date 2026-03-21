import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, BookOpen, Clock, Award, Users } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import ImageSlider from "@/components/ImageSlider";

const courses = [
  {
    title: "AutoCAD Training",
    description: "Develop strong drafting and design skills using industry-standard CAD tools. Learn to create accurate 2D drawings, layouts, sections, and annotations used in engineering, telecom, and construction projects.",
  },
  {
    title: "Revit Training",
    description: "Introduction to Building Information Modeling (BIM) concepts and workflows. Gain hands-on experience in creating intelligent 3D models, generating construction documents, and coordinating architectural elements.",
  },
  {
    title: "GIS Training",
    description: "Strong foundation in Geographic Information Systems and their real-world applications. Covers spatial data creation, analysis, and visualization using industry-standard GIS tools.",
  },
  {
    title: "Medical Training",
    description: "Specialized training programs in medical data annotation, health informatics, and digital health documentation. Learn to work with medical imaging data and health records management.",
  },
];

const Internships = () => {
  return (
    <div>
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-[hsl(var(--glow))] text-sm font-semibold tracking-wider uppercase mb-3 animate-hero-fade">Learn & Grow</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--section-dark-foreground))] animate-hero-fade" style={{ animationDelay: "200ms" }}>
            Internship & Training
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-bold text-foreground mb-6">Practical Training & Real-World Exposure</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our internship program is designed to provide practical training and real-world exposure in engineering and geospatial technologies. Students will work on live projects under expert guidance, enhancing their technical skills and industry knowledge.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: "4–12 Weeks", sub: "Flexible Duration" },
                  { icon: BookOpen, label: "Online/Offline", sub: "Flexible Mode" },
                  { icon: Users, label: "Students & Grads", sub: "Eligibility" },
                  { icon: Award, label: "Certificate", sub: "On Completion" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl bg-[hsl(var(--primary)/0.05)] border border-[hsl(var(--primary)/0.1)]">
                    <item.icon className="w-5 h-5 text-[hsl(var(--primary))] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground text-sm">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <ImageSlider images={[hero1, hero3, hero4]} className="w-full aspect-[4/3] rounded-2xl" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-[hsl(var(--section-dark-foreground))]">Course Overview</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, i) => (
              <ScrollReveal key={course.title} delay={i * 100}>
                <div className="p-8 rounded-2xl bg-[hsl(var(--nav-bg))] border border-[hsl(var(--border)/0.15)] h-full">
                  <h3 className="text-xl font-bold text-[hsl(var(--section-dark-foreground))] mb-3">{course.title}</h3>
                  <p className="text-[hsl(var(--section-dark-foreground)/0.65)] text-sm leading-relaxed">{course.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-bold text-foreground mb-6">Benefits to Students</h2>
              <ul className="space-y-3">
                {[
                  "Live project environment with real-time exposure",
                  "Work side by side with proven specialists",
                  "Network with industry professionals",
                  "Own area of responsibility within projects",
                  "Chance to get employed after internship",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--primary))] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-foreground mb-6">What We Expect</h2>
              <ul className="space-y-3">
                {[
                  "Aspiration to learn new technologies",
                  "Dedication and flexibility",
                  "Team spirit and social skills",
                  "Good communication and interpersonal skills",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--primary))] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-[hsl(var(--section-dark-foreground))] mb-4">Ready to Start Your Internship?</h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:brightness-110 active:scale-[0.97] transition-all"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Internships;
