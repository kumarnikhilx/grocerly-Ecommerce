import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import CountryDrop from "./components/CountryDrop";
import Footer from "./components/Footer";
import ProductModel from "./components/ProductModel";
import Listing from "./pages/Listing";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState("");
  const [isOpenProductModel, setisOpenProductModel] = useState(false);
  const [isHeaderFooterShow,setisHeaderFooterShow]=useState(true);
  const [isLogin,setisLogin]=useState(false);


  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const resonsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
    });
  };

  const values = {
    countryList,
    selectedCountry,
    setselectedCountry,
    isOpenProductModel,
    setisOpenProductModel,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setisLogin
  };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          {
            isHeaderFooterShow===true &&  <Header />
          }
         
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/cat/:id" exact={true} element={<Listing />} />
            <Route path="/product/:id" exact={true} element={<ProductDetails/>} />
            <Route path="/cart" exact={true} element={<Cart/>} />
            <Route path="/signIn" exact={true} element={<SignIn/>} />
            <Route path="/signUp" exact={true} element={<SignUp/>} />
          </Routes>
           {
            isHeaderFooterShow===true &&  <Footer />
          }
          
          {isOpenProductModel === true && <ProductModel />}
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { MyContext };
