import { useContext } from "react";
import { ServicesContext } from "../context/ServicesContext";

import ServicesHeading from "../components/ServicesHeading";
import ServicesHero from "../components/ServicesHero";


function Services() {
  
  const services = useContext(ServicesContext)

  return (
    <>
      <ServicesHero/>
      {/* Services list */}
      {services.map((svc, i) => (
        <ServicesHeading key={svc.title} index={i + 1} {...svc} />
      ))}
    </>
  );
}

export default Services;