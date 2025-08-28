import { useContext } from 'react';
import { StepperContext } from '../../../contexts/StepperProvider';
import Contents from './Contents/Contents';
import CheckOut from './CheckOut/CheckOut';

function ContentStep() {
  const { currentStep } = useContext(StepperContext);
  const handleRenderContent = () => {
    switch (currentStep) {
      case 1:
        return <Contents />;
      case 2:
        return <CheckOut />;
      case 3:
        return <h1>Step Three</h1>;
    }
  };
  return <>{handleRenderContent()}</>;
}

export default ContentStep;
