import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <>     
      <header className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row d-flex align-items-center ">
            <div className="col-xs-3 logo">
              <Link to={"/"}>
                <img src={logo}></img>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
