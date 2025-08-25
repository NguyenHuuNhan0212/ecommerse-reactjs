import styles from '../../style.module.scss';
import cls from 'classnames';
function Stepper({ number, content, isDisable }) {
  const { stepper, numberStep, textStep, isDisableNumber, isDisableText } =
    styles;
  return (
    <div className={stepper}>
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
