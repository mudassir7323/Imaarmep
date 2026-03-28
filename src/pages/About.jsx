import SEO from "../components/SEO";
import Contact from "../components/home/Contact";
import ChooseUs from "../components/home/ChooseUs";
import Process from "../components/home/Process";
import Services from "../components/home/Services";
import WorkWithUs from "../components/home/WorkWithUs";

function About() {
  return (
    <>
      <SEO
        title="About Us | IMAAR MEP"
        description="Learn more about IMAAR MEP, our mission, vision, and the expert team delivering premium engineering solutions."
        keywords="about IMAAR MEP, MEP engineering team, MEP mission, engineering solutions"
        name="IMAAR MEP"
        type="website"
      />
      <div>
        <Services />
      </div>
      <div>
        <WorkWithUs />
      </div>
      <div>
        <ChooseUs />
      </div>
      <div>
        <Process />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
}

export default About;
