import React, { useEffect, useState } from "react";

import VideoCards,{AdVideoCard} from "./videoCards.jsx";

import { YOUTUBE_VIDEOS_API } from "../utils/constants.js";

import { Link } from "react-router-dom";

function videoContainer() {
  const [videos, setVideos] = useState([]);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);

    const json = await data.json();

    setVideos(json.items);

    console.log(Array.isArray(videos));
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="flex flex-wrap">
    {videos[0] && <AdVideoCard info={videos[0]} />}
    {videos.map((video) => (
      <Link key={video.id} to={"/watch?v=" + video.id}>
        <VideoCards info={video} />
      </Link>
    ))}
  </div>
  );
}

export default videoContainer;
