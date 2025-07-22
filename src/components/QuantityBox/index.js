import React, { useState } from 'react'
import { FiMinus } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import Button from '@mui/material/Button'
function QuantityBox() {

    const[inputVal,setinputVal]=useState(1);

    const minus=()=>{
        if(inputVal>0){

            setinputVal(inputVal-1);
        }
        
    }
    const plus=()=>{
        setinputVal(inputVal+1);
    }




  return (
    <>
      <div className="quantityDrop d-flex align-items-center">
                        <Button onClick={minus}><FiMinus/></Button>
                        <input type="text" value={inputVal}/>
                        <Button onClick={plus}><IoAddOutline/></Button>
                    </div>
      
    </>
  )
}

export default QuantityBox
