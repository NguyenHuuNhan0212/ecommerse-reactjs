import { createContext, useState } from 'react';
export const StepperContext = createContext();
export const StepperProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const values = {
    currentStep,
    setCurrentStep
  };
  return (
    <StepperContext.Provider value={values}>{children}</StepperContext.Provider>
  );
};
