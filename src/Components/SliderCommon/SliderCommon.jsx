import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import './style.css';

function NextArrow({ className, style, onClick }) {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <MdKeyboardArrowRight />
    </div>
  );
}

function PrevArrow({ className, style, onClick }) {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <MdKeyboardArrowLeft />
    </div>
  );
}

function SliderCommon({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Slider {...settings}>
      {data.map((src, index) => (
        <img key={index} src={src} alt={src} />
      ))}
    </Slider>
  );
}

export default SliderCommon;
