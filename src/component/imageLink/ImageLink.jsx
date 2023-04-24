import PropTypes from 'prop-types';
import React from 'react';
import './ImageLink.css';

function ImageLink({ url, imageUrl, name }) {
  return (
    <a className="image-link-container" href={url}>
      <img className="image-link-img" src={imageUrl} alt={name} />
    </a>
  );
}
ImageLink.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
export default ImageLink;
