import { MdEmail } from "react-icons/md";
import React, { useContext, useEffect } from "react";
import logo from "../../assets/logo.webp";
import pattern from "../../assets/loginPattern.webp";
import { MyContext } from "../../App";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoEyeOffSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import googleImage from "../../assets/googleImage.png";

function Login() {
  const context = useContext(MyContext);
  const [inputIndex, setInputIndex] = React.useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const focusInput = (index) => {
    setInputIndex(index);
  };

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
          <div className="wrapper mt-3 card border ">
            <form action="">
              <div
                className={`form-group mb-3 position-relative ${
                  inputIndex === 0 ? "focus" : ""
                }`}
              >
                <div className="icon">
                  <MdEmail />
                </div>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  placeholder="Enter Your Email"
                  onFocus={() => focusInput(0)}
                  onBlur={() => setInputIndex(null)}
                />
              </div>
              <div
                className={`form-group mb-3 position-relative ${
                  inputIndex === 1 ? "focus" : ""
                }`}
              >
                <div className="icon">
                  <RiLockPasswordFill />
                </div>
                <input
                  type="password"
                  className="form-control"
                  name=""
                  id=""
                  placeholder="Enter Your Password"
                  onFocus={() => focusInput(1)}
                  onBlur={() => setInputIndex(null)}
                />

                <div className="passwordToggler" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                  {isPasswordVisible ? <IoMdEye /> : <IoEyeOffSharp />}
                </div>
                <div className="form-group">
                  <Button className="btn-blue btn-big w-100">SIGN IN</Button>
                </div>
                <div className="form-group text-center forget-password mb-0">
                  <Link to={"/forgot-password"} className="link">FORGOT PASSWORD?</Link>
                  <div className="or mt-3 mb-3">
                    <span className="line"></span>                    
                    <span className="text">OR</span>
                    <span className="line"></span>
                  </div>

                  <Button variant="outlined" className="btn-lg w-100 loginWithGoogle " >
                  <img src={googleImage} alt="" className="w-25px"/> &nbsp; Sign In with Google
                  </Button>


                </div>
              </div>
            </form>
          </div>
          <div className="wrapper mt-3 card border p-3">
                <span className="text-center">Don't have an account?
                  <Link to={"/signUp"} className="link color">Register</Link>
                </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
