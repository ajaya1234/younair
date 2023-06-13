import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer';
function Upload_Video() {
  return (
   <>
   <Header/>
   <Sidebar/>
   <div id="wrapper">
  <div id="content-wrapper">
    <div className="container-fluid upload-details">
      <form action="" method="post">
        <div className="row">
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
            <div className="osahan-size">102.6 MB . 2:13 MIN Remaining</div>
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
              Your Video is still uploading, please keep this page open until
              it's done.
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
                      name=""
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="e3">Tog</label>
                    <input
                      type="text"
                      placeholder="Tog"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="e4">Category</label>
                    <input
                      type="text"
                      placeholder="Category"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="e5">Title</label>
                    <input
                      type="text"
                      placeholder="Title"
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
                      id="e1"
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
                <div className="col-lg-2 col-xs-6 col-4">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Private
                    </label>
                  </div>
                </div>
                <div className="col-lg-2 col-xs-6 col-4">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="zcustomCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="zcustomCheck1"
                    >
                      Globle
                    </label>
                  </div>
                </div>
                <div className="col-lg-2 col-xs-6 col-4">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="czcustomCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="czcustomCheck1"
                    >
                      Watch via link
                    </label>
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
<Footer/>
   </>
    )
}

export default Upload_Video