import Grid from '@mui/material/Unstable_Grid2/Grid2';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import ButtonPrimary from '../button/ButtonPrimary';
import IphoneDisplay from '../iphoneDisplay/IphoneDisplay';
import './PresentationIphone.css';

function PresentationIphone({ video }) {
  const allVideo = video.map((e) => e.video);
  const [videoSelected, setVideoSelected] = useState(allVideo);
  const RenderBtnIphone = React.useCallback(() => (
    <div>
      <Grid
        container
        display="flex"

      >
        { video.map((v) => (
          <Grid
            item
            md={5}
            mdOffset={1}
            key={v.name}
          >
            <ButtonPrimary name={v.name} action={() => setVideoSelected([v.video])} />
          </Grid>
        ))}
      </Grid>
    </div>
  ), []);
  return (
    <Grid container className="iphone-presentation-container">
      <Grid
        item
        md={4}
      >
        <IphoneDisplay video={videoSelected} />
        <RenderBtnIphone />

      </Grid>
      <Grid
        item
        md={8}
      />
    </Grid>
  );
}
PresentationIphone.propTypes = {
  video: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    video: PropTypes.string,
  })).isRequired,
};
export default PresentationIphone;
