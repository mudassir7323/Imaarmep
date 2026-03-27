import { useEffect, useState } from "react";
import ChooseUs from "../components/home/ChooseUs";
import Consultants from "../components/home/Consultants";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Preview from "../components/home/Preview";
import Process from "../components/home/Process";
import Services from "../components/home/Services";
import WorkWithUs from "../components/home/WorkWithUs";
import theme from "../theme/Theme.js";

function Home() {
  const [scrollProgress, setScrollProgress] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight > 0) {
        const percentage = (totalScroll / scrollableHeight) * 100;
        setScrollProgress(`${percentage}%`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 h-0.75 z-[9999] origin-left bg-gradient-to-r"
        style={{
          width: scrollProgress,
          backgroundColor: theme.colors.accent,
          boxShadow: `0 0 12px ${theme.colors.accent}`,
          transition: "width 0.1s ease-out"
        }}
      />

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
