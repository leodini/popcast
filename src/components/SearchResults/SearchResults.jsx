import React from 'react'
import './styles.css'

const SearchResults = ({ 
    episodeResult: { 
    description_original, 
    thumbnail, 
    podcast_title_original, 
    title_original }}) => {

    
    return(
        <div className="episode-result-container">
            <p className="episode-title">{title_original}</p>
            <div className="thumbnail-container">
                <img src={thumbnail} alt={title_original}/>
                <span className="podcast-title">{podcast_title_original}</span>
            </div>
            <p className="description">{description_original}</p>
        </div>
    )
}

export default SearchResults