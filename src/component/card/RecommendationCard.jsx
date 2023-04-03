import { Rating } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import color from '../../config/color';
import TranslatedText from '../text/TranslatedText';
import './RecommendationCard.css';

function RecommendationCard({ name, image, recommendation }) {
  return (
    <div className="recommendation-container">
      <div className="recommendation-avatar-container">
        <img className="recommendation-avatar" src={image} alt="Avatar" />
      </div>

      <h5 className="recommendation-title">
        <TranslatedText txt={name} />
      </h5>
      <div className="recommendation-description">
        <TranslatedText txt={recommendation} />
      </div>
      <div className="recommendation-rating">
        <Rating
          name="half-rating"
          defaultValue={5}
          precision={0.5}
          color="secondary"
          readOnly
          size="small"
          sx={{
            fontSize: '1rem',
            m: 0,
            p: 0.5,
            paddingX: 2,
            backgroundColor: color.greyBackground,
            boxShadow: 'inset 0 3px 8px 0 rgb(15 15 20 / 20%)',
            borderRadius: 30,
          }}
        />
      </div>
    </div>
  );
}
RecommendationCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  recommendation: PropTypes.string.isRequired,
};
export default RecommendationCard;
