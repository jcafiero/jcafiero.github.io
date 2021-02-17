import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  contactHeader: {
    textAlign: 'center'
  }
}));

const ContactPanel = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.contactHeader}>Contact</Typography>
    </Box>
  );
};

export default ContactPanel;