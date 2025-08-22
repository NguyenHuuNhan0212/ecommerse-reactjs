import { useContext } from 'react';
import Button from '../../../Components/Button/Button';
import CountdownTimer from '../../../Components/CountdownTimer/CountdownTimer';
import styles from '../style.module.scss';
function Banner() {
  const { containerBanner, contentBox, title, boxBtn, countDownBox } = styles;
  const targetDate = '2025-12-31T00:00:00';

  return (
    <>
      <div className={containerBanner}>
        <div className={contentBox}>
          <div className={countDownBox}>
            <CountdownTimer targetDate={targetDate} />
          </div>
          <div className={title}>The Classics Make A Comeback</div>
          <div className={boxBtn}>
            <Button content={'Buy now'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
