import TextField from "@mui/material/TextField";
import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import logo from "../../assests/images/logo.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import googleImg from "../../assests/images/googleImg.png";

function SignIn() {
  const context = useContext(MyContext);
  useEffect(() => {
    context.setisHeaderFooterShow(false);
  }, []);
  return (
    <>
      <section className="section signInPage">
        <div className="shape-bottom">
          <svg
            fill="#fff"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 1921 819.8">
            <path
              class="st0"
              d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
            ></path>
          </svg>
        </div>

        <div className="container">
          <div className="box card p-3 shadow border-0">
            <div className="text-center">
              <img src={logo} alt="" className="w-100" />
            </div>

            <form action="" className="mt-3">
              <h2 className="mb-3">Sign In</h2>
              <div className="form-group">
                <TextField
                  id="standard-basic"
                  label="Email"
                  type="email"
                  variant="standard"
                  required
                  className="w-100"
                />
              </div>
              <div className="form-group">
                <TextField
                  id="standard-basic"
                  label="Password"
                  type="password"
                  variant="standard"
                  required
                  className="w-100"
                />
              </div>
              <a className="border-effect cursor">forget Password?</a>

              <div className="d-flex align-items-center mt-3 mb-3 ">
                <Button className="btn-blue col btn-lg btn-big">Sign In</Button>
                <Link to="/">
                  <Button
                    onClick={() => context.setisHeaderFooterShow(true)}
                    className="btn-lg btn-big col ml-3" variant="outlined">
                    Cancel
                  </Button>
                </Link>
              </div>
              <p>
                Not Registered?
                <Link to="/signUp" className="border-effect cursor ml-1">
                  Sign Up
                </Link>
              </p>
              <h6 className="mt-4 text-center font-weight-bold">
                Or continue with google account
              </h6>
              <Button className="loginWithGoogle mt-2" variant="outlined">
                <img src={googleImg} alt="" className="w-100" />
                Sign In with Google
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
