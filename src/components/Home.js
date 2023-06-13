import { useState, useEffect } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import Slider from "react-slick";
import Header from './Header';
import { MdExplore } from 'react-icons/md'
import { AiOutlineDownload } from 'react-icons/ai'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import axios from 'axios';
import Slider_1 from './Slider_1';

function Home() {
  const [lists, setLists] = useState([]);
  const [ gettop , setgettop] = useState([]);
  


  useEffect(() => {
    getHomeData();
  }, []);
  const getHomeData = async () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": '*'
      }
    }
    const data = JSON.stringify({
    });

    await axios.post("http://16.16.91.234:3003/api/get_latest_video", data, options).then(res => {
      setLists(res.data.data);
      
    }).catch(err => {
    })
  }


  useEffect(() => {
    gettopvideo();
  }, []);

  const gettopvideo = async () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": '*'
      }
    }
    const data = JSON.stringify({
    });

    await axios.get("http://16.16.91.234:3003/api/get_top_video", data, options).then(res => {
      setgettop(res.data.data);

    }).catch(err => {
    })
  }






  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    margin: "30px",
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    arrow: true,
    
  };



  return (
    <>
      <Header />
      <div id="wrapper">
        <ul className="sidebar navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">
              <i className="fas fa-fw fa-home" />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/myvideo">
              <AiOutlineDownload style={{ fontSize: "20px" }} />
              <span>My-Download</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/history_page">
              <i className="fas fa-fw fa-history" />
              <span>History</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/history_page">
              <MdExplore style={{ fontSize: "20px" }} />
              <span>Explore</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category">
              <i className="fas fa-fw fa-list-alt" />
              <span>Categories</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="/permium" className="nav-link">
              <BsFillBookmarkStarFill style={{ fontSize: "20px" }} />
              <span>Permium Videos</span>
            </Link>

          </li>
        </ul>

        <div id="content-wrapper">


          <div className="container-fluid pb-0">
        <Slider_1/>
            <div className="top-category section-padding mb-4">
            <hr />
              <div className="row">
              
                <div className="col-md-12">
                  <div className="main-title">
                    <h3>Live Videos</h3>
                  </div>
                </div>






                <div className="video-block section-padding">
                  <div className="row">
                    <div className="col-md-12">

                    </div>
                    <div className="col-md-12">
                      <div id="recipeCarousel" className="carousel slide" data-bs-interval="false">
                        <div className="carousel-inner" role="listbox">
                          <div className="carousel-item active">
                            <div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div>

                            <div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v2.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div>

                            <div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v3.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div>

                            <div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v4.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div>

                          </div>
                          <div className="carousel-item">
                            <div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v2.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div>
                            <div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v3.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div><div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v4.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div><div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v5.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div></div>
                          <div className="carousel-item">
                            <div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v3.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div>
                            <div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v4.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div><div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v5.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div><div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div></div>
                          <div className="carousel-item">
                            <div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v4.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div>
                            <div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v5.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div><div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div><div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v2.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div></div>
                          <div className="carousel-item">
                            <div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v5.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div>
                            <div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div><div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v2.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div><div className="video-card" style={{ margin: '5px' }}>
                              <div className="video-card-image" style={{ borderRadius: '15px' }}>
                                <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                                <Link to="/video_page"><img className="img-fluid" src="img/v3.png" alt="" /></Link>
                                <div className="time">3:50</div>
                              </div>
                              <div className="video-card-body">
                                <div className="video-title">
                                  <Link to="/video_page">There are many variations of passages of Lorem</Link>
                                </div>
                                <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                                  <div className="float-right">
                                    <p><i className="fas fa-eye" /> 10.4M</p>
                                    <p><i className="fa fa-thumbs-up" /> 131K</p>
                                  </div>
                                  <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                                  <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                  <p>3 Months ago</p>
                                </div>
                              </div>
                            </div></div>
                        </div>
                        <Link className="carousel-control-prev bg-transparent w-aut" to="#recipeCarousel" role="button" data-bs-slide="prev" style={{ width: '40px', height: '64px', top: '50px' }}>
                          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: '30px', height: '30px', color: "black" }} />
                        </Link>
                        <Link className="carousel-control-next bg-transparent w-aut" to="#recipeCarousel" role="button" data-bs-slide="next" style={{ width: '40px', height: '64px', top: '50px' }}>
                          <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: '30px', height: '30px' }} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />






           

            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title">
                    <h3>Latest Videos</h3>
                  </div>
                </div>
                <div className="col-md-12">
                  <div id="recipeCarousel" className="carousel slide" data-bs-interval="false">
                    <div className="carousel-inner" role="listbox">
                    <div className="row">
  {lists.map((list) => {
    
    return (
      <div className='col-sm-3'>
      <div className="video-card" style={{ margin: '5px' }}>
        <div className="video-card-image" style={{ borderRadius: '15px', height: '249px' }}>
          <Link onClick={() => {
              localStorage.setItem("videoiid", list._id);
              localStorage.setItem("useridd", list.user_id);
              localStorage.setItem("channelid", list.channel_id);
            }} className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
          <Link onClick={() => {
              localStorage.setItem("videoiid", list._id);
              localStorage.setItem("useridd", list.user_id);
              localStorage.setItem("channelid", list.channel_id);
            }} to="/video_page">
            <img
              onClick={() => {
                localStorage.setItem("videoiid", list._id);
                localStorage.setItem("useridd", list.user_id);
                localStorage.setItem("channelid", list.channel_id);
              }}
              className="img-fluid"
              src={"http://16.16.91.234:3003/uploads/" + list.video[1].filename}
              alt=""
            />
          </Link>
          <div className="time"> 3.50 </div>
        </div>
        <div className="video-card-body">
          <div className="video-title">
            <Link onClick={() => {
                localStorage.setItem("videoiid", list._id);
                localStorage.setItem("useridd", list.user_id);
                localStorage.setItem("channelid", list.channel_id);
              }} to="/video_page">{list.description}</Link>
          </div>
          <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
            <div className="float-right">
              <p><i className="fas fa-eye" /> {list.video_views}</p>
              <p><i className="fa fa-thumbs-up" /> {list.video_likes}</p>
            </div>
            <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
            <p>
              <Link to="/view_profile">
                <strong>{list.channel_name}</strong>
              </Link>{' '}
              <span
                title
                data-placement="top"
                data-toggle="tooltip"
                data-original-title="Verified"
              >
                <i className="fas fa-check-circle text-success" />
              </span>
            </p>
            <p>3 Months ago</p>
          </div>
        </div>
      </div>
    </div>
    
    );
  })}
