import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { AiFillSetting } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { AiOutlineDownload } from 'react-icons/ai'
import {AiTwotoneHeart} from 'react-icons/ai'

const Myprofile = () => {
  const [lists, setLists] = useState([]);
  const [listss, setListss] = useState([]);


  useEffect(() => {
    getHomeData2();
  }, []);

  const getHomeData2 = async () => {
    const userid = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      user_id: userid,
    };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/get_my_channel",
        data,
        options
      );

      if (response.data.data && response.data.data.length > 0) {
        setLists(response.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };




  useEffect(() => {
    get_subscribe();
  }, []);

  const get_subscribe = async () => {
    const userid = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      user_id: userid,
    };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/get_subscribe_channel",
        data,
        options
      );

      if (response.data.data && response.data.data.length > 0) {
        setListss(response.data.data);
        console.log("response checkinggg",response.data.data)
      }
    } catch (err) {
      console.error(err);
    }
  };



  

  return (
    <>
 <Header />
      <Sidebar />
      <div>
        <div className="single-channel-page" id="content-wrapper">
          <div className="single-channel-image">
            {lists.length > 0 && lists[0].image && lists[0].image[0] && lists[0].image[0].filename ? (
              <img
                style={{ height: '250px' }}
                className="img-fluid"
                alt="Channel Image"
                src={"http://16.16.91.234:3003/uploads/" + lists[0].image[0].filename}
              />
            ) : (
              <img
                style={{ height: '250px' }}
                className="img-fluid"
                alt="Channel Image"
                src="img/logo.png" // Replace with your default image URL
              />
            )}

            <div className="channel-profile">
              {lists.length > 0 && lists[0].image && lists[0].image[1] && lists[0].image[1].filename ? (
                <img
                  className="channel-profile-img"
                  alt="Avatar"
                  src={"http://16.16.91.234:3003/uploads/" + lists[0].image[1].filename}
                />
              ) : (
                <img
                  className="channel-profile-img"
                  alt="Avatar"
                  src="img/logo.png" // Replace with your default image URL
                />
              )}

              <div className="social hidden-xs">
                <Link to="/setting">
                  <AiFillSetting style={{ fontSize: 35, color: 'white' }} />
                </Link>
                <a href>
                  <FaRegEdit style={{ fontSize: 35, color: 'white' }} />
                </a>
              </div>
           
          
        </div>
          </div>

          <Tabs className="mt-2">
            {lists.length > 0 && (
              <a style={{ marginLeft: "15px" }} className="channel-brand" href="#">
                {lists[0].channel_name}{" "}
                <span
                  title
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Verified"
                >
                  <i className="fas fa-check-circle text-success" />
                </span>
              </a>
            )}
            <hr />

            <TabList className="single-channel-nav p-3">
              <Tab style={{ marginLeft: "20px" }}>My-Download</Tab>
              <Tab style={{ marginLeft: "20px" }}>My Liked Video</Tab>
              <Tab style={{ marginLeft: "20px" }}>History</Tab>
              <Tab style={{ marginLeft: "20px" }}>My Subscribe</Tab>
              <button style={{ marginLeft: "20px" }} className="btn-danger" type="button">
                Subscribe <strong>1.4M</strong>
              </button>
            </TabList>

           

            <TabPanel>
              <div className="container-fluid">
                <h4>My Download  </h4>
                <div className="video-block section-padding">
                  <div className="tab-content" id="ex1-content">
                    <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                      <div className="row">

                        <div className="col-xl-4 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                          <div className="video-card">
                            <div className="video-card-image" style={{ borderRadius: 15 }}>
                              <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                              <a href="video-page.html"><img className="img-fluid" src="img/v2.png" alt /></a>
                              <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                              <div className="video-title">
                                <a href="video-page.html">There are many variations of passages of
                                  Lorem</a>
                              </div>
                              <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <div className="float-right">
                                  <p><i className="fas fa-eye" /> 10.4M</p>
                                  <p><i className="fa fa-thumbs-up" /> 131K</p>
                                </div>
                                <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                <p>3 Months ago</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                          <div className="video-card">
                            <div className="video-card-image" style={{ borderRadius: 15 }}>
                              <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                              <a href="video-page.html"><img className="img-fluid" src="img/v3.png" alt /></a>
                              <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                              <div className="video-title">
                                <a href="video-page.html">There are many variations of passages of
                                  Lorem</a>
                              </div>
                              <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <div className="float-right">
                                  <p><i className="fas fa-eye" /> 10.4M</p>
                                  <p><i className="fa fa-thumbs-up" /> 131K</p>
                                </div>
                                <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                <p>3 Months ago</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                          <div className="video-card">
                            <div className="video-card-image" style={{ borderRadius: 15 }}>
                              <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                              <a href="video-page.html"><img className="img-fluid" src="img/v4.png" alt /></a>
                              <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                              <div className="video-title">
                                <a href="video-page.html">There are many variations of passages of
                                  Lorem</a>
                              </div>
                              <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <div className="float-right">
                                  <p><i className="fas fa-eye" /> 10.4M</p>
                                  <p><i className="fa fa-thumbs-up" /> 131K</p>
                                </div>
                                <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                <p>3 Months ago</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                      <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                          <div className="video-card-image" style={{ borderRadius: 15 }}>
                            <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                            <a href="video-page.html"><img className="img-fluid" src="img/v1.png" alt /></a>
                            <a href="video-page.html">
                              <div className="time" style={{ bottom: 0, right: 0 }}>
                                <h3 style={{ position: 'relative', top: 35, left: 25 }}>10</h3>
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'block', width: 100, height: 120 }}><g className="style-scope yt-icon">sddfdf<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" className="style-scope yt-icon" /></g></svg>
                              </div>
                            </a>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <a href="video-page.html">There are many variations of passages of
                                Lorem</a>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                              <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>






                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center pagination-sm mb-0">
                      <li className="page-item disabled">
                        <a tabIndex={-1} href="#" className="page-link">Previous</a>
                      </li>
                      <li className="page-item active"><a href="#" className="page-link">1</a></li>
                      <li className="page-item"><a href="#" className="page-link">2</a></li>
                      <li className="page-item"><a href="#" className="page-link">3</a></li>
                      <li className="page-item">
                        <a href="#" className="page-link">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
            <div id="content-wrapper">


