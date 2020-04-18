import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPlayCircle, FaPause, FaVolumeDown } from "react-icons/fa";
import { addMessage } from "../store/ducks/messageReducer";
import "./styles.css";

const Player = () => {
  const [percentage, setPercentage] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const title = useSelector((state) => state.podcastReducer.episode.title);
  const audio = useSelector((state) => state.podcastReducer.episode.audio);
  const maybe_audio_invalid = useSelector(
    (state) => state.podcastReducer.episode.maybe_audio_invalid
  );
  const audio_length = useSelector(
    (state) => state.podcastReducer.episode.audio_length_sec
  );

  const dispatch = useDispatch();

  const getTime = (time) => {
    //checks if the time is a number
    if (!isNaN(time)) {
      //convert the time from seconds into minutes already formated
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    }
    return "00:00";
  };

  const getPercentage = (percentage) => {
    setPercentage((percentage / audio_length) * 100);
  };

  useEffect(() => {
    if (!!title) {
      dispatch(addMessage(`Now playing ${title}`));
    }
  }, [dispatch, title]);

  useEffect(() => {
    getPercentage(currentTime);
  }, [percentage, currentTime, getPercentage]);

  return (
    <>
      {!maybe_audio_invalid ? (
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
              <span className="cs_audio_current_time">
                {getTime(currentTime)}/{getTime(audio_length)}
              </span>
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
            <audio
              ref={(ref) => {
                ref = audio;
              }}
            />
          </div>
        </div>
      ) : null}

      {/* <audio controls>
        <source src="path-to-music.mp3" type="audio/mpeg" />
      </audio> */}
    </>
  );
};

export default Player;
