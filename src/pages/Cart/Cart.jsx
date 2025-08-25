import MyHeader from '@components/Header/Header';
import MyFooter from '@components/Footer/Footer';
import Steps from './components/Steps/Steps';
import Contents from './components/Contents/Contents';
import styles from './style.module.scss';
import MainLayout from '../../Components/Layout/Layout';
function Cart() {
  const { container } = styles;
  return (
    <div>
      <MyHeader />
      <div className={container}>
        <Steps />
        <MainLayout>
          <Contents />
        </MainLayout>
      </div>

      <MyFooter />
    </div>
  );
}

export default Cart;
