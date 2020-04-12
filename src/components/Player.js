import React from "react";
import { FaPlayCircle, FaPause, FaVolumeDown } from "react-icons/fa";
import "./styles.css";

const Player = () => {
  return (
    <React.Fragment>
      <audio controls>
        <source src="path-to-music.mp3" type="audio/mpeg" />
      </audio>
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
            <span id="cs_audio_current_time">0:0</span>
          </span>
          <span id="cs_play_pause_btn" style={{ position: "relative" }}>
            {/* <i className="far fa-play-circle" id="cs_audio_play"></i> */}
            <FaPlayCircle style={{ margin: "5px" }} />
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
                  backgroundColor: "red",
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
            <div className="cs_audio_bar_now"></div>
            <div className="cs_audio_bar_loaded"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Player;
