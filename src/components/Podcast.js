import React from "react";

const Podcast = ({ podcast }) => {
  return (
    <>
      <h3>{podcast.title}</h3>
      <img src={podcast.image} alt="" />
    </>
  );
};

export default Podcast;
