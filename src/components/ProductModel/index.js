import React, { useContext, useRef } from 'react'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import { MdClose } from 'react-icons/md'
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from 'react-slick';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { MyContext } from '../../App';


import QuantityBox from '../QuantityBox';

function ProductModel(props) {
    const zoomSliderBig=useRef();
    const zoomSlider=useRef();
const context=useContext(MyContext);

    var settings2={
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };
    var settings={
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    const goto=(index)=>{
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }
  return (
    <>
    <Dialog open={true} className='productModel' onClose={()=>context.setisOpenProductModel(false)}>
        <Button className='close_' onClick={()=>context.setisOpenProductModel(false)}><MdClose/></Button>
        <h4 className='mb-1 font-weight-bold'>All Natural Italian-style chicken meatballs</h4>
        <div className='d-flex align-items-center'>
            <div className="d-flex align-items-center mr-4">
                <span>Brands:</span>
                <span className='ml-2'><b>Welch's</b></span>
                
            </div>
            <Rating name="read-only" defaultValue={5} precision={5} size="size" readOnly />
        </div>
        <hr/>
        <div className="row mt-2 productDetailModel">
            <div className="col-md-5">
                <div className="productZoom position-relative">
                    <div className="badge badge-primary position-absolute">23%</div>
                    <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                        
                             <div className="item">
                                        <InnerImageZoom
                                        zoomType="hover" zoomScale={1.5}
                                        src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg'} />
                                    </div>
                             <div className="item">
                                        <InnerImageZoom
                                        zoomType="hover" zoomScale={1.5}
                                        src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-768x691.jpg'} />
                                    </div>
                             <div className="item">
                                        <InnerImageZoom
                                        zoomType="hover" zoomScale={1.5}
                                        src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35-768x691.jpg'} />
                                    </div>
                    </Slider>
                </div>
                <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                        
                             <div className="item ">
                                      <img src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg'} alt="" className='w-100' onClick={()=>goto(0)}/>
                                      
                                    </div>
                             <div className="item">
                                      <img src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-768x691.jpg'} alt="" className='w-100' onClick={()=>goto(1)}/>
                                      
                                    </div>
                             <div className="item">
                                      <img src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35-768x691.jpg'} alt="" className='w-100' onClick={()=>goto(2)}/>
                                      
                                    </div>
                           
                        
                    </Slider>


            </div>
            <div className="col-md-7">
                <div className="d-flex info align-items-center mb-2">
                    <span className='oldPrice lg mr-2'>$9.35</span>
                    <span className='newPrice lg text-danger'>$7.34</span>

                </div>
                <span className='badge bg-success'>IN STOCK</span>
                <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                <div className="d-flex align-items-center">
                    <QuantityBox/>
                    <Button className='btn-blue btn-big btn-round'>Add to Cart </Button>
                </div>

                <div className="d-flex align-items-center mt-5 actions">
                    <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty/> &nbsp; ADD TO WISHLIST</Button>
                    <Button className='btn-round btn-sml ml-3' variant='outlined'><MdCompareArrows/> &nbsp; COMPARE</Button>
                </div>

            </div>
        </div>
    </Dialog>
      
    </>
  )
}

export default ProductModel
