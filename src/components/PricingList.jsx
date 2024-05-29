import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  const handleContactUs = () => {
    alert("Contact us");
  };
  return (
    <div className="flex items-center justify-center  gap-[1rem] max-lg:flex-wrap">
      {/* <div className="flex gap-[1rem] max-lg:flex-wrap"> */}
      {/* {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:info@servicein.cloud"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))} */}
      <form
        className="flex justify-center w-full max-w-lg"
        action=""
        method="post"
      >
        <div
          className="w-[32rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4
           [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">Ipaid</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/70">
            Formulario de contacto
          </p>
          <div class="flex items-center mb-2 border-b border-n-1/40 py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Nombre"
              aria-label="Full name"
            ></input>
          </div>
          <div class="flex items-center mb-2 border-b border-n-1/40 py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Correo"
              aria-label="Full name"
            ></input>
          </div>
          <div class="flex items-center mb-2 border-b border-n-1/40 py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Numero de telefono"
              aria-label="Full name"
              required={value => value.length > 0}
            ></input>
          </div>
          <div class="flex items-center mb-2 border-b border-n-1/40 py-2">
            <textarea
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Mensaje"
              aria-label="Full name"
              required={value => value.length > 0}
            ></textarea>
          </div>
          
          <Button className="w-full mb-6" onClick={handleContactUs}>
            contactenos
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PricingList;
