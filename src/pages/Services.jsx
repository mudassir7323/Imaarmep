import { useContext } from "react";
import { ServicesContext } from "../context/ServicesContext";

import ServicesHeading from "../components/ServicesHeading";
import ServicesHero from "../components/ServicesHero";
import ServicesSearch from "../components/ServicesSearch";
import ServicesNav from "../components/ServicesNav";


function Services() {
  
  const services = useContext(ServicesContext)

  return (
    <>
      <ServicesNav />
      <ServicesHero/>
      <ServicesSearch/>
      {/* Services list */}
      {services.map((svc, i) => (
        <ServicesHeading key={svc.title} index={i + 1} {...svc} />
      ))}
    </>
  );
}

export default Services;
