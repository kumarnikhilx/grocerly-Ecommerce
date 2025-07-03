// import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assests/images/bacola-logo.png";
import Button from "@mui/material/Button";


import CountryDrop from "../CountryDrop";




function Header() {
  return (
    <>
      <div className="headerWrapper ">
        <div className="top-strip bg-darkBlue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">

              Due to the<b> COVID 19 </b> epidemic, orders may be processed with
              a slight delay
            </p>
          </div>
        </div>

        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex  align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={logo} alt="headerlogo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
              <CountryDrop/>

              {/* Header search bar start here*/}
              {/* Header search bar End here */}
                
                   
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
