import React, { useState } from 'react';
import ButtonGradient from "./assets/svg/ButtonGradient";
import HeaderR from "./components/HeaderR";
import Section from "./components/Section";
import Footer from "./components/Footer";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'How to create a Pagedone account?',
      description:
        'To create an account with several steps to collect user information, verify identity, and set up account preferences.',
      details: [
        'Register yourself',
        'Validation',
        'Email Verification',
        'Account Activation',
        'Profile Setup',
        'Confirmation Message',
      ],
    },
    {
      title: 'Have any trust issues?',
      description: 'Of course we are here to guide you.',
    },
    {
      title: 'How can I reset my password?',
      description:
        'Go to your profile > Click Change Password > Enter previous password > Confirm Previous password and add your new password.',
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
    <Section  className="pt-[6rem] -mt-[5.25rem]" 
     crosses
     crossesOffset="lg:translate-y-[5.25rem]"
     customPaddings id="Register">
    <div className="container relative z-2">
        <ol className="space-y-8">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`relative flex-1 ${
            index < steps.length - 1
              ? "after:content-[''] after:w-0.5 after:h-full after:bg-gray-300 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5"
              : ''
          }`}
        >
          <a href="#" className="flex items-start font-medium w-full">
            <span
              className={`w-8 h-8 aspect-square flex justify-center items-center rounded-full border-2 mr-3 text-sm lg:w-10 lg:h-10 ${
                index === currentStep
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : index < currentStep
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-gray-200 text-gray-500 border-gray-300'
              }`}
            >
              {index + 1}
            </span>
            <div className="block">
              <h4
                className={`text-base mb-2 ${
                  index === currentStep ? 'text-indigo-600' : 'text-gray-900'
                }`}
              >
                {step.title}
              </h4>
              <p className="text-sm text-gray-600 max-w-xs mb-4">
                {step.description}
              </p>
              {step.details && (
                <ul className="flex flex-wrap gap-x-5 gap-y-1 w-full max-w-xl mb-4">
                  {step.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="text-sm font-medium text-gray-900"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
              {index === currentStep && (
                <div className="flex items-center gap-4 my-6">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="py-2.5 px-6 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs uppercase transition-all duration-500 hover:bg-indigo-700"
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </button>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="py-2.5 px-6 text-sm bg-indigo-50 text-indigo-500 rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500"
                    >
                      Back
                    </button>
                  )}
                </div>
              )}
            </div>
          </a>
        </li>
      ))}
          </ol>
       </div>
    </Section>
    <Footer />
    </div>
    <ButtonGradient />
    </>
  );
};

export default Register;
