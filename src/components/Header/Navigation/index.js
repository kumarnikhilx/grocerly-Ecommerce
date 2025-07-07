import React from "react";
import Button from "@mui/material/Button";
import { IoMenuOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 navpart1">
              <Button className="allCartTab  ">
                <span className="menu-logo mr-2">
                  <IoMenuOutline />
                </span>
                <span className="text mr-2">All Catogary</span>
                <span className="down-Angle ">
                  <FaAngleDown />
                </span>
              </Button>
            </div>
            <div className="col-sm-10 navPart2 d-flex align-items-center">
              <ul className="list list-inline ml-auto">
                <li className="list-inline-item">
                  <Link to="/"><Button>Home</Button></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>Fashion</Button></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>electronic</Button></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>bakery</Button></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>grocery</Button></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>Mobile</Button></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>blog</Button></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/"><Button>contact</Button></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
