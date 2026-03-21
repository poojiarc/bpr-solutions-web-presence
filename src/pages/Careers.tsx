import { useState } from "react";
import { Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const jobs = [
  {
    title: "BIM Modeler",
    exp: "1-5 Years",
    description: "Experience in design and coordination of Architectural Structural elements of buildings using Revit.",
    responsibilities: [
      "Develop 3D model for specific design discipline",
      "Create discipline specific BIM Modelling content",
      "Develop accurate construction drawings",
      "Coordinate design documentation with BIM tools",
      "Set up linked models across disciplines",
    ],
  },
  {
    title: "3D Visualizer",
    exp: "2+ Years",
    description: "Experienced 3Ds Max Artist for architectural projects with emphasis on photo-realistic effects.",
    responsibilities: [
      "3D Modelling, Shading & Texturing",
      "Experience in 3D Studio Max",
      "Good eye for composition, color, light and shadow",
      "Deliver on schedule under pressure",
    ],
  },
  {
    title: "GIS Engineer",
    exp: "1-5 Years",
    description: "Hands-on experience with GIS software and spatial data creation, analysis, and mapping.",
    responsibilities: [
      "Create, edit, and manage GIS data",
      "Perform spatial analysis and thematic mapping",
      "Prepare high-quality GIS maps and layouts",
      "Integrate survey, CAD, LiDAR data into GIS",
    ],
  },
  {
    title: "LiDAR Engineer",
    exp: "1-5 Years",
    description: "Strong experience in processing and analyzing LiDAR data for accurate geospatial outputs.",
    responsibilities: [
      "Process and classify LiDAR point cloud data",
      "Generate DEM, DTM, and contour maps",
      "Perform feature extraction from LiDAR datasets",
      "Ensure accuracy and quality control",
    ],
  },
  {
    title: "Cyclone Specialist",
    exp: "1-5 Years",
    description: "Experience in geospatial analysis and 3D point cloud processing using Cyclone.",
    responsibilities: [
      "Analyze cyclone scan data",
      "Develop 3D models from scan data",
      "Prepare technical reports and visual outputs",
      "Support project teams with scan data",
    ],
  },
];

const Careers = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:tjyothi@bprsolutions.in?subject=Job Application - ${form.name}&body=Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(mailtoLink);
  };

  return (
    <div>
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-[hsl(var(--glow))] text-sm font-semibold tracking-wider uppercase mb-3 animate-hero-fade">Join Our Team</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--section-dark-foreground))] animate-hero-fade" style={{ animationDelay: "200ms" }}>
            Careers at BPR Solutions
          </h1>
          <p className="text-[hsl(var(--section-dark-foreground)/0.65)] mt-4 max-w-2xl mx-auto animate-hero-fade" style={{ animationDelay: "400ms" }}>
            Driven by technology and relentless attention to detail, we deliver perfection in GIS, LiDAR, BIM, and more. Join our vibrant team.
          </p>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 80}>
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-[hsl(var(--primary)/0.3)] transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                      <span className="text-sm text-[hsl(var(--primary))] font-medium">{job.exp} Experience • Vizag • Full Time</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                  <ul className="space-y-1.5">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] mt-1.5 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resume form */}
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[hsl(var(--section-dark-foreground))] mb-3">Send Your Resume</h2>
              <p className="text-[hsl(var(--section-dark-foreground)/0.6)] text-sm">
                Submit your updated resume. Shortlisted candidates will be contacted.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { key: "name", label: "Full Name", type: "text" },
                { key: "email", label: "Email Address", type: "email" },
                { key: "phone", label: "Phone Number", type: "tel" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-[hsl(var(--section-dark-foreground))] mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--nav-bg))] border border-[hsl(var(--border)/0.2)] text-[hsl(var(--section-dark-foreground))] text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--glow)/0.5)] transition-shadow"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-[hsl(var(--section-dark-foreground))] mb-1.5">Cover Letter / Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--nav-bg))] border border-[hsl(var(--border)/0.2)] text-[hsl(var(--section-dark-foreground))] text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--glow)/0.5)] transition-shadow resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:brightness-110 active:scale-[0.97] transition-all"
              >
                <Send className="w-4 h-4" />
                Submit Application
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Careers;
