import React from "react";
import Slider from "react-slick";

const HomeBanner=()=>{
     var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
    return(
        <>
         <div className="homeBannerSec">
             <Slider {...settings}>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Men_EOSS_preview_sale_web_40a2af1e44/Men_EOSS_preview_sale_web_40a2af1e44.png" alt="" />
                </div>
                <div className="item">

                    <img src="https://cmsimages.shoppersstop.com/wedding_web_eb529bfea2/wedding_web_eb529bfea2.png" alt=""/>
                </div>
                <div className="item">

                    <img src="https://cmsimages.shoppersstop.com/Entry_Banner_web_86a7322a45/Entry_Banner_web_86a7322a45.png" alt="" />
                </div>
                <div className="item">

                    <img src="https://cmsimages.shoppersstop.com/Gio_web_5e747ef0ce/Gio_web_5e747ef0ce.png" alt="" />
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/biba_w_main_banner_web_a1b4aa9cc4/biba_w_main_banner_web_a1b4aa9cc4.png" alt="" />
                </div>
             </Slider>
          
                    
                
        </div>
        </>
    )
}
export default HomeBanner;