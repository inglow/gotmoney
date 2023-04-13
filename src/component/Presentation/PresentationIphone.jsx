import PropTypes from 'prop-types';
import React, { useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import './PresentationIphone.css';
import IphoneDisplay from '../iphoneDisplay/IphoneDisplay';
import ButtonPrimary from '../button/ButtonPrimary';

function PresentationIphone({ video }) {
  const allVideo = video.map((e) => e.video);
  const [videoSelected, setVideoSelected] = useState(allVideo);
  const RenderBtnIphone = React.useCallback(() => (
    video.map((v) => (
      <div key={v.name}>
        <ButtonPrimary name={v.name} action={() => setVideoSelected([v.video])} fullWidth />
      </div>
    ))
  ), []);
  return (
    <div>
      <IphoneDisplay video={videoSelected} />
      <RenderBtnIphone />
    </div>
  );
}
PresentationIphone.propTypes = {
  video: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    video: PropTypes.string,
  })).isRequired,
};
export default PresentationIphone;
