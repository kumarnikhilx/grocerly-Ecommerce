import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoIosTimer } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import DashboardBox from "./Components/dashboardBox";
import { FaShoppingCart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { GoStarFill } from "react-icons/go";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Chart } from 'react-google-charts';

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400], 
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

  
export const options={
 backgroundColor: 'transparent',
 'chartArea': {width: '90%', height: '80%'},
 pieHole: 0.4,
 
};

function Dashboard() {
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
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#1da256", "#48d483"]}
                icon={<FaUserCircle />}
                grow={true}
              />
              <DashboardBox
                color={["#c012e2", "#eb64fe"]}
                icon={<FaShoppingCart />}
              />
              <DashboardBox
                color={["#2c78e5", "#60aff5"]}
                icon={<MdShoppingBag />}
              />
              <DashboardBox
                color={["#e1950e", "#f3cd29"]}
                icon={<GoStarFill />}
              />
            </div>
          </div>
          <div className="col-md-4 pl-0">
            <div className="box graphBox">
              <div className="d-flex justify-content-between align-items-center mt-3 ">
                <span className="text-white font-weight-bold">Total Sales</span>
                <Button className="toggleIcon" onClick={handleClick}>
                  <BsThreeDotsVertical />
                </Button>

                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    paper: {
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <IoIosTimer className="mr-2" /> Last Day
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <IoIosTimer className="mr-2" /> Last Week
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <IoIosTimer className="mr-2" /> Last Month
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <IoIosTimer className="mr-2" /> Last Year
                  </MenuItem>
                </Menu>
              </div>
              <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
              <p >$3,578.90 in last month</p>
              <Chart
                chartType="PieChart"
                width="100%" 
                height="170px"
                data={data}
                options={options}
              />
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Dashboard;
