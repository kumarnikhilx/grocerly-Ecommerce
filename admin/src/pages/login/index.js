import { MdEmail } from "react-icons/md";
import React, { useContext, useEffect } from "react";
import logo from "../../assets/logo.webp";
import pattern from "../../assets/loginPattern.webp";
import { MyContext } from "../../App";

function Login() {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarandHeader(true);
    context.setIsLoggedIn(true);
  }, []);
  return (
    <>
      <img src={pattern} alt="" className="loginPatern" />
      <div className="loginSection">
        <div className="loginBox p-4">
          <div className="logo text-center mb-4">
            <img src={logo} alt="" width={"60px"} />
            <h3 className="font-weight-bold">Login to NoTash</h3>
          </div>
          <div className="wrapper mt-3 card border p-4">
            <form action="">
              <div className="form-group mb-3 position-relative">              
                   <div className="icon">
                    <MdEmail />
                   </div>
                <input type="text" className="form-control" name="" id="" placeholder="Enter Your Email" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
