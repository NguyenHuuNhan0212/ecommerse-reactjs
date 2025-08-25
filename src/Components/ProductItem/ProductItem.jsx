import styles from './style.module.scss';
import heartIcon from '@icons/svgs/heartIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
import classNames from 'classnames';
import Button from '../Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '../../contexts/SideBarProvider';
import { ToastContext } from '../../contexts/ToastProvider';
import { addProductToCart } from '../../apis/cartService';
import LoadingTextCommon from '../LoadingTextCommon/LoadingTextCommon';
function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomePage = true
}) {
  // const { isShowGrid } = useContext(OurShopContext);
  const [sizeChoose, setSizeChoose] = useState('');
  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const userId = Cookies.get('userId');
  const { setIsOpen, setType, setDetailProduct, handleGetListProductsCart } =
    useContext(SideBarContext);
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);
  const {
    title,
    priceCl,
    boxIcon,
    boxImg,
    showImgWhenHover,
    showFncWhenHover,
    boxSize,
    size,
    textCenter,
    boxBtn,
    content,
    containerItem,
    leftBtn,
    largImg,
    isActiveSize,
    btnClear
  } = styles;
  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };
  const handleClearSize = () => {
    setSizeChoose('');
  };
  const handleAddToCart = () => {
    if (!userId) {
      setIsOpen(true);
      setType('login');
      toast.warning('Please login to add product to cart.');
      return;
    }

    if (!sizeChoose) {
      toast.warning('Please choose size!');
      return;
    }
    const data = {
      userId,
      productId: details._id,
      quantity: 1,
      size: sizeChoose
    };
    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        setIsOpen(true);
        setType('cart');
        toast.success('Add product to cart successfully!');
        setIsLoading(false);
        handleGetListProductsCart(userId, 'cart');
      })
      .catch((err) => {
        toast.error('Add product to cart failed!');
        setIsLoading(false);
      });
  };
  const handleShowDetailProductSideBar = () => {
    setIsOpen(true);
    setType('detail');
    setDetailProduct(details);
  };
  useEffect(() => {
    if (isHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomePage, ourShopStore?.isShowGrid]);
  return (
    <div className={isShowGrid ? '' : containerItem}>
      <div
        className={classNames(boxImg, {
          [largImg]: !isShowGrid
        })}
      >
        <img src={src} alt='' />
        <img src={prevSrc} alt='' className={showImgWhenHover} />
        <div className={showFncWhenHover}>
          <div className={boxIcon}>
            <img src={cartIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={reloadIcon} alt='' />
          </div>
          <div className={boxIcon} onClick={handleShowDetailProductSideBar}>
            <img src={eyeIcon} alt='' />
          </div>
        </div>
      </div>
      <div className={isShowGrid ? '' : content}>
        {!isHomePage && (
          <div className={boxSize}>
            {details.size.map((item, index) => {
              return (
                <div
                  className={classNames(size, {
                    [isActiveSize]: sizeChoose === item.name
                  })}
                  key={index}
                  onClick={() => handleChooseSize(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
        {sizeChoose && (
          <div className={btnClear} onClick={() => handleClearSize()}>
            clear
          </div>
        )}
        <div
          className={classNames(title, {
            [textCenter]: !isHomePage
          })}
        >
          {name}
        </div>
        {!isHomePage && (
          <div
            className={textCenter}
            style={{
              color: '#c1c1c1'
            }}
          >
            {' '}
            Brand 01{' '}
          </div>
        )}
        <div
          className={classNames(priceCl, {
            [textCenter]: !isHomePage
          })}
          style={{
            color: isHomePage ? '#555' : '#888'
          }}
        >
          ${price}
        </div>
        {!isHomePage && (
          <div
            className={classNames(boxBtn, {
              [leftBtn]: !isShowGrid
            })}
          >
            <Button
              content={isLoading ? <LoadingTextCommon /> : 'ADD TO CART'}
              onClick={() => handleAddToCart()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
