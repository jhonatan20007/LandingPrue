import React, { useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  const [services, setServices] = useState(false);
  const [op, setOp] = useState("");
  const handleServices = (boolservices ,title) => {
    // console.log("handleServices called with title:", title);
    setServices(boolservices);
    setOp(title);
  }

  return (
    <>
      {services === false ? (
        <>
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            {/* HEADER */}
            <Header services={services} handleServices={handleServices}/>
            {/* HERO */}
            <Hero />
            {/* BENEFITS */}
            <Benefits services={services} handleServices={handleServices}  op={op}/>
            {/* PRICING */}
            <Pricing />
            {/* FOOTER */}
            <Footer />
          </div>
          <ButtonGradient />
        </>
      ) : (
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          {/* HEADER */}
          <Header services={services} handleServices={handleServices} />
          {/* HERO */}
          <Services op={op}/>
          {/* FOOTER */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
