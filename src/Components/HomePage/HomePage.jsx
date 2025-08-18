import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import AdvanceHeadling from '../AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProducts from '../HeadingListProducts/HeadingListProducts';
import { useEffect, useState } from 'react';
import { getProduct } from '@/apis/productsService';
import PopularProduct from '../PopularProduct/PopularProduct';
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
      <div
        style={{
          height: '100px'
        }}
      ></div>
    </>
  );
}

export default HomePage;
