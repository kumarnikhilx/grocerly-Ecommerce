import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import Button from "@mui/material/Button";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from "@mui/material/ListItemIcon";
import { FaShieldHalved } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { Divider } from "@mui/material";
import { MyContext } from "../../App";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNotificationDrop, setIsOpenNotificationDrop] = useState(null);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpenNotificationDrop);

    const context=useContext(MyContext);


  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };
  const handleOpennotificationsDrop = () => {
    setIsOpenNotificationDrop(true);
  };
  const handleClosenotificationsDrop = () => {
    setIsOpenNotificationDrop(false);
  };

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center  w-100 ">
            <div className="col-sm-2 logo part1">
              <Link to={"/"}>
                <img src={logo} className="w-100"></img>
              </Link>
              <span className="ml-2">HOTASH</span>
            </div>

            <div className="part2 col-sm-3 d-flex align-items-center pl-4">
              <Button className="rounded-circle mr-3  " onClick={context.toggleSidebar}>
                {
                  !context.isToggled ? < MdMenuOpen/> :<MdOutlineMenu/>
                }
              </Button>
              <SearchBox />
            </div>
            <div className="part3 col-sm-7 d-flex align-items-center  justify-content-end pl-4">
              <Button className="rounded-circle mr-3  ">
                <MdOutlineLightMode />
              </Button>

              <Button className="rounded-circle mr-3 ">
                <IoCartOutline />
              </Button>
              <Button className="rounded-circle mr-3  ">
                <MdOutlineMailOutline />
              </Button>

              {/*---------------------------notifictions---------------------*/}
              <div className="dropdownWrapper position-relative">
                <Button
                  className="rounded-circle mr-3  "
                  onClick={handleOpennotificationsDrop}
                >
                  <CiBellOn />
                </Button>
                <Menu
                  anchorEl={isOpenNotificationDrop}
                  className="notifications dropdown_list"
                  id="notifications"
                  open={openNotifications}
                  onClose={handleClosenotificationsDrop}
                  onClick={handleClosenotificationsDrop}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="head pl-3 pb-0">
                    <h4>Order (12)</h4>
                  </div>
                  <Divider className="mb-1" />
                  <div className="scroll">
                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikhil</b>
                              added to his favorite list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikhil</b>
                              added to his favorite list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikhil</b>
                              added to his favorite list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikhil</b>
                              added to his favorite list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikhil</b>
                              added to his favorite list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikhil</b>
                              added to his favorite list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikhil</b>
                              added to his favorite list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikhil</b>
                              added to his favorite list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikhil</b>
                              added to his favorite list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img
                                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Nikhil</b>
                              added to his favorite list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few second ago</p>
                        </div>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="pl-3 pr-3 w-100 pb-1 pt-2" >
                    <Button className="btn-blue w-100  ">
                      View All Notification
                    </Button>
                  </div>
                </Menu>
              </div>

              <div className="myAccWrapper">
                {/* ✅ Only Button */}
                <Button
                  className="myAcc d-flex align-items-center"
                  onClick={handleOpenMyAccDrop}
                >
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt="profileImage"
                      />
                    </span>
                  </div>
                  <div className="UserInfo">
                    <h4>Nikhil Kumar</h4>
                    <p className="m-0">@kumarnikhilx007</p>
                  </div>
                </Button>

                {/* ✅ Keep Menu separate */}
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAcc}
                  onClose={handleCloseMyAccDrop} // closes when clicked outside
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    My Account
                  </MenuItem>

                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <FaShieldHalved fontSize="small" />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>

                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
