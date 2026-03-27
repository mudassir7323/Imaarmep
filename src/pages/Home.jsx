import ChooseUs from "../components/home/ChooseUs";
import Consultants from "../components/home/Consultants";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Preview from "../components/home/Preview";
import Process from "../components/home/Process";
import Services from "../components/home/Services";
import WorkWithUs from "../components/home/WorkWithUs";
import ScrollNavigator from "../components/ScrollNavigator.jsx";

function Home() {
  
  return (
    <>      
      <ScrollNavigator/>
      <div><Hero /></div>
      <div><Preview /></div>
      <div><Consultants /></div>
      <div><Services /></div>
      <div><WorkWithUs /></div>
      <div><ChooseUs /></div>
      <div><Process /></div>
      <div><Contact /></div>
    </>
  );
}

export default Home;
