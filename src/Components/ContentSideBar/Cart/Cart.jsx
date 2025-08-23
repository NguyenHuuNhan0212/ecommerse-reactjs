import HeaderSideBar from '../components/HeaderSidebar/HeaderSideBar';
import { IoCartOutline } from 'react-icons/io5';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import styles from './style.module.scss';
import Button from '../../Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import LoadingTextCommon from '../../LoadingTextCommon/LoadingTextCommon';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const {
    container,
    total,
    boxBtn,
    containerListItem,
    isEmpty,
    boxEmpty,
    boxBtnEmpty
  } = styles;
  const { listProductCart, isLoading, setIsOpen } = useContext(SideBarContext);
  const navigate = useNavigate();
  const handleNavigateToShop = () => {
    navigate('/shop');
    setIsOpen(false);
  };
  const subTotal = listProductCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);
  return (
    <div
      className={classNames(container, {
        [isEmpty]: !listProductCart.length
      })}
    >
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
      {listProductCart.length ? (
        <div className={containerListItem}>
          <div>
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
              <p>${subTotal}</p>
            </div>
            <div className={boxBtn}>
              <Button content={'VIEW CART'} />
              <Button content={'CHECKOUT'} isPrimary={false} />
            </div>
          </div>
        </div>
      ) : (
        <div className={boxEmpty}>
          <div>No product in the cart.</div>
          <div className={boxBtnEmpty}>
            <Button
              content={'RETURN TO SHOP'}
              onClick={() => handleNavigateToShop()}
              isPrimary={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
