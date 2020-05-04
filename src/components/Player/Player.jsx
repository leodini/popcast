import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { FaPlayCircle, FaPause, FaVolumeDown } from "react-icons/fa";
import ReactHowler from 'react-howler'

import { addMessage } from "../../store/ducks";
// import cx from 'classnames'
// import styles from './Player.module.css'

const Player = () => {  
  // const [currentTime, setCurrentTime] = useState(0);
  const [ playing, setPlaying ] = useState(true)
  const [ initialized, setInitialized ] = useState(false)
  const [ currentAudio, setCurrentAudio ] = useState(null)
  const [ loop, setLoop ] = useState(false)
  const [ volume, setVolume ] = useState(1.0)

  const { title, audio, audio_length_sec } = useSelector((state) => state.episodeReducer.currentEpisode);
  const queue = useSelector((state) => state.episodeReducer.queue)

  const dispatch = useDispatch();

  // const getParsedTime = (time) => {
  //   //checks if the time is a number
  //   if (!isNaN(time)) {
  //     //convert the time from seconds into minutes already formated
  //     return (
  //       Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
  //     );
  //   }
  //   return "00:00";
  // };

  useEffect(() => {
    setCurrentAudio(audio)
  }, [audio])

  const togglePlay = () => {
    setPlaying(!playing)
  }

  const toggleLoop = () => {
    setLoop(!loop)
  }

  const onEnd = () => {
    if (!queue) return setPlaying(false)
    setCurrentAudio(queue[queue + 1].audio)
  }

  useEffect(() => {
    if (!!title) {
      dispatch(addMessage(`Now playing ${title}`));
    }
  }, [dispatch, title]);


  if (initialized === true) {
    return (
      <div>
        <ReactHowler
          src={currentAudio}
          format={['mp3']}
          playing={playing}
          loop={loop}
          volume={volume}
          onEnd={onEnd}
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
  } else {
    return (
      <div>
        <button
          className='full'
          onClick={() => setInitialized(true)}
        >
          Initialize Auto Player
        </button>
      </div>
    )
  }
};

export default Player;
