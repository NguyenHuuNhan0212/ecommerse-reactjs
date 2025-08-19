import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import AdvanceHeadling from '../AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProducts from '../HeadingListProducts/HeadingListProducts';
import { useEffect, useState } from 'react';
import { getProduct } from '@/apis/productsService';
import PopularProduct from '../PopularProduct/PopularProduct';
import SaleHomePage from '../SaleHomePage/SaleHomePage';
import MyFooter from '../Footer/Footer';
function HomePage() {
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    getProduct().then((res) => {
      setListProducts(res.contents);
    });
  }, []);
  return (
    <>
      <MyHeader />
      <Banner />
      <Info />
      <AdvanceHeadling />
      <HeadingListProducts data={listProducts.slice(0, 2)} />
      <PopularProduct data={listProducts.slice(2, listProducts.length)} />
      <SaleHomePage />
      <MyFooter />
    </>
  );
}

export default HomePage;