<div className="container-fluid pb-0">

    <div className="top-category section-padding mb-4">
        <div className="row">
            <div className="col-md-12">
                <div className="main-title row">
                    <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                            <div className="video-card-image" style={{ borderRadius: 15 }}>
                                <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                <a href="video-page.html"><img className="img-fluid" src="img/v2.png" alt /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="video-page.html">Just For You Gregory
                                        </a>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <div className="float-right">
                                        <p className='pr-1'><i className="fas fa-eye" /> 10.4M</p>
                                        <p><AiTwotoneHeart style={{color:"red",float:"right",fontSize:"20px"}}/></p>
                                    </div>
                                    <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                    <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                    <p>3 Months ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                            <div className="video-card-image" style={{ borderRadius: 15 }}>
                                <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                <a href="video-page.html"><img className="img-fluid" src="img/v2.png" alt /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="video-page.html">Just For You Gregory
                                        </a>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <div className="float-right">
                                        <p className='pr-1'><i className="fas fa-eye" /> 10.4M</p>
                                        <p><AiTwotoneHeart style={{color:"red",float:"right",fontSize:"20px"}}/></p>
                                    </div>
                                    <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                    <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                    <p>3 Months ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                            <div className="video-card-image" style={{ borderRadius: 15 }}>
                                <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                <a href="video-page.html"><img className="img-fluid" src="img/v2.png" alt /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="video-page.html">Just For You Gregory
                                        </a>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <div className="float-right">
                                        <p className='pr-1'><i className="fas fa-eye" /> 10.4M</p>
                                        <p><AiTwotoneHeart style={{color:"red",float:"right",fontSize:"20px"}}/></p>
                                    </div>
                                    <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                    <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                    <p>3 Months ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                            <div className="video-card-image" style={{ borderRadius: 15 }}>
                                <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                <a href="video-page.html"><img className="img-fluid" src="img/v2.png" alt /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="video-page.html">Just For You Gregory
                                        </a>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <div className="float-right">
                                        <p className='pr-1'><i className="fas fa-eye" /> 10.4M</p>
                                        <p><AiTwotoneHeart style={{color:"red",float:"right",fontSize:"20px"}}/></p>
                                    </div>
                                    <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                    <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                    <p>3 Months ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                            <div className="video-card-image" style={{ borderRadius: 15 }}>
                                <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                <a href="video-page.html"><img className="img-fluid" src="img/v2.png" alt /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="video-page.html">Just For You Gregory
                                        </a>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <div className="float-right">
                                        <p className='pr-1'><i className="fas fa-eye" /> 10.4M</p>
                                        <p><AiTwotoneHeart style={{color:"red",float:"right",fontSize:"20px"}}/></p>
                                    </div>
                                    <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                    <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                    <p>3 Months ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                            <div className="video-card-image" style={{ borderRadius: 15 }}>
                                <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                <a href="video-page.html"><img className="img-fluid" src="img/v2.png" alt /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="video-page.html">Just For You Gregory
                                        </a>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <div className="float-right">
                                        <p className='pr-1'><i className="fas fa-eye" /> 10.4M</p>
                                        <p><AiTwotoneHeart style={{color:"red",float:"right",fontSize:"20px"}}/></p>
                                    </div>
                                    <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                    <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                    <p>3 Months ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                            <div className="video-card-image" style={{ borderRadius: 15 }}>
                                <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                <a href="video-page.html"><img className="img-fluid" src="img/v2.png" alt /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="video-page.html">Just For You Gregory
                                        </a>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <div className="float-right">
                                        <p className='pr-1'><i className="fas fa-eye" /> 10.4M</p>
                                        <p><AiTwotoneHeart style={{color:"red",float:"right",fontSize:"20px"}}/></p>
                                    </div>
                                    <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                    <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                    <p>3 Months ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                            <div className="video-card-image" style={{ borderRadius: 15 }}>
                                <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                <a href="video-page.html"><img className="img-fluid" src="img/v2.png" alt /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="video-page.html">Just For You Gregory
                                        </a>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <div className="float-right">
                                        <p className='pr-1'><i className="fas fa-eye" /> 10.4M</p>
                                        <p><AiTwotoneHeart style={{color:"red",float:"right",fontSize:"20px"}}/></p>
                                    </div>
                                    <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                    <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                    <p>3 Months ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                            <div className="video-card-image" style={{ borderRadius: 15 }}>
                                <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                <a href="video-page.html"><img className="img-fluid" src="img/v2.png" alt /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="video-page.html">Just For You Gregory
                                        </a>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <div className="float-right">
                                        <p className='pr-1'><i className="fas fa-eye" /> 10.4M</p>
                                        <p><AiTwotoneHeart style={{color:"red",float:"right",fontSize:"20px"}}/></p>
                                    </div>
                                    <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                    <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                    <p>3 Months ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <hr />
