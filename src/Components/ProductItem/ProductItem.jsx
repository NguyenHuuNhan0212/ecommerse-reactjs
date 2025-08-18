import styles from './style.module.scss';
import heartIcon from '@icons/svgs/heartIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
function ProductItem({ src, prevSrc, name, price }) {
  const {
    title,
    priceCl,
    boxIcon,
    boxImg,
    showImgWhenHover,
    showFncWhenHover
  } = styles;
  return (
    <div>
      <div className={boxImg}>
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
      <div className={title}>{name}</div>
      <div className={priceCl}>${price}</div>
    </div>
  );
}

export default ProductItem;
