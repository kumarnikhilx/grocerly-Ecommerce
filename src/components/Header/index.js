// import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assests/images/bacola-logo.png";
import Button from "@mui/material/Button";

import { FaRegUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";

import CountryDrop from "../CountryDrop";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";

function Header() {
  const context=useContext(MyContext);
  return (
    <>
      <div className="headerWrapper ">
        <div className="top-strip ">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the<b> COVID 19 </b> epidemic, orders may be processed with
              a slight delay
            </p>
          </div>
        </div>
        {/*------------------here blue strip finish---------------*/}
         
        {/*---------- below strip of blue content start here------------*/}
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex  align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={logo} alt="headerlogo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">

                {
                  context.countryList.length!==0 && <CountryDrop />

                }
                

                {/*----------------------- Header search bar start here---------------*/}
              
                 <SearchBox/>
                {/* ---------------------Header search bar End here -----------------------*/}
                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle ml-2">
                    <FaRegUser />
                  </Button>
                  <div className="ml-auto cart-tab d-flex align-items-center ">
                    <span className="price ml-3">$3.29</span>
                    <div className="position-relative ml-3">
                   <Link to="/cart"><Button className="cart  circle">
                        
                        <GrCart />
                      </Button></Link>
                      <span className="count d-flex align-items-center justify-content-center ">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*-----------------nav starting here---------------*/ }
        <Navigation/>
        
      </div>
    </>
  );
}

export default Header;
