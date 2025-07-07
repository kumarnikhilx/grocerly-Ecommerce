import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

import { CiSearch } from "react-icons/ci";

function CountryDrop() {
  const [isOpenModel,setIsOpenMode]= useState(false);
  return (
    <>
      <Button className="countryDrop" onClick={()=>setIsOpenMode(true)}>
        <div className="info d-flex flex-column">
          <span className="label"> your Location</span>
          <span className="name">india</span>
        </div>
        <span className="angle-icon ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog open={isOpenModel} onClose={()=>setIsOpenMode(false)} className="locationModel">
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="btn-close" onClick={()=>setIsOpenMode(false)}><IoMdClose /></Button>
        <div className="headerSearch  w-100">
          <input
            type="text"
            name="item-name"
            placeholder="Search your Area..."
          />
          <Button > 
            <CiSearch />
          </Button>
        </div>

        <ul className="countryList mt-3">
          <li><Button onClick={()=>setIsOpenMode(false)}>Select a Location</Button></li>
          <li><Button onClick={()=>setIsOpenMode(false)}>India</Button></li>
          <li><Button onClick={()=>setIsOpenMode(false)}>New York</Button></li>
          <li><Button onClick={()=>setIsOpenMode(false)}>Washington</Button></li>
          <li><Button onClick={()=>setIsOpenMode(false)}>Georgia</Button></li>
          <li><Button onClick={()=>setIsOpenMode(false)}>Florida </Button></li>
          <li><Button onClick={()=>setIsOpenMode(false)}>California</Button> </li>
          <li><Button onClick={()=>setIsOpenMode(false)}>Arizona</Button></li>
          <li><Button onClick={()=>setIsOpenMode(false)}>Minnesota</Button></li>
          <li><Button onClick={()=>setIsOpenMode(false)}>Kansas</Button></li>
          <li><Button onClick={()=>setIsOpenMode(false)}>Colorado</Button></li>
        </ul>
        
      </Dialog>
    </>
  );
}

export default CountryDrop;
