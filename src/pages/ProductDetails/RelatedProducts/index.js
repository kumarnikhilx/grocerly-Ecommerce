import 'swiper/css';
import 'swiper/css/navigation';
import Button from "@mui/material/Button";
import {  Navigation } from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductItem from '../../../components/ProductItem';

function RelatedProducts(props) {
  return (
    <>
     <div className="d-flex align-items-center  mt-3">
                    <div className="info w-75">
                      <h3 className="mb-0 hd">{props.title}</h3>
                    </div>
                    <Button className="viewAllBtn ml-auto">
                      View All
                      <IoIosArrowRoundForward/>
                    </Button>            
                  </div>
                  <div className="product_row">
                    <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    navigation={true}
                loop={false}
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
      
    </>
  )
}

export default RelatedProducts
