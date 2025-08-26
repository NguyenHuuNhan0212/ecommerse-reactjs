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
    info
  } = styles;

  const [menuSelected, setMenuSelected] = useState(1);

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
  const handleSetMenuSelected = (id) => {
    setMenuSelected(id);
  };
  return (
    <div>
      <MyHeader />
      <div className={container}>
        <MainLayout>
          <div className={navigateSection}>
            <div>Home {'>'} Men</div>
            <div style={{ cursor: 'pointer' }}>
              {'<'} Return to previous page
            </div>
          </div>

          <div className={contentSection}>
            <div className={imageBox}>
              <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg'
                alt='affaf'
              />
              <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg'
                alt='affaf'
              />
              <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg'
                alt='affaf'
              />
              <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg'
                alt='affaf'
              />
            </div>

            <div className={infoBox}>
              <h1>Title Product</h1>
              <p className={price}>$1,879.99</p>
              <p className={des}>Moo ta</p>

              <p className={titleSize}>Size</p>
              <div className={boxSize}>
                <div className={size}>L</div>
                <div className={size}>M</div>
                <div className={size}>S</div>
              </div>

              <div className={functionInfo}>
                <div className={incrementAmount}>
                  <div>-</div>
                  <div>1</div>
                  <div>+</div>
                </div>
                <div className={boxBtn}>
                  <Button content={'ADD TO CART'} />
                </div>
              </div>

              <div className={orSection}>
                <div></div>
                <span>OR</span>
                <div></div>
              </div>

              <div>
                <Button content={'BUY NOW'} />
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
        </MainLayout>
      </div>
    </div>
  );
}

export default DetailProduct;
