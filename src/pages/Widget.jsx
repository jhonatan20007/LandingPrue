import Section from "../components/Section";
import Heading from "../components/Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons, ConectaServices } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../components/design/Services";

import Generating from "../components/Generating";

const Widget = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
       

        <div className="relative">
          <div className="relative z-1 flex items-start h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-10 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                style={{width:"100%", height:"55%",marginLeft:"10%"}}
                className="w-full h-full object-cover md:object-right"
                alt="Smartest AI"
                src={service3}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Widget</h4>
              <p className="body-2 mb-[3rem] text-n-1/80">
                Conecta tu cuenta de Pagos y muestra un widget de pago en tu sitio web. 
                Permite a tus clientes pagar directamente desde tu página, mejorando la experiencia de compra.
              </p>
              <ul className="body-2">
                {ConectaServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 mb-10 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
            <Gradient />


        </div>
      </div>
    </Section>
  );
};

export default Widget;
