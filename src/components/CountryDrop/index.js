import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";


function CountryDrop(){
  return (
    <>
    <Button className='countryDrop'>
        <div className="info d-flex flex-column">
            <span className='label'> your Location</span>
            <span className="name">india</span>
            
        </div>
        <span className="angle-icon ml-auto"><FaAngleDown /></span>


    </Button>
    </>
  )
}

export default CountryDrop;
