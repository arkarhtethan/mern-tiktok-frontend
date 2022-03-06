import React, { useState } from "react";
import {
  FavoriteOutlined,
  Message,
  Share,
  FavoriteBorder,
} from "@material-ui/icons";
import "./VideoSidebar.css";

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteOutlined fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorder fontSize="large" onClick={() => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <Message fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <Share fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
