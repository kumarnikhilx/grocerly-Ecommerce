import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes,Router } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import CountryDrop from "./components/CountryDrop";
import Footer from "./components/Footer";
import ProductModel from "./components/ProductModel";
import Listing from "./pages/Home/Listing";

const MyContext= createContext();

function App() {

  const [countryList,setCountryList]= useState([]);
  const [selectedCountry,setselectedCountry]= useState('');
    const[isOpenProductModel,setisOpenProductModel]=useState(false);

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[]);

  

  const getCountry=async(url)=>{
     const resonsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
        // console.log(res.data.data)
     })
  };

  const values={
    countryList,selectedCountry,setselectedCountry,isOpenProductModel,setisOpenProductModel

  }
  return (
   <>
    <BrowserRouter>
    <MyContext.Provider value={values}>
    <Header/>
    <Routes>
      <Route path="/" exact={true} element={<Home/>}/>
      <Route path="/cat/:id" exact={true} element={<Listing/>}/>
      </Routes>
      <Footer/>
       {isOpenProductModel===true && <ProductModel/>}
      </MyContext.Provider>
      </BrowserRouter>
   </>
  );
}

export default App;
export {MyContext};
