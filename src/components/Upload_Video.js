import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link, json } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { AiOutlineEuroCircle } from "react-icons/ai";

function Upload_Video() {
  const iddd = localStorage.getItem("_id");
  const channelnamee=localStorage.getItem("channel_name")
  const channeliid=localStorage.getItem("channel_id")

  
  




  let [inputvalue, setinputvalue] = useState({
    user_id: iddd,
    channel_id: channeliid,
    channel_name: channelnamee,
    video_name: "",
    desc: "",
    category_type :"",
  });

  let [thumb, setthumb] = useState({
    video_thumbnail: "",
  });
  let [videofiles, setvideofiles] = useState({
    user_video: "",
  });

  let inputHandel = (event) => {
    setinputvalue({ ...inputvalue, [event.target.name]: event.target.value });
  };

  let thumbFileHandel = (event) => {
    setthumb({ ...thumb, [event.target.name]: event.target.files[0] });
  };

  let videoFileHandel = (event) => {
    setvideofiles({
      ...videofiles,
      [event.target.name]: event.target.files[0],
    });
  };

  let FormHandel = (event) => {
    event.preventDefault();

    let formdata = new FormData();

    formdata.append("user_id", inputvalue.user_id);
    formdata.append("channel_id", inputvalue.channel_id);
    formdata.append("channel_name", inputvalue.channel_name);
    formdata.append("video_name", inputvalue.video_name);
    formdata.append("category_type", inputvalue.category_type);
    formdata.append("desc", inputvalue.desc);
    formdata.append("video_thumbnail", thumb.video_thumbnail);
    formdata.append("user_video", videofiles.user_video);

  console.log("form data checking",formdata)

    axios
      .post(`http://16.16.91.234:3003/api/upload_video`, formdata)
      .then((res) => {
        console.log(res);
      });
  };



  
  return (
    <>
      <Header />
      <Sidebar />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid upload-details">
            <form method="post" onSubmit={FormHandel}>
              <div className="row just">
                <div className="col-lg-12">
                  <div className="main-title">
                    <h6>Video Upload</h6>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="imgplace" />
                </div>
                <div className="col-lg-10">
                  <div className="osahan-title">
                    Contrary to popular belief, Lorem Ipsum (2020) is not.
                  </div>
                  <div className="osahan-size">
                    102.6 MB . 2:13 MIN Remaining
                  </div>
                  <div className="osahan-progress">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "75%" }}
                      />
                    </div>
                    <div className="osahan-close">
                      <Link to="#">
                        <i className="fas fa-times-circle" />
                      </Link>
                    </div>
                  </div>
                  <div className="osahan-desc">
                    Your Video is still uploading, please keep this page open
                    until it's done.
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-12">
                  <div className="osahan-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="">Description</label>
                          <textarea
                            placeholder="Description"
                            rows={3}
                            name="description"
                            onChange={inputHandel}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>


                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="e3">Video Name</label>
                          <input
                            type="text"
                            placeholder="Tag"
                            name="video_name"
                            onChange={inputHandel}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
  <div className="form-group">
    <label htmlFor="e5">Category Type</label>
    <select
      name="category_type"
      onChange={inputHandel}
      className="form-control"
    >
      <option value="">Select Category</option>
      <option value="Bollywood">Bollywood</option>
      <option value="Hollywood">Hollywood</option>
      <option value="Tollywood">Tollywood</option>
    </select>
  </div>
</div>


                     

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="e5">Video_url</label>
                          <input
                            type="text"
                            placeholder="Title"
                            name="video_url"
                            onChange={inputHandel}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="e1">Thumbnail</label>
                          <input
                            type="file"
                            placeholder="Choose File Here..."
                            name="video_thumbnail"
                            onChange={thumbFileHandel}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-lg-12">
                        <div className="main-title"></div>
                      </div>
                    </div>
                    <div className="row category-checkbox">
                      <div className="col-lg-6 col-xs-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="e1">Select Video</label>
                          <input
                            type="file"
                            placeholder="Choose File Here..."
                            name="user_video"
                            onChange={videoFileHandel}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="osahan-area text-center mt-3">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      style={{ background: "#000080", borderRadius: 4 }}
                    >
                      Upload{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Upload_Video;
