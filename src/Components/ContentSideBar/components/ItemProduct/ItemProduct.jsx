import { useContext } from 'react';
import styles from './style.module.scss';
import { IoCloseSharp } from 'react-icons/io5';
import { SideBarContext } from '../../../../contexts/SideBarProvider';
function ItemProduct() {
  const { container, size, boxClose, boxContent, price, title } = styles;
  const { type } = useContext(SideBarContext);
  return (
    <div className={container}>
      <img
        src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg'
        alt=''
      />
      <div className={boxClose}>
        <IoCloseSharp
          style={{
            fontSize: '20px',
            color: '#c1c1c1'
          }}
        />
      </div>
      <div className={boxContent}>
        <div className={title}>title of product</div>
        {type === 'cart' && <div className={size}>Size: M</div>}

        <div className={price}>
          {type === 'cart' && <span>1 x </span>}$119.99
        </div>
        {type === 'cart' && <div className={price}>SKU: 12349</div>}
      </div>
    </div>
  );
}

export default ItemProduct;
