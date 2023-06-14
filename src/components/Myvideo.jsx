import React from 'react'
import { Link } from 'react-router-dom'
import { MdExplore } from 'react-icons/md'
import Header from './Header'
import { AiOutlineDownload } from 'react-icons/ai'
import {AiTwotoneHeart} from 'react-icons/ai'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import Sidebar from './Sidebar'
const Myvideo = () => {
    return (
        <div>
            <Header />
            <div id="wrapper">
                <Sidebar/>
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
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v2.png" /></a>
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
                                                        <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" /></a>
                                                        <p><a href="viewprofile.html"><strong>History</strong></a> <span title-data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                                        <p>3 Months ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v2.png" /></a>
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
                                                        <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" /></a>
                                                        <p><a href="viewprofile.html"><strong>History</strong></a> <span title-data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                                        <p>3 Months ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v2.png" /></a>
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
                                                        <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png"  /></a>
                                                        <p><a href="viewprofile.html"><strong>History</strong></a> <span title-data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                                        <p>3 Months ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v2.png"  /></a>
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
                                                        <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png"  /></a>
                                                        <p><a href="viewprofile.html"><strong>History</strong></a> <span title-data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                                        <p>3 Months ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v2.png"  /></a>
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
                                                        <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" /></a>
                                                        <p><a href="viewprofile.html"><strong>History</strong></a> <span title-data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                                        <p>3 Months ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v2.png" /></a>
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
                                                        <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" /></a>
                                                        <p><a href="viewprofile.html"><strong>History</strong></a> <span title-data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                                        <p>3 Months ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v2.png" /></a>
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
                                                        <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" /></a>
                                                        <p><a href="viewprofile.html"><strong>History</strong></a> <span title-data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                                        <p>3 Months ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v2.png" /></a>
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
                                                        <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" /></a>
                                                        <p><a href="viewprofile.html"><strong>History</strong></a> <span title-data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                                                        <p>3 Months ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v2.png" /></a>
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
                                                        <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png"  /></a>
                                                        <p><a href="viewprofile.html"><strong>History</strong></a> <span title-data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
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

            </div>
        </div>
    )
}

export default Myvideo
