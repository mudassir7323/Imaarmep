import { createContext } from "react";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const CONTACT_INFO = [
    {
      id: "phone",
      label: "Phone",
      value: "+44 (0) 123 456 789",
      href: "tel:+440000000000",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.16h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.67a16 16 0 0 0 8.07 8.07l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 24 17.92" />
        </svg>
      ),
    },
    {
      id: "email",
      label: "Email",
      value: "info@imaarmep.co.uk",
      href: "mailto:info@imaarmep.co.uk",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      id: "location",
      label: "Location",
      value: "Birmingham, United Kingdom",
      href: null,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "IMAAR MEP on LinkedIn",
      href: "YOUR_LINKEDIN_URL",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  const SERVICE_OPTIONS = [
    { value: "electrical", label: "Electrical Engineering" },
    { value: "mechanical", label: "Mechanical Engineering" },
    { value: "environmental", label: "Environmental / Compliance" },
    { value: "surveys", label: "Surveys & Reports" },
    { value: "specialist", label: "Specialist Services" },
    { value: "industrial", label: "Industrial" },
    { value: "leisure", label: "Leisure" },
    { value: "power", label: "Power" },
    { value: "other", label: "Other / Not sure yet" },
  ];

  return (
    <ContactContext.Provider value={{ CONTACT_INFO, SERVICE_OPTIONS }}>
      {children}
    </ContactContext.Provider>
  );
};