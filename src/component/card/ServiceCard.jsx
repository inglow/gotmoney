import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import TranslatedText from '../text/TranslatedText';
import './ServiceCard.css';

function ServiceCard({ title, description }) {
  return (
    <div className="service-container">
      <h5 className="service-title">
        <TranslatedText txt={title} />
      </h5>
      <div className="service-description">
        <TranslatedText txt={description} />
      </div>
      <div className="service-btn">
        <Button
          sx={{
            minHeight: 0, padding: 0, m: 0, mt: 2,
          }}
          variant="text"
          color="secondary"
        >
          <TranslatedText txt="contactMe" />
          <BiChevronRight />
        </Button>
      </div>
    </div>
  );
}
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default ServiceCard;
