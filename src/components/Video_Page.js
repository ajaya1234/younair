import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  WhatsappShareButton,
} from 'react-share';


import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { FaShare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./home.css";
import {BsFacebook} from 'react-icons/bs'
import {CgTwitter} from 'react-icons/cg'
import {FaLinkedin} from 'react-icons/fa'
import {FaPinterestSquare} from 'react-icons/fa'
import { FaWhatsappSquare} from 'react-icons/fa'

import { MdDescription, MdOutlineRotate90DegreesCw } from "react-icons/md";

import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import Switch from "@mui/material/Switch";

import "../setting.css";


import { SiAddthis } from 'react-icons/si'





function Video_Page() {
  const [lists, setLists] = useState([]);
  const [lates, setLates] = useState([]);
  const [Comment, setcomment] = useState([]);
  const [getcommt, setgetcomment] = useState([]);
  const [ccomment, setCcomment] = useState("");

  const [subscribeMsg, setSubscribeMsg] = useState("");

  const [likeStatus, setLikeStatus] = useState(0);

// addVIDEOPLAYLIST
const [channelname, setChannelname] = useState("");
const [ getplaylist , setGetplaylist] = useState([])
 const [listsS, setListsS] = useState([]);
const [output, setOutput] = useState("");
const useridd = localStorage.getItem("_id");



const [errorMessage, setErrorMessage] = useState("");
const [successMessage, setSuccessMessage] = useState("");
const [image, setImage] = useState(null);
const [ssuccessMessage, setSsuccessMessage] = useState("");

const ShareButtons = ({ url }) => {
  
  const urlObject = new URL(url);
  const fbclid = urlObject.searchParams.get('fbclid');
  const formattedShareUrl = `http://example.com/${fbclid}`; // Replace 'example.com' with your desired domain





  

}



const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  
  const timeDiff = Math.abs(now - date);
  
  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  if (years > 0) {
    return years === 1 ? '1 year ago' : `${years} years ago`;
  }
  
  const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  if (months > 0) {
    return months === 1 ? '1 month ago' : `${months} months ago`;
  }
  
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  if (days > 0) {
    return days === 1 ? '1 day ago' : `${days} days ago`;
  }
  
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  if (hours > 0) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  }
  
  const minutes = Math.floor(timeDiff / (1000 * 60));
  if (minutes > 0) {
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  }
  
  return 'Just now';
};




const removeCartitem = (item ,name) => {
  

  const idddd = localStorage.getItem("_id");
  //const audioidddd = localStorage.getItem("getsingleaudio");
  const channelidddd = localStorage.getItem("channel_id");
  const audioidddd = localStorage.getItem("videoiid");



  const options = {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const data = JSON.stringify({
    
    playlist_id: item,
    user_id:idddd,
    video_id: audioidddd,
    playlist_name:name,
    channel_id:channelidddd
  });

  axios
    .post("http://16.16.91.234:3003/api/upload_my_playlist_video", data, options)
    .then((res) => {
      
      if (res.data === true) {
        setSsuccessMessage("Successfully added");
      } else {
        setSsuccessMessage("Successfully added"); 
      }
    })
    

      
  
    .catch((err) => {
      console.error(err);
    });
};







const handleSubmit = async (evt) => {
  evt.preventDefault();

  if (!channelname) {
    setErrorMessage("Please enter a name.");
    return;
  }

  let userDetails = new FormData();
userDetails.append("user_id", useridd);
userDetails.append("name", channelname);
userDetails.append("image", image);

  try {
    const response = await axios.post(
      "http://16.16.91.234:3003/api/create_playlist",
      userDetails,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-Api-Key": "your-api-key",
        },
      }
    );
    
    
    setSuccessMessage("Music playlist created successfully.");
    
  } catch (error) {
    console.log(error);
  }
};



useEffect(() => {
  get_my_playlist();
}, []);

const get_my_playlist = async () => {
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
      "http://16.16.91.234:3003/api/get_my_playlist",
      data,
      options
    );
    get_my_playlist();
    if (response.data.data && response.data.data.length > 0) {
      setGetplaylist(response.data.data);
      
    }
    
    
  } catch (err) {
    console.error(err);
  }
};











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
      setListsS(response.data.data);
    }
  } catch (err) {
    console.error(err);
  }
};

