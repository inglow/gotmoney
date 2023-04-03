import PropTypes from 'prop-types';
import React from 'react';

import './TitleText.css';
import TranslatedText from './TranslatedText';

function TitleText({ title }) {
  return (
    <div className="title-text">
      <TranslatedText txt={title} />
    </div>
  );
}
TitleText.propTypes = {
  title: PropTypes.string.isRequired,

};
export default TitleText;
