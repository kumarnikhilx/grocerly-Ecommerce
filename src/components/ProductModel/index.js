import React, { useContext, useRef } from 'react'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import { MdClose } from 'react-icons/md'
import Rating from '@mui/material/Rating';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { IoIosHeartEmpty } from "react-icons/io";
import { MyContext } from '../../App';
import { MdCompareArrows } from "react-icons/md";
import QuantityBox from '../QuantityBox';
import ProductZoom from '../ProductZoom';
import {IoCartSharp} from 'react-icons/io5'

   function ProductModel(props) {
       const context=useContext(MyContext);  
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
                <ProductZoom/>
              


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
                    <Button className='btn-red btn-big btn-round'><IoCartSharp className="mr-1"/>Add to Cart </Button>
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
