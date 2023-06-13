import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import {CiCircleAlert} from 'react-icons/ci'
import {TbSquareRoundedArrowRight} from 'react-icons/tb'
import {RxCross1} from 'react-icons/rx'
 
const Notification = () => {
  return (
    <>
    <Header />
    <Sidebar />
    <div id="wrapper">
        <div id="content-wrapper">
            <div className="container-fluid">
                <div className="video-block section-padding">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title">
                                <h6>Notification</h6>
                            </div>
                            <div class="alert alert-success">
                            <span><TbSquareRoundedArrowRight style={{color:"green" ,fontSize:"20px"}}/></span>     <strong>Success!  </strong>Massage Successful today 10:00
                          </div>
                          <div class="alert alert-warning">
                        <span><CiCircleAlert style={{color:"orange" ,fontSize:"20px"}}/></span>  <strong>Alert! Massage  </strong>today 10:00
                        </div>
                        <div class="alert alert-danger">
                           <span><RxCross1 style={{color:"red" ,fontSize:"20px"}}/></span><strong>Error!  </strong>massag today 10:00
                      </div>
                        </div>



                    </div>

                </div>
            </div>

        </div>
    </div>


</>
  )
}

export default Notification