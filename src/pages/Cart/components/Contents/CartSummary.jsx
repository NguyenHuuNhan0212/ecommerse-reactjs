import { useContext } from 'react';
import Button from '../../../../Components/Button/Button';
import styles from '../../style.module.scss';
import cls from 'classnames';
import { SideBarContext } from '../../../../contexts/SideBarProvider';
import LoadingCart from '../Loading';
import PaymentMethod from '../../../../Components/PaymentMethod/PaymentMethod';
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
  const { listProductCart, isLoading } = useContext(SideBarContext);

  const total = listProductCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);
  return (
    <>
      <div className={containerRight}>
        <div className={containerSummary}>
          <div className={title}>CART TOTALS</div>
          <div className={cls(boxTotal, subTotal)}>
            <div>Subtotal</div>
            <div className={price}>${total.toFixed(2)}</div>
          </div>
          <div className={cls(boxTotal, totals)}>
            <div>TOTAL</div>
            <div>${total.toFixed(2)}</div>
          </div>

          <Button content={'PROCEED TO CHECKOUT'} />
          <div className={space}></div>
          <Button content={'CONTINUE SHOPPING'} isPrimary={false} />
          {isLoading && <LoadingCart />}
        </div>
        <PaymentMethod />
      </div>
    </>
  );
}

export default CartSummary;
