import React from 'react';
import './Divider.css';
import PropTypes from 'prop-types';

function Divider({ marginVertical = 0 }) {
  return (
    <div className="divider" style={{ margin: `${marginVertical}px 0` }} />
  );
}
Divider.propTypes = {
  marginVertical: PropTypes.number.isRequired,
};
export default Divider;
