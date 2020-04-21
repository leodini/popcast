import React from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

export default function Title(){
    const title = useSelector((state) => state.episodeReducer.episode.title);

    return(
        <Helmet>
            <title>{!!title ? `Popcasts | ${title}` : 'Popcasts'}</title>
        </Helmet>
    )
}

