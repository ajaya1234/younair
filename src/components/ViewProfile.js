import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ViewProfile = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div id="wrapper">
        <div className="single-channel-page" id="content-wrapper">
          <div className="single-channel-image">
            <img className="img-fluid" alt="" src="img/channel-banner.png" />
            <div className="channel-profile">
              <img className="channel-profile-img" alt="" src="img/s2.png" />

            </div>
          </div>
          <div className="single-channel-nav">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className='row'>

              </div>
              <div className='col-sm-3'>
                <Link className="channel-brand" to="#">
                  Osahan Channel{" "}
                  <span>
                    <i className="fas fa-check-circle text-success" />
                  </span><br />
                  <h6 style={{ fontSize: "12px" }}>dhananjay@gmail.com</h6>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
              <div className='col-sm-12 col-lg-9'>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <form className="form-inline my-2 my-lg-0">
                    <input style={{width:"330px"}}
                      className="form-control form-control-sm mr-sm-1"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-success btn-sm my-2 my-sm-0"
                      type="submit"
                    >
                      <i className="fas fa-search" />
                    </button>{" "}
                    &nbsp;&nbsp;&nbsp;{" "}
                    <button className="btn btn-outline-danger btn-sm" type="button">
                      Subscribe
                      <strong>1.4M</strong>
                    </button>
                  </form>
                </div>
              </div>



            </nav>



          </div>

          <Tabs className="ml-3 mt-3" style={{}}>
            <TabList>
              <Tab style={{paddingLeft:"118px",border:"none"}}>Home</Tab>
              <Tab style={{paddingLeft:"118px" ,border:"none"}}>Videos</Tab>
              <Tab style={{paddingLeft:"118px" ,border:"none"}}>Playlist</Tab>
              <Tab style={{paddingLeft:"118px" ,border:"none"}}>About</Tab>
            </TabList>

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
                      <h6>Videos</h6>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-4 mb-3">
                    <div className="video-card">
                      <div className="video-card-image">
                        <Link className="play-icon" to="#">
                          <i className="fas fa-play-circle" />
                        </Link>
                        <Link to="#">
                          <img className="img-fluid" src="img/v1.png" alt="" />
                        </Link>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <Link to="#">There are many variations of passages of Lorem</Link>
                        </div>
                        <div className="video-page text-success">
                          Education{" "}
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
                          1.8M views &nbsp;
                          <i className="fas fa-calendar-alt" /> 11 Months ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="video-card">
                      <div className="video-card-image">
                        <Link className="play-icon" to="#">
                          <i className="fas fa-play-circle" />
                        </Link>
                        <Link to="#">
                          <img className="img-fluid" src="img/v2.png" alt="" />
                        </Link>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <Link to="#">There are many variations of passages of Lorem</Link>
                        </div>
                        <div className="video-page text-success">
                          Education{" "}
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
                          1.8M views &nbsp;
                          <i className="fas fa-calendar-alt" /> 11 Months ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-4 mb-3">
                  <div className="video-card">
                    <div className="video-card-image">
                      <Link className="play-icon" to="#">
                        <i className="fas fa-play-circle" />
                      </Link>
                      <Link to="#">
                        <img className="img-fluid" src="img/v1.png" alt="" />
                      </Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="#">There are many variations of passages of Lorem</Link>
                      </div>
                      <div className="video-page text-success">
                        Education{" "}
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
                        1.8M views &nbsp;
                        <i className="fas fa-calendar-alt" /> 11 Months ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="video-card">
                    <div className="video-card-image">
                      <Link className="play-icon" to="#">
                        <i className="fas fa-play-circle" />
                      </Link>
                      <Link to="#">
                        <img className="img-fluid" src="img/v2.png" alt="" />
                      </Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="#">There are many variations of passages of Lorem</Link>
                      </div>
                      <div className="video-page text-success">
                        Education{" "}
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
                        1.8M views &nbsp;
                        <i className="fas fa-calendar-alt" /> 11 Months ago
                      </div>
                    </div>
                  </div>
                </div>
                
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
                          <h6>Videos</h6>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6 mb-4 mb-3">
                        <div className="video-card">
                          <div className="video-card-image">
                            <Link className="play-icon" to="#">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="#">
                              <img className="img-fluid" src="img/v1.png" alt="" />
                            </Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="#">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="video-page text-success">
                              Education{" "}
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
                              1.8M views &nbsp;
                              <i className="fas fa-calendar-alt" /> 11 Months ago
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                          <div className="video-card-image">
                            <Link className="play-icon" to="#">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="#">
                              <img className="img-fluid" src="img/v2.png" alt="" />
                            </Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="#">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="video-page text-success">
                              Education{" "}
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
                              1.8M views &nbsp;
                              <i className="fas fa-calendar-alt" /> 11 Months ago
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                          <div className="video-card-image">
                            <Link className="play-icon" to="#">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="#">
                              <img className="img-fluid" src="img/v3.png" alt="" />
                            </Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="#">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="video-page text-danger">
                              Education{" "}
                              <Link
                                title=""
                                data-placement="top"
                                data-toggle="tooltip"
                                to="#"
                                data-original-title="Unverified"
                              >
                                <i className="fas fa-frown text-danger" />
                              </Link>
                            </div>
                            <div className="video-view">
                              1.8M views &nbsp;
                              <i className="fas fa-calendar-alt" /> 11 Months ago
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                          <div className="video-card-image">
                            <Link className="play-icon" to="#">
                              <i className="fas fa-play-circle" />
                            </Link>
                            <Link to="#">
                              <img className="img-fluid" src="img/v4.png" alt="" />
                            </Link>
                            <div className="time">3:50</div>
                          </div>
                          <div className="video-card-body">
                            <div className="video-title">
                              <Link to="#">There are many variations of passages of Lorem</Link>
                            </div>
                            <div className="video-page text-success">
                              Education{" "}
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
                              1.8M views &nbsp;
                              <i className="fas fa-calendar-alt" /> 11 Months ago
                            </div>
                          </div>
                        </div>
                      </div>
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
                          <h6>Videos</h6>
                        </div>
                      </div>
                    

                      <div className="col-xl-3 col-sm-6 mb-4" style={{ paddingLeft: 10, paddingRight: 0 }}>
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
                      <div className="col-xl-3 col-sm-6 mb-4" style={{ paddingLeft: 10, paddingRight: 0 }}>
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
                      <div className="col-xl-3 col-sm-6 mb-4" style={{ paddingLeft: 10, paddingRight: 0 }}>
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
                      <div className="col-xl-3 col-sm-6 mb-4" style={{ paddingLeft: 10, paddingRight: 0 }}>
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
            <TabPanel>
              <h6>   Done right, YouTube descriptions can boost view counts and watch time. They can also help your videos rank in YouTube search.
              Greg Sides, Alice Fleerackers <br/>


              17 Tips for Writing Effective YouTube Descriptions (Free Template Included)

              Done right, YouTube descriptions can boost view counts and watch time. They can also help your videos rank in YouTube search.
              Greg Sides, Alice Fleerackers
              17 Tips for Writing Effective YouTube Descriptions (Free Template Included)

              Done right, YouTube descriptions can boost view counts and watch time. They can also help your videos rank in YouTube search.
              Greg Sides, Alice Fleerackers
              17 Tips for Writing Effective YouTube Descriptions (Free Template Included)<br/>

              Done right, YouTube descriptions can boost view counts and watch time. They can also help your videos rank in YouTube search.
              Greg Sides, Alice Fleerackers
              17 Tips for Writing Effective YouTube Descriptions (Free Template Included)<br/>

              Done right, YouTube descriptions can boost view counts and watch time. They can also help your videos rank in YouTube search.
              Greg Sides, Alice Fleerackers
              17 Tips for Writing Effective YouTube Descriptions (Free Template Included)<br/>

              Done right, YouTube descriptions can boost view counts and watch time. They can also help your videos rank in YouTube search.
              Greg Sides, Alice Fleerackers
              17 Tips for Writing Effective YouTube Descriptions (Free Template Included)<br/></h6>
            </TabPanel>
          </Tabs>



        </div>
      </div>
      <Footer />
    </>
  )
}

export default ViewProfile
