import { IoIosTimer } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



function DashboardBox(props) {
    const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;
  return (
    <>
      <div
        className="dashboardBox"
        style={{
          backgroundImage: `linear-gradient(to right,${props.color?.[0]},${props.color?.[1]})`,
        }}
      >

        {
          props.grow===true ?
          (<span className="chart"><TrendingUpIcon/></span>
          ): (<span className="chart"><TrendingDownIcon/></span>)
        }
        <div className="d-flex w-100">
          <div className="col1">
            <h4 className="text-white">Total User</h4>
            <span className="text-white">277</span>
          </div>
          <div className=" ml-auto col2">
            {props.icon ? (<span className="icon">{props.icon ? props.icon : ""}</span>) : ("")}
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3 ">
          <span className="text-white font-weight-bold">last month</span>
          <Button className="toggleIcon" onClick={handleClick}><BsThreeDotsVertical/></Button>

          <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
        }}
      >
       <MenuItem onClick={handleClose}><IoIosTimer className="mr-2"/> Last Day</MenuItem>
       <MenuItem onClick={handleClose}><IoIosTimer className="mr-2"/> Last Week</MenuItem>
       <MenuItem onClick={handleClose}><IoIosTimer className="mr-2"/> Last Month</MenuItem>
       <MenuItem onClick={handleClose}><IoIosTimer className="mr-2"/> Last Year</MenuItem>  
      </Menu>
        </div>
      </div>
    </>
  );
}

export default DashboardBox;
