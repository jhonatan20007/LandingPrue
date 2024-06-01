import React, { useState } from "react";
import Button from "./Button";
import Swal from "sweetalert2";

const PricingList = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleContactUs = (event) => {
    event.preventDefault(); // Previene el envío automático del formulario
    // Validación básica
    if (!nombre || !email || !numero || !mensaje) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, completa todos los campos.",
      });
      return;
    }
    // const regex = /^\d{10}$/;
    // // Validación del número de teléfono
    // if (!regex.test(numero)) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Error",
    //     text: "Número de teléfono inválido. Debe tener 10 dígitos.",
    //   });
    //   return;
    // }
    const formData = { nombre, email, numero, mensaje };
    // Aquí podrías enviar los datos a un servidor o manejarlos según necesites
    ContactUs(formData);
  };

  const ContactUs = (obj) => {
    fetch(`https://ipaidapi-tluf8.ondigitalocean.app/IpaidLanding/Contacto`, {
      // fetch(`http://localhost:8080/IpaidLanding/Contacto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "¡Gracias por contactarnos!",
          text: "Nos pondremos en contacto contigo lo antes posible.",
        });
        handleReset();
      })
      .catch((error) => {
        // setError(error.message);
        console.log("error", error);
      });
  };
  const handleReset = () => {
    setNombre("");
    setEmail("");
    setNumero("");
    setMensaje("");
  };
  return (
    <div className="flex items-center justify-center  gap-[1rem] max-lg:flex-wrap">
      <div
        className="w-[19rem] max-lg:w-full h-full px-6
     bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
      >
        <form
          className="flex justify-center w-full max-w-lg"
          onSubmit={handleContactUs}
          autoComplete="off"
        >
          <div
            className="w-[32rem] max-lg:w-full h-full px-6
         rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4"
          >
            <h4 className="h4 mb-2">Contactenos</h4>
            <input
              className="w-full mb-3 p-2 bg-transparent border-b border-n-6"
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <input
              className="w-full mb-3 p-2 bg-transparent border-b"
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
            <input
              className="w-full mb-3 p-2 bg-transparent border-b border-n-6"
              type="text"
              placeholder="Número de teléfono"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
            <textarea
              className="w-full mb-3 p-2 bg-transparent border-b border-n-6"
              placeholder="Mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
            <Button className="w-full">Contactenos</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PricingList;
