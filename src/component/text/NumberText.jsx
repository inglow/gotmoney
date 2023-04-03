import Grid from '@mui/material/Unstable_Grid2/Grid2';
import PropTypes from 'prop-types';
import React from 'react';
import useIncrement from '../../hook/useIncrement';

import './NumberText.css';
import TranslatedText from './TranslatedText';

function NumberText({ numberWithTxt }) {
  return (
    <Grid
      display="flex"
      sx={{ marginTop: 3 }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      container
    >
      {numberWithTxt.map((n) => (
        <Grid
          item
          md="auto"
          xs={6}
          mdOffset={0}
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          key={n.txt}
          className="number-txt-content"
        >
          <span className="number-span">
            {useIncrement(n.number)}
            <span className="more-span">
              +
            </span>
          </span>
          <span className="txt-span">
            <TranslatedText txt={n.txt} />
          </span>
        </Grid>

      ))}
    </Grid>
  );
}
NumberText.propTypes = {
  numberWithTxt: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number,
    txt: PropTypes.string,
  })).isRequired,
};
export default NumberText;
