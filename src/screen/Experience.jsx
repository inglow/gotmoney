import React from 'react';
import PresentationIphone from '../component/presentation/PresentationIphone';
import video from '../config/video';
import './Experience.css';

function Experience() {
  return (
    <div className="container-experience">
      <PresentationIphone video={video.sampleo} type="sampleo" />
      <PresentationIphone video={video.twa} type="twa" />
      <PresentationIphone video={video.bfan} type="bfan" />
    </div>
  );
}
export default Experience;
