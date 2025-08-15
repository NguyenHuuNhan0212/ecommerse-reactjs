import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './style.module.scss';
import AdvanceHeadling from '../AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProducts from '../HeadingListProducts/HeadingListProducts';
function HomePage() {
  const { container } = styles;
  return (
    <div className={container}>
      <MyHeader />
      <Banner />
      <Info />
      <AdvanceHeadling />
      <HeadingListProducts />
    </div>
  );
}

export default HomePage;
