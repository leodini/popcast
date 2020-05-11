import React from 'react'
// import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

export default function Title(){
    // const title = useSelector((state) => state.episodeReducer.currentEpisode.title);

    return(
        <Helmet>
            <title>{'Popcast'}</title>
        </Helmet>
    )
}

