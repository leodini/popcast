import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdOpenInBrowser } from "react-icons/md";
import { FaApple, FaRss } from "react-icons/fa";

import { Recommendations, Episode } from '../../components'
import { SearchResults, Header } from "../../components";
import { addMessage, addCurrentEpisode } from "../../store/ducks";
import { fetchPodcast, fetchRecommendations } from "../../store/fetchActions";
import "./styles.css";

const Podcast = () => {
  const [ currentPage, setCurrentPage ] = useState(0)

  const params = useParams();

  const { podcast, episodeList } = useSelector((state) => state.podcastReducer);
  const { next_episode_pub_date } = useSelector((state) => state.podcastReducer.podcast)

  const dispatch = useDispatch();

  const playEpisode = (episode) => {
    dispatch(addCurrentEpisode(episode));
  };

  const loadMoreEpisodes = () => {
    dispatch(fetchPodcast(params.id, next_episode_pub_date))
    setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    dispatch(fetchPodcast(params.id));
    dispatch(fetchRecommendations(params.id))
  }, [dispatch, params.id]);

  return (
    <>
      <Header/>
      <div className="top-section">
        <div className="col-podcast-page"></div>
          <div id="podcast">
              <p id="podcast-title">{podcast.title}</p>
            <div id="info-container">
                <img src={podcast.image} alt={podcast.title}/>
                <div id="podcast-info-container">
                  <p id="podcast-publisher">By <strong>{podcast.publisher}</strong></p>
                  <div id="contact">
                    <a className="social-info" href={podcast.website}><MdOpenInBrowser style={{padding: '1px'}}/> WEBSITE</a>
                    <a className="social-info" href={podcast.rss}><FaRss style={{padding: '1px'}}/> RSS</a>
                    <a className="social-info" href={`https://podcasts.apple.com/us/podcast/id${podcast.itunes_id}`}><FaApple style={{padding: '1px'}} /> ITUNES</a>
                  </div>
                </div>
          </div>
        </div>
      </div>


        <div className="podcast-episodes-container">
          <div id="col1"></div>
          <div id="col2">
            <div id="episode-list-card">
              <p className="unique-episode-title">Previous Episodes</p>
              {
                    episodeList.length && episodeList[0].map(result => (
                      <div key={result.id} className="search-results">
                          <Episode episode={result} playEpisode={playEpisode} />
                      </div>
                    ))
              }
            </div>
            <button className="load-more-btn" onClick={loadMoreEpisodes}>Load more</button>
          </div>
          <div id="col3">
            <Recommendations id={podcast.id} typeOfRecommendation="podcast" heightToFixed={368} />
          </div>
        </div>


      {/* 
        <div className="button-container">
          <MdChevronLeft style={{ marginLeft: "5px", color: "#F62459", cursor: "pointer", height: '50px', width: '100px' }}
          onClick={showPreviousEpisodes}>
            load more
          </MdChevronLeft>
          <MdChevronRight style={{ marginLeft: "5px", color: "#F62459", cursor: "pointer", height: '50px', width: '100px' }}
          onClick={loadMoreEpisodes}>
            Previous
          </MdChevronRight>
        </div>

        </div>
        
      </div> */}
    </>
  );
};

export default Podcast;
