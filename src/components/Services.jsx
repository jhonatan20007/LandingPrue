import Section from "./Section";
import Heading from "./Heading";
import {Pagos,Enlace,Widget,MAdmin}  from "../pages/";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";
const Services = ({op}) => {
  console.log(op);
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title={`¿Cómo funciona ${op}?`}
          text={`Con ${op} puedes facilitar el proceso de pago y mejorar la experencia de tus clientes.`}
        />
        {op === "Enlace" && <Enlace/>}
        {op === "Pagos" && <Pagos/>}
        {op === "Conecta" && <Widget/>} 
        {op === "Administra" && <MAdmin/>}
      </div>
      
      <Gradient />
    </Section>
  );
};

export default Services;
