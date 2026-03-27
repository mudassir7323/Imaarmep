import { createContext } from "react";

export const ServicesContext = createContext([]);

export const ServicesProvider = ({ children }) => {
  const SERVICES = [
    {
      title: "Electrical Engineering",
      description:
        "Comprehensive electrical engineering design services covering all RIBA stages, power distribution, lighting, and specialist systems.",
      imagePath: "assets/images/svc-electrical.jpg",
      icon: (
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      items: [
        "Full Electrical design works (RIBA stage 1–7)",
        "Electrical performance specifications & scope of works (RIBA stage 1–3)",
        "Mains and sub-mains power distribution",
        "Cable containment systems",
        "Small power & ancillary services",
        "Internal & external lighting systems",
        "Emergency lighting systems",
        "Specialist lighting design and control systems",
        "Lightning protection systems",
        "Data & communications services",
        "Earthing and bonding requirements",
        "Standby generation & UPS systems",
        "LV power supplies & distribution systems",
        "Renewable technology power requirements",
        "Power and controls wiring for mechanical systems",
      ],
    },
    {
      title: "Mechanical Engineering",
      description:
        "Full mechanical engineering services including HVAC, water systems, heating, and sustainable solutions.",
      imagePath: "assets/images/svc-mechanical.jpg",
      icon: (
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      items: [
        "Full Mechanical design works (RIBA stage 1–7)",
        "Mechanical performance specifications & scope of works (RIBA stage 1–3)",
        "Air conditioning & comfort cooling plant",
        "Mains cold water & boosted cold water systems",
        "Renewable & sustainable solutions",
        "Heat generation plant",
        "Hot & cold-water distribution",
        "District heating and combined heat & power generation",
        "Hot water generation plant",
        "Gas distribution systems",
        "Car park ventilation designs",
        "Above-ground drainage",
        "Building management & control systems",
      ],
    },
    {
      title: "Environmental Engineering",
      description:
        "Sustainable and environmental design services including compliance, modelling, and energy efficiency strategies.",
      imagePath: "assets/images/svc-mechanical.jpg",
      icon: (
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      items: [
        "Building Regulations UK Part L (BRUKL)",
        "Standard Assessment Procedure (SAP) – Residential",
        "Wellbeing strategies",
        "Low and zero-carbon design",
        "Advice on BREEAM and PASSIVHAUS",
        "Simplified Building Energy Modelling (SBEM) – Commercial",
        "Daylight studies",
      ],
    },
    {
      title: "Analysis, Surveys & Reports",
      description:
        "Detailed analysis, inspections, and reporting services for compliance, performance, and project planning.",
      imagePath: "assets/images/svc-mechanical.jpg",
      icon: (
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      items: [
        "Pre-acquisition surveys",
        "Acceptance and compliance reports",
        "General condition surveys",
        "Dilapidations",
        "Commissioning management",
        "SAP, SBEM & EPCs",
        "Site services analysis",
        "Feasibility studies",
        "Design inspections",
        "Auditing surveys",
        "Technical appraisals (as installed)",
        "Capacity assessments",
        "Technical services management",
        "Incoming utilities analysis",
      ],
    },
    {
      title: "Specialist",
      description:
        "Advanced and specialist engineering consultancy services for complex and high-performance systems.",
      imagePath: "assets/images/svc-mechanical.jpg",
      icon: (
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      items: [
        "Vertical transportation",
        "Fire engineering",
        "Strategic operational management",
        "Development of PPM and CBM systems",
        "Facilities management advice and management",
        "Computational Fluid Dynamics (CFD)",
      ],
    },
    {
      title: "Retail",
      description:
        "Engineering solutions tailored for retail environments from design to commissioning and handover.",
      imagePath: "assets/images/svc-mechanical.jpg",
      icon: (
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      items: [
        "Mechanical Systems",
        "Electrical Systems",
        "Planning and Design",
        "Installation",
        "Testing and Commissioning",
        "Handover and Training",
      ],
    },
    {
      title: "Industrial",
      description:
        "Comprehensive industrial engineering covering manufacturing, automation, and advanced technologies.",
      imagePath: "assets/images/svc-mechanical.jpg",
      icon: (
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      items: [
        "Design and Engineering",
        "Manufacturing and Fabrication",
        "Installation and Commissioning",
        "Power Generation and Distribution",
        "Control Systems and Automation",
        "Electrical Safety and Compliance",
        "Project Management",
        "Technological Advancements",
        "Environmental and Sustainability Considerations",
        "Renewable Energy Plant",
        "Automated Manufacturing Facility",
        "Smart Grid Implementation",
        "Digitalisation and IoT",
        "Artificial Intelligence and Machine Learning",
        "Sustainable and Resilient Designs",
      ],
    },
    {
      title: "Leisure",
      description:
        "Engineering systems for leisure facilities focusing on comfort, efficiency, and user experience.",
      imagePath: "assets/images/svc-mechanical.jpg",
      icon: (
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      items: [
        "HVAC Systems",
        "Lighting Systems",
        "Power Distribution",
        "Plumbing Systems",
        "Specialised Equipment",
        "Smart Building Technology",
        "Renewable Energy Integration",
        "Sustainable Design and Construction",
        "Safety and Compliance",
        "Project Management",
        "Maintenance and Upgrades",
      ],
    },
    {
      title: "Waste",
      description:
        "Engineering solutions for waste management, recycling, and environmental protection systems.",
      imagePath: "assets/images/svc-mechanical.jpg",
      icon: (
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      items: [
        "Mechanical Components",
        "Electrical Components",
        "Waste-to-Energy Conversion",
        "Recycling and Material Recovery",
        "Environmental Protection",
        "Innovative Technologies",
        "Policy and Regulation",
      ],
    },
    {
      title: "Power",
      description:
        "Power engineering services including design, installation, and smart energy solutions.",
      imagePath: "assets/images/svc-mechanical.jpg",
      icon: (
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      items: [
        "Design and Planning",
        "Installation and Commissioning",
        "Maintenance and Upgrades",
        "Renewable Energy Integration",
        "Smart Technologies",
      ],
    },
  ];

  return (
    <ServicesContext.Provider value={SERVICES}>
      {children}
    </ServicesContext.Provider>
  );
};
