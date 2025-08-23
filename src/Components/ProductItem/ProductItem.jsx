import styles from './style.module.scss';
import heartIcon from '@icons/svgs/heartIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
import classNames from 'classnames';
import Button from '../Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
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
          <div className={boxIcon}>
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
            <Button content={'ADD TO CART'} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
