import Header from "./Header";
import Sidebar from "./Sidebar";
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./Appp.css";
import { options, rtc } from "./constants";
import AgoraRTC from "agora-rtc-sdk-ng";

function Appp() {
  const [joined, setJoined] = useState(false);
  const channelRef = useRef("");
  const remoteRef = useRef("");
  const leaveRef = useRef("");
  const [agoraToken, setAgoraToken] = useState("");

  useEffect(() => {
    const generateAgoraToken = async () => {
      const YOUR_USER_ID = localStorage.getItem("_id");
      const YOUR_CHANNEL_ID = localStorage.getItem("channel_id");
      const YOUR_CHANNEL_NAME = localStorage.getItem("channel_name");
      try {
        const response = await fetch("http://16.16.91.234:3003/api/generate_agrora_token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: YOUR_USER_ID,
            channel_id: YOUR_CHANNEL_ID,
            channel_name: YOUR_CHANNEL_NAME,
            video_name: "AAA",
            thumbnail_image: "YOUR_THUMBNAIL_IMAGE",
          }),
        });

        const data = await response.json();
        setAgoraToken(data.token);
      } catch (error) {
        console.error(error);
      }
    };

    generateAgoraToken();
  }, []);

  async function handleSubmit(e) {
    try {
      if (channelRef.current.value === "") {
        return console.log("Please Enter Channel Name");
      }

      setJoined(true);

      rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "h264" });
      const uid = await rtc.client.join(
        options.appId,
        channelRef.current.value,
        agoraToken, // Use the generated Agora token for authentication
        null
      );

      // Create an audio track from the audio captured by a microphone
      rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      // Create a video track from the video captured by a camera
      rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();

      rtc.localVideoTrack.play("local-stream");

      rtc.client.on("user-published", async (user, mediaType) => {
        // Subscribe to a remote user
        await rtc.client.subscribe(user);
        console.log("subscribe success");
        // console.log(user);

        if (mediaType === "video" || mediaType === "all") {
          // Get `RemoteVideoTrack` in the `user` object.
          const remoteVideoTrack = user.videoTrack;
          console.log(remoteVideoTrack);

          // Dynamically create a container in the form of a DIV element for playing the remote video track.
          const PlayerContainer = React.createElement("div", {
            id: user.uid,
            className: "stream",
          });
          ReactDOM.render(
            PlayerContainer,
            document.getElementById("remote-stream")
          );

          user.videoTrack.play(`${user.uid}`);
        }

        if (mediaType === "audio" || mediaType === "all") {
          // Get `RemoteAudioTrack` in the `user` object.
          const remoteAudioTrack = user.audioTrack;
          // Play the audio track. Do not need to pass any DOM element
          remoteAudioTrack.play();
        }
      });

      rtc.client.on("user-unpublished", (user) => {
        // Get the dynamically created DIV container
        const playerContainer = document.getElementById(user.uid);
        console.log(playerContainer);
        // Destroy the container
        playerContainer.remove();
      });

      // Publish the local audio and video tracks to the channel
      await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);

      console.log("publish success!");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLeave() {
    try {
      const localContainer = document.getElementById("local-stream");

      rtc.localAudioTrack.close();
      rtc.localVideoTrack.close();

      setJoined(false);
      localContainer.textContent = "";

      rtc.client.remoteUsers.forEach((user) => {
        // Destroy the dynamically created DIV container
        const playerContainer = document.getElementById(user.uid);
        playerContainer && playerContainer.remove();
      });

      await rtc.client.leave();
    } catch (err) {
      console.error(err);
    }
  }

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
                  <div className="main-title"></div>
                  <div className="container">
                    <input
                      type="text"
                      ref={channelRef}
                      id="channel"
                      placeholder="Enter Channel name"
                    />
                    <input
                      type="submit"
                      value="Join"
                      onClick={handleSubmit}
                      disabled={joined ? true : false}
                    />
                    <input
                      type="button"
                      ref={leaveRef}
                      value="Leave"
                      onClick={handleLeave}
                      disabled={joined ? false : true}
                    />
                  </div>
                  {joined ? (
                    <>
                      <div
                        id="local-stream"
                        className="stream local-stream"
                      ></div>
                      <div
                        id="remote-stream"
                        ref={remoteRef}
                        className="stream remote-stream"
                      ></div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appp;
