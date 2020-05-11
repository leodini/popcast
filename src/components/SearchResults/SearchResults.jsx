import React from 'react'

import { convertTimeStamp } from '../../helpers/utils/convertTimeStamp'
import { parseTime } from '../../helpers/utils/parseTime'
import './styles.css'

const SearchResults = ({ 
    episodeResult: { 
    description_original, 
    thumbnail, 
    podcast_title_original, 
    title_original,
    audio_length_sec,
    pub_date_ms,
    publisher_original,
 }}) => {

    
    return(
        <div className="episode-result-container">
            <p className="episode-title">{title_original}</p>
            <div className="thumbnail-container">
                <img src={thumbnail} alt={title_original}/>
                <div className="time-container">
                    <span className="podcast-title">{podcast_title_original}</span>
                    <span className="publisher">By <strong>{publisher_original}</strong></span>
                    <span className="time-span">{parseTime(audio_length_sec)}</span>
                </div>
            </div>
            <p className="description">{description_original.length < 200 ? `${description_original}` : `${description_original.substring(0, 200)}...`}</p>
            <p className="date">{convertTimeStamp(pub_date_ms)}</p>
        </div>
    )
}

export default SearchResults
