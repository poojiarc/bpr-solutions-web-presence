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
  detailedDescription?: string;
  subServices: SubService[];
}

export const servicesData: ServiceData[] = [
  {
    id: "telecom",
    name: "Telecom",
    icon: "Radio",
    image: serviceTelecom,
    description: "Comprehensive telecom engineering and modelling solutions for modern communication networks.",
    detailedDescription: "BPR Solutions delivers comprehensive telecom engineering and modelling solutions that support the planning, design, deployment, and maintenance of modern communication networks. We leverage advanced BIM, GIS, LiDAR, and CAD technologies to ensure accurate network layouts, optimised routes, and reliable infrastructure development. Our telecom solutions help service providers reduce deployment risks, improve efficiency, and accelerate project execution while maintaining high quality and compliance standards.\n\nWe work closely with telecom operators, EPC contractors, and infrastructure providers to develop scalable and cost-effective solutions for FTTH/FTTx, backbone fiber, tower infrastructure, and underground/overhead networks.",
    subServices: [
      { name: "Telecom Network Planning & Design", icon: "Network" },
      { name: "FTTH/FTTx Network Modeling", icon: "Cable" },
      { name: "Telecom Tower & Site Layout", icon: "Radio" },
      { name: "GIS-based Telecom Asset Mapping", icon: "Map" },
      { name: "As-Built Documentation & Updates", icon: "FileText" },
      { name: "CAD-to-BIM Conversion", icon: "ArrowRightLeft" },
      { name: "LiDAR & Point Cloud Modeling", icon: "Scan" },
      { name: "Fiber Route Surveys & Visualization", icon: "Route" },
    ],
  },
  {
    id: "gis",
    name: "GIS",
    icon: "Map",
    image: serviceGis,
    description: "High-accuracy GIS mapping solutions for spatial data creation, analysis, and visualization.",
    detailedDescription: "GIS Mapping Services involve the collection, analysis, and visualization of spatial and geographic data to support smarter planning, decision-making, and asset management. At BPR Solutions, we deliver high-accuracy GIS mapping solutions by integrating satellite imagery, survey data, LiDAR, and CAD/GIS platforms. Our services help utilities, telecom providers, urban planners, and infrastructure developers visualize real-world assets, optimize networks, reduce operational risks, and maintain reliable, up-to-date geospatial databases.\n\nWe create and manage high-quality geospatial data using advanced GIS tools, satellite imagery, and survey inputs, helping clients visualize assets, optimize planning, and make informed decisions with confidence.",
    subServices: [
      { name: "High-Precision GIS Data Creation", icon: "Database" },
      { name: "Spatial Data Analysis & Thematic Mapping", icon: "MapPin" },
      { name: "Utility & Infrastructure Mapping", icon: "Plug" },
      { name: "As-Built Drawings & GIS Database", icon: "Server" },
      { name: "Georeferencing & Data Conversion", icon: "ArrowRightLeft" },
      { name: "CAD, LiDAR & Survey Integration", icon: "Layers" },
      { name: "Network Planning & Asset Management", icon: "Settings" },
      { name: "Topographic & Base Map Creation", icon: "Mountain" },
      { name: "Data Validation & Quality Checks", icon: "CheckCircle" },
    ],
  },
  {
    id: "cyclone",
    name: "Cyclone",
    icon: "Wind",
    image: serviceCyclone,
    description: "Advanced cyclone modeling, risk assessment, and impact analysis for resilient infrastructure.",
    detailedDescription: "Cyclone Modeling Services involve the analysis and simulation of cyclone behavior to assess potential impacts on infrastructure, coastal regions, and communities. BPR Solutions uses advanced geospatial data, historical cyclone records, and analytical models to predict wind intensity, storm surge, rainfall, and flood risks. Our solutions support disaster preparedness, risk mitigation, infrastructure planning, and resilient design for government agencies, utilities, and private organizations.\n\nOur solutions enable accurate risk assessment, vulnerability analysis, and impact visualization, supporting government agencies, utilities, insurers, and infrastructure developers in minimizing losses and enhancing resilience.",
    subServices: [
      { name: "Cyclone Track & Intensity Analysis", icon: "Crosshair" },
      { name: "Wind Speed & Pressure Modeling", icon: "Wind" },
      { name: "Storm Surge & Coastal Mapping", icon: "Waves" },
      { name: "Rainfall-Runoff & Flood Risk", icon: "CloudRain" },
      { name: "Vulnerability & Impact Analysis", icon: "AlertTriangle" },
      { name: "Hazard Zoning & Risk Mapping", icon: "Shield" },
      { name: "GIS-based Visualization & Reporting", icon: "BarChart" },
      { name: "Disaster Preparedness Planning", icon: "FileCheck" },
    ],
  },
  {
    id: "bim",
    name: "BIM",
    icon: "Building2",
    image: serviceBim,
    description: "Intelligent 3D modeling for design accuracy, coordination, and project lifecycle management.",
    detailedDescription: "Building Information Modeling (BIM) is a digital process that creates intelligent 3D models containing detailed information about physical and functional characteristics of buildings and infrastructure. BPR Solutions uses BIM to improve design accuracy, coordination, and project efficiency by enabling better visualization, clash detection, and data-driven decision-making throughout the project lifecycle.\n\nOur BIM solutions help stakeholders reduce rework, control costs, enhance collaboration, and ensure high-quality project outcomes across residential, commercial, industrial, and infrastructure projects.",
    subServices: [
      { name: "3D BIM Modeling", icon: "Cuboid" },
      { name: "Architectural, Structural & MEP BIM", icon: "Building2" },
      { name: "Clash Detection & Coordination", icon: "AlertTriangle" },
      { name: "Construction Sequencing (4D BIM)", icon: "Timer" },
      { name: "Quantity Take-offs & Cost (5D BIM)", icon: "Calculator" },
      { name: "Scan-to-BIM & As-Built Modeling", icon: "Scan" },
      { name: "BIM Data Management & Documentation", icon: "FileText" },
      { name: "Facility Management & Lifecycle", icon: "Settings" },
    ],
  },
  {
    id: "lidar",
    name: "LiDAR",
    icon: "Scan",
    image: serviceLidar,
    description: "Advanced remote sensing for precise elevation models, terrain analysis, and spatial insights.",
    detailedDescription: "LiDAR (Light Detection and Ranging) is an advanced remote sensing technology that uses laser pulses to accurately measure distances and generate high-resolution 3D representations of terrain, structures, and vegetation. BPR Solutions utilizes LiDAR data to deliver precise elevation models and spatial insights, supporting planning, design, and analysis for infrastructure, telecom, urban development, and environmental projects.\n\nOur comprehensive LiDAR services convert raw point cloud data into actionable geospatial and engineering outputs. Our LiDAR solutions enhance accuracy, reduce field survey time, and support informed decision-making across complex and large-scale projects.",
    subServices: [
      { name: "LiDAR Data Processing & Classification", icon: "Layers" },
      { name: "High-Resolution Point Cloud Generation", icon: "Crosshair" },
      { name: "3D Terrain & Surface Modeling", icon: "Mountain" },
      { name: "Corridor & Route Mapping", icon: "Route" },
      { name: "Vegetation & Feature Extraction", icon: "Trees" },
      { name: "LiDAR with GIS & CAD Integration", icon: "ArrowRightLeft" },
      { name: "Quality Control & Validation", icon: "CheckCircle" },
    ],
  },
  {
    id: "scan-to-2d",
    name: "Scan to 2D (AutoCAD)",
    icon: "PenTool",
    image: serviceScan2d,
    description: "Precise conversion of laser scan and point cloud data into accurate 2D AutoCAD drawings.",
    detailedDescription: "Scan to 2D (AutoCAD) is the process of converting laser scan data or point cloud information into accurate 2D drawings. BPR Solutions transforms scanned data into precise AutoCAD plans, sections, and elevations, enabling reliable documentation of existing buildings and infrastructure. This service supports renovation, retrofitting, and as-built documentation with high accuracy and clarity.",
    subServices: [
      { name: "Point Cloud to 2D AutoCAD Drawings", icon: "Layout" },
      { name: "Floor Plans, Sections & Elevations", icon: "ArrowUpFromLine" },
      { name: "As-Built Drawings", icon: "FileCheck" },
      { name: "High-Accuracy Drafting from Scans", icon: "Pencil" },
      { name: "Clean, Layered AutoCAD Files", icon: "Layers" },
      { name: "Renovation & Retrofit Support", icon: "Wrench" },
      { name: "BIM & GIS Workflow Integration", icon: "ArrowRightLeft" },
      { name: "Quality Checks & Dimensional Validation", icon: "CheckCircle" },
    ],
  },
  {
    id: "survey",
    name: "Survey",
    icon: "Compass",
    image: serviceSurvey,
    description: "Precise survey solutions using modern technologies for planning, design, and construction.",
    detailedDescription: "Surveying is the process of measuring and mapping land, structures, and features to determine accurate positions, distances, and elevations. BPR Solutions delivers precise survey solutions using modern technologies and geospatial methods to support planning, design, construction, and asset management across infrastructure, telecom, and development projects.",
    subServices: [
      { name: "Topographic & Land Surveys", icon: "Mountain" },
      { name: "Boundary & Alignment Surveys", icon: "Square" },
      { name: "Construction & As-Built Surveys", icon: "Building2" },
      { name: "Route & Corridor Surveys", icon: "Route" },
      { name: "Elevation & Contour Mapping", icon: "Waves" },
      { name: "Control Point Establishment", icon: "Target" },
      { name: "GIS, CAD & BIM Data Integration", icon: "ArrowRightLeft" },
      { name: "Quality Control & Survey Reporting", icon: "FileText" },
    ],
  },
  {
    id: "rcm",
    name: "RCM",
    icon: "Settings",
    image: serviceRcm,
    description: "Revenue cycle management, medical billing, coding services, and practice financial evaluation.",
    detailedDescription: "BPR Solutions provides comprehensive Revenue Cycle Management (RCM) services to optimize healthcare financial performance. We make recommendations on process, workflow, and claims changes to maximize the practice's financial performance. Our medical billing services handle the process of submitting and following up on claims with health insurance companies to receive payment for services rendered by healthcare providers.\n\nOur coding services include specialized professional medical coders who review documentation contained in patients' medical records and translate the diseases, procedures, services, and materials cited in the documentation into universally accepted, industry-standard medical codes.",
    subServices: [
      { name: "Practice Financial Evaluation", icon: "BarChart" },
      { name: "Medical Billing", icon: "FileText" },
      { name: "Medical Coding", icon: "Code" },
      { name: "Claims Management", icon: "ClipboardCheck" },
      { name: "Revenue Optimization", icon: "TrendingUp" },
      { name: "Compliance & Auditing", icon: "Shield" },
    ],
  },
  {
    id: "data-annotation",
    name: "Data Annotation",
    icon: "Tag",
    image: serviceAnnotation,
    description: "Professional data annotation and labeling services for AI/ML training across image, video, and text.",
    detailedDescription: "BPR Solutions provides professional data annotation and labeling services for AI/ML training datasets. We deliver high-quality image annotation, video annotation, and text annotation services with precision and accuracy for computer vision, natural language processing, and machine learning projects.\n\nOur image annotation services include bounding boxes, polygon annotation, semantic segmentation, and keypoint annotation. Video annotation covers object tracking, activity recognition, and frame-by-frame labeling. Text annotation includes named entity recognition, sentiment analysis, and text classification.",
    subServices: [
      { name: "Image Annotation", icon: "Image" },
      { name: "Video Annotation", icon: "Video" },
      { name: "Text Annotation", icon: "Type" },
      { name: "Object Detection & Tracking", icon: "ScanSearch" },
      { name: "Semantic Segmentation", icon: "Grid3x3" },
      { name: "Keypoint Annotation", icon: "Crosshair" },
    ],
  },
  {
    id: "e-publication",
    name: "E-Publication",
    icon: "BookOpen",
    image: serviceEpub,
    description: "Digital accessibility and publishing solutions for PDF, Word, web, and ePub formats.",
    detailedDescription: "BPR Solutions provides comprehensive digital accessibility and e-publication services. Digital Accessibility is the inclusive practice of ensuring that all digital products, services, and environments—including software, hardware, documents, and web content—can be used by everyone, regardless of physical or cognitive disabilities.\n\nOur services cover PDF Accessibility (creating or remediating PDF documents with structural tags for assistive technologies), Word Accessibility (using built-in heading styles, alt text, and readable tables), Web Accessibility (designing and coding sites following WCAG standards), and ePub Accessibility (using semantic HTML, navigable table of contents, and text alternatives for media).",
    subServices: [
      { name: "PDF Accessibility", icon: "FileText" },
      { name: "Word Accessibility", icon: "FileCheck" },
      { name: "Digital Accessibility", icon: "Monitor" },
      { name: "Web Accessibility", icon: "Globe" },
      { name: "Conversions", icon: "ArrowRightLeft" },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    icon: "Megaphone",
    image: serviceDigital,
    description: "Targeted digital marketing campaigns, website development, and social media strategies for measurable ROI.",
    detailedDescription: "BPR Solutions provides expert digital marketing services to boost your online presence and drive measurable growth. Our targeted campaigns reach your ideal audience with strategies built for measurable ROI. We offer custom website designs aligned with your brand identity, optimized for search engines and user experience.\n\nOur comprehensive training is tailored for beginners with industry-relevant skills. We create customized social media campaigns that resonate with your target audience, driving growth and building brand loyalty.",
    subServices: [
      { name: "SEO Optimization", icon: "Search" },
      { name: "Social Media Marketing", icon: "Share2" },
      { name: "Website Development", icon: "Globe" },
      { name: "Content Marketing", icon: "PenLine" },
      { name: "PPC Campaigns", icon: "Target" },
      { name: "Digital Marketing Coaching", icon: "GraduationCap" },
      { name: "Analytics & Reporting", icon: "BarChart" },
    ],
  },
];
