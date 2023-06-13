import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Header from './Header'

function History_Page() {

  return (
  <>
  <Header/>
 <div id="wrapper">
  <Sidebar/>
  <div id="content-wrapper">
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
              <h6>Watch History</h6>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="video-card history-video">
              <div className="video-card-image">
                <Link className="video-close" to="#"  style={{zIndex:"0"}}>
                  <i className="fas fa-times-circle"/>
                </Link>
                <Link className="play-icon" to="#">
                  <i className="fas fa-play-circle" />
                </Link>
                <Link to="#">
                  <img className="img-fluid" src="img/v1.png" alt="" />
                </Link>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  1:40
                </div>
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
            <div className="video-card history-video">
              <div className="video-card-image">
                <Link className="video-close" to="#">
                  <i className="fas fa-times-circle" />
                </Link>
                <Link className="play-icon" to="#">
                  <i className="fas fa-play-circle" />
                </Link>
                <Link to="#">
                  <img className="img-fluid" src="img/v2.png" alt="" />
                </Link>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  1:40
                </div>
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
            <div className="video-card history-video">
              <div className="video-card-image">
                <Link className="video-close" to="#">
                  <i className="fas fa-times-circle" />
                </Link>
                <Link className="play-icon" to="#">
                  <i className="fas fa-play-circle" />
                </Link>
                <Link to="#">
                  <img className="img-fluid" src="img/v3.png" alt="" />
                </Link>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  1:40
                </div>
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
            <div className="video-card history-video">
              <div className="video-card-image">
                <Link className="video-close" to="#">
                  <i className="fas fa-times-circle" />
                </Link>
                <Link className="play-icon" to="#">
                  <i className="fas fa-play-circle" />
                </Link>
                <Link to="#">
                  <img className="img-fluid" src="img/v4.png" alt="" />
                </Link>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  1:40
                </div>
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
            <div className="video-card history-video">
              <div className="video-card-image">
                <Link className="video-close" to="#">
                  <i className="fas fa-times-circle" />
                </Link>
                <Link className="play-icon" to="#">
                  <i className="fas fa-play-circle" />
                </Link>
                <Link to="#">
                  <img className="img-fluid" src="img/v5.png" alt="" />
                </Link>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  1:40
                </div>
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
            <div className="video-card history-video">
              <div className="video-card-image">
                <Link className="video-close" to="#">
                  <i className="fas fa-times-circle" />
                </Link>
                <Link className="play-icon" to="#">
                  <i className="fas fa-play-circle" />
                </Link>
                <Link to="#">
                  <img className="img-fluid" src="img/v6.png" alt="" />
                </Link>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  1:40
                </div>
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
            <div className="video-card history-video">
              <div className="video-card-image">
                <Link className="video-close" to="#">
                  <i className="fas fa-times-circle" />
                </Link>
                <Link className="play-icon" to="#">
                  <i className="fas fa-play-circle" />
                </Link>
                <Link to="#">
                  <img className="img-fluid" src="img/v7.png" alt="" />
                </Link>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  1:40
                </div>
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
            <div className="video-card history-video">
              <div className="video-card-image">
                <Link className="video-close" to="#">
                  <i className="fas fa-times-circle" />
                </Link>
                <Link className="play-icon" to="#">
                  <i className="fas fa-play-circle" />
                </Link>
                <Link to="#">
                  <img className="img-fluid" src="img/v8.png" alt="" />
                </Link>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  1:40
                </div>
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
            <div className="video-card history-video">
              <div className="video-card-image">
                <Link className="video-close" to="#">
                  <i className="fas fa-times-circle" />
                </Link>
                <Link className="play-icon" to="#">
                  <i className="fas fa-play-circle" />
                </Link>
                <Link to="#">
                  <img className="img-fluid" src="img/v2.png" alt="" />
                </Link>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  1:40
                </div>
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
            <div className="video-card history-video">
              <div className="video-card-image">
                <Link className="video-close" to="#">
                  <i className="fas fa-times-circle" />
                </Link>
                <Link className="play-icon" to="#">
                  <i className="fas fa-play-circle" />
                </Link>
                <Link to="#">
                  <img className="img-fluid" src="img/v3.png" alt="" />
                </Link>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  1:40
                </div>
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
            <div className="video-card history-video">
              <div className="video-card-image">
                <Link className="video-close" to="#">
                  <i className="fas fa-times-circle" />
                </Link>
                <Link className="play-icon" to="#">
                  <i className="fas fa-play-circle" />
                </Link>
                <Link to="#">
                  <img className="img-fluid" src="img/v4.png" alt="" />
                </Link>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  1:40
                </div>
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
            <div className="video-card history-video">
              <div className="video-card-image">
                <Link className="video-close" to="#">
                  <i className="fas fa-times-circle" />
                </Link>
                <Link className="play-icon" to="#">
                  <i className="fas fa-play-circle" />
                </Link>
                <Link to="#">
                  <img className="img-fluid" src="img/v1.png" alt="" />
                </Link>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  1:40
                </div>
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
              <Link className="page-link" to="#" tabIndex={-1}>
                Previous
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default History_Page
