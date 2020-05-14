import React, { useState, useEffect } from "react";
import { FaPlayCircle, FaPause, FaVolumeDown } from "react-icons/fa";
import ReactHowler from 'react-howler'

import './Player.css'

const Player = ({ current_playing }) => {  

  
  const [ player, setPlayer ] = useState(null)
  const [ playing, setPlaying ] = useState(true)
  const [ loop, setLoop ] = useState(false)
  const [ volume, setVolume ] = useState(1.0)
  const [ seek, setSeek ] = useState(0)

  const togglePlay = () => {
    setPlaying(!playing)
  }

  const toggleLoop = () => {
    setLoop(!loop)
  }
  
  const handleSeek = (e) => {
    setSeek(e)
    player.seek(seek)
  }
  if(!current_playing){
    return null
  }
    return (
      <div className="audioplayer-container">
        <ReactHowler
          src={[current_playing.audio]}
          format={['mp3']}
          playing={playing}
          loop={loop}
          volume={volume}
          ref={(ref) => setPlayer(ref)}
        />

        <div className="playing-info-container">
          <img src={current_playing.thumbnail} alt={current_playing.title}/>
          <div className="playing-info">
            <span className="current-playing-artist">{current_playing.title}</span>
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

          <div className="player-slider">
                <input
                  className="player"
                  type='range'
                  min='0'
                  max={player ? player.duration() : '100'}
                  step='.05'
                  value={player ? player.seek() : null}
                  onChange={e => handleSeek(e.target.value)}
                  style={{verticalAlign: 'bottom'}}
                />
          </div>
          <div className='volume'>
            <FaVolumeDown />
            <label>
              <span className='slider-container'>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='.05'
                  value={volume}
                  onChange={e => setVolume(parseFloat(e.target.value))}
                  style={{verticalAlign: 'bottom'}}
                />
              </span>
            </label>
              {volume.toFixed(2)}
          </div>
          
        </div>
      </div>
    )
};

export default React.memo(Player);
