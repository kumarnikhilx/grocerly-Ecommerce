import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { IoMdClose } from "react-icons/io";
import { useContext, useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";
import { MyContext } from "../../App";

function CountryDrop() {
  const [isOpenModel,setIsOpenMode]= useState(false);
  const [selectedTab,setselectedTab]= useState(null);
const [countryList,setcountryList]= useState([]);


const selectCountry=(index,country)=>{
setselectedTab(index);
setIsOpenMode(false);
context.setselectedCountry(country);

}
useEffect(()=>{
  setcountryList(context.countryList);

},[]);
const filterList=(e)=>{
  const keyword=e.target.value.toLowerCase();

  if(keyword!==""){

    const list= countryList.filter((item)=>{
      return item.country.toLowerCase().includes(keyword);
    })
    setcountryList(list);
  }
  else{

    setcountryList(context.countryList);
  }
}
const context = useContext(MyContext);
  return (
    <>
      <Button className="countryDrop" onClick={()=>setIsOpenMode(true)}>
        <div className="info d-flex flex-column">
          <span className="label"> your Location</span>
          <span className="name">{context.selectedCountry!==""? context.selectedCountry.length>10? context.selectedCountry?.substr(0,10)+'...' :context.selectedCountry: 'select Location'}</span>
        </div>
        <span className="angle-icon ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog open={isOpenModel} onClose={()=>setIsOpenMode(false)} className="locationModel">
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={()=>setIsOpenMode(false)}><IoMdClose /></Button>
        <div className="headerSearch  w-100">
          <input
            type="text"
            name="item-name"
            placeholder="Search your Area..."
            onChange={filterList}
          />
          <Button > 
            <CiSearch />
          </Button>
        </div>

        <ul className="countryList mt-3">
         {
          countryList?.length!==0 && countryList?.map((item,index)=>{
            return(

              <li key={index}><Button onClick={()=>selectCountry(index,item.country) }className={`${selectedTab==index? 'active':''}`}>{item.country}</Button></li>
            )
          })
         }
        </ul>
        
      </Dialog>
    </>
  );
}

export default CountryDrop;
