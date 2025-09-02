import React from "react";
import Button from "@mui/material/Button";
import { RxDashboard } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import DashboardBox from "./Components/dashboardBox";
import { FaShoppingCart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { GoStarFill } from "react-icons/go";

function Dashboard() {
  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox color={["#1da256","#48d483"]} icon={<FaUserCircle/>} grow={true}/>
              <DashboardBox color={["#c012e2","#eb64fe"]} icon={<FaShoppingCart/>}/>
              <DashboardBox color={["#2c78e5","#60aff5"]} icon={<MdShoppingBag/>}/>
              <DashboardBox color={["#e1950e","#f3cd29"]} icon={<GoStarFill/>} />
            </div>
          </div>
          <div className="col-md-4 pl-0">
            <div className="box graphBox">
              <h4></h4>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
