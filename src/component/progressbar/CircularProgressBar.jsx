import PropTypes from 'prop-types';
import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import AnimatedProgressProvider from '../animation/AnimatedProgressProvider';
import './CircularProgressBar.css';

function CircularProgressBar({ percentage = 66 }) {
  return (
    <div className="progressBar-content">
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={percentage}
      >
        {(value) => (
          <CircularProgressbar
            value={value}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: 'var(--blackLight-color)',
              pathColor: 'var(--secondary-color)',
              trailColor: 'var(--grey300-color)',
            })}
          />
        )}
      </AnimatedProgressProvider>
    </div>
  );
}
CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};
export default CircularProgressBar;
