import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";

// Pages
import AboutUs from "./pages/AboutUs.jsx";
import Service from "./pages/Service.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <Router>
      <main className="relative min-h-screen bg-black text-white">
        {/* Background elements */}
        <img
          className="absolute top-0 right-0 opacity-60 -z-10"
          src="gradient.png"
          alt="Gradient-img"
        />
        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#FF00FF] -rotate-[30deg] -z-10"></div>

        {/* Always visible */}
        <Header />

        {/* Only one of these components renders based on the route */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
