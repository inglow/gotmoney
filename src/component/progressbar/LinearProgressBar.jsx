import PropTypes from 'prop-types';
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import './LinearProgressBar.css';
import useIncrement from '../../hook/useIncrement';
import colors from '../../config/colors';

function LinearProgressBar({ percentage = 20, name }) {
  const progress = useIncrement(percentage);
  return (
    <div className="container-bar">
      <div className="description-bar">
        <div className="name-bar">{name}</div>
        <div className="progress-name-bar">
          {progress}
          {' '}
          %
        </div>
      </div>

      <LinearProgress
        sx={{ backgroundColor: colors.grey300Color }}
        variant="determinate"
        value={progress}
        color="secondary"
      />
    </div>

  );
}
LinearProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default LinearProgressBar;
