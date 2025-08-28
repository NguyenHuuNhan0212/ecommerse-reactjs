import MyHeader from '@components/Header/Header';
import MyFooter from '@components/Footer/Footer';
import Steps from './components/Steps/Steps';
import styles from './style.module.scss';
import MainLayout from '../../Components/Layout/Layout';
import { StepperProvider } from '../../contexts/StepperProvider';
import ContentStep from './components/ContentStep';
function Cart() {
  const { container } = styles;

  return (
    <StepperProvider>
      <MyHeader />
      <div className={container}>
        <Steps />
        <MainLayout>
          <ContentStep />
        </MainLayout>
      </div>

      <MyFooter />
    </StepperProvider>
  );
}

export default Cart;
