import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import TranslatedText from '../text/TranslatedText';
import './ButtonPrimary.css';

function ButtonPrimary({ name }) {
  return (
    <Button
      className="button-primary-text"
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
};
export default ButtonPrimary;
