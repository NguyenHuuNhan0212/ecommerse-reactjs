import { useContext } from 'react';
import Button from '../../../../Components/Button/Button';
import styles from '../../style.module.scss';
import cls from 'classnames';
import { SideBarContext } from '../../../../contexts/SideBarProvider';
import LoadingCart from '../Loading';
import PaymentMethod from '../../../../Components/PaymentMethod/PaymentMethod';
import { StepperContext } from '../../../../contexts/StepperProvider';
import { handleTotalPrice } from '../../../../utils/helper';
import { useNavigate } from 'react-router-dom';
function CartSummary() {
  const {
    containerSummary,
    title,
    space,
    totals,
    boxTotal,
    subTotal,
    price,
    containerRight,
    textSecure
  } = styles;
  const { setCurrentStep } = useContext(StepperContext);
  const { listProductCart, isLoading } = useContext(SideBarContext);
  const navigate = useNavigate();

  const handleProcessToCheckOut = () => {
    setCurrentStep(2);
  };
  const handleGoToShop = () => {
    navigate('/shop');
  };

  return (
    <>
      <div className={containerRight}>
        <div className={containerSummary}>
          <div className={title}>CART TOTALS</div>
          <div className={cls(boxTotal, subTotal)}>
            <div>Subtotal</div>
            <div className={price}>
              ${handleTotalPrice(listProductCart).toFixed(2)}
            </div>
          </div>
          <div className={cls(boxTotal, totals)}>
            <div>TOTAL</div>
            <div>${handleTotalPrice(listProductCart).toFixed(2)}</div>
          </div>

          <Button
            content={'PROCEED TO CHECKOUT'}
            onClick={() => handleProcessToCheckOut()}
          />
          <div className={space}></div>
          <Button
            content={'CONTINUE SHOPPING'}
            isPrimary={false}
            onClick={() => handleGoToShop()}
          />
          {isLoading && <LoadingCart />}
        </div>
        <PaymentMethod />
      </div>
    </>
  );
}

export default CartSummary;
