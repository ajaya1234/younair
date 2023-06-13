import { useState } from 'react';
import React from 'react'
import Slider from 'react-slick';
import './sliders.css';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Slider_1 = () => {
    const [ gettop , setgettop] = useState([]);  

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
        className: 'center',
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        centerPadding: '100px',
        slidesToShow: 3,
        speed: 500,
         autoplay:true,
      };
    
      return (
        <Slider {...settings}>
        {gettop.map((list) => {
          return (
              <div >
                <Link to="/video_page">
                <img   onClick={() => {
                  localStorage.setItem("videoiid",list._id); 
                }} src={"http://16.16.91.234:3003/uploads/" + list.video[1].filename} alt="slider"  className="image" />
                <span>{list.description}</span>
                </Link>
              </div>
              );
    })}
  </Slider>
      );  

    };

export default Slider_1