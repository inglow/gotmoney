import PropTypes from 'prop-types';
import React from 'react';
import ImageLink from './ImageLink';
import './ImageLinkStore.css';

function ImageLinkStore({ ios, android }) {
  return (
    <div className="image-link-store">
      <ImageLink imageUrl={ios.imageUrl} url={ios.url} name={ios.name} />
      <ImageLink imageUrl={android.imageUrl} url={android.url} name={android.name} />
    </div>
  );
}
ImageLinkStore.propTypes = {
  ios: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  android: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default ImageLinkStore;
