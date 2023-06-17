import Header from './Header'
import Sidebar from './Sidebar'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function History_Page() {
  const [getcommt, setgetcomment] = useState([]);

  useEffect(() => {
    gethistory();
  }, []);

  const gethistory = async () => {
    const idddd = localStorage.getItem('_id');

    const options = {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
    });

    try {
      const res = await axios.post('http://16.16.91.234:3003/api/get_history', data, options);
      setgetcomment(res.data.data);
    } catch (err) {
      console.error('API Error:', err);
    }
  };

  const removeCartitem = (item) => {
    const idddd = localStorage.getItem('_id');
    const options = {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const data = JSON.stringify({
      user_id: idddd,
      video_id: item,
    });

    axios
      .post('http://16.16.91.234:3003/api/delete_history', data, options)
      .then((res) => {
        gethistory();
      })
      .catch((err) => {
        console.error(err);
      });
  };





  return (
    <>
      <Header />
      <div id="wrapper">
        <Sidebar />
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
                        Sort by{' '}
                        <i className="fa fa-caret-down" aria-hidden="true" />
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
                {getcommt && getcommt.length > 0 ? (
              getcommt.map((list) => (
                <div
                  className="col-sm-4 mb-4"
                  style={{ borderRadius: '10px', width: '100%', marginLeft: '-10px' }}
                  key={list.data[0]._id}
                >
                      <div className="video-card" style={{ width: '100%', borderRadius: '10px' }}>
                        <button
                          style={{ borderRadius: '15px' }}
                          className="fas fa-times-circle btn"
                          onClick={() => removeCartitem(list.data[0]._id)}
                        ></button>
                        <div className="video-card-image" style={{ borderRadius: '10px', height: '200px' }}>
                          <Link className="video-close" to="#" style={{ zIndex: '0' }}>
                            {/* <button>
                              <i onClick={() => removeCartitem(list.data[0]._id)} className="fas fa-times-circle" />
                            </button> */}
                            {/* <button><i onClick={() => removeCartitem(list.video_id)} className="fas fa-times-circle"/></button> */}
                          </Link>
                          <Link className="play-icon" to="#">
                            <i className="fas fa-play-circle" />
                          </Link>
                          <Link to="#">
                            <img className="img-fluid" src={`http://16.16.91.234:3003/uploads/${list.data[0].video[1].filename}`} alt="" />
                          </Link>
                          {/* src = "http://16.16.91.234:3003/uploads/" + response["data"][0]["data"][0]["video"][1]["filename"] */}
                          <div className="time">3:50</div>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '50%' }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            1:50
                          </div>
                        </div>
                        <div className="video-card-body">
                          <div className="video-title">
                            <Link to="#">{list.data[0].description}</Link>
                          </div>
                          <div className="video-page text-success">
                            {list.data[0].channel_name}{' '}
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
                            {list.data[0].video_views} views &nbsp;
                            <i className="fas fa-calendar-alt" /> 11 Months ago
                          </div>
                        </div>
                      </div>
                    </div>
                    ))
                    ) : (
                      <div className="col-md-12">No history found.</div>
                    )}
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
  );
}

export default History_Page;
