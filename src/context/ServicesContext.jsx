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
          <path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z" />
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
    <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 00.12-.64l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.03 7.03 0 00-1.63-.94l-.36-2.54a.5.5 0 00-.5-.42h-3.84a.5.5 0 00-.5.42l-.36 2.54c-.58.23-1.12.54-1.63.94l-2.39-.96a.5.5 0 00-.6.22L2.71 8.9a.5.5 0 00.12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.83 14.6a.5.5 0 00-.12.64l1.92 3.32c.14.24.43.34.69.22l2.39-.96c.5.4 1.05.72 1.63.94l.36 2.54c.05.24.26.42.5.42h3.84c.24 0 .45-.18.5-.42l.36-2.54c.58-.23 1.12-.54 1.63-.94l2.39.96c.26.12.55.02.69-.22l1.92-3.32a.5.5 0 00-.12-.64l-2.03-1.66zM12 15.5A3.5 3.5 0 1112 8a3.5 3.5 0 010 7.5z"/>
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
          <path d="M12 2C8 6 4 9 4 14a8 8 0 0016 0c0-5-4-8-8-12z" />
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
          <path d="M3 3h18v2H3zm2 4h14v14H5z" />
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
          <path d="M12 1l3 5 6 .9-4.5 4.3L18 17l-6-3-6 3 1.5-5.8L3 6.9 9 6z" />
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
          <path d="M6 2l-2 6v2h16V8l-2-6zM4 10v10h16V10" />
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
          <path d="M2 21h20V7l-10-5L2 7z" />
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
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
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
          <path d="M5 6h14l-1 14H6L5 6zm3-3h8l1 2H7l1-2z" />
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
          <path d="M11 21h-1l1-7H8l5-11h1l-1 7h3z" />
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
