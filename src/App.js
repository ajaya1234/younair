import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import History_Page from "./components/History_Page";
import Header from "./components/Header";
import Channels from "./components/Channels";
import Single_Channel from "./components/Single_Channel";
import Video_Page from "./components/Video_Page";
import Upload_Video from "./components/Upload_Video";
import Login from "./components/Login";
import Register from "./components/Register";
import Category from "./components/Category";
import "./App.css"
import CategoryDetail from "./components/CategoryDetail";
import ChennalCategory from "./components/ChennalCategory";
import Subscriptions from "./components/Subscriptions";
import Upload from "./components/Upload";
import ViewProfile from "./components/ViewProfile";
import Account from "./components/Account";
import Setting from "./components/Setting";
import Error404 from "./components/404";

import ForgotPassword from "./components/ForgotPassword";
import Myprofile from "./components/Myprofile";
import Blank from "./components/Blank";
import Explore from "./components/Explore";
import Myvideo from "./components/Myvideo";
import Perminum from "./components/Perminum";
import About from "./components/About";

import Notification from './components/Notification';
import Refer from "./components/Refer";
import Changepassword from "./components/Changepassword";
import Changeprofile from "./components/Changeprofile";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/header" element={<Header/>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/history_page" element={<History_Page />}></Route>
        <Route path="/channels" element={<Channels />}></Route>
        <Route path="/single_channel" element={<Single_Channel />}></Route>
        <Route path="/video_page" element={<Video_Page />}></Route>
        <Route path="/upload_video" element={<Upload_Video />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/category_details" element={<CategoryDetail />}></Route>
        <Route path="/chennal_category" element={<ChennalCategory />}></Route>
        <Route path="/subscriptions" element={<Subscriptions />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/view_profile" element={<ViewProfile />}></Route>
        <Route path="/myaccount" element={<Myprofile />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/404" element={<Error404 />}></Route>
      
        <Route path="/blank" element={<Blank />}></Route>
        <Route path="/explore" element={<Explore/>}></Route>
        <Route path="/myvideo" element={<Myvideo/>}></Route>
        <Route path="/permium" element={<Perminum/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/notification" element={<Notification/>}></Route>
        <Route path="/refer" element={<Refer/>}></Route>
        <Route path="/changepassword" element={<Changepassword/>}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
        <Route path="/changeprofile" element={<Changeprofile/>}></Route>
  
        {/* <Route path="/" element={<Single_Router/>}></Route>
        <Route path="/singlechannels" element={<Single_channels/>}></Route>
        <Route path="/videos" element={<Single_videos/>}></Route>
     */}


        </Routes>
    </div>
  );
}

export default App;
