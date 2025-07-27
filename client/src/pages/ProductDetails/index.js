import Button from "@mui/material/Button";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import ProductZoom from "../../components/ProductZoom";
import QuantityBox from "../../components/QuantityBox";
import { BsCartFill } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShuffleOutline } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts";

function ProductDetails() {
  const [activeSize, setActiveSize] = useState(0);
  const [activeTabs, setActiveTabs] = useState(0);
  const sizes = ["50g", "100g", "200g", "300g", "400g"];
  const productSizeList = sizes.map((size, index) => (
    <li className="list-inline-item" key={index}>
      <a
        className={`tag ${activeSize === index ? "active" : ""}`}
        onClick={() => setActiveSize(index)}
      >
        {size}
      </a>
    </li>
  ));

  /*productTab*/
  const currentProduct = {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac",
    additionalInfo: [
      {
        label: "Stand Up",
        value: "35''L x 24''W x 37-45''H(front to back wheel)",
      },
      { label: "Folded (w/o wheels)", value: "32.5''L x 18.5''W x 16.5''H" },
      { label: "Folded (w/ wheels)", value: "32.5''L x 24''W x 18.5''H" },
      { label: "Door Pass Through", value: "24" },
      { label: "Frame", value: "Aluminum" },
      { label: "Weight (w/o wheels)", value: "20 LBS" },
      { label: "Weight Capacity", value: "60 LBS" },
      { label: "Width", value: '24"' },
      { label: "Handle height (ground to handle)", value: '37-45"' },
      { label: "Wheels", value: '12" air / wide track slick tread' },
      { label: "Seat back height", value: '21.5"' },
      { label: "Head room (inside canopy)", value: '25"' },
      { label: "Color", value: "Black, Blue, Red, White" },
      { label: "Size", value: "M, S" },
    ],
  };

  const reviews = [
    { name: "Frankie Pinat", date: "2025-07-01", comment: "good", rating: 5 },
    {
      name: "Frankie Pinat",
      date: "2025-07-01",
      comment: "Nice Product",
      rating: 1,
    },
    {
      name: "Famuyiwa Ahmed",
      date: "2025-06-22",
      comment: "It a good product",
      rating: 5,
    },
    {
      name: "Ayxan Musayev",
      date: "2025-06-21",
      comment: "quality Product",
      rating: 1,
    },
    {
      name: "Dev Prajapati",
      date: "2025-06-20",
      comment: "Cheap Price",
      rating: 5,
    },
    { name: "Randy Orton", date: "2025-06-16", comment: "Love It", rating: 4 },
  ];
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>
            <div className="col-md-7 pr-5">
              <h2 className="text-capitalize hd">
                All Natural Itallian-style chicken Meatballs
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center"></div>
                  <span className=" mr-2">Brands:</span>
                  <span> Welch's</span>
                </li>
                <li className="list-inline-item ml-5">
                  <div className="d-flex align-content-center">
                    <Rating
                      name="read-only"
                      defaultValue={5}
                      precision={4.5}
                      size="size"
                      readOnly
                    />
                    <span className="cursor ml-2">Review</span>
                  </div>
                </li>
              </ul>
              <div className="d-flex info mb-3">
                <span className="oldPrice">$20.00</span>
                <span className="netPrice text-danger ml-2">$14.00</span>
              </div>

              <span className="badge badge-success">IN STOCK</span>
              <p className="mt-3">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquent. Vivamus adipiscing nisl ut dolor dignissim semper.
                Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu
                ad litora torquent.
              </p>
              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0 pl-4">
                  {productSizeList}
                </ul>
              </div>

              <div className="d-flex align-items-center mt-3 gap-3">
                <QuantityBox />

                <Button className="btn-red btn-lg btn-big btn-round d-flex align-items-center ">
                  <BsCartFill className="mr-3" />
                  Add to Cart
                </Button>
                <Tooltip
                  title="Add to Wishlist"
                  placement="top"
                  className="ml-3"
                >
                  <Button className="btn-blue btn-lg btn-big btn-round btn-circle">
                    <IoIosHeartEmpty />
                  </Button>
                </Tooltip>
                <Tooltip
                  title="Add to Compare"
                  placement="top"
                  className="ml-2"
                >
                  <Button className="btn-blue btn-lg btn-big btn-round btn-circle ">
                    <IoShuffleOutline />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
          <br/>
     
          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`btn ${activeTabs === 0 ? "active" : ""}`}
                    onClick={() => setActiveTabs(0)}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`btn ${activeTabs === 1 ? "active" : ""}`}
                    onClick={() => setActiveTabs(1)}
                  >
                    Additional Info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`btn ${activeTabs === 2 ? "active" : ""}`}
                    onClick={() => setActiveTabs(2)}
                  >
                    Reviews ({reviews.length})
                  </Button>
                </li>
              </ul>

              {activeTabs === 0 && (
                <div className="tabContent">
                  <p>{currentProduct.description}</p>
                </div>
              )}

              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        {currentProduct.additionalInfo.map((item, index) => (
                          <tr key={index}>
                            <th>{item.label}</th>
                            <td>{item.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTabs === 2 && (
                <div className="tabContent">
                  <h5 className="">Customer questions & answers</h5>
                  {reviews.map((rev, i) => (
                    <div
                      key={i}
                      className="review d-flex align-content-center "
                    >
                      <div className="personReview">
                        <strong>{rev.name}</strong>
                        <div className="date">{rev.date}</div>
                        <p>{rev.comment}</p>
                      </div>
                      <div className="personRating ml-auto">
                        <Rating value={rev.rating} readOnly precision={0.5} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

               <br/>

               <RelatedProducts title={'RELATED PRODUCTS'}/>
               <RelatedProducts title={'RECENTLY VIEW PRODUCTS'}/>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