const label = { inputProps: { "aria-label": "Switch demo" } };
// END VIDEO PLAYLIST

  

  const handleLikeClick = async () => {
    const idddd = localStorage.getItem("videoiid");
    const useriddd = localStorage.getItem("_id");
    const channeliddd = localStorage.getItem("channelid");

    const options = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const newLikeStatus = likeStatus === 0 ? 1 : 0; // Toggle the like status

    const data = JSON.stringify({
      video_id: idddd,
      user_id: useriddd,
      channel_id: channeliddd,
      like_status: newLikeStatus,
    });

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/like_video",
        data,
        options
      );
      console.log("Response of like api:", response);
      setLikeStatus(newLikeStatus);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    createhistory();
  }, []);

  const createhistory = async () => {
    const idddd = localStorage.getItem("videoiid");
    const useriddd = localStorage.getItem("_id");
    const channeliddd = localStorage.getItem("channelid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      video_id: idddd,
      user_id: useriddd,
      channel_id: channeliddd,
    });

    await axios
      .post("http://16.16.91.234:3003/api/create_history", data, options)
      .then((res) => {
        
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  const addwishlist = async () => {
    const userid = localStorage.getItem("_id");
    const id = localStorage.getItem("channelid");

    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    if (Array.isArray(lists) && lists.length > 0) {
      const updatedLists = await Promise.all(
        lists.map(async (list) => {
          const newStatus = list.status === "1" ? "0" : "1"; // Toggle the subscription status

          const data = JSON.stringify({
            user_id: userid,
            channel_id: id,
            status: newStatus,
          });

          try {
            const response = await axios.post(
              "http://16.16.91.234:3003/api/subscribe_to_channel",
              data,
              options
            );

            if (response.status === 200) {
              return {
                ...list,
                status: newStatus,
              };
            }
          } catch (error) {
            console.error(
              `Error ${
                newStatus === "1" ? "subscribing to" : "unsubscribing from"
              } channel:`,
              error
            );
          }

          return list;
        })
      );

      setLists(updatedLists);
    }
  };

  const download = async () => {
    const idddd = localStorage.getItem("videoiid");
    const useriddd = localStorage.getItem("_id");
    const channeliddd = localStorage.getItem("channelid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      video_id: idddd,
      user_id: useriddd,
      channel_id: channeliddd,
    });

    await axios
      .post("http://16.16.91.234:3003/api/download_video", data, options)
      .then((res) => {
        console.log("downloaddddd response of ", res);
        //setcomment(res.data.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  const sendcomment = async () => {
    const idddd = localStorage.getItem("videoiid");
    const useriddd = localStorage.getItem("_id");
    const channeliddd = localStorage.getItem("channelid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      video_id: idddd,
      user_id: useriddd,
      channel_id: channeliddd,
      msg: ccomment,
    });

    await axios
      .post("http://16.16.91.234:3003/api/send_comment", data, options)
      .then((res) => {
        setCcomment("");
        setcomment(res.data.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  useEffect(() => {
    getcomment();
  }, []);

  const getcomment = async () => {
    const idddd = localStorage.getItem("videoiid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      video_id: idddd,
    });

    await axios
      .post("http://16.16.91.234:3003/api/get_comment", data, options)
      .then((res) => {
        setgetcomment(res.data.data);
        getcomment();
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    const idddd = localStorage.getItem("videoiid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      video_id: idddd,
    });

    await axios
      .post("http://16.16.91.234:3003/api/get_single_video", data, options)
      .then((res) => {
        setLists([res.data.data]);
        getHomeData();
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  useEffect(() => {
    getHomeData6();
  }, []);

  const getHomeData6 = async () => {
    // const idddd = localStorage.getItem("videoiid");
    const categorytypeee = localStorage.getItem("categorytpee");
   

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = JSON.stringify({
      category_type: categorytypeee,
    });

    await axios
      .post("http://16.16.91.234:3003/api/related_video", data, options)
      .then((res) => {
        setLates(res.data.data);
        getHomeData6();
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  // {getcommt.map((list) => {
  //   return (
  //                     <>{list.msg}</>
  //                     );
  //                   })}

  return (
    <>
      <Header />
      <Sidebar />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid pb-0">
            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-8">
                {lists.map((list) => {
  return (
    <div className="single-video-left" key={list._id}>
      <div className="single-video">
  {list.category_type === "bollywood" ||
   list.category_type === "Bollywood" ||
   list.category_type === "TollyWood" ||
   list.category_type === "tollywood" ||
   list.category_type === "HollyWood" ||
   list.category_type === "hollyWood" ||
   list.category_type === "Live" ? (
    <ReactPlayer
      url={
        list.category_type === "Live"
          ? list.video_url
          : "http://16.16.91.234:3003/uploads/" + list.video[0].filename
      }
      width="640"
      height="360"
      controls={true}
      playing={true}
    />
  ) : (
    <ReactPlayer
      url={"http://16.16.91.234:3003/uploads/" + list.video[0].filename}
      width="640"
      height="360"
      controls={true}
      playing={true}
    />
  )}
</div>
                        <div className="single-video-title box mb-3">
                          <h2>
                            <Link to="#">{list.video_name}</Link>
                          </h2>
                          <p className="mb-0">
                            <i className="fas fa-eye" /> {list.video_views}{" "}
                            views
                          </p>
                        </div>
                        <div className="single-video-author box mb-3">
                          <div className="float-right">
                            <button
                              onClick={addwishlist}
                              className="btn btn-danger subbtn"
                              type="button"
                            >
                              Subscribe
                              <strong>
                                {subscribeMsg && <p>{subscribeMsg}</p>}
                              </strong>
                            </button>

                          
                          </div>

                          <div className="mainprofile">
                            <img
                              className="img-fluid mainprofileimg "
                              src={
                                "http://16.16.91.234:3003/uploads/" +
                                list.video[1].filename
                              }
                              alt=""
                            />
                            <p>
                              <Link to="#" className="mainprofilecannelname">
                                <strong>{list.channel_name}</strong>
                              </Link>{" "}
                             
                            </p>
                          </div>
                          <br />
                          <br />

                          <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-6 col-sm-12">
                              <span
                                onClick={handleLikeClick}
                                style={{ color: "black" }}
                              >
                                {likeStatus === 0 ? (
                                  <FaThumbsUp />
                                ) : (
                                  <FaThumbsDown />
                                )}
                              </span>
                             
                              &nbsp;&nbsp;&nbsp;
                              {list.video_likes}K &nbsp;&nbsp;&nbsp;
                              <input
                                style={{ borderRadius: "15px", width: "100px" }}
                                type="text"
                                placeholder="Comment"
                                value={ccomment}
                                onChange={(e) => setCcomment(e.target.value)}
                              />
                              <button
                                style={{
                                  borderRadius: "15px",
                                  background: "#808080",
                                  color: "white",
                                }}
                                onClick={sendcomment}
                              >
                                Send
                              </button>
                              &nbsp;&nbsp;&nbsp;&nbsp;
                            </div>

                            <div className="col-lg-7 col-md-6 col-sm-12 mt-1 row">
                              <div className="" data-toggle="modal" data-target="#my1Modal">
                                <FaShare /><button
                                style={{
                                  borderRadius: "15px",
                                  background: "#808080",
                                  color: "white",
                                }}
                                
                              >Share</button>
                                
</div>
<div className="modal" id="my1Modal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Shared</h4>
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>
        
        <div className="card-footer">
        

            

<FacebookShareButton url={"http://16.16.91.234:3003/uploads/" + list.video[0].filename} >
<BsFacebook/>
      </FacebookShareButton>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <TwitterShareButton url={"http://16.16.91.234:3003/uploads/" + list.video[0].filename}>
        <CgTwitter/>
      </TwitterShareButton>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <LinkedinShareButton url={"http://16.16.91.234:3003/uploads/" + list.video[0].filename}>
       <FaLinkedin/>
      </LinkedinShareButton>
      {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
      {/* <PinterestShareButton url={"http://16.16.91.234:3003/uploads/" + list.video[0].filename}>
         <FaPinterestSquare/>
      </PinterestShareButton> */}
&nbsp;&nbsp;&nbsp;&nbsp;
      <WhatsappShareButton url={"http://16.16.91.234:3003/uploads/" + list.video[0].filename}>
      <FaWhatsappSquare/>
      </WhatsappShareButton>

  
          

          <br/>
          <br/>

            



          <div></div>
        </div>
      </div>
    </div>
  </div>
                               

    
                                {/* <button
  style={{
    borderRadius: '15px',
    background: '#808080',
    color: 'white',
  }}
  onClick={() => handleShareClick("http://16.16.91.234:3003/uploads/" + list.video[0].filename)}
>
  Share
</button> */}
                                <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;

                                <button   data-toggle="modal" data-target="#myModal"
                                  style={{
                                    borderRadius: "15px",
                                    background: "#808080",
                                    color: "white",
                                  }}
                                
                                >
                                  Save
                                </button>

                              </div>


                             
                                

                                
                              &nbsp;&nbsp;
                              <div className="">
                                <button
                                  style={{
                                    borderRadius: "15px",
                                    background: "#808080",
                                    color: "white",
                                  }}
                                  onClick={download}
                                >
                                  Download
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    );
                  })}

                  {getcommt && getcommt.length > 0 ? (
                    getcommt.slice(-5).map((list) => <p>{list.msg}</p>)
                  ) : (
                    <p>No comments</p>
                  )}

                 
                </div>

                <div className="col-md-4">
                  <div className="single-video-right">
                    <div className="row">
                     
                      <div className="col-md-12">
                      {lates && lates.length > 0 ? (
  lates.map((list) => (
    <div className="video-card video-card-list" key={list._id}>
                              <div className="video-card-image">
                                <Link
                                  onClick={() => {
                                    localStorage.setItem("videoiid", list._id); // Use the extracted videoId
                                  }}
                                  className="play-icon"
                                  to="/video_page"
                                >
                                  <i className="fas fa-play-circle" />
                                </Link>
                                <Link to="/video_page">
                                  <img
                                    onClick={() => {
                                      localStorage.setItem(
                                        "videoiid",
                                        list._id
                                      ); // Use the extracted videoId
                                    }}
                                    className="img-fluid"
                                    src={
                                      "http://16.16.91.234:3003/uploads/" +
                                      list.video[1].filename
                                    }
                                    alt=""
                                  />
                                </Link>
                               
                              </div>
                              <div className="video-card-body">
                                <div className="btn-group float-right right-action">
                                  <Link
                                    to="#"
                                    className="right-action-link text-gray"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i
                                      className="fa fa-ellipsis-v"
                                      aria-hidden="true"
                                    />
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="#">
                                      <i className="fas fa-fw fa-star" /> &nbsp;
                                      Top Rated
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                      <i className="fas fa-fw fa-signal" />{" "}
                                      &nbsp; Viewed
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                      <i className="fas fa-fw fa-times-circle" />{" "}
                                      &nbsp; Close
                                    </Link>
                                  </div>
                                </div>
                                <div className="video-title">
                                  <Link to="#">{list.description}</Link>
                                </div>

                                <div className="video-view">
                                  {list.video_views} views &nbsp;
                                  <i className="fas fa-calendar-alt" /> {formatDate(list.current_date)}
                                </div>
                              </div>
                            </div>
                          
                          ))
                        ) : (
                          <p>No videos found.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />


      <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Create New Video Playlist</h4>
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
        </div>
        
        <div className="card-footer">
        {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}

            
  
          <form onSubmit={handleSubmit}>
  <div>
    <br />
    <br />
  </div>
  <br />
  <div className="form-group">
    <label htmlFor="channelname">Channel Name:</label>
    <input
      type="text"
      value={channelname}
      onChange={(e) => setChannelname(e.target.value)}
      className="form-control profile1"
      id="channelname"
    />
  </div>
  <div className="form-group">
    <label htmlFor="image">Image:</label>
    <input
      type="file"
      onChange={(e) => setImage(e.target.files[0])}
      className="form-control"
      id="image"
    />
  </div>
  <br />
  <button className="btn btn-info" type="submit">
    Submit
  </button>
</form>

          <br/>
          <br/>

          <font style={{color:'blue'}}>{ssuccessMessage && <p>{ssuccessMessage}</p>} </font>  
 {getplaylist.map((list) => {
                          return (
<p onClick={() => removeCartitem(list._id  ,list.name && list.name)}>   <span className="btn btn-info" style={{ color:'white'}}><SiAddthis/></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{list.name && list.name}</p>
                            );
                          })}


          <div></div>
        </div>
      </div>
    </div>
  </div>

  

    </>
  );
}

export default Video_Page;
