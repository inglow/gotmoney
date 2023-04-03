import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './IphoneDisplay.css';
import PropTypes from 'prop-types';
import twa from '../../assets/video/twa1.mp4';
import useWindowSize from '../../hook/useWindowSize';

function IphoneDisplay({ video }) {
  const [, setIsVideoLoaded] = useState(false);
  const { width } = useWindowSize();
  const mobileMode = width > 1200 ? {
    width: 300,
    height: 650,
  } : {
    width: 161,
    height: 350,
  };
  const onLoadedData = () => {
    setIsVideoLoaded(true);
    console.log(video);
  };
  return (
    <div className="iphone-x-container">

      <div
        className="iphone-x"
        style={mobileMode}
      >

        <span>Left action button</span>
        <span>Right action button</span>
        <div className="iphone-footer" />
      </div>
      <ReactPlayer
        url={twa}
        playing
        controls
        loop
        height={mobileMode.height}
        width={mobileMode.width}
        muted
        playsinline
        onReady={onLoadedData}
      />
    </div>

  );
}
IphoneDisplay.propTypes = {
  video: PropTypes.string.isRequired,
};
export default IphoneDisplay;
