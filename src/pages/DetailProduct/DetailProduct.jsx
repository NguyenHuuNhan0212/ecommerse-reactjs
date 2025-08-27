import Button from '../../Components/Button/Button';
import MyHeader from '../../Components/Header/Header';
import MainLayout from '../../Components/Layout/Layout';
import styles from './style.module.scss';
import { FaRegHeart } from 'react-icons/fa';
import { TfiReload } from 'react-icons/tfi';
import PaymentMethod from '../../Components/PaymentMethod/PaymentMethod';
import AccordionMenu from '../../Components/AccordionMenu';
import { useState } from 'react';
import InformationProduct from './components/Infomation';
import ReviewProduct from './components/Review';
import MyFooter from '../../Components/Footer/Footer';
import SliderCommon from '../../Components/SliderCommon/SliderCommon';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { useNavigate } from 'react-router-dom';
import cls from 'classnames';
const tempDataSize = [
  {
    name: 'L',
    amount: '1000'
  },
  {
    name: 'M',
    amount: '1000'
  }
];
function DetailProduct() {
  const {
    container,
    price,
    infoBox,
    navigateSection,
    imageBox,
    contentSection,
    des,
    boxSize,
    size,
    titleSize,
    functionInfo,
    boxBtn,
    incrementAmount,
    orSection,
    addFunction,
    info,
    imageReview,
    active,
    clear,
    activeDisableBtn
  } = styles;

  const [menuSelected, setMenuSelected] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [sizeSelected, setSizeSelected] = useState('');
  const navigate = useNavigate();
  const dataAccordionMenu = [
    {
      id: 1,
      titleMenu: 'ADDITIONAL INFORMATION',
      content: <InformationProduct />
    },
    {
      id: 2,
      titleMenu: 'Review (0)',
      content: <ReviewProduct />
    }
  ];
  const dataImageDetails = [
    'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg',
    'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg',
    'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-16.2-min.jpg',
    'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg'
  ];
  const dataSlider = [
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg',
      name: 'product 1',
      price: 12341,
      size: [{ name: 'S' }, { name: 'M' }]
    },
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg',
      name: 'product 1',
      price: 12341,
      size: [{ name: 'S' }, { name: 'M' }]
    },
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg',
      name: 'product 1',
      price: 12341,
      size: [{ name: 'S' }, { name: 'M' }]
    },
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg',
      name: 'product 1',
      price: 12341,
      size: [{ name: 'S' }, { name: 'M' }]
    },
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg',
      name: 'product 1',
      price: 12341,
      size: [{ name: 'S' }, { name: 'M' }]
    },
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg',
      name: 'product 1',
      price: 12341,
      size: [{ name: 'S' }, { name: 'M' }]
    }
  ];
  const handleRenderZoomImage = (src) => {
    return (
      <InnerImageZoom
        src={src}
        zoomSrc={src}
        zoomType='hover'
        zoomPreload={true}
        hideHint={true}
        className={imageReview}
      />
    );
  };
  const handleSetMenuSelected = (id) => {
    setMenuSelected(id);
  };
  const handleBackToPage = () => {
    navigate(-1);
  };
  const handleSelectedSize = (size) => {
    setSizeSelected(size);
  };
  const handleClearSize = () => {
    setSizeSelected('');
  };
  const handleSetQuantity = (type) => {
    setQuantity((prev) =>
      type === 'increment' ? (prev += 1) : prev === 1 ? 1 : (prev -= 1)
    );
  };
  return (
    <div>
      <MyHeader />
      <div className={container}>
        <MainLayout>
          <div className={navigateSection}>
            <div>Home {'>'} Men</div>
            <div style={{ cursor: 'pointer' }} onClick={handleBackToPage}>
              {'<'} Return to previous page
            </div>
          </div>

          <div className={contentSection}>
            <div className={imageBox}>
              {dataImageDetails.map((src) => handleRenderZoomImage(src))}
            </div>

            <div className={infoBox}>
              <h1>Title Product</h1>
              <p className={price}>$1,879.99</p>
              <p className={des}>Moo ta</p>

              <p className={titleSize}>Size {sizeSelected}</p>
              <div className={boxSize}>
                {tempDataSize.map((item, index) => {
                  return (
                    <div
                      className={cls(size, {
                        [active]: sizeSelected === item.name
                      })}
                      key={index}
                      onClick={() => handleSelectedSize(item.name)}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
              {sizeSelected && (
                <div className={clear} onClick={() => handleClearSize()}>
                  clear
                </div>
              )}

              <div className={functionInfo}>
                <div className={incrementAmount}>
                  <div onClick={() => handleSetQuantity('decrement')}>-</div>
                  <div>{quantity}</div>
                  <div onClick={() => handleSetQuantity('increment')}>+</div>
                </div>
                <div className={boxBtn}>
                  <Button
                    content={'ADD TO CART'}
                    customClassName={!sizeSelected && activeDisableBtn}
                  />
                </div>
              </div>

              <div className={orSection}>
                <div></div>
                <span>OR</span>
                <div></div>
              </div>

              <div>
                <Button
                  content={'BUY NOW'}
                  customClassName={!sizeSelected && activeDisableBtn}
                />
              </div>

              <div className={addFunction}>
                <div>
                  <FaRegHeart />
                </div>
                <div>
                  <TfiReload />
                </div>
              </div>

              <div>
                <PaymentMethod />
              </div>

              <div className={info}>
                <div>
                  Brand: <span>Brand 03</span>
                </div>
                <div>
                  SKU: <span>87654</span>
                </div>
                <div>
                  Category: <span>Men</span>
                </div>
              </div>
              {dataAccordionMenu.map((item, index) => {
                return (
                  <AccordionMenu
                    key={index}
                    titleMenu={item.titleMenu}
                    contentJsx={item.content}
                    onClick={() => handleSetMenuSelected(item.id)}
                    isSelected={menuSelected === item.id}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <h2>Related Products</h2>
            <SliderCommon data={dataSlider} isProductItem showItem={4} />
          </div>
        </MainLayout>
      </div>
      <MyFooter />
    </div>
  );
}

export default DetailProduct;
