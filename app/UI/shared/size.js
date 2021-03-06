import React, { useContext } from 'react';
import { makeStyles, Slider, Typography, useMediaQuery } from '@material-ui/core';
import { MyTheme } from '../../theme/theme';

const useStyles = theme =>
  makeStyles({
    text: { color: theme.control, fontWeight: 'bold' },
    slider: { color: theme.control, '&.Mui-disabled': { color: theme.controlDisabled } },
  });

export const Size = ({ size, css, disabled, setSize, max = 200 }) => {
  const mediaQuery = useMediaQuery('only screen and (min-width: 1050px)');
  const theme = useContext(MyTheme);
  const classes = useStyles(theme)();
  return (
    <div className={css}>
      <Typography classes={{ root: classes.text }}>Size</Typography>
      <Slider
        classes={{ root: classes.slider }}
        valueLabelDisplay="off"
        disabled={disabled}
        onChange={(event, value) => setSize(value)}
        value={size}
        min={5}
        max={mediaQuery ? max : max / 4}
      />
    </div>
  );
};
