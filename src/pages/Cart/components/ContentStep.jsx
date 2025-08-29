import { useContext } from 'react';
import { StepperContext } from '../../../contexts/StepperProvider';
import Contents from './Contents/Contents';
import CheckOut from './CheckOut/CheckOut';
import QrPayment from './QrPayment';

function ContentStep() {
  const { currentStep } = useContext(StepperContext);
  const handleRenderContent = () => {
    switch (currentStep) {
      case 1:
        return <Contents />;
      case 2:
        return <CheckOut />;
      case 3:
        return <QrPayment />;
    }
  };
  return <>{handleRenderContent()}</>;
}

export default ContentStep;
