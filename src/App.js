import MusicPlayer from "./MusicPlayer.js";

import music1 from "./music/Music_for_Stress_Relief_Instrumental_Music.mp3";
import music2 from "./music/Piano_Music_for_Good_Memories_Peaceful_Music.mp3";
import music3 from "./music/Piano_Music_Quick_Positive_Energy_Meditation.mp3";
import music4 from "./music/bird_relax_music_with_nature_sounds_in_the_forest_for_work_and_study.mp3";
import img1 from "./img/01.png";
import img2 from "./img/02.png";
import img3 from "./img/03.png";
import img4 from "./img/04.png";


function App() {
  
  const musicData = [
    {
      id: 1,
      music: music1,
      img: img1,
      title: "Music for Stress Relief Instrumental Music",
      time: 128
    },
    {
      id: 2,
      music: music2,
      img: img2,
      title: "Piano Music for Good Memories Peaceful Music",
      time: 182
    },
    {
      id: 3,
      music: music3,
      img: img3,
      title: "Piano Music Quick Positive Energy Meditation",
      time: 184
    },
    {
      id: 4,
      music: music4,
      img: img4,
      title: "bird relax music with nature sounds in the forest",
      time: 181
    }
  ];
  return (
    <div>
      <h1 className="header-title">Ambient Player</h1>
      <div className="ambient-player-box">
        { musicData.map(( data ) => (
            <MusicPlayer key={ data.id } data={ data } />
          )
        )}
      </div>
      <div className="description">
        <ul>
          <li>You can change volume of music, click each plus & minus button.</li>
          <li>
            music1 <a href="https://youtu.be/Rm-2gKAvnZY" target="_blank">Link</a>,
            music2 <a href="https://youtu.be/1MjBhdGNqGI" target="_blank">Link</a>,
            music3 <a href="https://youtu.be/ykA6lBQyW-k" target="_blank">Link</a>,
            music4 <a href="https://youtu.be/8PxQiTiX3mg" target="_blank">Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
