import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './IphoneDisplay.css';

export default function IphoneDisplay() {
  const [, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <div className="App">
      <h1>react-player-mp4</h1>
      <div className="iphone-x">
        <div className="iphone-header" />
        <ReactPlayer
          // url={Vid}
          playing
          controls
          loop
          muted
          playsinline
          onReady={onLoadedData}
        />
        {/* <span>Left action button</span>
  <span>Right action button</span> */}
        <div className="iphone-footer" />
      </div>

    </div>
  );
}
