import CountdownTimer from '../CountdownTimer/CountdownTimer';
import MainLayout from '../Layout/Layout';

function HeadingListProducts() {
  const targetDate = '2025-12-31T00:00:00';
  return (
    <MainLayout>
      <CountdownTimer targetDate={targetDate} />
    </MainLayout>
  );
}

export default HeadingListProducts;
