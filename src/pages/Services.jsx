import { useContext } from "react";
import { ServicesContext } from "../context/ServicesContext";
import SEO from "../components/SEO";

import ServicesHeading from "../components/ServicesHeading";
import ServicesHero from "../components/ServicesHero";
import ServicesSearch from "../components/ServicesSearch";
import ServicesNav from "../components/ServicesNav";
import ScrollNavigator from "../components/ScrollNavigator"


function Services() {
  
  const services = useContext(ServicesContext)

  return (
    <>
      <SEO
        title="Our Services | IMAAR MEP"
        description="Explore our diverse range of engineering services, including mechanical, electrical, plumbing, and sustainable solutions."
        keywords="MEP services, engineering, mechanical, electrical, plumbing, sustainability"
        name="IMAAR MEP"
        type="website"
      />
      <ScrollNavigator/>
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

