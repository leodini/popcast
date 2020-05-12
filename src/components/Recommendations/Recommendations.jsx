import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchRecommendations } from '../../store/fetchActions'
import './styles.css'

const Recommendations = ({ id, typeOfRecommendation }) => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [sticky, setSticky] = useState(false)

    const dispatch = useDispatch()

    const handleScroll = useCallback(() => {
            const position = window.pageYOffset
            setScrollPosition(position)
            if(scrollPosition >= 86) setSticky(true)
            if(scrollPosition <= 80) setSticky(false)
        }, [scrollPosition])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    
    useEffect(() => {
        dispatch(fetchRecommendations(typeOfRecommendation, id))
    }, [dispatch, id, typeOfRecommendation])
    
    const recommendationSelector = useSelector((state) => state.recommendationsReducer.recommendations?.recommendations)


    return(
        <div className={`recommendations ${sticky ? 'sticky' : ''}`}>
            <p className="recommendation-title">Recommendations</p>
            {
                recommendationSelector && recommendationSelector.map(recommendation => (
                    <div key={recommendation.id} className="recommendation">
                        <Link to={`/${typeOfRecommendation}/${recommendation.id}`} style={{ textDecoration: 'none' }}>
                            <img className="recommend-thumb" src={recommendation.thumbnail} alt={recommendation.title}/>
                        </Link>
                        <div id="title-container">
                            <p className="recommend-title">{recommendation.title}</p>
                            <p className="recommend-publisher">By <strong>{recommendation.publisher}</strong></p>
                        </div>
                    </div> 
                ))
            }
        </div>
    )
}

export default Recommendations
