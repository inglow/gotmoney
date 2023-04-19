import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import TranslatedText from '../text/TranslatedText';
import './ButtonPrimary.css';

function ButtonPrimary({
  name, action, fullWidth, fixWidth, color, size, disabled,
}) {
  return (
    <Button
      onClick={action}
      className={`button-primary-text ${fullWidth && 'button-primary-full-width'}`}
      size={size}
      disabled={disabled}
      variant="contained"
      color={color}
      style={{ width: fixWidth || null }}
    >
      <div>
        <TranslatedText txt={name} />
      </div>
    </Button>
  );
}
ButtonPrimary.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  action: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  fixWidth: PropTypes.number,
  disabled: PropTypes.bool,
};
ButtonPrimary.defaultProps = {
  fullWidth: false,
  fixWidth: 0,
  disabled: false,
  color: 'secondary',
  size: 'large',
};

export default ButtonPrimary;
