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
import { StepperContext } from '@contexts/StepperProvider';
import { set } from 'react-hook-form';
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
  const { setCurrentStep } = useContext(StepperContext);
  console.log(setCurrentStep);
  const navigate = useNavigate();

  const handleNavigateToShop = () => {
    navigate('/shop');
    setIsOpen(false);
  };
  const handleNavigateToCart = () => {
    navigate('/cart');
    setIsOpen(false);
  };
  const subTotal = listProductCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);
  const handleGoToCheckout = () => {
    setCurrentStep(2);
    navigate('/cart');
    setIsOpen(false);
  };
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
          <div
            style={{
              height: 'calc(100vh - 250px)',
              overflowY: 'auto',
              scrollbarWidth: 'none'
            }}
          >
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
              <p>${subTotal.toFixed(2)}</p>
            </div>
            <div className={boxBtn}>
              <Button content={'VIEW CART'} onClick={handleNavigateToCart} />
              <Button
                content={'CHECKOUT'}
                isPrimary={false}
                onClick={handleGoToCheckout}
              />
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
