import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Header } from '../../components'
import { fetchSingleEpisode } from '../../store/fetchActions'
import './styles.css'

const SingleEpisode = () => {
    const { id } = useParams()
    
    const dispatch = useDispatch()

    const { title, description, image } = useSelector(state => state.episodeReducer.episode_info)
    
    useEffect(() => {
        dispatch(fetchSingleEpisode(id))    
    }, [])

    return(
        <>
            <Header />
            <div className="container">
                <div className="img-container">
                    <img className="img" src={image} alt={title}/>
                    <div className="button-container">
                        <button className="button">Play</button>
                        <button className="button">Add to queue</button>
                    </div>
                </div>
                <div className="description-container">
                    <p className="title">{title}</p>
                    <p className="desc">{description}</p>
                </div>
            </div>
        </>
    )
}

export default SingleEpisode