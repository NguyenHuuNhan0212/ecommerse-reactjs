import { useContext, useState } from 'react';
import { SideBarContext } from '../../../contexts/SideBarProvider';
import styles from './style.module.scss';
import SliderCommon from '../../SliderCommon/SliderCommon';
import SelectBox from '../../../pages/OurShop/components/SelectBox';
import { IoCartOutline } from 'react-icons/io5';
import Button from '@components/Button/Button';
import { TfiReload } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import cls from 'classnames';
import { addProductToCart } from '../../../apis/cartService';
import { ToastContext } from '../../../contexts/ToastProvider';
function DetailProduct() {
  const {
    container,
    boxOr,
    title,
    boxAddToCart,
    label,
    size,
    boxSize,
    price,
    des,
    line,
    boxAddOther,
    boxFooter,
    isActive
  } = styles;
  const {
    detailProduct,
    userId,
    setType,
    handleGetListProductsCart,
    setIsLoading,
    setIsOpen
  } = useContext(SideBarContext);
  const { toast } = useContext(ToastContext);
  const [chooseSize, setChooseSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const showOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' }
  ];
  const handleGetSize = (value) => {
    setChooseSize(value);
  };
  const handleClearSize = () => {
    setChooseSize('');
  };
  const handleGetQuantity = (value) => {
    setQuantity(value);
  };
  const handleAddToCart = () => {
    if (!chooseSize) {
      toast.warning('Choose size to add product');
      return;
    }
    const data = {
      userId: userId,
      productId: detailProduct._id,
      quantity: quantity,
      size: chooseSize,
      isMultiple: true
    };
    setIsOpen(false);
    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        setIsOpen(true);
        setType('cart');
        handleGetListProductsCart(userId, 'cart');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={container}>
      <SliderCommon data={detailProduct.images} />

      <div className={title}>{detailProduct.name}</div>

      <div className={price}>${detailProduct.price}</div>

      <div className={des}>{detailProduct.description}</div>

      <div className={label}>Size {chooseSize}</div>

      <div className={boxSize}>
        {detailProduct.size.map((item, index) => {
          return (
            <div
              className={cls(size, {
                [isActive]: chooseSize === item.name
              })}
              key={index}
              onClick={() => handleGetSize(item.name)}
            >
              {item.name}{' '}
            </div>
          );
        })}
      </div>

      {chooseSize && (
        <div
          style={{
            fontSize: '12px',
            marginTop: '3px',
            cursor: 'pointer'
          }}
          onClick={() => handleClearSize()}
        >
          Clear
        </div>
      )}

      <div className={boxAddToCart}>
        <SelectBox
          options={showOptions}
          type={'show'}
          defaultValue={quantity}
          getValue={(e) => handleGetQuantity(e)}
        />
        <div>
          <Button
            content={
              <div>
                {' '}
                <IoCartOutline /> ADD TO CART{' '}
              </div>
            }
            onClick={() => handleAddToCart()}
          />
        </div>
      </div>

      <div className={boxOr}>
        <div className={line} />
        <div>OR</div>
        <div className={line} />
      </div>

      <Button
        content={
          <div>
            {' '}
            <IoCartOutline /> SELECT OPTIONS{' '}
          </div>
        }
      />
      <div className={boxAddOther}>
        <TfiReload
          style={{
            fontSize: '20px'
          }}
        />
        <div>Add to compare</div>
      </div>

      <div className={boxAddOther}>
        <FaRegHeart
          style={{
            fontSize: '20px'
          }}
        />
        <div>Add to wishlist</div>
      </div>

      <div className={boxFooter}>
        SKU: <span>12349</span>
      </div>

      <div className={boxFooter}>
        Category: <span>Pullovers</span>
      </div>

      <div className={boxFooter}>
        Estimated delivery: <span>3 - 5 days</span>
      </div>

      <div className={boxFooter}>
        Share:{' '}
        <span>
          {' '}
          <FaXTwitter /> <FaFacebookF /> <FaInstagram />
        </span>
      </div>
    </div>
  );
}

export default DetailProduct;
