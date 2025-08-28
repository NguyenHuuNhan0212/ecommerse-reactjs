import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Logos() {
  const dataLogos = [
    {
      id: '1',
      img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
    },
    {
      id: '2',
      img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
    },
    {
      id: '3',
      img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
    },
    {
      id: '4',
      img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
    },
    {
      id: '5',
      img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
    },
    {
      id: '6',
      img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
    },
    {
      id: '7',
      img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
    },
    {
      id: '8',
      img: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png'
    }
  ];
  return (
    <div
      style={{
        marginTop: '80px'
      }}
    >
      {/* Thêm style cho arrow hover */}
      <style>
        {`
          .logos-swiper .swiper-button-next,
          .logos-swiper .swiper-button-prev {
            opacity: 0;
            transition: opacity 0.3s;
          }
          .logos-swiper:hover .swiper-button-next,
          .logos-swiper:hover .swiper-button-prev {
            opacity: 1;
          }
        `}
      </style>
      <Swiper
        className='logos-swiper'
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {dataLogos.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={item.img}
                alt=''
                style={{
                  display: 'block',
                  margin: '0 auto',
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Logos;
