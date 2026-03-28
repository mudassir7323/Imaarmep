import SEO from "../components/SEO";
import Consultants from "../components/home/Consultants";
import Hero from "../components/home/Hero";
import Preview from "../components/home/Preview";
import ScrollNavigator from "../components/ScrollNavigator.jsx";

function Home() {
  
  return (
    <>      
      <SEO
        title="IMAAR MEP | Top rated MEP Services"
        description="IMAAR MEP provides top-notch Mechanical, Electrical, and Plumbing services with a focus on innovation and quality."
        keywords="MEP services, mechanical engineering, electrical engineering, plumbing, IMAAR MEP"
        name="IMAAR MEP"
        type="website"
      />
      <ScrollNavigator/>
      <div><Hero /></div>
      <div><Preview /></div>
      <div><Consultants /></div>
    </>
  );
}

export default Home;
