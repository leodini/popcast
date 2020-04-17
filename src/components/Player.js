import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {} from "../store/ducks/podcastReducer";
import { FaPlayCircle, FaPause, FaVolumeDown } from "react-icons/fa";
import "./styles.css";

const Player = () => {
  const [time, setTime] = useState(560);
  const [percentage, setPercentage] = useState(56);

  const getTime = (time) => {
    //checks if the time is a number
    if (!isNaN(time)) {
      //convert the time from seconds into minutes already formated
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    }
  };

  const getPercentage = (percentage) => {
    setTimeout(() => {
      setPercentage((percentage / time) * 100 + 1);
    }, 1000);
  };

  useEffect(() => {
    getPercentage(percentage);
  }, [percentage]);

  return (
    <React.Fragment>
      {/* <audio controls>
        <source src="path-to-music.mp3" type="audio/mpeg" />
      </audio> */}
      <div style={{ textAlign: "center" }}>
        <div id="cs_audioplayer">
          <span
            style={{
              position: "relative",
              left: 0,
              float: "left",
              fontSize: "0.87em",
            }}
          >
            <span className="cs_audio_current_time">{getTime(time)}</span>
          </span>
          <span
            className="cs_play_pause_btn"
            style={{ position: "relative", color: "#F62459" }}
          >
            {/* <i className="far fa-play-circle" id="cs_audio_play"></i> */}
            <FaPlayCircle style={{ margin: "5px", color: "#F62459" }} />
            {/* <i className="far fa-pause-circle" id="cs_audio_pause"></i> */}
            <FaPause
              className="far fa-pause-circle"
              style={{ margin: "5px" }}
            />
          </span>
          <span
            id="cs_audio_sound"
            style={{
              position: "relative",
              right: "5px",
              float: "right",
              marginLeft: "15px",
              top: "-2px",
            }}
          >
            <FaVolumeDown
              style={{
                verticalAlign: "middle",
                fontSize: "1.14em",
                margin: "5px",
                color: "#F62459",
              }}
              className="fas fa-volume-down"
            ></FaVolumeDown>
            <div
              className="cs_volBar"
              style={{
                height: "6px",
                width: "65px",
                backgroundColor: "#ccc",
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              <div
                className="cs_volume"
                style={{
                  height: "6px",
                  width: "28px",
                  backgroundColor: "#F62459",
                  position: "absolute",
                }}
              ></div>
            </div>
          </span>
          <span
            id="cs_audio_duration"
            style={{
              position: "relative",
              right: 0,
              float: "right",
              paddingLeft: "10px",
              fontSize: "0.87em",
            }}
          ></span>
          <div className="cs_audio_bar">
            <div className="filler" style={{ width: `${percentage}%` }}></div>
            <div className="cs_audio_bar_loaded"></div>
          </div>
          {/* <audio ref={(ref) => (podcast = ref)} /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Player;
