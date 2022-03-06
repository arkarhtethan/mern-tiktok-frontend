import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v1/posts");
      setVideos(response.data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video
            description={video.description}
            song={video.song}
            channel={video.channel}
            likes={video.likes}
            shares={video.shares}
            messages={video.messages}
            url={video.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
