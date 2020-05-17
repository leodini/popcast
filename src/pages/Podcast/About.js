import React from "react";
import { MdLanguage, MdPlace, MdInfo } from "react-icons/md";

import { Genres } from "../../components";
import "./styles.css";

const About = ({ podcast }) => {
  return (
    <div className="about">
      <p className="about-this-podcast">ABOUT THIS PODCAST</p>
      <p className="about-description">{podcast.description}</p>
      <Genres genresForPodcast={podcast.genre_ids} />
      <div className="about-info-container">
        <span className="info-about">
          <MdLanguage /> {podcast.language}
        </span>
        <span className="info-about">
          <MdPlace /> {podcast.country}
        </span>
        <span className="info-about">
          <MdInfo /> {podcast.total_episodes} episodes
        </span>
      </div>
    </div>
  );
};

export default About;
