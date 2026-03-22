import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  to: string;
  images: string[];
  name: string;
  interval?: number;
}

const ServiceCard = ({ to, images, name }: ServiceCardProps) => {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden rounded-xl aspect-[4/3] hover:shadow-xl hover:shadow-[hsl(var(--glow)/0.1)] transition-all duration-300"
    >
      <img
        src={images[0]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.9)] via-[hsl(var(--hero-overlay)/0.3)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-[hsl(var(--section-dark-foreground))] font-semibold text-lg mb-1">{name}</h3>
        <span className="flex items-center gap-1 text-[hsl(var(--glow))] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Explore <ChevronRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;