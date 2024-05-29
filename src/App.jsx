import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* HEADER */}
        <Header />
        {/* HERO */}
        <Hero />
        {/* BENEFITS */}
        <Benefits />
        {/* COLLABORATION */}
        {/* <Collaboration /> */}
        {/* SERVICES */}
        {/* <Services /> */}
        {/* PRICING */}
        <Pricing />
        {/* FOOTER */}
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
