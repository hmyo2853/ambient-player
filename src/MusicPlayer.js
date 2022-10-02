import { useEffect, useState } from "react";
import useSound from "use-sound";
import "./css/style.css";
import { faPlay, faStop, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import music1 from "./music/Music_for_Stress_Relief_Instrumental_Music.mp3";
import music2 from "./music/Piano_Music_for_Good_Memories_Peaceful_Music.mp3";
import music3 from "./music/Piano_Music_Quick_Positive_Energy_Meditation.mp3";
import music4 from "./music/bird_relax_music_with_nature_sounds_in_the_forest_for_work_and_study.mp3";
import img01 from "./img/01.png";
import img02 from "./img/02.png";
import img03 from "./img/03.png";
import img04 from "./img/04.png";

// music player component
function MusicPlayer({ data }) {
  const musicList = [ 0, music1, music2, music3, music4 ];
  let music = "";
  let img = "";
  const imgList = [ 0, img01, img02, img03, img04 ];
  for (let i = 1; i < 5; i++) {
    const musicNum = "music" + String(i);
    const imgNum = "img0" + String(i);
    if ( data.key === musicNum) {
      music = musicList[i];
    }
    if ( data.img === imgNum ) {
      img = imgList[i];
    }
  }
  const [isPlaying, setIsPlaying] = useState(true);
  const [musicVolume, setVolume] = useState(0.5);
  const [icon, setIcon] = useState(faPlay);
  const [play, { stop }] = useSound(`.${ music }`, {
    volume: musicVolume,
    interrupt: true
  });
  const handleClick = () => {
    if (isPlaying) { // button toggle
      setIcon(faStop);
      setIsPlaying(false);
      play();
    } else {
      setIcon(faPlay);
      setIsPlaying(true);
      stop();
    }
  }
  // if (!isPlaying) {
  //   console.log(musicTime);
  //   setTimeout(() => setIsPlaying(true) , musicTime * 60 * 1000 );
  //   setTimeout(() => stop() , musicTime * 60 * 1000 );
  //   setTimeout(() => setIcon(faPlay) , musicTime * 60 * 1000 );
  //   setTimeout(() => console.log(musicTime * 60 * 1000, "종료") , musicTime * 60 * 1000 );
  // }

  const changeVolumeUp = () => {
    if (musicVolume < 1) {
    setVolume(Math.round((musicVolume + 0.1) * 100) / 100);
    return;
    }
  }
  const changeVolumeDown = () => {
    if (0 < musicVolume) {
    setVolume(Math.round((musicVolume - 0.1) * 100) / 100);
    return;
    }
  }
  return (
    <div 
      className="player-container"
      style={{ backgroundImage: `url(${ img })`, backgroundSize: "cover"}}>
      <div className="player-container__title">
        { isPlaying ? ( <div>Stop</div> ) :
        ( <div>Now playing....</div> )
        }
        <div>{ data.title }</div>
      </div>
      <div className="player-container__btn">
        <div className="player-container__play-stop">
          <button
            onClick={handleClick}>
            <FontAwesomeIcon icon={icon} />
          </button>
        </div>
        <div className="player-container__volume">
          <button onClick={changeVolumeDown}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div className="player-container__volume-bar">
            { String(musicVolume).length < 2 ? (
              `${ musicVolume * 100 } % `
            ) : `${ musicVolume * 100 } %` }
          </div>
          <button onClick={changeVolumeUp}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer;