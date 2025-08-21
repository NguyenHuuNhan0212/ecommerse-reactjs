import HeaderSideBar from '../components/HeaderSidebar/HeaderSideBar';
import { FaRegHeart } from 'react-icons/fa6';
import styles from './style.module.scss';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '../../Button/Button';

function WishList() {
  const { container, boxBtn } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={
            <FaRegHeart
              style={{
                fontSize: '30px'
              }}
            />
          }
          title={'WISH LIST'}
        />
        <ItemProduct />
      </div>
      <div className={boxBtn}>
        <Button content={'VIEW WISHLIST'} />
        <Button content={'ADD ALL TO CART'} isPrimary={false} />
      </div>
    </div>
  );
}

export default WishList;
