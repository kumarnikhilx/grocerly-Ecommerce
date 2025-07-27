import React, { useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function HomeCat() {
   const [itemBg, setItemBg] = useState([
  '#fffceb',
  '#ecffec',
  '#feefea',
  '#fff3eb',
  '#fff3ff',
  '#f2fce4',
  '#feefea',
  '#fffceb',
  '#feefea',
  '#ecffec',
  '#feefea',
   '#f2fce4',
  '#feefea',
  '#fffceb',
  '#feefea',
  '#ecffec',
  '#feefea',
  '#fff3eb',
  '#fff3ff',
  '#f2fce4',
  '#feefea',
  '#fffceb',
  '#feefea',
  '#ecffec',
]);
  return (
    <div>
         <section className="homeCat">
        <div className="container">
            <h3 className='mb-4 hd'>Feature categories</h3>
            <Swiper
                slidesPerView={10}
                spaceBetween={8}
               
                navigation={true}
                slidesPerGroup={3}
                modules={[Navigation]}
                className="mySwiper">{
                    itemBg?.map((item,index)=>{
                        return(
                             <SwiperSlide>
                 <div className="item text-cneter cursor" style={{background:item}}>
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg" alt=""  className='w-100'/>
                    <h2>Food </h2>
                 </div>
                </SwiperSlide>

                        )

                       
                    })
                }                             
            </Swiper>
          
        </div>
      </section>
      
    </div>
  );
}

export default HomeCat
