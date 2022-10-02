import { useEffect } from "react";
import MusicPlayer from "./MusicPlayer.js";

function App() {
  
  const musicData = [
    {
      id: 1,
      key: "music1",
      img: "img01",
      title: "Music for Stress Relief Instrumental Music",
      time: 128
    },
    {
      id: 2,
      key: "music2",
      img: "img02",
      title: "Piano Music for Good Memories Peaceful Music",
      time: 182
    },
    {
      id: 3,
      key: "music3",
      img: "img03",
      title: "Piano Music Quick Positive Energy Meditation",
      time: 184
    },
    {
      id: 4,
      key: "music4",
      img: "img04",
      title: "bird relax music with nature sounds in the forest",
      time: 181
    }
  ];
  return (
    <div>
      <h1 className="header-title">Ambient Player</h1>
      <div className="ambient-player-box">
        { musicData.map((data) => (
            <MusicPlayer key={ data.id } data={ data } />
          )
        )}
      </div>
    </div>
  );
}

export default App;
