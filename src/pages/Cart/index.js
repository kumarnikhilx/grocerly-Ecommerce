import Rating from "@mui/material/Rating";
import React from "react";
import QuantityBox from '../../components/QuantityBox';
import { Link } from "react-router-dom";
import {IoIosClose} from 'react-icons/io'
import {IoCartSharp} from 'react-icons/io5'
import Button from "@mui/material/Button";

function Cart() {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
            <h2 className="hd mb-1">Your Cart</h2>
              <p>
                There are <b className="text-red">3</b> product in your cart
              </p>
          <div className="row">
            <div className="col-md-9 pr-5">
            
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="35%">Product</th>
                      <th width="15%">Unit Price</th>
                      <th width="25%">Quantity</th>
                      <th width="15%">SubTotal</th>
                      <th width="10%">Remove</th>
                    </tr>
                  </thead>
                
                <tbody>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                              alt=""
                              className="w-100"/>                        
                          </div>
                              <div className="info px-3">
                              <h6> Field Roast Chao cheese Creamy Original </h6>
                               <Rating className="mt-2" defaultValue={5} precision={4} size="size" readOnly />
                            </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="25%">
                      <QuantityBox/>
                    </td>
                    <td width="15%">$7.80</td>
                    <td width="10%"><Button className="remove cursor"><span ><IoIosClose /></span></Button></td>
                  </tr>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                              alt=""
                              className="w-100"/>                        
                          </div>
                              <div className="info px-3">
                              <h6> Field Roast Chao cheese Creamy Original </h6>
                               <Rating className="mt-2" defaultValue={5} precision={4} size="size" readOnly />
                            </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="25%">
                      <QuantityBox/>
                    </td>
                    <td width="15%">$7.80</td>
                    <td width="10%"><Button className="remove cursor"><span ><IoIosClose /></span></Button></td>
                  </tr>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                              alt=""
                              className="w-100"/>                        
                          </div>
                              <div className="info px-3">
                              <h6> Field Roast Chao cheese Creamy Original </h6>
                               <Rating className="mt-2" defaultValue={5} precision={4} size="size" readOnly />
                            </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="25%">
                      <QuantityBox/>
                    </td>
                    <td width="15%">$7.80</td>
                    <td width="10%"><Button className="remove cursor"><span ><IoIosClose /></span></Button></td>
                  </tr>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                              alt=""
                              className="w-100"/>                        
                          </div>
                              <div className="info px-3">
                              <h6> Field Roast Chao cheese Creamy Original </h6>
                               <Rating className="mt-2" defaultValue={5} precision={4} size="size" readOnly />
                            </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="25%">
                      <QuantityBox/>
                    </td>
                    <td width="15%">$7.80</td>
                    <td width="10%"><Button className="remove cursor"><span ><IoIosClose /></span></Button></td>
                  </tr>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                              alt=""
                              className="w-100"/>                        
                          </div>
                              <div className="info px-3">
                              <h6> Field Roast Chao cheese Creamy Original </h6>
                               <Rating className="mt-2" defaultValue={5} precision={4} size="size" readOnly />
                            </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="25%">
                      <QuantityBox/>
                    </td>
                    <td width="15%">$7.80</td>
                    <td width="10%"><Button className="remove cursor"><span ><IoIosClose /></span></Button></td>
                  </tr>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                              alt=""
                              className="w-100"/>                        
                          </div>
                              <div className="info px-3">
                              <h6> Field Roast Chao cheese Creamy Original </h6>
                               <Rating className="mt-2" defaultValue={5} precision={4} size="size" readOnly />
                            </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="25%">
                      <QuantityBox/>
                    </td>
                    <td width="15%">$7.80</td>
                    <td width="10%"><Button className="remove cursor"><span ><IoIosClose /></span></Button></td>
                  </tr>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                              alt=""
                              className="w-100"/>                        
                          </div>
                              <div className="info px-3">
                              <h6> Field Roast Chao cheese Creamy Original </h6>
                               <Rating className="mt-2" defaultValue={5} precision={4} size="size" readOnly />
                            </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$7.25</td>
                    <td width="25%">
                      <QuantityBox/>
                    </td>
                    <td width="15%">$7.80</td>
                    <td width="10%"><Button className="remove cursor"><span ><IoIosClose /></span></Button></td>
                  </tr>
                </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border p-3 cartDetails">
                <h4>CART TOTALS</h4>

                <div className="d-flex align-items-center mb-3">
                  <span className="font-weight-bold">SubTotal</span>
                  <span className="ml-auto text-red font-weight-bold">$7.98</span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span className="font-weight-bold">Shipping</span>
                  <span className="ml-auto ">Free</span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span className="font-weight-bold">Estimate for</span>
                  <span className="ml-auto ">United Kingdom</span>
                </div>

                <div className="d-flex align-items-center">
                  <span className="font-weight-bold">Total</span>
                  <span className="ml-auto text-red font-weight-bold">$12.31</span>
                </div>
                <Button className='btn-red btn-big  mt-4'><IoCartSharp className="mr-1"/> Add to Cart </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
