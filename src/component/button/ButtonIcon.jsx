import { Button } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import './ButtonPrimary.css';

function ButtonIcon({
  disabled, fullWidth, icon, action,
}) {
  return (
    <Button
      color="secondary"
      onClick={action}
      disabled={disabled}
      variant="contained"
      className={`button-primary-text ${fullWidth && 'button-primary-full-width'}`}
    >
      {icon}
    </Button>
  );
}
ButtonIcon.propTypes = {
  disabled: PropTypes.bool,
  action: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  icon: PropTypes.element.isRequired,
};
ButtonIcon.defaultProps = {
  disabled: false,
  fullWidth: false,
};

export default ButtonIcon;
