import Contact from "../components/home/Contact";
import ChooseUs from "../components/home/ChooseUs";
import Process from "../components/home/Process";
import Services from "../components/home/Services";
import WorkWithUs from "../components/home/WorkWithUs";

function About() {
  return (
    <>
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
