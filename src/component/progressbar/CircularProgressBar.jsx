import PropTypes from 'prop-types';
import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import useIncrement from '../../hook/useIncrement';
import TranslatedText from '../text/TranslatedText';
import './CircularProgressBar.css';

function CircularProgressBar({ percentage = 66, name }) {
  const progress = useIncrement(percentage);

  return (
    <div className="circular-bar-content">
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          textColor: 'var(--blackLight-color)',
          textSize: 26,
          pathColor: 'var(--secondary-color)',
          trailColor: 'var(--grey300-color)',
        })}
      />
      <div className="circular-bar-name">
        <TranslatedText txt={name} />
      </div>

    </div>
  );
}
CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default CircularProgressBar;
