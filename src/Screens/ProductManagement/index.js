import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faEye,
  faCheck,
  faTimes,
  faFilter,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";

import CustomPagination from "../../Components/CustomPagination";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import dummy from "../../Assets/images/female2.jpg";
import userSubtract from '../../Assets/images/userSubtract.png'
import useraccount from '../../Assets/images/useraccount.png'
import userVector from '../../Assets/images/userVector.png'
import deletes from '../../Assets/images/delete.png'
import edit from '../../Assets/images/edit.png'

import "./style.css";

import { users } from "./Data";

export const Productmanagement = () => {
  // const url = process.env.REACT_APP_BASE_URL;


  const base_url = process.env.REACT_APP_API_URL;

  // const base_url = "https://custom2.mystagingserver.site/food-stadium/public/";
  const [data, setData] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [showModal2, setShowModal2] = useState(false);
  // const [showModal3, setShowModal3] = useState(false);
  // const [showModal4, setShowModal4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // console.log();

  const hanldeRoute = () => {
    navigate("/add-user");
  };

  // const inActive = () => {
  //   setShowModal(false);
  //   setShowModal2(true);
  // };
  // const ActiveMale = () => {
  //   setShowModal3(false);
  //   setShowModal4(true);
  // };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // const filterData = data?.filter((item) =>
  //   item?.name.toLowerCase().includes(inputValue.toLowerCase())
  // );

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  // const ProductData = () => {
  //   const LogoutData = localStorage.getItem("login");
  //   document.querySelector(".loaderBox").classList.remove("d-none");
  //   fetch(
  //     `${url}/public/api/vendor/product_listing`,
  //     {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${LogoutData}`,
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       document.querySelector(".loaderBox").classList.add("d-none");
  //       setData(data.data);
  //     })
  //     .catch((error) => {
  //       document.querySelector(".loaderBox").classList.add("d-none");
  //       console.log(error);
  //     });
  // };






  const ProductData = () => {
    const consumerKey = process.env.REACT_APP_CONSUMERKEY
    const consumerSecret = process.env.REACT_APP_CONSUMERSECRET;
    const encodedCredentials = btoa(`${consumerKey}:${consumerSecret}`);

    document.querySelector(".loaderBox").classList.remove("d-none");

    fetch(
      `${base_url}/wc/v3/products`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.querySelector(".loaderBox").classList.add("d-none");
        setData(data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };





  const ProductDatadelete = (id) => {
    const consumerKey = process.env.REACT_APP_CONSUMERKEY
    const consumerSecret = process.env.REACT_APP_CONSUMERSECRET;
    const encodedCredentials = btoa(`${consumerKey}:${consumerSecret}`);

    document.querySelector(".loaderBox").classList.remove("d-none");

    fetch(
      `${base_url}/wc/v3/products/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.querySelector(".loaderBox").classList.add("d-none");
        // setData(data);
        ProductData()
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };




  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    return `${formattedDate} ${formattedTime}`;
  };

  useEffect(() => {
    document.title = "Brain Frias | Product Management";
    ProductData();
  }, []);

  const userHeaders = [
    {
      key: "id",
      title: "S.No",
    },
    // {
    //   key: "profile_pic",
    //   title: "Profile Pic",
    // },
    {
      key: "name",
      title: "name",
    },
    {
      key: "sku",
      title: "sku",
    },
    {
      key: "stock",
      title: " stock",
    },
    {
      key: "price",
      title: "price",
    },


    {
      key: "Categories",
      title: "Categories",
    },
    {
      key: "date",
      title: "date",
    },
    {
      key: "Action",
      title: "Action",
    },

  ];
  const handleedit = (id) => {
    navigate(`/edit-product/${id}`)
  }

  // const handledelete = async (id) => {
  //   document.querySelector(".loaderBox").classList.remove("d-none");
  //   try {
  //     const response = await GetbooksDelete(id);
  //     console.log("response", response);

  //     if (response?.status == true) {
  //       document.querySelector(".loaderBox").classList.add("d-none");
  //       booklist();
  //     }
  //   } catch (error) {
  //     console.error("Error in logging in:", error);

  //     // toastAlert(error, ALERT_TYPES.ERROR);
  //   }
  // };
  // handledelete
  // edit-product
  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              {/* dashCard */}
              <div className=" dashCard">
                <div className="userheader row  bg-black text-white justify-content-between">
                  <div className="col-md-6  ">
                    <h2 className="mainTitle">Product Management</h2>
                  </div>

                  <div className="      col-xl-4 col-md-6 stats d-flex   gap-3 ">
                    <input id="searchs" type="text" placeholder="search hear" />
                    <div>
                      <div className="  d-flex    gap-2 mt-2">
                        <img className="  text-white" src={useraccount} />
                        <img className="text-white" src={userSubtract} />
                        <img className=" text-white" src={userVector} />  </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className=" reporttable  mt-3 bg-white col-12">
                    <CustomTable headers={userHeaders}>
                      {data &&
                        data?.map((item, index) => (
                          <tbody>
                            <tr>
                              <td>{index + 1}</td>

                              <td className="text-capitalize">{item?.name}</td>
                              <td>{item?.sku}</td>
                              <td>In Stock {item?.bundle_stock_quantity}</td>
                              <td>${item?.price}</td>
                              <td>{item?.categories?.map((data) => (
                                <p className=" d-flex">
                                  {data?.name}
                                </p>

                              ))}</td>
                              <td>Published {formatDateTime(item?.date_created)}</td>


                              <td>



                                <div className="action" >

                                  <button onClick={() => handleedit(item?.id)} className="edit  bg-black    ">
                                    <FontAwesomeIcon
                                      icon={faEdit}
                                      className="tableActionIcon"
                                    /></button>
                                  <button onClick={() => ProductDatadelete(item?.id)} className="edit  bg-danger    ">
                                    <FontAwesomeIcon
                                      icon={faTrash}
                                      className="tableActionIcon"
                                    /></button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        ))}
                    </CustomTable>

                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </DashboardLayout>
    </>
  );
};