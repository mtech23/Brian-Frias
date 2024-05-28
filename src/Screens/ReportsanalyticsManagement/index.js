import { useState, useEffect } from "react";
import { users } from "./Data";

import { Link, useNavigate } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import middleborder  from '../../Assets/images/chartlinemiddle.png'
import { CChart } from "@coreui/react-chartjs";
// import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';


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
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);






export const ReportsAnalytics = () => {
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
      key: "  name",
      title: "  name",
    },
    {
      key: "popularity",
      title: "popularity",
    },
    {
      key: "Stock",
      title: "Stock",
    },
    {
      key: "Part In Revenue",
      title: "Part In Revenue",
    },

  ];





  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: true,
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Sample Line Chart',
      },
    },
  }
  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">

              <div className=" dashCard">
                <div className="userheader row  bg-black text-white justify-content-between">
                  <div className="col-md-6  ">
                    <h2 className="mainTitle">Report & Analytice</h2>
                  </div>

                  <div className="col-xl-4 col-md-6 stats d-flex   gap-3 ">
                    <input id="searchs" type="text" placeholder="search hear" />
                    <div>
                      <div className="  d-flex    gap-2 mt-2">
                        <img className="  text-white" src={useraccount} />
                        <img className="text-white" src={userSubtract} />
                        <img className=" text-white" src={userVector} />  </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5  gap-4   mb-3">
                  <div className="  col-md-7  bg-white">

                    <h2 className="mainTitle  me-4 mt-2">Top Products</h2>

                    <CustomTable headers={userHeaders}>
                      {users &&
                        users.map((item, index) => (
                          <tbody>
                            <tr id="progress">
                              <td>{index + 1}</td>

                              <td className="text-capitalize">Rosco M Lok Handguard</td>
                              <td> <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{ 'hight': '121px', 'width': '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div> </td>
                              <td>Out Of Stock</td>
                              <td>
                                <p className="part" >
                                  46%
                                </p></td>


                              <td>




                              </td>
                            </tr>
                          </tbody>
                        ))}
                    </CustomTable>
                  </div>




                  <div className="chartline e col-md-4  bg-white">



                    <Line options={{
                      scales: {
                        y: {
                          suggestedMin: 0,
                          suggestedMax: 100,
                        },
                      },
                    }}
                      data={{
                        labels: [
                          'January', 'February', 'March', 'April', 'May', 'June',

                        ],
                        datasets: [
                          {
                            label: "Active Users",
                            backgroundColor: "#738F9A",
                            borderColor: "#00293B",
                            borderRadius: 10,
                            borderWidth: 1,
                            data: [35, 23, 20, 12, 34, 50],
                          },
                          {
                            label: "Inactive Users",
                            backgroundColor: 'rgba(153,102,255,0.2)',
                            borderColor: 'rgba(153,102,255,1)',
                            borderRadius: 10,
                            borderWidth: 1,
                            data: [10, 13, 16, 22, 34, 40],
                          },
                        ],
                      }} />
                    <hr />
                    <div className=" justify-content-between  d-flex">
                      <div>
                      <select class="form-select" aria-label="Default select example">
  <option selected>Last year</option>
  <option value="1">One year</option>
  <option value="2">Two year</option>
  <option value="3">Three year</option>
</select>
<p className="year ">$4,087</p>

                      </div>
                  <div  className="imgborder"  >  </div>
                      <div>
                      <select class="form-select" aria-label="Default select example">
  <option selected>This  year</option>
  <option value="1">One year</option>
  <option value="2">Two year</option>
  <option value="3">Three year</option>
</select>
<p className="year ">$4,087</p>

                      </div>
                    </div>
                  </div>






                </div>




                <div className=" reporttable  bg-white">

                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="dashCard">
                        <div className="d-flex flex-wrap justify-content-between">
                          <h3 className="mainTitle"> Revenue</h3>
                          {/* <SelectBox selectClass="mainInput" name="Monthly" required option={optionData}

           /> */}
                        </div>
                        <div className="graph-wrapper">
                          <CChart
                            type="bar"
                            height="90"
                            options={{
                              scales: {
                                y: {
                                  suggestedMin: 0,
                                  suggestedMax: 40,
                                },
                              },
                            }}
                            data={{
                              labels: [
                                'January', 'February', 'March', 'April', 'May', 'June',
                                'July', 'August', 'September', 'October', 'November', 'December'
                              ],
                              datasets: [
                                {
                                  label: "Active Users",
                                  backgroundColor: "#738F9A",
                                  borderColor: "#00293B",
                                  borderRadius: 10,
                                  borderWidth: 1,
                                  data: [35],
                                },
                                {
                                  label: "Inactive Users",
                                  backgroundColor: "#B20000",
                                  borderColor: "#B20000",
                                  borderRadius: 10,
                                  borderWidth: 1,
                                  data: [20],
                                },
                              ],
                            }}
                          />


                        </div>
                      </div>
                    </div>
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