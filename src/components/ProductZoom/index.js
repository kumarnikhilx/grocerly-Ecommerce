import React, { version,useRef } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from 'react-slick';
import { MyContext } from '../../App';

function ProductZoom() {
 
        const zoomSliderBig=useRef();
        const zoomSlider=useRef();
 
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
      
    </>
  )
}

export default ProductZoom
