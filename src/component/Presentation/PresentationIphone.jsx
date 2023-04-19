import Grid from '@mui/material/Unstable_Grid2/Grid2';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { TbRepeat } from 'react-icons/tb';
import color from '../../config/color';
import ButtonIcon from '../button/ButtonIcon';
import ButtonPrimary from '../button/ButtonPrimary';
import IphoneDescription from '../description/IphoneDescription';
import IphoneDisplay from '../iphoneDisplay/IphoneDisplay';
import './PresentationIphone.css';

function PresentationIphone({ video, type }) {
  const allVideo = video.map((e) => e.video);
  const [videoSelected, setVideoSelected] = useState(allVideo);

  const RenderDescription = React.useCallback(() => (
    <div className="iphone-project-container">
      <div className="example-project-container">
        <IphoneDescription type={type} />
      </div>
    </div>
  ), []);

  const RenderBtnIphone = React.useCallback(() => (
    <div className="iphone-btn-container">
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        columnSpacing={1}
        rowSpacing={1}
      >
        { video.map((v) => (
          <Grid
            item
            sm={6}
            xs={12}
            spacing={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            key={v.name}
          >
            <ButtonPrimary
              disabled={videoSelected.length === 1
                ? video?.find((e) => videoSelected[0] === e.video).name === v.name : false}
              fullWidth
              name={v.name}
              action={() => setVideoSelected([v.video])}
            />
          </Grid>
        ))}
        <Grid
          item
          sm={6}
          spacing={2}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ButtonIcon
            icon={<TbRepeat size={30.5} color={color.primaryColor} />}
            fullWidth
            disabled={videoSelected.length === allVideo.length}
            action={() => setVideoSelected(allVideo)}
          />
        </Grid>
      </Grid>
    </div>
  ), [videoSelected, allVideo]);

  return (
    <div className="iphone-presentation-container">
      <Grid container>
        <Grid
          item
          md={4}
          sm={4}
        >
          <IphoneDisplay video={videoSelected} />
          { allVideo.length > 1 && <RenderBtnIphone />}
        </Grid>
        <Grid
          item
          md={8}
          sm={8}
        >
          <RenderDescription type={type} />
        </Grid>
      </Grid>
    </div>
  );
}
PresentationIphone.propTypes = {
  type: PropTypes.string.isRequired,
  video: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    video: PropTypes.string,
  })).isRequired,
};
export default PresentationIphone;
