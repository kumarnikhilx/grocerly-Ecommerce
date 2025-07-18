import { CiDeliveryTruck } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { LuBadgeDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span>
              <CiMail />
            </span>
            <span className="ml-2"> Everyday fresh products</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <CiDeliveryTruck />
            </span>
            <span className="ml-2">Daily Mega Discounts</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <CiDiscount1 />
            </span>
            <span className="ml-2">Free delivery for order over $70</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <LuBadgeDollarSign />
            </span>
            <span className="ml-2">Best price on the market</span>
          </div>
        </div>

        <div className="row mt-5 linksWrap">
          <div className="col">
            <h5>FRUITS & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#">fresh vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruites</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & veggies</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUITS & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#">fresh vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruites</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & veggies</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUITS & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#">fresh vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruites</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & veggies</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUITS & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#">fresh vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruites</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & veggies</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUITS & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#">fresh vegetables</Link>
              </li>
              <li>
                <Link to="#">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="#">Fresh Fruites</Link>
              </li>
              <li>
                <Link to="#">Exotic Fruits & veggies</Link>
              </li>
              <li>
                <Link to="#">Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to="#">Packaged Produce</Link>
              </li>
              <li>
                <Link to="#">Party Trays</Link>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="copyright mt-3 pb-3 d-flex">
            <p className="=mb-0">copyright 2024.All rights reserves</p>
            <ul className="list list-inline ml-auto mb-0">
                <li className="list-inline-item">
                    <Link to="#"><FaFacebook/></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="#"><FaInstagram/></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="#"><FaTwitter/></Link>
                </li>
            </ul>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
