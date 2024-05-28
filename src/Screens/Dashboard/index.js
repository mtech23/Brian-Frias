import { useState, useEffect } from "react";
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import userimg from '../../Assets/images/dashboardimg.png'
import { DashboardLayout } from "./../../Components/Layout/DashboardLayout";
import StatCard from "../../Components/StatsCard/index.js";
import { notifications, stats } from "../../Config/Data";
import subtract from '../../Assets/images/Subtract.png'
import account from '../../Assets/images/account.png'
import notification from '../../Assets/images/notification.png'
import { CChart } from "@coreui/react-chartjs";
import { SelectBox } from "../../Components/CustomSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import signal from '../../Assets/images/signal.png'
import contact from '../../Assets/images/contact.png'
import arrows from '../../Assets/images/arrows.png'
import QRCode from "react-qr-code";
import website1 from '../../Assets/images/website1.png'
import totalrevenue from '../../Assets/images/totalrevenue.png'
import order from '../../Assets/images/order.png'
import customer from '../../Assets/images/CustomerService.png'
import product from '../../Assets/images/productsold.png'

 

 


import "./style.css";

export const Dashboard = () => {


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {

    document.title = 'Brian Frias Admin | Dashboard';


    const LogoutData = localStorage.getItem('login');



  }, []);


  const optionData = [
    {
      code: 0,
      name: 'Monthly'
    },
    {
      code: 1,
      name: 'Yearly'
    }
  ]


  console.log(statistics)






  const [data, setData] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const inActive = () => {
    setShowModal(false)
    setShowModal2(true)
  }
  const Active = () => {
    setShowModal3(false)
    setShowModal4(true)
  }
  const getStyle = (variable) => getComputedStyle(document.documentElement).getPropertyValue(variable);


  // useEffect(() => {
  //   // document.querySelector('.loaderBox')?.classList.remove("d-none");
  //   document.title = 'Brian Frias Admin | User Management';
  //   const LogoutData = localStorage.getItem('login');

  //   fetch(`${base_url}/api/user/view_userdetails`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${LogoutData}`
  //       },
  //     }
  //   )

  //     .then(response =>
  //       response.json()
  //     )
  //     .then((data) => {
  //       document.querySelector('.loaderBox')?.classList.add("d-none");
  //       console.log(data)
  //       setData(data.data);
  //     })
  //     .catch((error) => {
  //       document.querySelector('.loaderBox')?.classList.add("d-none");
  //       console.log(error)
  //     })


  // }, []);
  // const base_url = process.env.REACT_APP_API_URL;

  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row">
                  <div className="col-xl-4 col-md-6 stats">
                    <div className="statsCard">
                      <img src={website1} className="websiteimg" />

                      <div className="statsContent">

                        <div className="statsData">

                          <img className=" " src={signal} />
                          <p className="statsText text-white mt-3 " > Website 1  </p>
                          <h3 className="statsNumber  text-white mt-3">$53 989</h3>
                          <p className="statsTex  text-whitet mt-3 mb-0"><img className="" src={arrows} />   12 % increase from last month   </p>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 stats">
                    <div className="statsCard bg-white">
                      <img src={website1} className="websiteimge" />

                      <div className="statsContent">

                        <div className="statsData">

                          <img className=" " src={contact} />
                          <p className="statsText  mt-3  text-black"> Website 1  </p>
                          <h3 className="statsNumber  mt-3  text-black">$53 989</h3>
                          <p className="statsTex  mt-3  mb-0 text-black"><img className="" src={arrows} />   12 % increase from last month   </p>
                        </div>
                      </div>

                    </div>
                  </div>



                  <div className="col-xl-4 col-md-6 stat d-flex   gap-3 ">
                    <input id="search" type="text" placeholder="search hear" />
                    <div>
                      <div className="  d-flex    gap-2 mt-2">
                        <img className="" src={account} />
                        <img className="" src={subtract} />
                        <img className="" src={notification} />  </div>
                    </div>
                  </div>




                </div>
              </div>
            </div>
          </div>
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
        data: [20 ],
      },
    ],
  }}
/>

                
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row">
           
       



                <div className="col-xl-3 col-md-6 stats">
                    <div className="statsCard">
                      <img src={website1} className="websiteimg" />

                      <div className="statsContent">

                        <div className="statsData">
                          <p className="statsText text-white mt-3  d-flex gap-2  mt-2"  >  
                                                  <img className="totalrevenue mt--3 " src={totalrevenue} />  Today’s Total Revenue  </p>
 
                          <h3 className="statsNumber  text-white mt-3">$53 989</h3>
                          <p className="statsTex  text-whitet mt-3 mb-0"><img className="" src={arrows} />  +10% from yesterday   </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 stats">
                    <div className="statsCard">
                      <img src={website1} className="websiteimg" />

                      <div className="statsContent">

                        <div className="statsData">
                          <p className="statsText text-white mt-3  d-flex gap-2  mt-2"  >                          <img className=" " src={order} />  Today’s Total Revenue  </p>
 
                          <h3 className="statsNumber  text-white mt-3">$53 989</h3>
                          <p className="statsTex  text-whitet mt-3 mb-0"><img className="" src={arrows} />  +10% from yesterday   </p>
                        </div>
                      </div>

                    </div>
                  </div>


                  <div className="col-xl-3 col-md-6 stats">
                    <div className="statsCard">
                      <img src={website1} className="websiteimg" />

                      <div className="statsContent">

                        <div className="statsData">
                          <p className="statsText text-white mt-3  d-flex gap-2  mt-2 mt-2"  >
                            <img className=" " src={customer} />  Today’s Total Revenue  </p>

               
                          <h3 className="statsNumber  text-white mt-3">$53 989</h3>
                          <p className="statsTex  text-whitet mt-3 mb-0"><img className="" src={arrows} />  +10% from yesterday   </p>
                        </div>
                      </div>

                    </div>
                  </div>



                  <div className="col-xl-3 col-md-6 stats">
                    <div className="statsCard">
                      <img src={website1} className="websiteimg" />

                      <div className="statsContent">

                        <div className="statsData">
                          <p className="statsText text-white mt-3  d-flex gap-2  mt-2"  >
                            <img className=" " src={product} />  Today’s Total Revenue  </p>

                      
                          <h3 className="statsNumber  text-white mt-3">$53 989</h3>
                          <p className="statsTex  text-whitet mt-3 mb-0"><img className="" src={arrows} />  +10% from yesterday   </p>
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