</div>

</div>
            </TabPanel>
            <TabPanel>
              <div className="container-fluid">
                <h4>History</h4>
                <div className="video-block section-padding">
                  <div className="tab-content" id="ex1-content">
                    <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                      <div className="row">


                        <div className="col-lg-6 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                          

                            <div className='row  m-0'>
                            <div className="col-sm-4  video-card">
                              <div className="mt-2 video-card-image" style={{ borderRadius: 15 ,border:"none"} }>
                                <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                <a href="video-page.html"><img className="img-fluid" src="img/v2.png" alt /></a>
                                <div className="time mr-3">3:50</div>
                              </div>
                              </div>
                              <div className="col-sm-8 video-card-body" style={{backgroundColor:"white"}}>
                                <div className="video-title">
                                  <a href="video-page.html">There are many variations of passages of
                                    Lorem</a>
                                </div>
                                <div className="single-video-author mb-3 pr-5 mr-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                               
                                  {/* <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a> */}
                                  {/* <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p> */}
                                  {/* <p>3 Months ago</p> */}
                                  <p>ML Record</p>
                                  <p>5.5 M views</p>
                                </div>
                              </div>
                            </div>

                      
                        </div>

                        <div className="col-lg-6 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                            <div className='row m-0'>


                            <div className="col-sm-4 video-card">

                              <div className="mt-2 video-card-image" style={{ borderRadius: 15 }}>
                                <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                <a href="video-page.html"><img className="img-fluid" src="img/v3.png" alt /></a>
                                <div className="time mr-3">3:50</div>
                              </div>
                              </div>
                              <div className="col-sm-8 video-card-body" style={{backgroundColor:"white"}}>
                                <div className="video-title">
                                  <a href="video-page.html">There are many variations of passages of
                                    Lorem</a>
                                </div>
                                <div className="single-video-author mb-3 pr-5 mr-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                  {/* <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div> */}
                                  {/* <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                  <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p> */}
                                  <p>ML Record</p>
                                  <p>5.5 M views</p>
                                </div>
                              </div>
                            </div>
                       
                        </div>  



                        <div className="col-lg-6 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                            <div className='row m-0'>

                          <div className="col-sm-4 video-card">
                            <div className="mt-2 video-card-image" style={{ borderRadius: 15 }}>
                              <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                              <a href="video-page.html"><img className="img-fluid" src="img/v4.png" alt /></a>
                              <div className="time mr-3">3:50</div>
                            </div>

                            </div>

                            <div className="col-sm-8 video-card-body" style={{backgroundColor:"white"}}>
                              <div className="video-title">
                                <a href="video-page.html">There are many variations of passages of
                                  Lorem</a>
                              </div>
                              <div className="single-video-author mb-3 pr-5 mr-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                {/* <div className="float-right">
                                  <p><i className="fas fa-eye" /> 10.4M</p>
                                  <p><i className="fa fa-thumbs-up" /> 131K</p>
                                </div> */}
                                {/* <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                <p>3 Months ago</p> */}
                                 <p>ML Record</p>
                                  <p>5.5 M views</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                      <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                          <div className="video-card-image" style={{ borderRadius: 15 }}>
                            <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                            <a href="video-page.html"><img className="img-fluid" src="img/v1.png" alt /></a>
                            <a href="video-page.html">
                              <div className="time" style={{ bottom: 0, right: 0 }}>
                                <h3 style={{ position: 'relative', top: 35, left: 25 }}>10</h3>
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'block', width: 100, height: 120 }}><g className="style-scope yt-icon">sddfdf<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" className="style-scope yt-icon" /></g></svg>
                              </div>
                            </a>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <a href="video-page.html">There are many variations of passages of
                                Lorem</a>
                            </div>
                            <div className="single-video-author mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                              <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>






                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center pagination-sm mb-0">
                      <li className="page-item disabled">
                        <a tabIndex={-1} href="#" className="page-link">Previous</a>
                      </li>
                      <li className="page-item active"><a href="#" className="page-link">1</a></li>
                      <li className="page-item"><a href="#" className="page-link">2</a></li>
                      <li className="page-item"><a href="#" className="page-link">3</a></li>
                      <li className="page-item">
                        <a href="#" className="page-link">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="container-fluid">
                <h4>My Subscribe Channel  </h4>
                <div className="video-block section-padding">
                  <div className="tab-content" id="ex1-content">
                    <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                      <div className="row">
                      {listss.map((list) => {
    
    return (
                        <div className="col-xl-4 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                          <div className="video-card">
                            <div className="video-card-image" style={{ borderRadius: 15 }}>
                              <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                              <a href="video-page.html"><img style={{height:'300px'}} className="img-fluid" src={"http://16.16.91.234:3003/uploads/" + list.video_data[1].video[1].filename} alt /></a>
                              <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                              <div className="video-title">
                                <a href="video-page.html">There are many variations of passages of
                                  Lorem</a>
                              </div>
                              <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <div className="float-right">
                                  <p><i className="fas fa-eye" /> 10.4M</p>
                                  <p><i className="fa fa-thumbs-up" /> {list.data[0].channel_name}K</p>
                                </div>
                                <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                                <p><a href="viewprofile.html"><strong>{list.data[0].channel_name}</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                <p>3 Months ago</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                      
                      );
  })}
                      </div>
                    </div>



                    <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                      <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                        <div className="video-card">
                          <div className="video-card-image" style={{ borderRadius: 15 }}>
                            <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                            <a href="video-page.html"><img className="img-fluid" src="img/v1.png" alt /></a>
                            <a href="video-page.html">
                              <div className="time" style={{ bottom: 0, right: 0 }}>
                                <h3 style={{ position: 'relative', top: 35, left: 25 }}>10</h3>
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'block', width: 100, height: 120 }}><g className="style-scope yt-icon">sddfdf<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" className="style-scope yt-icon" /></g></svg>
                              </div>
                            </a>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <a href="video-page.html">There are many variations of passages of
                                Lorem</a>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                              <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>






                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center pagination-sm mb-0">
                      <li className="page-item disabled">
                        <a tabIndex={-1} href="#" className="page-link">Previous</a>
                      </li>
                      <li className="page-item active"><a href="#" className="page-link">1</a></li>
                      <li className="page-item"><a href="#" className="page-link">2</a></li>
                      <li className="page-item"><a href="#" className="page-link">3</a></li>
                      <li className="page-item">
                        <a href="#" className="page-link">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </TabPanel>

          </Tabs>



        


</div>

      </div>
      <Footer />
    </>

  )
}

export default Myprofile