</div>


       



        


                      
                      
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v2.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v3.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v4.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v5.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div></div>
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v3.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v4.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v5.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div></div>
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v4.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v5.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v2.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div></div>
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v5.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v2.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v3.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div></div>
                    </div>
                    {/* <Link className="carousel-control-prev bg-transparent w-aut" to="#recipeCarousel" role="button" data-bs-slide="prev" style={{width: '40px', height: '64px', top: '50px'}}>
                      <span className="carousel-control-prev-icon" aria-hidden="true" style={{width: '30px', height: '30px'}} />
                    </Link> */}
                    {/* <Link className="carousel-control-next bg-transparent w-aut" to="#recipeCarousel" role="button" data-bs-slide="next" style={{width: '40px', height: '64px', top: '50px'}}>
                      <span className="carousel-control-next-icon" aria-hidden="true" style={{width: '30px', height: '30px'}} />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title">
                    <h3>Top Videos</h3>
                  </div>
                </div>
                <div className="col-md-12">
                  <div id="recipeCarousel" className="carousel slide" data-bs-interval="false">
                    <div className="carousel-inner" role="listbox">
                    <div className="row">
  {gettop.map((list) => {
    
    return (
      <div className='col-sm-3' >
        <div className="video-card" style={{ margin: '5px' }}>
          <div className="video-card-image" style={{ borderRadius: '15px', height: '249px' }}>
            <Link onClick={() => {
                  localStorage.setItem("videoiid",list._id); 
                  localStorage.setItem("useridd", list.user_id);
              localStorage.setItem("channelid", list.channel_id);
                }} className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
            <Link onClick={() => {
                  localStorage.setItem("videoiid",list._id); 
                  localStorage.setItem("useridd", list.user_id);
              localStorage.setItem("channelid", list.channel_id);
                }} to="/video_page">
              <img
                onClick={() => {
                  localStorage.setItem("videoiid",list._id); 
                  localStorage.setItem("useridd", list.user_id);
              localStorage.setItem("channelid", list.channel_id);
                }}
                className="img-fluid"
                src={"http://16.16.91.234:3003/uploads/" + list.video[1].filename}
                alt=""
              />
            </Link>
            <div className="time"> 3.50 </div>
          </div>
          <div className="video-card-body">
            <div className="video-title">
              <Link onClick={() => {
                  localStorage.setItem("videoiid",list._id); // Use the extracted videoId
                }} to="/video_page">{list.description}</Link>
            </div>
            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
              <div className="float-right">
                <p><i className="fas fa-eye" /> {list.video_views}</p>
                <p><i className="fa fa-thumbs-up" /> {list.video_likes}</p>
              </div>
              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
              <p>
                <Link to="/view_profile">
                  <strong>{list.channel_name}</strong>
                </Link>{' '}
                <span
                  title
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Verified"
                >
                  <i className="fas fa-check-circle text-success" />
                </span>
              </p>
              <p>3 Months ago</p>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>


       



        


                      
                      
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v2.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v3.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v4.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v5.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div></div>
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v3.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v4.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v5.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div></div>
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v4.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v5.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v2.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div></div>
                      <div className="carousel-item">
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v5.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v2.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div><div className="video-card" style={{ margin: '5px' }}>
                          <div className="video-card-image" style={{ borderRadius: '15px' }}>
                            <Link className="play-icon" to="/video_page"><i className="fas fa-play-circle" /></Link>
                            <Link to="/video_page"><img className="img-fluid" src="img/v3.png" alt="" /></Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="/video_page">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="single-video-author box mb-3" style={{ paddingLeft: '0px' }}>
                              <div className="float-right">
                                <p><i className="fas fa-eye" /> 10.4M</p>
                                <p><i className="fa fa-thumbs-up" /> 131K</p>
                              </div>
                              <Link to="/view_profile"> <img className="img-fluid" src="img/s4.png" alt="" /></Link>
                              <p><Link to="/view_profile"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                              <p>3 Months ago</p>
                            </div>
                          </div>
                        </div></div>
                    </div>
                    {/* <Link className="carousel-control-prev bg-transparent w-aut" to="#recipeCarousel" role="button" data-bs-slide="prev" style={{width: '40px', height: '64px', top: '50px'}}>
                      <span className="carousel-control-prev-icon" aria-hidden="true" style={{width: '30px', height: '30px'}} />
                    </Link> */}
                    {/* <Link className="carousel-control-next bg-transparent w-aut" to="#recipeCarousel" role="button" data-bs-slide="next" style={{width: '40px', height: '64px', top: '50px'}}>
                      <span className="carousel-control-next-icon" aria-hidden="true" style={{width: '30px', height: '30px'}} />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>

            <hr className="mt-0" />
          </div>

        </div>

      </div>



    </>

  )
}

export default Home

