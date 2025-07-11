import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoMenuOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navigation() {
   const [isopenSlidebarVal, setisopenSlidebarVal]=useState(false);
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 navPart1">
              <div className="catWrapper">
                <Button className="allCartTab " onClick={()=>setisopenSlidebarVal(!isopenSlidebarVal)}>
                  <span className="menu-logo mr-2">
                    <IoMenuOutline />
                  </span>
                  <span className="text mr-2">All Catogary</span>
                  <span className="down-Angle ">
                    <FaAngleDown />
                  </span>
                </Button>
                <div className={`slideBarNav ${isopenSlidebarVal==true ? 'open': '' }`}>
                  <ul>
                    <li>  <Link to="/">
                    <Button>Men<FaAngleRight className="ml-auto"/></Button>
                    
                  </Link>
                  <div className="submenu">
                    <Link to="/"><Button>clothing</Button></Link>
                    <Link to="/"><Button>Footwear</Button></Link>
                    <Link to="/"><Button>Watches</Button></Link>
                   
                    </div>
                    </li>
                    <li>  <Link to="/">
                    <Button>Women<FaAngleRight className="ml-auto"/></Button>
                  </Link>
                  <div className="submenu">
                    <Link to="/"><Button>clothing</Button></Link>
                    <Link to="/"><Button>Footwear</Button></Link>
                    <Link to="/"><Button>Watches</Button></Link>
                   
                    </div></li>
                    <li>  <Link to="/">
                    <Button>Beauty <FaAngleRight className="ml-auto"/></Button>
                  </Link><div className="submenu">
                    <Link to="/"><Button>clothing</Button></Link>
                    <Link to="/"><Button>Footwear</Button></Link>
                    <Link to="/"><Button>Watches</Button></Link>
                   
                    </div></li>
                    <li>  <Link to="/">
                    <Button>watches <FaAngleRight className="ml-auto"/></Button>
                  </Link><div className="submenu">
                    <Link to="/"><Button>clothing</Button></Link>
                    <Link to="/"><Button>Footwear</Button></Link>
                    <Link to="/"><Button>Watches</Button></Link>
                   
                    </div></li>
                    <li>  <Link to="/">
                    <Button>Gift<FaAngleRight className="ml-auto"/></Button>
                  </Link><div className="submenu">
                    <Link to="/"><Button>clothing</Button></Link>
                    <Link to="/"><Button>Footwear</Button></Link>
                    <Link to="/"><Button>Watches</Button></Link>
                   
                    </div></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-10 navPart2 d-flex align-items-center">
              <ul className="list list-inline ml-auto">
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>Home</Button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>Men</Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>clothing
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>Footwear
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>watches
                      </Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>Women</Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>clothing
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>Footwear
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>watches
                      </Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>Beauty</Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>clothing
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>Footwear
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>watches
                      </Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>clothing
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>Footwear
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>watches
                      </Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>Kids </Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>clothing
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>Footwear
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>watches
                      </Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>Gifts</Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>clothing
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>Footwear
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>watches
                      </Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>Blog</Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>clothing
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>Footwear
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>watches
                      </Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>contact</Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>clothing
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>Footwear
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button>
                        <span className="blink"></span>watches
                      </Button>
                    </Link>
                  </div>
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
