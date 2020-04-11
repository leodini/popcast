import React from "react";

const Podcast = ({ podcast }) => {
  return (
    <>
      <p>{podcast.title_original}</p>
      <img src={podcast.image} alt="" />
    </>
  );
};

export default Podcast;
