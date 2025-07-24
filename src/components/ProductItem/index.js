import React, { useContext, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import { TfiFullscreen} from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import { Pagination, Navigation } from 'swiper/modules';
import ProductModel from '../ProductModel';
import { MyContext } from '../../App';
function ProductItem(props) { 
  const context=useContext(MyContext);

  const viewProductDetails=(id)=>{
  context.setisOpenProductModel(true);
}  
return (
    <>
    <div className={`item productItem ${props.itemView}`}>
                         <div className="imgWrapper">
                           <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt=""  className="w-100"/>
   
                           <span className=" badge badge-primary">28%</span>
                           <div className="actions">
                             <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen/></Button>
                             <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>
                           </div>
                         </div>    
                             <div className="info">
                           <h4>All Natural Italian-Style Chicken Meatballs</h4>
                         <span className="text-danger d-block">In Stock</span>
                         <Rating name="half-rating-read mt-2 mb-2" defaultValue={5} precision={5} size="size" readOnly />
                         <div className="price d-flex">
                           <span className="oldPrice">$20</span>
                         <span className="newPrice ml-2 text-danger">$18</span>
                         </div>
                         </div>
                     </div>

                    
                     
                     </>
  )
}

export default ProductItem
