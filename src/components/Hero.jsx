import React from "react";
import Section from "./Section";
import { curve } from "../assets";

const Hero = () => {
  return (
    <Section
      className={"pt-[12rem] -mt-[5.25]"}
      crosses
      crossesOffset={"lg:traslate-y-[5rem]"}
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div
          className="relative z-1 max-w-[62rem]
        mx-auto text-center mb-[4rem] md:bm-20 lg:mb:[6rem]"
        >
          <h1 className="h1 mb-6">
            Explore las posibilidades de la <br />
            <span className="text-primary"> transformación digital </span>
            Ipaid
            <span className="inline-block relative">
              <img
                className="top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                src={curve}
                alt=""
              />
            </span>
          </h1>
          <p>
            Simplifica tus pagos en un mundo en movimiento. Usado en tiendas,
            bares, hoteles y gasolineras, iPaid hace que las transacciones sean
            rápidas y sin complicaciones. Únete a nosotros y transforma tu forma
            de pagar.
          </p>
        </div>
      </div>
    </Section>
  );
};
export default Hero;
