import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../../../Assets/images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from '../../../Assets/images/home.png'
import User from '../../../Assets/images/user.png'
import product from '../../../Assets/images/product.png'
import order from '../../../Assets/images/order.png'
import customer from '../../../Assets/images/CustomerService.png'
import Reports from '../../../Assets/images/reportsanalytics.png'
import Marketing from '../../../Assets/images/marketingautomation.png'
import Class from '../../../Assets/images/classmanagement.png'
import bottomborder from '../../../Assets/images/bottomborder.png'
import arrow from '../../../Assets/images/arrow.png'
import bottomtop from '../../../Assets/images/bordertop.png'
import prifileimg from '../../../Assets/images/prifileimg.png'
 

import {
  faBorderAll,
  faUser,
  faEye,
  faMoneyBill1,
  faTasks
} from "@fortawesome/free-solid-svg-icons";
import {
  faMessage,
} from "@fortawesome/free-regular-svg-icons";

import "./style.css";

export const Sidebar = (props) => {

  const location = useLocation()
  return (
    <div className={`sidebar ${props.sideClass}`} id="sidebar">
      <ul className="list-unstyled">
       


        <li className="sidebar-li">



          <Link className="sideLink" to="/">
            {/* <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span> */}
            <span className="sideLinkText"><img src={logo} /> </span>
          </Link>
        </li>
         
 






 


        <li className=" ">
          <Link className="sideLink" to="#">
            <span className="sideIcon">
            <img src={prifileimg} />
            </span>
            <span className="sideLinkText"> Admin Name Here</span>
 
          </Link>
        </li>


        <li className=" ">
          <div className="bottomborder  mt-2" >
            <span className="sideIcon">
              <img src={bottomtop} />
            </span>
            <span className="sideIcon me-5" id="arrow">

            </span>
 
          </div>
        </li>



        <li className="">
          <Link className="sideLink " to="#">
 
            <span className="sideLinkText fw-bold"><h5>Pages </h5> </span>
 
          </Link>
        </li>
        {/* <li className=" "> */}
        <img src={bottomborder} />

        {/* </li> */}

        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/dashboard') ? 'active' : ''}`} to="/dashboard">
            <span className="sideIcon">
              <img src={Home} id="sidelogo" />
            </span>
            <span className="sideLinkText">Dashboard</span>
            <span className="sideIcon me-5" id="arrow">
              <img src={arrow} id="arrow" />
            </span>
          </Link>
        </li>
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/home') ? 'active' : ''}`} to="#">
            <span className="sideIcon">
              <img src={Home} id="sidelogo" />
            </span>
            <span className="sideLinkText">Home</span>
            <span className="sideIcon me-5" id="arrow">
              <img src={arrow} id="arrow" />
            </span>
          </Link>
        </li>


        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/user-management') ? 'active' : ''}`} to="/user-management">
            <span className="sideIcon">
              <img src={User} id="sidelogo" />
            </span>
            <span className="sideLinkText"> User Management   </span>
            <span className="sideIcon me-5" id="arrow">
              <img src={arrow} id="arrow" />
            </span>
          </Link>
        </li>





        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/product-management') ? 'active' : ''}`} to="/product-management">
            <span className="sideIcon">
              <img src={product} id="sidelogo" />
            </span>
            <span className="sideLinkText">   Product Management   <img src={arrow} id="arrow" /> </span>
            <span className="sideIcon me-5" id="arrow">

            </span>
          </Link>
        </li>







        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/orders-management') ? 'active' : ''}`} to="/orders-management">
            <span className="sideIcon">
              <img src={order} id="sidelogo" />
            </span>
            <span className="sideLinkText">Orders Management </span>
            <span className="sideIcon me-5" id="arrow">
              <img src={arrow} id="arrow" />
            </span>
          </Link>
        </li>

        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/customer-sevices-support-management') ? 'active' : ''}`} to="#">
            <span className="sideIcon">
              <img src={customer} id="sidelogo" />
            </span>
            <span className="sideLinkText">Customer Sevices & Support  <img src={arrow} id="arrow" />


            </span>
          </Link>
        </li>


        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/reports-analytics-management') ? 'active' : ''}`} to="/reports-analytics-management">
            <span className="sideIcon">
              <img src={Reports} id="sidelogo" />
            </span>
            <span className="sideLinkText">Reports & Analytics  </span>
            <span className="sideIcon me-5" id="arrow">
              <img src={arrow} id="arrow" />
            </span>
          </Link>
        </li>



        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/marketing-automation-managemen') ? 'active' : ''}`} to="#">
            <span className="sideIcon">
              <img src={Marketing} id="sidelogo" />
            </span>
            <span className="sideLinkText">Marketing Automation             <img src={arrow} id="arrow" />  </span>
            <span className="sideIcon me-5" id="arrow">
              {/* <img src={arrow} id="arrow"/> */}
            </span>
          </Link>
        </li>



        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/class-management') ? 'active' : ''}`} to="#">
            <span className="sideIcon">
              <img src={Class} id="sidelogo" />
            </span>
            <span className="sideLinkText">Class  Management   </span>
            <span className="sideIcon me-5" id="arrow">
              <img src={arrow} id="arrow" />
            </span>
          </Link>
        </li>


        <li className="sidebar-li">
          <div className="bottomborder  mt-2" >
            <span className="sideIcon">
              <img src={bottomborder} />
            </span>
            <span className="sideIcon me-5" id="arrow">

            </span>
 
          </div>
        </li>









      </ul>
    </div>
  );
};
