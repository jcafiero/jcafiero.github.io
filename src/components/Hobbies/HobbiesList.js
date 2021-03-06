import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Link as RouterLink } from 'react-router-dom';

import hobbies from '../../data/hobbies';

const useStyles = makeStyles((theme) => ({
	dialogImage: {
		width: '40%',
		height: '40%'
	},
	gallery: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	pageHeader: {
		textAlign: 'center',
		'& .MuiLink-root': {
			color: theme.palette.text.primary,
			'&:hover': {
				color: theme.palette.primary.main
			}
		},
		'&:before, &:after': {
			backgroundColor: theme.palette.text.primary,
			content: '""',
			display: 'inline-block',
			height: 2,
			position: 'relative',
			verticalAlign: 'middle',
			width: '25%'
		},
		'&:before': {
			right: '0.5em',
			marginLeft: '-50%'
		},
		'&:after': {
			left: '0.5em',
			marginRight: '-50%'
		}
	}
}));

const HobbiesList = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const [index, setIndex] = React.useState(0);
	const [src, setSrc] = React.useState(hobbies.crossStitch[0].fileName);
	const [picList] = React.useState(hobbies.crossStitch);

	const handleClose = () => {
		setOpen(false);
	};

	const onClickImage = (src) => {
		
		// setSrc(`/img/cross-stitch/${src}`)
		// setOpen(true);
	};

	const onClickNext = () => {
		if (index + 1 === picList.length) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	};

	const onClickPrevious = () => {
		if (index - 1 === -1) {
			setIndex(picList.length - 1);
		} else {
			setIndex(index - 1);
		}
	};

	return (
		<React.Fragment>
			<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
				<DialogTitle id="alert-dialog-title">Coming soon - Hobbies page</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						This is a work in progress that I'm hoping to finish in the near future, but feel free to close this dialog and peruse the sneak peek I've left!
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close Dialog</Button>
				</DialogActions>
			</Dialog>
			<Box className={classes.headerContainer}>
				<Typography variant="h2" className={classes.pageHeader}>
					<Link component={RouterLink} to="/hobbies" target="_self">
						Hobbies
					</Link>
				</Typography>
			</Box>
			<Grid className={classes.gallery}>
				{hobbies.crossStitch.map(piece => (
					<Box key={piece.name}>
						<img src={`/img/cross-stitch/${piece.fileName}`} onClick={onClickImage(piece.fileName)} alt={piece.altText} height={piece.size.height} width={piece.size.width} />
					</Box>
				))}
			</Grid>

			{/* <Dialog fullScreen open={open} onClose={handleClose}>
				<img src={`/img/cross-stitch/${picList[index].fileName}`} className={classes.dialogImage} />
				<Button onClick={onClickPrevious}>Prev</Button>
				<Button onClick={onClickNext}>Next</Button>
			</Dialog> */}
		</React.Fragment>
	)
};

export default HobbiesList;