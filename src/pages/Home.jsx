import Consultants from "../components/home/Consultants";
import Hero from "../components/home/Hero";
import Preview from "../components/home/Preview";
import ScrollNavigator from "../components/ScrollNavigator.jsx";

function Home() {
  
  return (
    <>      
      <ScrollNavigator/>
      <div><Hero /></div>
      <div><Preview /></div>
      <div><Consultants /></div>
    </>
  );
}

export default Home;
