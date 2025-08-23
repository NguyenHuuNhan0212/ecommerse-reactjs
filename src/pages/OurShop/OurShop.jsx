import { useNavigate } from 'react-router-dom';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './style.module.scss';
import Banner from './components/Banner';
import { OurShopProvider } from '@contexts/OurShopProvider';
import Filter from './components/Filter';
import ListProduct from './components/ListProduct';
import MyFooter from '@components/Footer/Footer';
function OurShop() {
  const { container, functionBox, specialText, btnBack } = styles;
  const navigate = useNavigate();
  const handleBackPreviousPage = () => {
    navigate(-1);
  };
  return (
    <OurShopProvider>
      <MyHeader />
      <MainLayout>
        <div className={container}>
          <div className={functionBox}>
            <div>
              Home &gt; <span className={specialText}>Shop</span>
            </div>
            <div className={btnBack} onClick={() => handleBackPreviousPage()}>
              &lt; Return to previous page
            </div>
          </div>
        </div>
        <Banner />
        <div>
          <Filter />
          <ListProduct />
        </div>
      </MainLayout>
      <MyFooter />
    </OurShopProvider>
  );
}

export default OurShop;
