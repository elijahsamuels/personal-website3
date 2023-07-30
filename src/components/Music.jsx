import React from "react";
import { Outlet, Link } from "react-router-dom";
// import GoogleCalendar from "./music/Calendar.jsx";

const Music = () => {
  return (
    <div>
      <h2>Music</h2>
      <div>
        {/* <div>
          <Link to="calendar" className="link">
            Calendar
          </Link>
        </div> */}
        <div>
          <Link to="transcriptions" className="link">
            Transcriptions
          </Link>
        </div>
        <div>
          <Link to="audio" className="link">
            Audio
          </Link>
        </div>
        <div>
          <Link to="video" className="link">
            Video
          </Link>
        </div>
      </div>

      {/* <div>Video player</div>
      <div>Video player</div>
      <div>Video player</div>

      <div>Audio player</div>
      <div>Audio player</div>
      <div>Audio player</div>
      <div>Audio player</div>

      <div>Transcriptions</div>
      <div>Transcriptions</div>
      <div>Transcriptions</div> */}
      <Outlet />
    </div>
  );
};

export default Music;
