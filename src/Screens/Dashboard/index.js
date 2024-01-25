import { useState, useEffect } from "react";
import card1 from '../../Assets/images/card1.png'
import Card from 'react-bootstrap/Card';

import card2 from '../../Assets/images/card2.png'
import card3 from '../../Assets/images/card3.png'
import { DashboardLayout } from "./../../Components/Layout/DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown, faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import { CChart } from "@coreui/react-chartjs";
import { SelectBox } from "../../Components/CustomSelect";
import { useApi } from "../../Api";

import man from '../../Assets/images/man.jpg'
import "./style.css";
import CustomButton from "../../Components/CustomButton";
import CustomInput from "../../Components/CustomInput";

export const Dashboard = () => {
  const [data, setData] = useState('');
  const [lead, setLead] = useState('');
  const [recived, setReceived] = useState('');
  const [amount, setAmount] = useState('');
  const { apiData: leadsAmountData, loading: dataLoading } = useApi('admin/leads-amount');
  const { apiData: leadsAmountMonthlyData, loading: leadLoading } = useApi('admin/leads-amount-monthly');
  const { apiData: leadsAmountReceivedData, loading: receivedLoading } = useApi('admin/leads-amount-received');
  const { apiData: leadsAmountReceivedMonthlyData, loading: AmountLoading } = useApi('admin/leads-amount-received-monthly');


  useEffect(() => {

    document.title = 'Wisdom For Life | Dashboard'
  }, []);


  useEffect(() => {
    setData(leadsAmountData)
    setLead(leadsAmountMonthlyData)
    setReceived(leadsAmountReceivedData)
    setAmount(leadsAmountReceivedMonthlyData)

  }, [leadsAmountData, leadsAmountMonthlyData, leadsAmountReceivedData, leadsAmountReceivedMonthlyData])


  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row">
                  <div className="col-md-9">
                    <div className="contentCard">
                      <div className="headerCard">
                        <h1 className="text-dark">Welcome Back Steve,</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p>lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                      </div>
                      <div className="mainBodyCard">
                        <div className="row">
                          <div className="col-md-12">
                            <h3 className="text-dark">Day 1</h3>
                            <p>Here are your first day tasks!</p>
                          </div>
                          <div className="col-md-4">
                            <div className="taskCard text-center shadow p-3 rounded-3">
                              <h4 className="text-dark">Task Name</h4>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                              <CustomButton text="Details" variant="primaryButton"></CustomButton>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="taskCard text-center shadow p-3 rounded-3">
                              <h4 className="text-dark">Task Name</h4>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                              <CustomButton text="Details" variant="primaryButton"></CustomButton>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="taskCard text-center shadow p-3 rounded-3">
                              <h4 className="text-dark">Task Name</h4>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                              <CustomButton text="Details" variant="primaryButton"></CustomButton>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>





                    <div className="ProfileSetup">
                      <div>
                        <div className="d-flex">



                          <div className="Profile ">

                            <span className="Profile" style={{ marginTop: '4px' }}>Profile Picture</span>
                            <div className="Upload d-flex">


                              <img src={man} className="profileimg" />

                              <p className="upload">Upload a photo</p>
                            </div></div>




                          <div>
                            <div>
                              <CustomInput
                                label='Email Address'
                                required
                                id='userEmail'
                                type='email'
                                placeholder='Enter Your Email Address'
                                labelClass='mainLabel'
                                inputClass='mainInput'

                              />
                            </div>
                            <div>
                              <p className="name">   Work Phone
                              </p>
                              <input
                                label='Work Phone'
                                required
                                id='username'
                                type='text'
                                placeholder='Insert Work Phone no'
                                labelClass='mainLabel'
                                inputClass='mainInput'

                              />
                            </div>
                          </div>
                        </div>
                      </div>    </div>














<div className="cardrow  d-flex   ">





<div className="cards text-white">
      <Card.Img src={card1} className="card1img" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Introduction To Company</Card.Title>
        <Card.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting  </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </div>

    <div className=" text-white">
      <Card.Img src={card2} className="card1img" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Introduction To Company</Card.Title>
        <Card.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting  </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </div>
    <div className=" text-white">
      <Card.Img src={card3} className="card1img" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Introduction To Company</Card.Title>
        <Card.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting  </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </div>


{/* <div className="card1">
  <img  src={card1} className="card1img"/>
  <p className="intro">Introduction To Company</p>
  <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
</div> */}

{/* <div className="card1">
  <img  src={card2} className="card1img"/>
  <p className="intro">Introduction To Company</p>
  <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
</div> */}
{/* <div className="card1">
  <img  src={card3} className="card1img"/>
  <p className="intro">Introduction To Company</p>
  <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
</div> */}


</div>
                  </div>
                  <div className="col-md-3">
                    <div className="progressCard">
                      <div className="shadow p-3 rounded-2 mb-5">
                        <h3 className="text-dark">Your Progress</h3>
                        <ul>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                        </ul>
                      </div>
                      <div className="shadow p-3 rounded-2">
                        <h3 className="text-dark">Your Progress</h3>
                        <ul>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                        </ul>
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
