import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import './style.css';
import ProductItem from '../ProductItem/ProductItem';

function SliderCommon({ data, isProductItem = false, showItem = 1 }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showItem,
    slidesToScroll: 1,
    nextArrow: <MdKeyboardArrowRight />,
    prevArrow: <MdKeyboardArrowLeft />,
    arrows: true
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => {
        return (
          <>
            {isProductItem ? (
              <ProductItem
                src={item.image}
                prevSrc={item.image}
                name={item.name}
                price={item.price}
                details={item}
                isHomePage={false}
                slideItem={true}
              />
            ) : (
              <img key={index} src={item} alt={item} />
            )}
          </>
        );
      })}
    </Slider>
  );
}

export default SliderCommon;
