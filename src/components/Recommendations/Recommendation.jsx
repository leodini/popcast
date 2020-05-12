import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Recommendation = ({ recommendation }) => {
    return(
        <div className="recommendation">
            <Link to={`/podcast/${recommendation.id}`} style={{ textDecoration: 'none' }}>
                <img className="recommend-thumb" src={recommendation.thumbnail} alt={recommendation.title}/>
            </Link>
                <div id="title-container">
                    <p className="recommend-title">{recommendation.title}</p>
                    <p className="recommend-publisher">By <strong>{recommendation.publisher}</strong></p>
                </div>
        </div>     
    )
}

export default Recommendation