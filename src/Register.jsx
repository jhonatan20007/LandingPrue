import React, { useState } from 'react';
import ButtonGradient from "./assets/svg/ButtonGradient";
import HeaderR from "./components/HeaderR";
import Section from "./components/Section";
import Footer from "./components/Footer";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // const steps = [
  //   {
  //     title: 'How to create a Pagedone account?',
  //     description:
  //       'To create an account with several steps to collect user information, verify identity, and set up account preferences.',
  //     details: [
  //       'Register yourself',
  //       'Validation',
  //       'Email Verification',
  //       'Account Activation',
  //       'Profile Setup',
  //       'Confirmation Message',
  //     ],
  //   },
  //   {
  //     title: 'Have any trust issues?',
  //     description: 'Of course we are here to guide you.',
  //   },
  //   {
  //     title: 'How can I reset my password?',
  //     description:
  //       'Go to your profile > Click Change Password > Enter previous password > Confirm Previous password and add your new password.',
  //   },
  // ];
  
  const steps = [
    {
      title: "Datos básicos",
      description: "Información del que registra.",
      form: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Datos del comercio",
      description: "",
      form: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Document Type
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="id">ID Card</option>
              <option value="passport">Passport</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Document Number
            </label>
            <input
              type="text"
              placeholder="123456789"
              className="w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Información bancaria",
      description: "Informacion del banco donde se consigna el recaudo del comercio.",
      form: (
        <p className="text-gray-600">
          Please review your details before submitting.
        </p>
      ),
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
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
            <div className="flex items-center gap-4 mt-6">
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
