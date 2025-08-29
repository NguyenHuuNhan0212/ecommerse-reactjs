import { useContext } from 'react';
import styles from './style.module.scss';
import { SideBarContext } from '../../../../contexts/SideBarProvider';
import Button from '../../../../Components/Button/Button';
import PaymentMethod from '../../../../Components/PaymentMethod/PaymentMethod';
import { handleTotalPrice } from '../../../../utils/helper';
import LoadingTextCommon from '../../../../Components/LoadingTextCommon/LoadingTextCommon';
function RightBody({ handleExternalSubmit, isLoading }) {
  const { rightBody, title, payment, items, total, item, subTotal } = styles;
  const { listProductCart } = useContext(SideBarContext);
  return (
    <div className={rightBody}>
      <p className={title}>YOUR ORDER</p>
      <div className={items}>
        {listProductCart.map((product, index) => (
          <div className={item}>
            <img src={product.images[0]} alt='' />
            <div>
              <p>{product.name}</p>
              <p>Price: {product.price}</p>
              <p>Size: {product.size}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={subTotal}>
        <p>Subtotal</p>
        <p>${handleTotalPrice(listProductCart).toFixed(2)}</p>
      </div>

      <div className={total}>
        <p>Total</p>
        <p>${handleTotalPrice(listProductCart).toFixed(2)}</p>
      </div>
      <div className={payment}>
        <input type='radio' id='online' name='paymentMethod' value='qr' /> {' '}
        <label for='online'>QR CODE</label>
      </div>

      <div>
        <input type='radio' id='offline' name='paymentMethod' value='offline' />
        {'  '} <label for='offline'>Cash on delivery</label>
      </div>

      <Button
        content={isLoading ? <LoadingTextCommon /> : 'PLACE ORDER'}
        style={{
          marginTop: '30px'
        }}
        onClick={handleExternalSubmit}
      />
      <PaymentMethod />
    </div>
  );
}

export default RightBody;
