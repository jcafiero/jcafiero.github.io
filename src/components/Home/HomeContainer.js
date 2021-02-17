import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core';

import ContactPanel from './ContactPanel';

import { Link as RouterLink } from 'react-router-dom';

// import Typewriter from 'typewriter-effect';

// const useStyles = makeStyles((theme) => ({
//   '@keyframes bounce': {
//     '0%': {
//       transform: 'scale(1,1)',
//       translateY: 0
//     },
//     '10%': {
//       transform: 'scale(1.1,0.9)',
//       translateY: 0
//     },
//     '30%': {
//       transform: 'scale(0.9,1.1)',
//       translateY: -100
//     },
//     '50%': {
//       transform: 'scale(1.05,0.95)',
//       translateY: 0
//     },
//     '57%': {
//       transform: 'scale(1,1)',
//       translateY: -7
//     },
//     '64%': {
//       transform: 'scale(1,1)',
//       translateY: 0
//     },
//     '100%': {
//       transform: 'scale(1,1)',
//       translateY: 0
//     }
//   },
//   bounce: {
//     '&:hover': {
//       color: 'red',
//       animationDuration: '1s',
//       animationName: 'bounce',
//       animationIterationCount:'infinite',
//       transformOrigin: 'bottom',
//       animationTimingFunction: 'cubic-bezier(0.280, 0.840, 0.420, 1)',
//     }
//   },
  
// }))

const HomeContainer = (props) => {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
      {/* TODO: add typewriter header */}
      {/* <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('<h2>Welcome!</h2>')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            .deleteAll()
            .start();
        }}
      /> */}
        <Typography variant="h2">
          Welcome!
        </Typography>
      </Grid>
      <Grid container>
      <Typography variant="body1" color="primary" aria-label="Hi, I'm Jenn.">
        This is a website I built to demonstrate my professional and personal interests. 
      </Typography>
      <Typography variant="h2">
        Check out my resume!
        <Button variant="contained" color="primary" component={RouterLink} to="/work/">
          Go to resume
        </Button>
      </Typography>
      <ContactPanel />
      </Grid>
    </React.Fragment>
  )
};

export default HomeContainer;