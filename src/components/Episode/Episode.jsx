import React from "react";
import { Link } from 'react-router-dom'
import { FaPlayCircle } from "react-icons/fa";

import { convertTimeStamp } from '../../helpers/utils/convertTimeStamp'
import { parseTime } from '../../helpers/utils/parseTime'
import './styles.css'

const Episode = ({ episode, playEpisode }) => {
  return (
    <div className="unique-episode-container">
        <div key={episode.id} className="episode">
            <Link to={`/episode/${episode.id}`} style={{ textDecoration: 'none' }}>
                <img className="epi-thumb" src={episode.thumbnail} alt={episode.title}/>
            </Link>
            <div id="title-container">
                <p className="epi-title">{episode.title}</p>
                <p className="date">{convertTimeStamp(episode.pub_date_ms)}</p>
            </div>
        </div> 
        <div className="btn-play-container">
          <FaPlayCircle size={'22px'} id="player-btn" onClick={() => playEpisode(episode)} />
          <span className="audio-length">{parseTime(episode.audio_length_sec)}</span>
        </div>
    </div>
  );
};

export default Episode;
