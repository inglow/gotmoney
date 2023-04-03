import PropTypes from 'prop-types';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import TranslatedText from '../text/TranslatedText';
import './PresentationLine.css';

function PresentationLine({ name, value }) {
  return (
    <div className="presentation-line">
      <h6 className="presentation-name">
        <TranslatedText txt={name} />
        :
      </h6>
      <div className="presentation-value"><TranslatedText txt={value} /></div>
    </div>
  );
}
PresentationLine.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default PresentationLine;
