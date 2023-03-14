import PropTypes from 'prop-types';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import './PresentationLine.css';

function PresentationLine({ name, value }) {
  return (
    <div className="presentation-line">
      <h6 className="presentation-name">
        {name}
        :
      </h6>
      <div className="presentation-value">{value}</div>
    </div>
  );
}
PresentationLine.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default PresentationLine;
