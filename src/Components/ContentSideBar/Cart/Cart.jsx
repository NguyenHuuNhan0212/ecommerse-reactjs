import HeaderSideBar from '../components/HeaderSidebar/HeaderSideBar';
import { IoCartOutline } from 'react-icons/io5';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import styles from './style.module.scss';
import Button from '../../Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import LoadingTextCommon from '../../LoadingTextCommon/LoadingTextCommon';
function Cart() {
  const { container, total, boxBtn, containerListProductCart, overLoading } =
    styles;
  const { listProductCart, isLoading } = useContext(SideBarContext);
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

        {isLoading ? (
          <LoadingTextCommon />
        ) : (
          listProductCart.map((item, index) => {
            return (
              <ItemProduct
                key={index}
                src={item.images[0]}
                nameProduct={item.name}
                priceProduct={item.price}
                skuProduct={item.sku}
                sizeProduct={item.size}
                quantity={item.quantity}
                productId={item.productId}
                userId={item.userId}
              />
            );
          })
        )}
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
