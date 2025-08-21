import HeaderSideBar from '../components/HeaderSidebar/HeaderSideBar';
import { IoCartOutline } from 'react-icons/io5';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import styles from './style.module.scss';
import Button from '../../Button/Button';
function Cart() {
  const { container, total, boxBtn } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={
            <IoCartOutline
              style={{
                fontSize: '30px'
              }}
            />
          }
          title={'CART'}
        />
        <ItemProduct />
      </div>
      <div>
        <div className={total}>
          <p>SUBTOTAL: </p>
          <p>$199.99</p>
        </div>
        <div className={boxBtn}>
          <Button content={'VIEW CART'} />
          <Button content={'CHECKOUT'} isPrimary={false} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
