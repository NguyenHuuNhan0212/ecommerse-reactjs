import CountdownBanner from '../CountdownBanner/CountdownBanner';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import MainLayout from '../Layout/Layout';
import styles from './style.module.scss';
function HeadingListProducts() {
  const targetDate = '2025-12-31T00:00:00';
  const { container, containerItem } = styles;
  return (
    <MainLayout>
      {/* <CountdownTimer targetDate={targetDate} /> */}
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProducts;
