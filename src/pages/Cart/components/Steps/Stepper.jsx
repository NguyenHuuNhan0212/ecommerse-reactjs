import { useContext } from 'react';
import styles from '../../style.module.scss';
import cls from 'classnames';
import { StepperContext } from '../../../../contexts/StepperProvider';
function Stepper({ number, content, isDisable }) {
  const { stepper, numberStep, textStep, isDisableNumber, isDisableText } =
    styles;
  const { setCurrentStep } = useContext(StepperContext);
  return (
    <div className={stepper} onClick={() => setCurrentStep(number)}>
      <div
        className={cls(numberStep, {
          [isDisableNumber]: isDisable
        })}
      >
        {number}
      </div>
      <div
        className={cls(textStep, {
          [isDisableText]: isDisable
        })}
      >
        {content}
      </div>
    </div>
  );
}

export default Stepper;
