import React, { useContext, useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import Button from "@mui/material/Button";
import { FaProductHunt } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { MyContext } from "../../App";

function Sidebar() {
  const [activeTab, setActiveTab] = useState(null);
  const [isToggle, setIsToggle] = useState(false);
  const context = useContext (MyContext);
  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setIsToggle(!isToggle);
  };
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 0 && isToggle ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(0)}
              >
                <span className="icon">
                  <MdSpaceDashboard />
                </span>
                Dashboard
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className={`w-100 ${activeTab === 1 && isToggle ? "active" : ""}`}
              onClick={() => isOpenSubmenu(1)}
            >
              <span className="icon">
                <FaProductHunt />
              </span>
              Products
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggle ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">
                    <span className="blinkLine ">|</span>Product List
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="blinkLine">|</span>Product View
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="blinkLine">|</span>Product Upload
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 2 && isToggle ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(2)}
              >
                <span className="icon">
                  <IoCart />
                </span>
                Orders
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 3 && isToggle ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(3)}
              >
                <span className="icon">
                  <MdMessage />
                </span>
                Messages
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 4 && isToggle ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(4)}
              >
                <span className="icon">
                  <IoIosNotifications />
                </span>
                Notifications
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 5 && isToggle ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(5)}
              >
                <span className="icon">
                  <IoIosSettings />
                </span>
                Setting
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 6 && isToggle ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(6)}
              >
                <span className="icon">
                  <IoIosSettings />
                </span>
                Setting
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 7 && isToggle ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(7)}
              >
                <span className="icon">
                  <IoIosSettings />
                </span>
                Setting
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 8 && isToggle ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(8)}
              >
                <span className="icon">
                  <IoIosSettings />
                </span>
                Setting
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 9 && isToggle ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(9)}
              >
                <span className="icon">
                  <IoIosSettings />
                </span>
                Setting
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 10 && isToggle ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(10)}
              >
                <span className="icon">
                  <IoIosSettings />
                </span>
                Setting
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 11 && isToggle ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(11)}
              >
                <span className="icon">
                  <IoIosSettings />
                </span>
                Setting
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 12 && isToggle ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(12)}
              >
                <span className="icon">
                  <IoIosSettings />
                </span>
                Setting
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
        </ul>
        <div className="logoutWrapper">
          <div className="logoutBox">
            <Button variant="contained">
              <IoIosLogOut />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
