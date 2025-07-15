import HomeBanner from "../../components/HomeBanner";
import Button from "@mui/material/Button";
import banner1 from "../../assests/banner1.png";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import ProductItem from "../../components/ProductItem";
const Home = () => {
    var productSlider = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <>
      <HomeBanner />
      <div className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">

            <img src={banner1} className="cursor w-100"/>
              </div>
                
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-sml">Do not miss the current offers untill the end of the March.</p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All
                  < IoIosArrowRoundForward/>
                </Button>            
              </div>
              <div className="product_row ">
                <Swiper
                slidesPerView={4}
                spaceBetween={0}
                pagination={{clickable: true,}}
                modules={[Navigation]}
                className="mySwiper">
                <SwiperSlide>
                 <ProductItem/>
</SwiperSlide>
                <SwiperSlide>
                 <ProductItem/>
</SwiperSlide>
                <SwiperSlide>
                 <ProductItem/>
</SwiperSlide>
                <SwiperSlide>
                 <ProductItem/>
</SwiperSlide>
                <SwiperSlide>
                 <ProductItem/>
</SwiperSlide>
                <SwiperSlide>
                 <ProductItem/>
</SwiperSlide>
                <SwiperSlide>
                 <ProductItem/>
</SwiperSlide>
                <SwiperSlide>
                 <ProductItem/>
</SwiperSlide>
               
           
</Swiper>
                  
               
              </div>
                
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
