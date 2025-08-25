import { useContext } from 'react';
import Button from '../../../../Components/Button/Button';
import styles from '../../style.module.scss';
import CartSummary from './CartSummary';
import CartTable from './CartTable';
import { SideBarContext } from '../../../../contexts/SideBarProvider';
import { IoCartOutline } from 'react-icons/io5';
import {
  addProductToCart,
  deleteCart,
  deleteItem
} from '../../../../apis/cartService';
import { useNavigate } from 'react-router-dom';

function Contents() {
  const {
    containerContent,
    titleEmpty,
    boxEmptyCart,
    boxBtnDelete,
    boxCoupon,
    boxFooter,
    boxBtnEmpty
  } = styles;
  const {
    listProductCart,
    handleGetListProductsCart,
    isLoading,
    setIsLoading,
    userId
  } = useContext(SideBarContext);
  const navigate = useNavigate();
  const handleReplaceQuantity = (data) => {
    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        handleGetListProductsCart(data.userId, 'cart');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDeleteItemCart = (data) => {
    setIsLoading(true);
    deleteItem(data)
      .then((res) => {
        handleGetListProductsCart(data.userId, 'cart');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDeleteCart = () => {
    setIsLoading(true);
    deleteCart({ userId })
      .then((res) => {
        handleGetListProductsCart(userId, 'cart');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleNavigateToShop = () => {
    navigate('/shop');
  };
  return (
    <>
      {listProductCart.length > 0 && userId ? (
        <div className={containerContent}>
          <div>
            <CartTable
              listProductCart={listProductCart}
              getData={handleReplaceQuantity}
              isLoading={isLoading}
              getDataDelete={handleDeleteItemCart}
            />
            <div className={boxFooter}>
              <div className={boxCoupon}>
                <input type='text' placeholder='Coupon code' />
                <div>
                  <Button content={'OK'} isPrimary={false} />
                </div>
              </div>
              <div className={boxBtnDelete}>
                <Button
                  content={<div>&#128465; Clear shopping cart </div>}
                  isPrimary={false}
                  onClick={() => handleDeleteCart()}
                />
              </div>
            </div>
          </div>

          <CartSummary />
        </div>
      ) : (
        <div className={boxEmptyCart}>
          <IoCartOutline
            style={{
              fontSize: '50px'
            }}
          />
          <div className={titleEmpty}>YOUR SHOPPING CART IS EMPTY</div>
          <div>
            We invite you to get acquainted with an assortment of our shop.
            Surely you can find something for yourself!
          </div>
          <div className={boxBtnEmpty}>
            <Button content={'Return to shop'} onClick={handleNavigateToShop} />
          </div>
        </div>
      )}
    </>
  );
}

export default Contents;
