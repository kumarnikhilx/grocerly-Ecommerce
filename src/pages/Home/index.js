import HomeBanner from "../../components/HomeBanner";
import Button from "@mui/material/Button";
import banner1 from "../../assests/banner1.png";
import banner2 from "../../assests/banner2.png";
import banner3 from "../../assests/banner3.png";
import banner4 from "../../assests/banner4.png";
import {Swiper, SwiperSlide} from "swiper/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';
import ProductItem from "../../components/ProductItem";
import newsletter from "../../assests/images/newsLetter.webp";
import { IoMailOutline } from "react-icons/io5";
import HomeCat from "../../components/HomeCat";
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
     <HomeCat/>


      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
            <div className="sticky">
                <div className="banner">

            <img src={banner1} className="cursor w-100"/>
              </div>
              <div className="banner">
            <img src={banner2} className="cursor w-100 mt-3"/>
              </div>
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
                  <IoIosArrowRoundForward/>
                </Button>            
              </div>
              <div className="product_row">
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
                 <ProductItem />
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
               <div className="d-flex align-items-center mt-4">
                <div className="info w-75">
                  <h3 className="mb-0 hd">New Products</h3>
                  <p className="text-sml">New products with updated stocks.</p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All
                  < IoIosArrowRoundForward/>
                </Button>            
              </div>
              <div className="product_row productRow2 w-100 d-flex ">
                
               <ProductItem/>
               <ProductItem/>
               <ProductItem/>
               <ProductItem/>
               <ProductItem/>
               <ProductItem/>
               <ProductItem/>
               <ProductItem/>
               <ProductItem/>
               <ProductItem/>
               <ProductItem/>
               <ProductItem/>
              </div>
                
                <div className="d-flex mt-4 mb-5 bannerSec">
                  <div className="banner">
                    <img src={banner3} alt="" className="cursor w-100"/>
                  </div>
                  <div className="banner">
                    <img src={banner4} alt="" className="cursor w-100"/>
                  </div>
                </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container"> 
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">$20 discount for your first order</p>
              <h3 className="text-white">join our newsletter and get ...</h3>
              <p className="text-light">join our email subscription now to get update on<br/> promotions and coupons.</p>

              <form action="">
                <IoMailOutline/>
                <input type="text" placeholder="your email address"/>
                <Button>subscribe</Button>
              </form>

            </div>
            <div className="col-md-6"></div>
            <img src={newsletter} />
          </div>
        </div>

      </section>
      
      
    </>
  );
};
export default Home;
