import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Recommendation from './Recommendation'
import { fetchRecommendations } from '../../store/fetchActions'
import './styles.css'

const Recommendations = ({ id, recommendation }) => {
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(fetchRecommendations(recommendation, id))
    }, [dispatch, id, recommendation])
    
    const recommendationSelector = useSelector((state) => state.recommendationsReducer.recommendations?.recommendations)


    return(
        <div className="recommendations">
            <p className="recommendation-title">Recommendations</p>
            {
                recommendationSelector && recommendationSelector.map(recommendation => (
                    <Recommendation key={recommendation.id} recommendation={recommendation} />
                ))
            }
        </div>
    )
}

export default Recommendations