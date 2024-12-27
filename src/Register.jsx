import React, { useState } from 'react';
import ButtonGradient from "./assets/svg/ButtonGradient";
import HeaderR from "./components/HeaderR";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Swal from "sweetalert2";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { json, useParams } from "react-router-dom";

const Register = () => {
  const { encodedData } = useParams();
  let firma=false;
  let decodedData = {ncomercio:'',idc:''};

  if (encodedData) {
    firma=true;
    try {
      // Decodificar Base64
      let decodedString = atob(encodedData);
       decodedData=JSON.parse(decodedString);
    } catch (error) {
      console.error("Error al decodificar datos:", error);
    }
  }
  
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({}); 
  const [formData, setformData] = useState({});  
  const [formDatasig, setformDatasig] = useState({});  
  const [isBusy, setIsBusy] = useState(false);
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setformData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setformData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleInputChangesig = (e) => {
    const { name, type, checked, value } = e.target;
    setformDatasig({
      ...formDatasig,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const [showPassword, setShowPassword] = useState(false);
  const [cshowPassword, csetShowPassword] = useState(false);
  const steps = [
    {
      title: "Datos básicos",
      description: "Información del que registra.",
      form: (
        // <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className={`step-0 grid grid-cols-1 lg:grid-cols-2 gap-4`}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre completo
            </label>
            <input
              type="text"
              name="nombrediligencia"
              value={formData.nombrediligencia|| ""}
              onChange={handleInputChange}
              placeholder="John Perez"
              // className="w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.nombrediligencia ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
            />
              {errors.nombrediligencia && <span className="text-base text-red-500">{errors.nombrediligencia}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Celular
            </label>
            <input
              type="number"
              name="celular"
              value={formData.celular|| ""}
              onChange={handleInputChange}
              onInput={(e) => {
                if (e.target.value.length > 10) {
                  e.target.value = e.target.value.slice(0, 10); // Limita a 10 dígitos
                }
              }}
              placeholder="3102387640"
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.celular ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
              onKeyDown={(e) => e.key === 'e' && e.preventDefault()} 
              inputMode="numeric" 
            />
               {errors.celular && <span className="text-base text-red-500">{errors.celular}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              name="correo"
              value={formData.correo|| ""}
              onChange={handleInputChange}
              placeholder="example@mail.com"
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.correo ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
            />
               {errors.correo && <span className="text-base text-red-500">{errors.correo}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirmar correo electrónico
            </label>
            <input
              type="email"
               name="ccorreo"
               value={formData.ccorreo|| ""}
              onChange={handleInputChange}
              placeholder="example@mail.com"
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.ccorreo ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
          />
                 {errors.ccorreo && <span className="text-base text-red-500">{errors.ccorreo}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password|| ""}
              onChange={handleInputChange}
              placeholder="********"
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.password ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
           />
                 <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
        >
          {showPassword ? (
            <EyeSlashIcon className="w-5 h-5" />
          ) : (
            <EyeIcon className="w-5 h-5" />
          )}
        </button>
           </div>
                {errors.password && <span className="text-base text-red-500">{errors.password}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirmar contraseña
            </label>
            <div className="relative">
            <input
              type={cshowPassword ? "text" : "password"}
               name="cpassword"
               value={formData.cpassword|| ""}
               onChange={handleInputChange}
              placeholder="********"
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.cpassword ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
            />
                <button
          type="button"
          onClick={() => csetShowPassword(!cshowPassword)}
          className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
        >
          {cshowPassword ? (
            <EyeSlashIcon className="w-5 h-5" />
          ) : (
            <EyeIcon className="w-5 h-5" />
          )}
        </button>
            </div>
            {errors.cpassword && <span className="text-base text-red-500">{errors.cpassword}</span>}
          </div>
        </div>
      ),
    },
    {
      title: "Datos del comercio",
      description: "",
      form: (
        <div className={`step-1 grid grid-cols-1 lg:grid-cols-2 gap-4`}>
             <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre comercial de la empresa
            </label>
            <input
              type="text"
              name="ncomercial"
              value={formData.ncomercial|| ""}
              onChange={handleInputChange}
              placeholder="Negocio"
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.ncomercial ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
            />
               {errors.ncomercial && <span className="text-base text-red-500">{errors.ncomercial}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              NIT
            </label>
            <input
              type="text"
              name="Nit"
                maxLength="12"
              value={formData.Nit|| ""}
              onChange={handleInputChange}
              placeholder="3102387640"
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.Nit ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
           />
            {errors.Nit && <span className="text-base text-red-500">{errors.Nit}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tipo de documento del representante legal
            </label>
            <select name="tdocum"  value={formData.tdocum || ""}
              onChange={handleInputChange} 
            className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
              errors.tdocum ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
            }`}
            >
              <option value="">Tipo de documento</option>
              <option value="CC">Cédula de ciudadania</option>
              <option value="CE">Cédula de extranjeria</option>
            </select>
            {errors.tdocum && <span className="text-base text-red-500">{errors.tdocum}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Número de documento del representante legal
            </label>
            <input
              type="number"
              name="drepresentante"
              value={formData.drepresentante|| ""}
              onChange={handleInputChange}
              placeholder="123456789"
              onInput={(e) => {
                if (e.target.value.length > 10) {
                  e.target.value = e.target.value.slice(0, 10); // Limita a 10 dígitos
                }
              }}
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.drepresentante ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
              onKeyDown={(e) => e.key === 'e' && e.preventDefault()} 
              inputMode="numeric" 
            />
               {errors.drepresentante && <span className="text-base text-red-500">{errors.drepresentante}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre completo representante legal
            </label>
            <input
              type="text"
              name="nrepresentante"
              value={formData.nrepresentante|| ""}
              onChange={handleInputChange}
              placeholder="Juan"
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.nrepresentante ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
          />
          {errors.nrepresentante && <span className="text-base text-red-500">{errors.nrepresentante}</span>}
          </div>
        </div>
      ),
    },
    {
      title: "Información bancaria",
      description: "Informacion del banco donde se consigna el recaudo del comercio.",
      form: (
        <div className={`step-2 grid grid-cols-1 lg:grid-cols-2 gap-4`}>
      <div>
            <label className="block text-sm font-medium text-gray-700">
              Tipo de cuenta bancaria
            </label>
            <select name="tcuenta"  value={formData.tcuenta || ""}
              onChange={handleInputChange}
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.tcuenta ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}>
              <option value="">Tipo de cuenta</option>
              <option value="Ahorros">Ahorros</option>
              <option value="Corriente">Corriente</option>
            </select>
            {errors.tcuenta && <span className="text-base text-red-500">{errors.tcuenta}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Número de cuenta bancaria
            </label>
            <input
              type="number"
              name="ncuenta"
              value={formData.ncuenta|| ""}
              onChange={handleInputChange}
              placeholder="123456789"
              onInput={(e) => {
                if (e.target.value.length > 15) {
                  e.target.value = e.target.value.slice(0, 15); // Limita a 15 dígitos
                }
              }}
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.ncuenta ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
              onKeyDown={(e) => e.key === 'e' && e.preventDefault()} 
              inputMode="numeric" 
            />
              {errors.ncuenta && <span className="text-base text-red-500">{errors.ncuenta}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
             Entidad bancaria
            </label>
            <select name="banco"  value={formData.banco || ""}
              onChange={handleInputChange}
            className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
              errors.banco ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
            }`}
           >
              <option value="">Elige tu banco</option>
              <option value="Bancolombia">Bancolombia</option>
              <option value="Av Villas">Av Villas</option>
              <option value="Davivienda">Davivienda</option>
              <option value="Banco de Bogota">Banco de Bogota</option>
              <option value="BBVA">BBVA</option>
              <option value="Banco de Occidente">Banco de Occidente</option>
              <option value="Citibank">Citibank</option>
              <option value="Banco Caja Social">Banco Caja Social</option>
              <option value="Scotiabank Colpatria">Scotiabank Colpatria</option>
            </select>
            {errors.banco && <span className="text-base text-red-500">{errors.banco}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre titular de la cuenta
            </label>
            <input
              type="text"
              name="ntitularcuenta"
              value={formData.ntitularcuenta|| ""}
              onChange={handleInputChange}
              placeholder="Juan"
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.ntitularcuenta ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
          />
          {errors.ntitularcuenta && <span className="text-base text-red-500">{errors.ntitularcuenta}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Número de documento del titular de la cuenta
            </label>
            <input
              type="number"
              name="dtitularcuenta"
              value={formData.dtitularcuenta|| ""}
              onChange={handleInputChange}
              placeholder="123456789"
              onInput={(e) => {
                if (e.target.value.length > 10) {
                  e.target.value = e.target.value.slice(0, 10); // Limita a 10 dígitos
                }
              }}
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.dtitularcuenta ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
              onKeyDown={(e) => e.key === 'e' && e.preventDefault()} 
              inputMode="numeric" 
            />
               {errors.dtitularcuenta && <span className="text-base text-red-500">{errors.dtitularcuenta}</span>}
          </div>
          <div>        
    <div className="mt-4 flex items-center"  style={{ colorScheme: 'light' }}>
      <input
        type="checkbox"
        id="aceptaTerminos"
        name="aceptaTerminos"
        checked={formData.aceptaTerminos || false}
        onChange={handleInputChange}
          className=" h-4 w-4
    accent-white
    border
    border-gray-300
    rounded
    cursor-pointer"
          />
      <label htmlFor="aceptaTerminos" className="ml-2 block text-sm text-gray-700 cursor-pointer">
      Acepto politicas de tratamiento de datos de acuerdo a la ley 1581 de 2012.</label>
    </div>
    {errors.aceptaTerminos && <span className="text-base text-red-500">{errors.aceptaTerminos}</span>}
    </div>
        </div>
      ),
    },
  ];
  const validate=()=>{
    const currentForm = document.querySelectorAll(
      `.step-${currentStep} input, .step-${currentStep} select`
    );
    let isValid = true;
    let newErrors = {};

    currentForm.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
        newErrors[field.name] = "Este campo es obligatorio.";
      }
    });
    if (currentStep==0){
      const inputValuecorreo = [...currentForm].find(el => el.name === 'correo')?.value;
      const inputValueccorreo = [...currentForm].find(el => el.name === 'ccorreo')?.value;
      const inputValuecelular = [...currentForm].find(el => el.name === 'celular')?.value;
      const inputValuepassword=[...currentForm].find(el => el.name === 'password')?.value;
      const inputValuecpassword=[...currentForm].find(el => el.name === 'cpassword')?.value;
      var reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      if (!reg.test(inputValuecorreo)) {
        isValid = false;
        newErrors['correo'] = "Ingrese un correo valido.";
      }
      if (inputValuecorreo!=inputValueccorreo) {
        isValid = false;
        newErrors['ccorreo'] = "Correo electronico no coincide.";
      }
      // if (!reg.test(inputValueccorreo)) {
      //   isValid = false;
      //   newErrors['ccorreo'] = "Ingrese un correo valido.";
      // }
      if(inputValuecelular.length<10 && inputValuecelular.length>0){
        isValid = false;
        newErrors['celular'] = "Numero de celular no valido.";
      }
      if (inputValuepassword!=inputValuecpassword) {
        isValid = false;
        newErrors['cpassword'] = "Contraseña no coincide.";
      }
      if(inputValuepassword.length<8 && inputValuepassword.length>0){
        isValid = false;
        newErrors['password'] = "La contraseña debe tener minimo 8 caracteres.";
      }
    }
   else if (currentStep==2){
    const inputterminos = [...currentForm].find(el => el.name === 'aceptaTerminos')?.checked;
    if(!inputterminos){
      isValid = false;
      newErrors['aceptaTerminos'] = "Debes aceptar las politicas de tratamiento de datos.";
    }
    console.log(inputterminos);
   }
    setErrors(newErrors);
    return isValid;
  }
  const nextStep = () => {

    if (validate()){
    if(currentStep < steps.length - 1) {
    setCurrentStep(currentStep + 1);
    }else{
      savecomerceanduser(formData);
    }
  }
  };
const signature=()=>{
  let newErrors = {};
if (!formDatasig.codigosig){
  newErrors['codigosig'] = "El codigo de la firma es requerido.";
  setErrors(newErrors);
}else{
  setIsBusy(true);
  let obj={idc:decodedData.idc,code:formDatasig.codigosig};
  fetch(`https://ipaidapi-tluf8.ondigitalocean.app/IpaidLanding/signatureipaid`, {
    // fetch(`http://localhost:8080/IpaidLanding/signatureipaid`, {
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
      setformDatasig({});
      Swal.fire({
        icon: data.type,
        title: "¡Firma!",
        text: data.mensaje,
      }).then((result) => {
        if (result.isConfirmed || result.isDismissed) {
          if (data.type !== "error") {
            const isDevelopment = window.location.hostname === "localhost";
            if (isDevelopment) {
              const url = `${window.location.origin}/register`;
              window.location.href = url;
            } else {
              window.location.href = "https://ipaid.com.co/register";
            }
          }
        }
      });
      setIsBusy(false);
    })
    .catch((error) => {
      // setError(error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error firmando el documento.",
      });
      setIsBusy(false);
      console.log("error", error);
    });
}
}
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const savecomerceanduser = (obj) => {
    setIsBusy(true);
    fetch(`https://ipaidapi-tluf8.ondigitalocean.app/IpaidLanding/Comerceanduser`, {
      // fetch(`http://localhost:8080/IpaidLanding/Comerceanduser`, {
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
        setformData({});
        setCurrentStep(0);
        Swal.fire({
          icon: "success",
          title: "¡Bienvenido a iPaid!",
          text: "Por favor verifica tu correo y continua el proceso de registro, un asesor se comunicara pronto contigo.",
        });
        setIsBusy(false);
      })
      .catch((error) => {
        // setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error creando el comercio.",
        });
        setIsBusy(false);
        console.log("error", error);
      });
  };
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <HeaderR />
    <Section  className="pt-[8rem] -mt-[5.25rem]" 
     crosses
     crossesOffset="lg:translate-y-[5.25rem]"
     customPaddings id="Register">
     {!firma ? (<div className="container relative z-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <ol className="space-y-8">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className={`relative flex-1 ${
                    index < steps.length - 1
                      ? "after:content-[''] after:w-0.5 after:h-full after:bg-gray-300 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5"
                      : ""
                  }`}
                >
                  <a href="#" className="flex items-start font-medium w-full">
                    <span
                      className={`w-8 h-8 aspect-square flex justify-center items-center rounded-full border-2 mr-3 text-sm lg:w-10 lg:h-10 ${
                        index === currentStep
                          ? "bg-[#279EFF] text-white border-[#279EFF]"
                          : index < currentStep
                          ? "bg-[#081F5C] text-white border-[#081F5C]"
                          : "bg-gray-200 text-gray-500 border-gray-300"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div className="block">
                      <h4
                        className={`text-base mb-2 ${
                          index === currentStep
                            ? "text-[#279EFF]"
                            : "text-gray-900"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 max-w-xs mb-4">
                        {step.description}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Form */}
          <div className="col-span-2">
            <div className="border border-gray-300 p-6 rounded-md">
              {steps[currentStep].form}
            </div>
            <div className="flex items-center gap-4 mt-6 pb-3">
              {currentStep > 0 && (
                <button
                  onClick={prevStep}
                  className="py-2.5 px-6 text-sm bg-indigo-50 text-[#279EFF] rounded-lg font-semibold shadow-xs transition-all duration-500"
                >
                  Volver
                </button>
              )}
              <button
                onClick={nextStep}
                className={`py-2.5 px-6 text-sm ${
                  currentStep === steps.length - 1
                    ? "bg-[#081F5C] text-white"
                    : "bg-[#279EFF] text-white"
                } rounded-lg font-semibold shadow-xs transition-all duration-500`}
              >
                {currentStep === steps.length - 1 ? "Guardar y Enviar" : "Continuar"}
              </button>
            </div>
          </div>
        </div>):(
        // <div className="container relative z-2 flex justify-center items-center min-h-screen">
          <div className="container relative z-2 flex justify-center items-center">
         <div className="col-span-2">
         <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">{decodedData.ncomercio}</h1>
        <div className="border border-gray-300 p-6 rounded-md mb-1">
        <div>
            <label className="block text-sm font-medium text-gray-700">
              Codigo para firmar
            </label>
            <input
              type="text"
              name="codigosig"
              value={formDatasig.codigosig|| ""}
              onChange={handleInputChangesig}
              placeholder="23422"
              maxLength="6"
              // className="w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.codigosig ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
            />
              {errors.codigosig && <span className="text-base text-red-500">{errors.codigosig}</span>}
       
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Al ingresar el código confirmo y acepto las condiciones especificadas<br />
            en los documentos suscritos al firmarlos de forma virtual.            
            </p>
          </div>

        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-2">
  {[
    {
      title: "Tratamiento Datos",
      description: "",
      link: "https://ipaidspace.nyc3.cdn.digitaloceanspaces.com/templates/Tratamiento_Datos.pdf",
    },
    {
      title: "Contrato Macro iPaid",
      description: "",
      link: "https://ipaidspace.nyc3.cdn.digitaloceanspaces.com/templates/Contrato_Macro_iPaid.pdf",
    },
    {
      title: "Autorización Desembolso",
      description: "",
      link: "https://ipaidspace.nyc3.cdn.digitaloceanspaces.com/templates/Autorizaci%C3%B3n_Desembolso.pdf",
    },
  ].map((doc, index) => (
    <div
      key={index}
      className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition cursor-pointer"
      onClick={() => window.open(doc.link, "_blank")}
    >
      <div className="flex items-center space-x-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
          alt="PDF"
          className="w-7 h-7"
        />
        <div>
          <h5 className="text-base font-bold text-gray-800">{doc.title}</h5>
          <p className="text-sm text-gray-600">{doc.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>
<div className="flex justify-center items-center">
        <button
        onClick={signature}
        className="mb-1 py-2.5 px-6 text-sm bg-[#081F5C] text-white rounded-lg font-semibold shadow-xs transition-all duration-500"
        >
        Firmar
        </button>
        </div>
        </div>
        </div>)}
    </Section>
    {isBusy && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
          {/* Spinner */}
          <svg
            className="animate-spin h-12 w-12 text-white mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 0 1 8-8V0C5.373 
              0 0 5.373 0 12h4z"
            ></path>
          </svg>
          
          {/* Mensaje debajo del spinner */}
          <span className="text-white text-lg">
            Estamos procesando su solicitud...
          </span>
        </div>
      )}
    <Footer />
    </div>
    <ButtonGradient />
    </>
  );
};

export default Register;
