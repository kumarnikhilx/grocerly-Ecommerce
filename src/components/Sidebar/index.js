import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";

function Sidebar() {
    const[value, setValue]=useState([100,6000]);
    const[value2, setValue2]=useState(0);

  return (
    <>
      <div className="sidebar">
        <div className="filterBox">
          <h5>PRODUCT CATEGORIES</h5>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel className='w-100' control={<Checkbox />} label="Men" />
              </li>
              <li>
                <FormControlLabel className='w-100' control={<Checkbox />} label="Women" />
              </li>
              <li>
                <FormControlLabel className='w-100' control={<Checkbox />} label="Kids" />
              </li>
              <li>
                <FormControlLabel  className='w-100' control={<Checkbox />} label="Gift" />
              </li>
              <li>
                <FormControlLabel className='w-100' control={<Checkbox />} label="watches" />
              </li>
              <li>
                <FormControlLabel className='w-100' control={<Checkbox />} label="Beauty" />
              </li>
            </ul>
          </div>
        </div>
        <div className="filterBox mt-3">
    <h6>FILTER BY PRICE</h6>
    
    <RangeSlider 
        value={value} 
        onInput={setValue} 
        min={100} 
        max={60000} 
        step={5} 
    />

    <div className="d-flex pt-2 pb-2 priceRange">
        <span>
            From: <strong className="text-dark">Rs: {value[0]}</strong>
        </span>
        <span className="ml-auto">
            To: <strong className="text-dark">Rs: {value[1]}</strong>
        </span>
    </div>
</div>
<div className="filterBox mt-3">
          <h5>PRODUCT STATUS</h5>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel className='w-100' control={<Checkbox />} label="Men" />
              </li>
              <li>
                <FormControlLabel className='w-100' control={<Checkbox />} label="In Stoke" />
              </li>
             
            </ul>
          </div>
        </div>
<div className="filterBox mt-3">
          <h5>BRANDS</h5>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" />
              </li>
              <li>
                <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />
              </li>
              <li>
                <FormControlLabel className='w-100' control={<Checkbox />} label="Oreo" />
              </li>
              <li>
                <FormControlLabel className='w-100' control={<Checkbox />} label="Quaker" />
              </li>
              <li>
                <FormControlLabel className='w-100' control={<Checkbox />} label="Welch's" />
              </li>
             
            </ul>
          </div>

          <Link to="/"><img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" className='w-100 mt-5' alt="" /></Link>
        </div>

        
      </div>
    </>
  );
}

export default Sidebar;
