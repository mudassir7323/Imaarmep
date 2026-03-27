import { createContext } from "react";

export const ServicesContext = createContext([]);

export const ServicesProvider = ({ children }) => {

  const SERVICES = [
  {
    title: "Electrical Engineering",
    description:
      "Comprehensive electrical design services covering every aspect of a building's electrical infrastructure, from initial concept through to construction issue and on-site support.",
    imagePath: "assets/images/svc-electrical.jpg",
    icon: (
      <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    items: [
      "LV Distribution",
      "Electrical performance specifications & scope of works (RIBA stage 1–3)",
      "Emergency Lighting",
      "Fire Alarm",
      "EV Charging",
    ],
  },
  {
    title: "Mechanical Engineering",
    description:
      "Full mechanical building services from HVAC to drainage.",
    imagePath: "assets/images/svc-mechanical.jpg",
    icon: (
      <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    items: [
      "HVAC Design",
      "Ventilation",
      "Plumbing & Drainage",
      "Heating Systems",
    ],
  },
];

  return (
    <ServicesContext.Provider value={SERVICES}>
      {children}
    </ServicesContext.Provider>
  );
};