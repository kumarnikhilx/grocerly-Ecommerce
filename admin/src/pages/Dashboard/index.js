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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";
import FormHelperText from "@mui/material";
import Select from "@mui/material/Select";
import { Chart } from "react-google-charts";
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Pagination from "@mui/material/Pagination";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  backgroundColor: "transparent",
  chartArea: { width: "90%", height: "80%" },
  pieHole: 0.4,
};

function Dashboard() {
  const [showBy, setShowBy] = useState("");
  const [catBy, setCatBy] = useState("");
  const [brandBy, setBrandBy] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
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
              <p>$3,578.90 in last month</p>
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
        <div className="card  p-3 mt-4">
          <h3 className="hd">Best Selling Products</h3>

          <div className="row cardFilters mt-2">
            <div className="col-md-3">
              <h4>SHOW BY</h4>
              <FormControl sx={{ m: 1, minWidth: 120 }} className="w-100">
                <Select
                  value={showBy}
                  onChange={(e) => setShowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="w-100"
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={12}>12 row</MenuItem>
                  <MenuItem value={24}>24 row</MenuItem>
                  <MenuItem value={36}>36 row</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>CATEGORY BY</h4>
              <FormControl sx={{ m: 1, minWidth: 120 }} className="w-100">
                <Select
                  value={catBy}
                  onChange={(e) => setCatBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="w-100"
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>BRAND BY</h4>
              <FormControl sx={{ m: 1, minWidth: 120 }} className="w-100">
                <Select
                  value={brandBy}
                  onChange={(e) => setBrandBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="w-100"
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={10}>Woodland</MenuItem>
                  <MenuItem value={20}>Raymond</MenuItem>
                  <MenuItem value={30}>Bata</MenuItem>
                  <MenuItem value={40}>ashokleyland</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>SEARCH BY</h4>
              <FormControl sx={{ m: 1, minWidth: 120 }} className="w-100">
                <Select
                  value={searchBy}
                  onChange={(e) => setSearchBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="w-100"
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered mt-3">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th>PRODUCT </th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      <span className="ml-2">
                        <b>#1</b>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex productItem">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt=""
                            className="w-100"/>
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirt set for Female..</h6>
                        <p>
                          Women's exclusive summer Tops and Skirt Set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womens</td>
                  <td>ridhman</td>
                  <td>
                    <div className="priceSec">
                      <span className="oldPrice">$21.09</span>
                      <span className="newPrice">$19.98</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="viewBtn">
                        <FaEye />{" "}
                      </Button>
                      <Button className="editBtn">
                        <FaPencil />
                      </Button>
                      <Button className="deleteBtn">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      <span className="ml-2">
                        <b>#1</b>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex productItem">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt=""
                            className="w-100"/>
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirt set for Female..</h6>
                        <p>
                          Women's exclusive summer Tops and Skirt Set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womens</td>
                  <td>ridhman</td>
                  <td>
                    <div className="priceSec">
                      <span className="oldPrice">$21.09</span>
                      <span className="newPrice">$19.98</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="viewBtn">
                        <FaEye />{" "}
                      </Button>
                      <Button className="editBtn">
                        <FaPencil />
                      </Button>
                      <Button className="deleteBtn">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      <span className="ml-2">
                        <b>#1</b>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex productItem">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt=""
                            className="w-100"/>
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirt set for Female..</h6>
                        <p>
                          Women's exclusive summer Tops and Skirt Set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womens</td>
                  <td>ridhman</td>
                  <td>
                    <div className="priceSec">
                      <span className="oldPrice">$21.09</span>
                      <span className="newPrice">$19.98</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="viewBtn">
                        <FaEye />{" "}
                      </Button>
                      <Button className="editBtn">
                        <FaPencil />
                      </Button>
                      <Button className="deleteBtn">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      <span className="ml-2">
                        <b>#1</b>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex productItem">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt=""
                            className="w-100"/>
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirt set for Female..</h6>
                        <p>
                          Women's exclusive summer Tops and Skirt Set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womens</td>
                  <td>ridhman</td>
                  <td>
                    <div className="priceSec">
                      <span className="oldPrice">$21.09</span>
                      <span className="newPrice">$19.98</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="viewBtn">
                        <FaEye />{" "}
                      </Button>
                      <Button className="editBtn">
                        <FaPencil />
                      </Button>
                      <Button className="deleteBtn">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      <span className="ml-2">
                        <b>#1</b>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex productItem">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt=""
                            className="w-100"/>
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirt set for Female..</h6>
                        <p>
                          Women's exclusive summer Tops and Skirt Set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womens</td>
                  <td>ridhman</td>
                  <td>
                    <div className="priceSec">
                      <span className="oldPrice">$21.09</span>
                      <span className="newPrice">$19.98</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="viewBtn">
                        <FaEye />{" "}
                      </Button>
                      <Button className="editBtn">
                        <FaPencil />
                      </Button>
                      <Button className="deleteBtn">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      <span className="ml-2">
                        <b>#1</b>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex productItem">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt=""
                            className="w-100"/>
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirt set for Female..</h6>
                        <p>
                          Women's exclusive summer Tops and Skirt Set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womens</td>
                  <td>ridhman</td>
                  <td>
                    <div className="priceSec">
                      <span className="oldPrice">$21.09</span>
                      <span className="newPrice">$19.98</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="viewBtn">
                        <FaEye />{" "}
                      </Button>
                      <Button className="editBtn">
                        <FaPencil />
                      </Button>
                      <Button className="deleteBtn">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      <span className="ml-2">
                        <b>#1</b>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex productItem">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt=""
                            className="w-100"/>
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and Skirt set for Female..</h6>
                        <p>
                          Women's exclusive summer Tops and Skirt Set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womens</td>
                  <td>ridhman</td>
                  <td>
                    <div className="priceSec">
                      <span className="oldPrice">$21.09</span>
                      <span className="newPrice">$19.98</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="viewBtn">
                        <FaEye />{" "}
                      </Button>
                      <Button className="editBtn">
                        <FaPencil />
                      </Button>
                      <Button className="deleteBtn">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="paginationWrapper d-flex justify-content-end">
              <Pagination count={10} color="primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
