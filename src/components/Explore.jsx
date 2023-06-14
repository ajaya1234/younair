import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { MdExplore } from 'react-icons/md'
import { AiOutlineDownload } from 'react-icons/ai'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import Sidebar from './Sidebar'
const Explore = () => {
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
                                        <div className="col-lg-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v1.png" /></a>
                                                    <a href="video-page.html">
                                                        <div className="time" style={{ bottom: 0, right: 0 }}>
                                                            <h3 style={{ position: 'relative', top: 35, left: 25 }}>10</h3>
                                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'block', width: 100, height: 120 }}><g className="style-scope yt-icon">sddfdf<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" className="style-scope yt-icon" /></g></svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v1.png" /></a>
                                                    <a href="video-page.html">
                                                        <div className="time" style={{ bottom: 0, right: 0 }}>
                                                            <h3 style={{ position: 'relative', top: 35, left: 25 }}>10</h3>
                                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'block', width: 100, height: 120 }}><g className="style-scope yt-icon">sddfdf<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" className="style-scope yt-icon" /></g></svg>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v1.png" /></a>
                                                    <a href="video-page.html">
                                                        <div className="time" style={{ bottom: 0, right: 0 }}>
                                                            <h3 style={{ position: 'relative', top: 35, left: 25 }}>10</h3>
                                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'block', width: 100, height: 120 }}><g className="style-scope yt-icon">sddfdf<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" className="style-scope yt-icon" /></g></svg>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v1.png" /></a>
                                                    <a href="video-page.html">
                                                        <div className="time" style={{ bottom: 0, right: 0 }}>
                                                            <h3 style={{ position: 'relative', top: 35, left: 25 }}>10</h3>
                                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'block', width: 100, height: 120 }}><g className="style-scope yt-icon">sddfdf<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" className="style-scope yt-icon" /></g></svg>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v1.png" /></a>
                                                    <a href="video-page.html">
                                                        <div className="time" style={{ bottom: 0, right: 0 }}>
                                                            <h3 style={{ position: 'relative', top: 35, left: 25 }}>10</h3>
                                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'block', width: 100, height: 120 }}><g className="style-scope yt-icon">sddfdf<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" className="style-scope yt-icon" /></g></svg>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v1.png" /></a>
                                                    <a href="video-page.html">
                                                        <div className="time" style={{ bottom: 0, right: 0 }}>
                                                            <h3 style={{ position: 'relative', top: 35, left: 25 }}>10</h3>
                                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'block', width: 100, height: 120 }}><g className="style-scope yt-icon">sddfdf<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" className="style-scope yt-icon" /></g></svg>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 mb-3" style={{ paddingLeft: 10, paddingRight: 0 }}>
                                            <div className="video-card">
                                                <div className="video-card-image" style={{ borderRadius: 15 }}>
                                                    <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                                                    <a href="video-page.html"><img className="img-fluid" src="img/v1.png" /></a>
                                                    <a href="video-page.html">
                                                        <div className="time" style={{ bottom: 0, right: 0 }}>
                                                            <h3 style={{ position: 'relative', top: 35, left: 25 }}>10</h3>
                                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'block', width: 100, height: 120 }}><g className="style-scope yt-icon">sddfdf<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" className="style-scope yt-icon" /></g></svg>
                                                        </div>
                                                    </a>
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

export default Explore