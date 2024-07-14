import React from "react";

const VideoStream = () => {
  return (
    <div className="m-5">
      <iframe
        width="1000"
        height="500"
        src="https://www.youtube.com/embed/aV9gfuUhegE?si=7FPOZAfNvBoC6kC5"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoStream;
