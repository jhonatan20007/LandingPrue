import React, { useState } from 'react';
import ButtonGradient from "./assets/svg/ButtonGradient";
import HeaderR from "./components/HeaderR";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({}); 
  const [formData, setformData] = useState({});  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
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
              name="fullName"
              value={formData.fullName|| ""}
              onChange={handleInputChange}
              placeholder="John Perez"
              // className="w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              className={`w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 ${
                errors.fullName ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
              }`}
            />
              {errors.fullName && <span className="text-base text-red-500">{errors.fullName}</span>}
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
              NIT con digito de verificacion
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
              <option value="CA">Ahorros</option>
              <option value="CC">Corriente</option>
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
              <option value="BA">Bancolombia</option>
              <option value="AV">Av villas</option>
              <option value="DA">Davivienda</option>
              <option value="BO">Banco de bogota</option>
              <option value="BB">BBVA</option>
              <option value="OC">Banco de occidente</option>
              <option value="CI">Citibank</option>
              <option value="CA">Banco caja social</option>
              <option value="Co">Scotiabank colpatria</option>
            </select>
            {errors.banco && <span className="text-base text-red-500">{errors.banco}</span>}
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
    setErrors(newErrors);
    return isValid;
  }
  const nextStep = () => {
    if (validate() && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <HeaderR />
    <Section  className="pt-[8rem] -mt-[5.25rem]" 
     crosses
     crossesOffset="lg:translate-y-[5.25rem]"
     customPaddings id="Register">
<div className="container relative z-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
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
        </div>
    </Section>
    <Footer />
    </div>
    <ButtonGradient />
    </>
  );
};

export default Register;
