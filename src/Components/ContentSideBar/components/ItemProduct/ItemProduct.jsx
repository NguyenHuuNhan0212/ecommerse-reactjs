import { useContext, useState } from 'react';
import styles from './style.module.scss';
import { IoCloseSharp } from 'react-icons/io5';
import { SideBarContext } from '../../../../contexts/SideBarProvider';
import { deleteItem } from '@/apis/cartService';
import LoadingTextCommon from '../../../LoadingTextCommon/LoadingTextCommon';
function ItemProduct({
  src,
  nameProduct,
  priceProduct,
  skuProduct,
  sizeProduct,
  quantity,
  productId,
  userId
}) {
  const {
    container,
    size,
    boxClose,
    overlayLoading,
    boxContent,
    price,
    title
  } = styles;
  const { type } = useContext(SideBarContext);
  const [isDelete, setIsDelete] = useState(false);
  const { handleGetListProductsCart } = useContext(SideBarContext);
  const handleRemoveItem = () => {
    setIsDelete(true);
    console.log(productId, userId);
    deleteItem({
      productId,
      userId
    })
      .then((res) => {
        console.log(res);

        handleGetListProductsCart(userId, 'cart');
        setIsDelete(false);
      })
      .catch((err) => {
        console.log(err);
        setIsDelete(false);
      });
  };

  return (
    <div className={container}>
      <img src={src} alt='' />
      <div className={boxClose}>
        <IoCloseSharp
          style={{
            fontSize: '20px',
            color: '#c1c1c1'
          }}
          onClick={handleRemoveItem}
        />
      </div>
      <div className={boxContent}>
        <div className={title}>{nameProduct}</div>
        {type === 'cart' && <div className={size}>Size: {sizeProduct}</div>}

        <div className={price}>
          {type === 'cart' && <span>{quantity} x </span>}${priceProduct}
        </div>
        {type === 'cart' && <div className={price}>SKU: {skuProduct}</div>}
      </div>
      {isDelete && (
        <div className={overlayLoading}>
          <LoadingTextCommon />
        </div>
      )}
    </div>
  );
}

export default ItemProduct;
