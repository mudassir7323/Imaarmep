import theme from "../theme/Theme.js";
import { useEffect, useState } from "react";


function ScrollNavigator() {

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
        </>
     );
}

export default ScrollNavigator;