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
  const [getdownloadd, setGetdownloadd] = useState([]);
  const [getcommt, setgetcomment] = useState([]);
  const [getmyvideo, setgetmyvideo] = useState([]);


  const removeCartitem = (item) => {
    const idddd = localStorage.getItem("_id");
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
      video_id: item,
    });

    axios
      .post("http://16.16.91.234:3003/api/delete_download_video", data, options)
      .then((res) => {
        getdownload();
      })
      .catch((err) => {
        console.error(err);
      });
  };




  useEffect(() => {
    getmychannelvideo();
  }, []);
  
  const getmychannelvideo = async () => {
    const useriddd  = localStorage.getItem("useridd");
    const channellidd = localStorage.getItem("channelid");
    
    console.log("singlesdasdasd channeell", channellidd);
    console.log("singlesdasdasd userissss", useriddd);
  
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
  
    const data = {
       "channel_id": channellidd,
      "user_id": useriddd,
    };
  
    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/get_my_channel_video",
        data,
        options
      );
  
      if (Array.isArray(response.data.data)) {
        setgetmyvideo(response.data.data);
        console.log("response of get_my_channel_subscribe", response.data.data);
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };
  


  

  useEffect(() => {
    gethistory();
  }, []);

  const gethistory = async () => {
    const idddd = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
    });

    await axios
      .post("http://16.16.91.234:3003/api/get_history", data, options)
      .then((res) => {
        setgetcomment(res.data.data);
        
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };





  useEffect(() => {
    getdownload();
  }, []);

  const getdownload = async () => {
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
        "http://16.16.91.234:3003/api/get_download_video",
        data,
        options
      );
      setGetdownloadd(response.data.data)



    } catch (err) {
      console.error(err);
    }
  };






  useEffect(() => {
    getHomeData2();
  }, []);

  const getHomeData2 = async () => {
    const userid = localStorage.getItem("useridd");
  
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
        const channelName = response.data.data[0].channel_name;
        const channelid = response.data.data[0]._id;
        localStorage.setItem("channel_name", channelName);
        localStorage.setItem("channel_id", channelid);
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
    console.log("usertdddd",userid)

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

      if (response.data.data && response.data.data.length > 0)
       {
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
              <Tab style={{ marginLeft: "20px" }}>My Videos</Tab>
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
                 
                            {getdownloadd && getdownloadd.length > 0 ? (
                              getdownloadd.map((list) => (


                            <div className='col-sm-4 mb-4  ' style={{borderRadius:"10px" ,width:'100%', marginLeft:'-6px' }} >
        
                            <div className="video-card"  style={{  width:'100%' , borderRadius:'10px' }}>
                            

                            <button style={{borderRadius:'15px' }}
                                    className="fas fa-times-circle btn "
                                    onClick={() => removeCartitem(list.video_data._id)}
                                  ></button>
                              
                              <div className="video-card-image" style={{ borderRadius: '10px',width:'100%', height: '160px' }}>
                              <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                              <a href="video-page.html"><img className="img-fluid" src={
                                  "http://16.16.91.234:3003/uploads/" +
                                  list.video_data.video[1].filename
                                } alt /></a>
                              <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                              <div className="video-title">
                                <a href="video-page.html">{list.video_data.video_name}</a>
                              </div>
                              <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <div className="float-right">
                                  <p><i className="fas fa-eye" /> 10.4M</p>
                                  <p><i className="fa fa-thumbs-up" /> 131K</p>
                                </div>
                                <a href="viewprofile.html"> <img className="img-fluid" src={
                                  "http://16.16.91.234:3003/uploads/" +
                                  list.video_data.video[1].filename
                                } alt /></a>
                                <p><a href="viewprofile.html"><strong>{list.video_data.channel_name}</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                <p>3 Months ago</p>
                              </div>
                            </div>
                          </div>
                        </div>
                       ))
                       ) : (
                         <div className="col-md-12">No Data found.</div>
                       )}
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


                         
                      {getcommt && getcommt.length > 0 ? (
                              getcommt.map((list) => (

                     
                        <div className="col-lg-6 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                            <div className='row m-0'>

                          <div className="col-sm-4 video-card">
                            <div className="mt-2 video-card-image" style={{height:'100px' ,borderRadius: 15 }}>
                              <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                              <a href="video-page.html"><img className="img-fluid" src={"http://16.16.91.234:3003/uploads/" + list.data[0].video[1].filename} alt /></a>
                              <div className="time mr-3">3:50</div>
                            </div>

                            </div>

                            <div className="col-sm-8 video-card-body" style={{backgroundColor:"white"}}>
                              <div className="video-title">
                                <a href="video-page.html">{list.data[0].description}</a>
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
                                  <p>{list.data[0].video_views} M views</p>
                              </div>
                            </div>
                          </div>
                        </div>
                         ))
                         ) : (
                           <div className="col-md-12">No Data found.</div>
                         )}
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
      <div className='col-sm-4 mb-4  ' style={{borderRadius:"10px" ,width:'100%', marginLeft:'' }} >
        
      <div className="video-card"  style={{  width:'100%' , borderRadius:'10px' }}>
        <div className="video-card-image" style={{ borderRadius: '10px',width:'100%', height: '160px' }}>
                              <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                              <a href="video-page.html"><img style={{height:'300px'}} className="img-fluid" src={"http://16.16.91.234:3003/uploads/" + list.video_data[1].video[1].filename} alt /></a>
                              <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                              {/* <div className="video-title">
                                <a href="video-page.html">{list.data[0].description}</a>
                              </div> */}
                              <div className="single-video-author box mb-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                {/* <div className="float-right">
                                  <p><i className="fas fa-eye" /> 10.4M</p>
                                  <p><i className="fa fa-thumbs-up" /> {list.data[0].video_likes}K</p>
                                </div> */}
                                <a href="viewprofile.html"> <img className="img-fluid" src={"http://16.16.91.234:3003/uploads/" + list.video_data[1].video[1].filename} alt /></a>
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

            <TabPanel>
            <div>
                <div className="container-fluid">
                  <div className="video-block section-padding">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title">
                          <div className="btn-group float-right right-action">
                            <Link
                              to="#"
                              className="right-action-link text-gray"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                              <Link className="dropdown-item" to="#">
                                <i className="fas fa-fw fa-star" /> &nbsp; Top Rated
                              </Link>
                              <Link className="dropdown-item" to="#">
                                <i className="fas fa-fw fa-signal" /> &nbsp; Viewed
                              </Link>
                              <Link className="dropdown-item" to="#">
                                <i className="fas fa-fw fa-times-circle" />
                                &nbsp; Close
                              </Link>
                            </div>
                          </div>
                          <h6>Upload Videos</h6>
                        </div>
                      </div>
                      {getmyvideo.map((list) => {
    if (list.video && list.video[1] && list.video[1].filename) {
      return (
        <div className="col-lg-4 col-sm-6 mb-4" key={list.video[1].filename} style={{ paddingLeft: 10, paddingRight: 0 }}>
        <div className="video-card" style={{height: '300px'}}>
          <div className="video-card-image" style={{ borderRadius: 15 , height:'212px' }}>
              <Link className="play-icon" to="/video_page" onClick={() => {
              localStorage.setItem("videoiid", list._id);
              localStorage.setItem("useridd", list.user_id);
              localStorage.setItem("channelid", list.channel_id);
            }} >
                <i className="fas fa-play-circle" />
              </Link>
              <Link to="/video_page" onClick={() => {
              localStorage.setItem("videoiid", list._id);
              localStorage.setItem("useridd", list.user_id);
              localStorage.setItem("channelid", list.channel_id);
            }} >
                <img  
                  className="img-fluid"
                  src={"http://16.16.91.234:3003/uploads/" + list.video[1].filename}
                  alt=""
                />
              </Link>
              <div className="time">3:50</div>
            </div>
            <div className="video-card-body">
              <div className="video-title">
                <Link to="#">{list.video_name}</Link>
              </div>
              <div className="video-page text-success">
              {list.channel_name}{" "}
                <Link
                  title=""
                  data-placement="top"
                  data-toggle="tooltip"
                  to="#"
                  data-original-title="Verified"
                >
                  <i className="fas fa-check-circle text-success" />
                </Link>
              </div>
              <div className="video-view">
                {list.video_views}M views &nbsp;
                <i className="fas fa-calendar-alt" /> 11 Months ago
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null; // Skip rendering if video data is incomplete
    }
  })}
                    </div>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center pagination-sm mb-0">
                        <li className="page-item disabled">
                          <Link tabIndex={-1} to="#" className="page-link">
                            Previous
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link to="#" className="page-link">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link">
                            Next
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
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