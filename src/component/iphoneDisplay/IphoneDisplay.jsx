import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './IphoneDisplay.css';
import PropTypes from 'prop-types';

import useWindowSize from '../../hook/useWindowSize';

function IphoneDisplay({ video }) {
  const [playIndex, setPlayIndex] = useState(0);
  const { width } = useWindowSize();
  console.log(width);
  const nextVideo = React.useCallback(() => {
    if (playIndex + 1 === video.length) {
      setPlayIndex(0);
    } else { setPlayIndex((oldPlayIndex) => oldPlayIndex + 1); }
  }, [playIndex]);
  const videoDecorator = React.useCallback(() => {
    if (width < 750) {
      return {
        width: 150, height: 325, borderRadius: 20, boxShadow: '0px 0px 0px 5px #1f1f1f,0px 0px 0px 6px #191919, 0px 0px 0px 10px #111',
      };
    }
    if (width < 900) {
      return {
        width: 230, height: 499, borderRadius: 18, boxShadow: '0px 0px 0px 9px #1f1f1f,0px 0px 0px 10px #191919, 0px 0px 0px 15px #111',
      };
    }
    if (width < 1300) {
      return {
        width: 240, height: 520, borderRadius: 18, boxShadow: '0px 0px 0px 11px #1f1f1f,0px 0px 0px 13px #191919, 0px 0px 0px 20px #111',
      };
    }

    return {
      width: 277,
      height: 600,
      borderRadius: 40,
      boxShadow: '0px 0px 0px 11px #1f1f1f,0px 0px 0px 13px #191919, 0px 0px 0px 20px #111',
    };
  }, [width]);

  return (
    <div className="iphone-x-container">
      <div
        className="iphone-x"
        style={videoDecorator()}
      >
        <div className="iphone-footer" />
      </div>
      <ReactPlayer
        url={video[playIndex]}
        playing
        controls
        loop={video.length === 1}
        height={videoDecorator().height}
        width={videoDecorator().width}
        muted
        playsinline
        onEnded={nextVideo}
      />
    </div>

  );
}
IphoneDisplay.propTypes = {
  video: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default IphoneDisplay;
