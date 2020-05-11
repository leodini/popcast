import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { FaPlayCircle, FaPause, FaVolumeDown } from "react-icons/fa";
import ReactHowler from 'react-howler'

import { addMessage } from "../../store/ducks";
import './Player.css'

const Player = () => {  
  const [ player, setPlayer ] = useState(null)
  const [ playing, setPlaying ] = useState(true)
  const [ loop, setLoop ] = useState(false)
  const [ volume, setVolume ] = useState(1.0)
  const [ queueIndex, setQueueIndex ] = useState(0)
  const [ currentAudio, setCurrentAudio ] = useState()

  const queue = useSelector((state) => state.episodeReducer.queue)

  const dispatch = useDispatch();

  useEffect(() => {
    if(queue.length) setCurrentAudio(queue[queueIndex].audio)
  }, [queue, queueIndex])


  useEffect(() => {
    if (!currentAudio) {
      dispatch(addMessage(`Now playing ${currentAudio}`));
      console.log(player)
    }
  }, [dispatch, currentAudio, player]);

  const togglePlay = () => {
    setPlaying(!playing)
  }

  const toggleLoop = () => {
    setLoop(!loop)
  }
 
  const onEnd = () => {
    setQueueIndex(queueIndex + 1)
    setCurrentAudio(queue[queueIndex])
  }

    return (
      <div className="audioplayer-container">
        <ReactHowler
          src={[currentAudio]}
          format={['mp3']}
          playing={playing}
          loop={loop}
          volume={volume}
          onEnd={onEnd}
          ref={(ref) => setPlayer(ref)}
        />
        <button onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={toggleLoop}>loop</button>

        <div className='volume'>
          <label>
            Volume:
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
            {volume.toFixed(2)}
          </label>
        </div>

      </div>
    )
};

export default Player;
