import { useState } from "react";
import useSound from "use-sound";
import "./css/style.css";
import { faPlay, faStop, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// music player component
function MusicPlayer({ data }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [musicVolume, setVolume] = useState(0.5);
  const [icon, setIcon] = useState(faPlay);
  const [play, { stop }] = useSound(data.music, {
    volume: musicVolume,
    interrupt: true
  });

  // play and stop btun click event
  const handleClick = () => {
    if (isPlaying) {
      playMusic();
      setTimeout(() => {
        stopMusic();
      }, data.time * 1000 );
    } else {
      stopMusic();
    }
  }


  // play and stop music & change button icon
  const playMusic = () => {
    setIcon(faStop);
    setIsPlaying(false);
    play();
  }
  const stopMusic = () => {
    setIcon(faPlay);
    setIsPlaying(true);
    stop();
    clearTimeout();
  }

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
      style={{ backgroundImage: `url(${ data.img })`, backgroundSize: "cover"}}>
      <div className="player-container__title">
        { isPlaying ? ( <div>Stop</div> ) :
        ( <div>Now playing....</div> )
        }
        <div>{ data.title }</div>
      </div>
      <div className="player-container__btn">
        <div className="player-container__play-stop">
          <button
            onClick={ handleClick }>
            <FontAwesomeIcon icon={ icon } />
          </button>
        </div>
        <div className="player-container__volume">
          <button onClick={ changeVolumeDown }>
            <FontAwesomeIcon icon={ faMinus } />
          </button>
          <div className="player-container__volume-bar">
            { String( musicVolume ).length < 2 ? (
              `${ musicVolume * 100 } % `
            ) : `${ musicVolume * 100 } %` }
          </div>
          <button onClick={ changeVolumeUp }>
            <FontAwesomeIcon icon={ faPlus } />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer;