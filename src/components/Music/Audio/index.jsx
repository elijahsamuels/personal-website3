import React from "react";
import Player from "../util/player.js";
import AudioObjects from "../util/AudioObject.js";
import "./Audio.css";

const Audio = () => {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseOver = (e) => {
  //   console.log("e.target.name:", e.target.name);
    // setIsHovered(true);
  // }

  const PlayerReturn = () => {	
    return AudioObjects.map((audio) => {
      // const AlbumImageAndDetails = () => {
      //   return <div >
      //     <img
      //       className="album-image"
      //       src={audio.album_image_url}
      //       alt={`${audio.song_title} - ${audio.album_title}`}
      //     />
      //   </div>;
      // };

      return (
        <div
          className="player"
          key={`${audio.song_title} - ${audio.album_title}`}>
          <h5 align="center">{audio.album_title}</h5>
          <img
            className="album-image"
            name={`${audio.album_title} - ${audio.song_title}`}
            src={audio.album_image_url}
            alt={`${audio.song_title} - ${audio.album_title}`}
            // onMouseEnter={changeHovered}
            // onMouseLeave={(e) => setIsHovered(false)}
            // onMouseOver={handleMouseOver}
          />
          {/* {isHovered && <div>hello i was hidden</div>} */}

          <div className="audio-player">
            <Player src={audio.link} />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Audio</h2>
      <PlayerReturn />
    </div>
  );
};

export default Audio;

// https://rovimusic.rovicorp.com/image.jpg?c=2p6V_h9ffvOqVbs0T9Eo69_M69_UI9rrJSVvWL2-yAg=&f=4

/* <img src="https://rovimusic.rovicorp.com/image.jpg?c=84etJ6L2FxYYOBX646FJWg4Q1ghY8VaPylnm7PwcKNY=&f=4" alt="The Great Unknown" onerror="this.src='https://cdn-gce.allmusic.com/images/no_image/album_300x300.png'" class="cropped-image media-gallery-image" width="300" height="300" loading="lazy"></img> */
