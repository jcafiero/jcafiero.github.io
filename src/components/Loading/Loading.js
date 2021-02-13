import React from 'react';

import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loadingBar: {
    width: 200
  },
  loadingContainer: {
    backgroundColor: lighten(theme.palette.primary.light, 0.5)
  }
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <Box className={classes.loadingContainer}>
      <LinearProgress variant="indeterminate" className={classes.loadingBar} />
    </Box>
  )
};

export default Loading;