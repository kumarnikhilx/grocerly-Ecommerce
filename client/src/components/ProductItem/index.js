import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { TfiFullscreen } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import model1 from '../../assests/images/model1.jpg'
import { MyContext } from "../../App";
function ProductItem(props) {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setisOpenProductModel(true);
  };
  return (
    <>
      <div className={`item productItem ${props.itemView}`}>
                         <div className="imgWrapper">
                           <img src={model1} alt=""  className="w-100"/>
   
                           <span className=" badge badge-primary">28%</span>
                           <div className="actions">
                             <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen/></Button>
                             <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>
                           </div>
                         </div>    
                             <div className="info">
                           <h4>All Natural Italian-Style Chicken Meatballs</h4>
                         <span className="stock d-block">In Stock</span>
                         <Rating name="half-rating-read mt-2 mb-2" defaultValue={5} precision={5} size="size" readOnly />
                         <div className="price d-flex">
                           <span className="oldPrice">$20</span>
                         <span className="newPrice ml-2 text-danger">$18</span>
                         </div>
                         </div>
                     </div>
     
    </>
  );
}

export default ProductItem;
