import ScrollReveal from "@/components/ScrollReveal";
import serviceTelecom from "@/assets/service-telecom.jpg";
import serviceGis from "@/assets/service-gis.jpg";
import serviceCyclone from "@/assets/service-cyclone.jpg";
import serviceBim from "@/assets/service-bim.jpg";
import serviceLidar from "@/assets/service-lidar.jpg";
import serviceScan2d from "@/assets/service-scan2d.jpg";
import serviceSurvey from "@/assets/service-survey.jpg";
import serviceRcm from "@/assets/service-rcm.jpg";
import serviceAnnotation from "@/assets/service-annotation.jpg";
import serviceDigital from "@/assets/service-digital.jpg";
import serviceEpub from "@/assets/service-epub.jpg";
import hero1 from "@/assets/hero-1.jpg";

const projectImages = [
  { src: serviceTelecom, title: "Telecom Network Design", category: "Telecom" },
  { src: serviceGis, title: "GIS Mapping Project", category: "GIS" },
  { src: serviceBim, title: "BIM Coordination Model", category: "BIM" },
  { src: serviceLidar, title: "LiDAR Terrain Analysis", category: "LiDAR" },
  { src: serviceCyclone, title: "Cyclone 3D Scan Processing", category: "Cyclone" },
  { src: serviceScan2d, title: "Scan to 2D Conversion", category: "AutoCAD" },
  { src: serviceSurvey, title: "Topographic Survey", category: "Survey" },
  { src: serviceRcm, title: "RCM Analysis", category: "RCM" },
  { src: serviceAnnotation, title: "AI Data Labeling", category: "Data Annotation" },
  { src: serviceDigital, title: "Digital Marketing Campaign", category: "Digital Marketing" },
  { src: serviceEpub, title: "E-Publication Design", category: "E-Publication" },
  { src: hero1, title: "Network Infrastructure", category: "Telecom" },
];

const Projects = () => {
  return (
    <div>
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-[hsl(var(--glow))] text-sm font-semibold tracking-wider uppercase mb-3 animate-hero-fade">Our Work</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--section-dark-foreground))] animate-hero-fade" style={{ animationDelay: "200ms" }}>
            Projects
          </h1>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {projectImages.map((project, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="group relative overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs text-[hsl(var(--glow))] font-medium">{project.category}</span>
                    <h3 className="text-[hsl(var(--section-dark-foreground))] font-semibold mt-1">{project.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
