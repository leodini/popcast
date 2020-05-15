import React, { useState } from "react";
import { FaPlayCircle, FaPause, FaVolumeDown } from "react-icons/fa";
import ReactPlayer from 'react-player'

import './Player.css'
import { parseTime } from '../../helpers/utils/parseTime'

const Player = ({ current_playing: {
  audio,
  title,
  thumbnail,
  audio_length_sec
  }}) => {  

  const [ player, setPlayer ] = useState(null)
  const [ playing, setPlaying ] = useState(true)
  const [ volume, setVolume ] = useState(1.0)
  const [ played, setPlayed ] = useState(0)

  const togglePlay = () => {
    setPlaying(!playing)
  }

  const handleSeekChange = e => {
    setPlayed(parseFloat(e.target.value))
  }

  const handleProgress = state => {
    console.log('on progress', state)
    setPlayed(state.playedSeconds)
  }
  
  if(!title) return null

    return (
      <div className="audioplayer-container">
        <ReactPlayer
          url={audio}
          playing={playing}
          volume={volume}
          ref={(ref) => setPlayer(ref)}
          onProgress={handleProgress}
          style={{display: 'none'}}
        />

        <div className="playing-info-container">
          <img src={thumbnail} alt={title}/>
          <div className="playing-info">
            <span className="current-playing-artist">{title}</span>
          </div>
        </div>

        <div className="player">
          {
            playing ? <FaPause 
                        size={'22px'} 
                        className="play-pause" 
                        onClick={togglePlay} /> : 
                      <FaPlayCircle size={'22px'} 
                        className="play-pause" 
                        onClick={togglePlay} />
          }
          <span className="time-played">{parseTime(played)}</span>
          <div className="player-slider">
                <input
                  className="player"
                  type='range'
                  min={0}
                  max={audio_length_sec}
                  step='any'
                  value={played}
                  onChange={handleSeekChange}
                  style={{verticalAlign: 'bottom'}}
                />
          </div>
          <span className="time-total">{parseTime(audio_length_sec)}</span>
          <div className='volume'>
            <FaVolumeDown className="vol-icon" />
            <label>
              <span className='slider-container'>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='.01'
                  value={volume}
                  onChange={e => setVolume(parseFloat(e.target.value))}
                  style={{verticalAlign: 'bottom'}}
                />
              </span>
            </label>
          </div>
        </div>
      </div>
    )
};

export default React.memo(Player);
