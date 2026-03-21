import serviceTelecom from "@/assets/service-telecom.jpg";
import serviceGis from "@/assets/service-gis.jpg";
import serviceCyclone from "@/assets/service-cyclone.jpg";
import serviceBim from "@/assets/service-bim.jpg";
import serviceLidar from "@/assets/service-lidar.jpg";
import serviceScan2d from "@/assets/service-scan2d.jpg";
import serviceSurvey from "@/assets/service-survey.jpg";
import serviceRcm from "@/assets/service-rcm.jpg";
import serviceAnnotation from "@/assets/service-annotation.jpg";
import serviceEpub from "@/assets/service-epub.jpg";
import serviceDigital from "@/assets/service-digital.jpg";

export interface SubService {
  name: string;
  icon: string;
}

export interface ServiceData {
  id: string;
  name: string;
  icon: string;
  image: string;
  description: string;
  subServices: SubService[];
}

export const servicesData: ServiceData[] = [
  {
    id: "telecom",
    name: "Telecom",
    icon: "Radio",
    image: serviceTelecom,
    description: "BPR Solutions provides comprehensive telecom engineering services including FTTH/FTTx design, outside plant engineering, fiber optic network planning, and permit coordination. We deliver high-precision solutions for telecom operators and service providers worldwide.",
    subServices: [
      { name: "FTTH/FTTx Design", icon: "Cable" },
      { name: "Outside Plant Engineering", icon: "Construction" },
      { name: "Fiber Route Planning", icon: "Route" },
      { name: "Permit Coordination", icon: "FileCheck" },
      { name: "Network Architecture", icon: "Network" },
      { name: "Splice Diagrams", icon: "GitBranch" },
      { name: "As-Built Documentation", icon: "FileText" },
    ],
  },
  {
    id: "gis",
    name: "GIS",
    icon: "Map",
    image: serviceGis,
    description: "Our GIS services cover spatial data creation, analysis, and visualization. We provide accurate GIS mapping solutions for infrastructure, utility, and telecom projects with industry-standard tools and quality assurance.",
    subServices: [
      { name: "Spatial Data Creation", icon: "Database" },
      { name: "Thematic Mapping", icon: "MapPin" },
      { name: "GIS Database Management", icon: "Server" },
      { name: "Geocoding & Analysis", icon: "Search" },
      { name: "Land Use Mapping", icon: "Layers" },
      { name: "Utility Mapping", icon: "Plug" },
    ],
  },
  {
    id: "cyclone",
    name: "Cyclone",
    icon: "Wind",
    image: serviceCyclone,
    description: "BPR Solutions specializes in Cyclone 3D point cloud processing and registration. We deliver accurate 3D models from laser scan data, supporting architecture, engineering, and construction projects.",
    subServices: [
      { name: "Point Cloud Registration", icon: "Crosshair" },
      { name: "3D Modeling from Scans", icon: "Box" },
      { name: "Clash Detection", icon: "AlertTriangle" },
      { name: "As-Built Verification", icon: "CheckCircle" },
      { name: "Facility Management", icon: "Building" },
    ],
  },
  {
    id: "bim",
    name: "BIM",
    icon: "Building2",
    image: serviceBim,
    description: "Our BIM services include 3D modeling, coordination, and construction documentation using Revit and other BIM platforms. We deliver clash-free, high-detail models across architectural, structural, and MEP disciplines.",
    subServices: [
      { name: "Revit Modeling", icon: "Cuboid" },
      { name: "MEP Coordination", icon: "Wrench" },
      { name: "Structural Modeling", icon: "Columns3" },
      { name: "Clash Detection", icon: "AlertTriangle" },
      { name: "Construction Docs", icon: "FileText" },
      { name: "4D/5D BIM", icon: "Timer" },
    ],
  },
  {
    id: "lidar",
    name: "LiDAR",
    icon: "Scan",
    image: serviceLidar,
    description: "BPR Solutions provides end-to-end LiDAR data processing services including point cloud classification, DEM/DTM generation, feature extraction, and terrain analysis for infrastructure and mapping projects.",
    subServices: [
      { name: "Point Cloud Classification", icon: "Layers" },
      { name: "DEM/DTM Generation", icon: "Mountain" },
      { name: "Feature Extraction", icon: "Crosshair" },
      { name: "Corridor Mapping", icon: "Route" },
      { name: "Contour Generation", icon: "Waves" },
      { name: "Powerline Classification", icon: "Zap" },
    ],
  },
  {
    id: "scan-to-2d",
    name: "Scan to 2D (AutoCAD)",
    icon: "PenTool",
    image: serviceScan2d,
    description: "We convert 3D laser scan data into precise 2D AutoCAD drawings including floor plans, elevations, sections, and as-built documentation for renovation and construction projects.",
    subServices: [
      { name: "Floor Plan Extraction", icon: "Layout" },
      { name: "Elevation Drawings", icon: "ArrowUpFromLine" },
      { name: "Section Drawings", icon: "Scissors" },
      { name: "As-Built Plans", icon: "FileCheck" },
      { name: "Detail Drawings", icon: "Pencil" },
    ],
  },
  {
    id: "survey",
    name: "Survey",
    icon: "Compass",
    image: serviceSurvey,
    description: "Our survey services provide accurate land surveying, topographic mapping, and boundary surveys using advanced equipment and methodologies for construction and infrastructure projects.",
    subServices: [
      { name: "Topographic Survey", icon: "Mountain" },
      { name: "Boundary Survey", icon: "Square" },
      { name: "Route Survey", icon: "Route" },
      { name: "Cadastral Mapping", icon: "Map" },
      { name: "Control Survey", icon: "Target" },
    ],
  },
  {
    id: "rcm",
    name: "RCM",
    icon: "Settings",
    image: serviceRcm,
    description: "Reliability Centered Maintenance services to optimize equipment maintenance strategies, reduce downtime, and improve operational efficiency through systematic analysis and planning.",
    subServices: [
      { name: "Failure Mode Analysis", icon: "AlertTriangle" },
      { name: "Maintenance Strategy", icon: "Calendar" },
      { name: "Asset Management", icon: "Database" },
      { name: "Performance Monitoring", icon: "BarChart" },
      { name: "Risk Assessment", icon: "Shield" },
    ],
  },
  {
    id: "data-annotation",
    name: "Data Annotation",
    icon: "Tag",
    image: serviceAnnotation,
    description: "Professional data annotation and labeling services for AI/ML training datasets. We provide image, text, and video annotation with high accuracy for computer vision and NLP projects.",
    subServices: [
      { name: "Image Annotation", icon: "Image" },
      { name: "Text Labeling", icon: "Type" },
      { name: "Object Detection", icon: "ScanSearch" },
      { name: "Semantic Segmentation", icon: "Grid3x3" },
      { name: "Video Annotation", icon: "Video" },
    ],
  },
  {
    id: "e-publication",
    name: "E-Publication",
    icon: "BookOpen",
    image: serviceEpub,
    description: "End-to-end digital publishing services including eBook conversion, interactive content design, digital magazine creation, and multi-format publishing solutions.",
    subServices: [
      { name: "eBook Conversion", icon: "BookOpen" },
      { name: "Interactive Design", icon: "MousePointer" },
      { name: "Digital Magazines", icon: "Newspaper" },
      { name: "PDF Formatting", icon: "FileText" },
      { name: "Multi-format Publishing", icon: "Files" },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    icon: "Megaphone",
    image: serviceDigital,
    description: "Comprehensive digital marketing solutions including SEO, social media management, content marketing, PPC campaigns, and analytics-driven strategies to grow your online presence.",
    subServices: [
      { name: "SEO Optimization", icon: "Search" },
      { name: "Social Media", icon: "Share2" },
      { name: "Content Marketing", icon: "PenLine" },
      { name: "PPC Campaigns", icon: "Target" },
      { name: "Analytics & Reporting", icon: "BarChart" },
    ],
  },
];
