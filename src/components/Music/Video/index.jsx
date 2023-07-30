import React from "react";
import YoutubeEmbed from "../util/youtubeEmbed";

const Video = () => {
  return (
    <div>
      <h2>Video</h2>
      <div className="video">
        {/* Strike Up the Band */}
        <YoutubeEmbed embedId="T0NnIzwwK20" />
        {/* Dindi */}
        <YoutubeEmbed embedId="dJZPO3rudog" />
        {/* Girl Talk */}
        <YoutubeEmbed embedId="YBouJt3tjHw" />
        {/* Young At Heart */}
        <YoutubeEmbed embedId="WAWXu60xzlk" />
      </div>
    </div>
  );
};

export default Video;

// Strike Up the Band
// https://www.youtube.com/watch?v=T0NnIzwwK20

// Dindi
// https://www.youtube.com/watch?v=dJZPO3rudog

// Girl Talk
// https://www.youtube.com/watch?v=YBouJt3tjHw

// Young At Heart
// https://www.youtube.com/watch?v=WAWXu60xzlk
