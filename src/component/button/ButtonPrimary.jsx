import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import TranslatedText from '../text/TranslatedText';
import './ButtonPrimary.css';

function ButtonPrimary({ name, action, fullWidth }) {
  return (
    <Button
      onClick={action}
      className={`button-primary-text ${fullWidth && 'button-primary-full-width'}`}
      size="large"
      variant="contained"
      color="secondary"
    >
      <div>
        <TranslatedText txt={name} />
      </div>
    </Button>
  );
}
ButtonPrimary.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
};
ButtonPrimary.defaultProps = {
  fullWidth: false,
};
export default ButtonPrimary;
