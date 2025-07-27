import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from "swiper/modules";
import slide1 from "../../assests/slider/slide1.jpg"
import slide2 from "../../assests/slider/slide2.jpg"
import slide3 from "../../assests/slider/slide3.jpg"
import slide4 from "../../assests/slider/slide4.jpg"
import slide5 from "../../assests/slider/slide5.jpg"


const HomeBanner = () => {
  
  return (
    <>
      <div className="container mt-3">
        <div className="homeBannerSec">
            <Swiper
                slidesPerView={1}
                spaceBetween={15}               
                navigation={true}
                loop={false}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation,Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="item">
                        <img src={slide1} alt="" className="w-100"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src={slide2} alt="" className="w-100" />
                    </div>
                </SwiperSlide>              
                <SwiperSlide>
                    <div className="item">
                        <img src={slide3} alt="" className="w-100"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src={slide4} alt="" className="w-100"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src={slide5} alt="" className="w-100"/>
                    </div>
                </SwiperSlide>

            </Swiper>
          
        </div>
      </div>
    </>
  );
};
export default HomeBanner;

/*<Slider {...settings}>
            <div className="item">
              <img
                src="https://cmsimages.shoppersstop.com/Men_EOSS_preview_sale_web_40a2af1e44/Men_EOSS_preview_sale_web_40a2af1e44.png"
                alt=""
              />
            </div>
            <div className="item">
              <img
                src="https://cmsimages.shoppersstop.com/wedding_web_eb529bfea2/wedding_web_eb529bfea2.png"
                alt=""
              />
            </div>
            <div className="item">
              <img
                src="https://cmsimages.shoppersstop.com/Entry_Banner_web_86a7322a45/Entry_Banner_web_86a7322a45.png"
                alt=""
              />
            </div>
            <div className="item">
              <img
                src="https://cmsimages.shoppersstop.com/Gio_web_5e747ef0ce/Gio_web_5e747ef0ce.png"
                alt=""
              />
            </div>
            <div className="item">
              <img
                src="https://cmsimages.shoppersstop.com/biba_w_main_banner_web_a1b4aa9cc4/biba_w_main_banner_web_a1b4aa9cc4.png"
                alt=""
              />
            </div>
          </Slider>*/
