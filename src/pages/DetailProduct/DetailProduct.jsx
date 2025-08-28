import Button from '../../Components/Button/Button';
import MyHeader from '../../Components/Header/Header';
import MainLayout from '../../Components/Layout/Layout';
import styles from './style.module.scss';
import { FaRegHeart } from 'react-icons/fa';
import { TfiReload } from 'react-icons/tfi';
import PaymentMethod from '../../Components/PaymentMethod/PaymentMethod';
import AccordionMenu from '../../Components/AccordionMenu';
import { useContext, useEffect, useState } from 'react';
import InformationProduct from './components/Infomation';
import ReviewProduct from './components/Review';
import MyFooter from '../../Components/Footer/Footer';
import SliderCommon from '../../Components/SliderCommon/SliderCommon';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import cls from 'classnames';
import Cookies from 'js-cookie';
import {
  getDetailProduct,
  getRelatedProducts
} from '../../apis/productsService';
import LoadingTextCommon from '../../Components/LoadingTextCommon/LoadingTextCommon';
import { toast } from 'react-toastify';
import { handleAddProductToCartCommon } from '../../utils/helper';
import { SideBarContext } from '../../contexts/SideBarProvider';
import { ToastContext } from '../../contexts/ToastProvider';
import { addProductToCart } from '../../apis/cartService';
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
    activeDisableBtn,
    loading,
    emptyData
  } = styles;
  const { setIsOpen, setType, handleGetListProductsCart } =
    useContext(SideBarContext);
  const { toast } = useContext(ToastContext);
  const userId = Cookies.get('userId');

  const [menuSelected, setMenuSelected] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [sizeSelected, setSizeSelected] = useState('');
  const [data, setData] = useState('');
  const [relatedData, setRelatedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
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
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const [isLoadingBtnBuyNow, setIsLoadingBtnBuyNow] = useState(false);

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
  const fetchDataDetail = async (id) => {
    setIsLoading(true);
    try {
      const data = await getDetailProduct(id);
      setData(data);
      setIsLoading(false);
    } catch (err) {
      toast.error('Có lỗi khi tải dữ liệu.');
      setData('');
      setIsLoading(false);
    }
  };

  const fetchDataRelatedProduct = async (id) => {
    setIsLoading(true);
    try {
      const data = await getRelatedProducts(id);
      setRelatedData(data);
      setIsLoading(false);
    } catch (err) {
      toast.error('Có lỗi khi tải dữ liệu.');
      setRelatedData([]);
      setIsLoading(false);
    }
  };
  const handleGoToShop = () => {
    navigate('/shop');
  };

  const handleAddToCart = () => {
    handleAddProductToCartCommon(
      userId,
      setIsOpen,
      setType,
      toast,
      sizeSelected,
      params.id,
      quantity,
      setIsLoadingBtn,
      handleGetListProductsCart
    );
  };

  const handleBuyNow = () => {
    const data = {
      userId,
      productId: params.id,
      quantity,
      size: sizeSelected
    };
    setIsLoadingBtnBuyNow(true);

    addProductToCart(data)
      .then((res) => {
        navigate('/cart');
        setIsLoadingBtnBuyNow(false);
        toast.success('Add product to cart successfully!');
      })
      .catch((err) => {
        toast.error('Add product to cart failed!');
        setIsLoadingBtnBuyNow(false);
      });
  };
  useEffect(() => {
    if (params.id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      fetchDataDetail(params.id);
      fetchDataRelatedProduct(params.id);
    }
  }, [params]);
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

          {isLoading ? (
            <div className={loading}>
              <LoadingTextCommon />{' '}
            </div>
          ) : (
            <>
              {!data ? (
                <div className={emptyData}>
                  <p>No Result</p>

                  <Button
                    content={'BACK TO OUR SHOP'}
                    onClick={() => {
                      handleGoToShop();
                    }}
                  />
                </div>
              ) : (
                <div className={contentSection}>
                  <div className={imageBox}>
                    {data?.images?.map((src) => handleRenderZoomImage(src))}
                  </div>

                  <div className={infoBox}>
                    <h1>{data?.name}</h1>
                    <p className={price}>${data?.price}</p>
                    <p className={des}>{data?.description}</p>

                    <p className={titleSize}>Size {sizeSelected}</p>
                    <div className={boxSize}>
                      {data?.size?.map((item, index) => {
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
                        <div onClick={() => handleSetQuantity('decrement')}>
                          -
                        </div>
                        <div>{quantity}</div>
                        <div onClick={() => handleSetQuantity('increment')}>
                          +
                        </div>
                      </div>
                      <div className={boxBtn}>
                        <Button
                          onClick={() => handleAddToCart()}
                          content={
                            isLoadingBtn ? <LoadingTextCommon /> : 'ADD TO CART'
                          }
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
                        onClick={() => handleBuyNow()}
                        content={
                          isLoadingBtnBuyNow ? <LoadingTextCommon /> : 'BUY NOW'
                        }
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
              )}
            </>
          )}
          {relatedData.length > 0 && (
            <div>
              <h2>Related Products</h2>
              <SliderCommon data={relatedData} isProductItem showItem={4} />
            </div>
          )}
        </MainLayout>
      </div>
      <MyFooter />
    </div>
  );
}

export default DetailProduct;
