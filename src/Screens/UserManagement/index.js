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

export const UserManagement = () => {
  // const base_url = "https://custom2.mystagingserver.site/food-stadium/public/";
  // const [data, setData] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [showModal2, setShowModal2] = useState(false);
  // const [showModal3, setShowModal3] = useState(false);
  // const [showModal4, setShowModal4] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(8);
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
  //   item.title.toLowerCase().includes(inputValue.toLowerCase())
  // );

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  // const ProductData = () => {
  //   const LogoutData = localStorage.getItem("login");
  //   document.querySelector(".loaderBox").classList.remove("d-none");
  //   fetch(
  //     "https://custom2.mystagingserver.site/food-stadium/public/api/vendor/product_listing",
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

  // useEffect(() => {
  //   document.title = "Soma Hire | Product Management";
  //   ProductData();
  // }, []);

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
      key: "username",
      title: "username",
    },
    {
      key: "name",
      title: "name",
    },
    {
      key: "email",
      title: " Email",
    },
    {
      key: "role",
      title: "Role",
    },
    
    
    {
      key: "action",
      title: "Action",
    },
  ];


const handleedit = () =>{
  navigate('/edit-user')
}
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
                    <h2 className="mainTitle">User Management</h2>
                  </div>
                
                         <div className=" col-xl-4 col-md-6 stats d-flex   gap-3 ">
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
                  <div className="reporttable  mt-3 bg-white col-12">
         


                 <CustomTable className=" mt-4 " headers={userHeaders}>
                      {users &&
                        users.map((item, index) => (
                          <tbody>
                            <tr>
                              <td>{index + 1}</td>
                              {/* <td>
                                <img
                                  src={item.profile_pic}
                                  className="avatarIcon"
                                />
                              </td> */}
                              <td className="text-capitalize">{item.name}</td>
                              <td>Lorem.Ipsum</td>
                              <td>{item.personal_email}</td>
                              <td>Customer</td>
                          
                                      <td>
                          
                            
                            
                                <div className="action" >
                                   
                                <button onClick={handleedit} className="edit  bg-black    ">   
                                      <FontAwesomeIcon
                                        icon={faEdit}
                                        className="tableActionIcon"
                                      /></button>
                                    <button className="edit  bg-danger    ">   
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
             
                    {/* <CustomPagination
                      itemsPerPage={itemsPerPage}
                      totalItems={data.length}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <CustomModal
            show={showModal}
            close={() => {
              setShowModal(false);
            }}
            action={inActive}
            heading="Are you sure you want to mark this user as inactive?"
          />
          <CustomModal
            show={showModal2}
            close={() => {
              setShowModal2(false);
            }}
            success
            heading="Marked as Inactive"
          />

          <CustomModal
            show={showModal3}
            close={() => {
              setShowModal3(false);
            }}
            action={ActiveMale}
            heading="Are you sure you want to mark this user as Active?"
          />
          <CustomModal
            show={showModal4}
            close={() => {
              setShowModal4(false);
            }}
            success
            heading="Marked as Active"
          /> */}
        </div>
      </DashboardLayout>
    </>
  );
};