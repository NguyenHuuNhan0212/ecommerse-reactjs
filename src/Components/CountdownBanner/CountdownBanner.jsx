import Button from '../Button/Button';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import styles from './style.module.scss';
function CountdownBanner() {
  const { container, containerTimer, boxBtn, title } = styles;
  const targetDate = '2025-12-31T00:00:00';
  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <p className={title}>The Classics Make A Comeback</p>
      <div className={boxBtn}>
        <Button content={'Buy now'} />
      </div>
    </div>
  );
}

export default CountdownBanner;
