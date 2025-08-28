import { useContext } from 'react';
import styles from '../../style.module.scss';
import Stepper from './Stepper';
import { StepperContext } from '../../../../contexts/StepperProvider';
function Steps() {
  const { containerSteps, steps, line, textNoti } = styles;
  const { currentStep } = useContext(StepperContext);
  const dataSteps = [
    { number: 1, content: 'shopping cart' },
    { number: 2, content: 'checkout' },
    { number: 3, content: 'order status' }
  ];
  return (
    <div className={containerSteps}>
      <div className={steps}>
        {dataSteps.map((item, index) => {
          return (
            <>
              <Stepper
                key={index}
                number={item.number}
                content={item.content}
                isDisable={index >= currentStep}
              />
              {index !== dataSteps.length - 1 && <div className={line}></div>}
            </>
          );
        })}
      </div>
      <div className={textNoti}>
        You are out of time! Checkout now to avoid losing your order!
      </div>
    </div>
  );
}

export default Steps;
