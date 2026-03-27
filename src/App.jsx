import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact-Us" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
