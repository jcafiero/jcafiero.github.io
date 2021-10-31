import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { darken, lighten, makeStyles } from '@material-ui/core/styles';

import { Link as RouterLink } from 'react-router-dom';

import hobbies from '../../data/hobbies';

const useStyles = makeStyles((theme) => ({
	closeIconButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
		'&:hover': {
			color: theme.palette.primary.main
		}
	},
	dialogContent: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: theme.spacing(2),
		'& .MuiButtonBase-root': {
			maxHeight: theme.spacing(6)
		}
	},
	dialogImage: {
		display: 'flex',
		alignSelf: 'center',
		maxHeight: '70vh',
		maxWidth: '70vw',
		height: 'auto',
		width: 'auto'
	},
	gallery: {
		lineHeight: 0,
		'-webkit-column-count': 5,
		'-webkit-column-gap': 0,
		'-moz-column-count': 5,
		'-moz-column-gap': 0,
		columnCount: 5,
		columnGap: 0,
		display: 'inline-block',
		marginRight: 'auto',
		marginLeft: 'auto',
		'& img': {
			width: '100%',
			height: 'auto',
			padding: theme.spacing(0.25),
			'&:hover': {
				background: theme.palette.type === 'light' ? lighten(theme.palette.primary.dark, 0.15) : darken(theme.palette.primary.light, 0.45)
			}
		},
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
	const [welcomeOpen, setWelcomeOpen] = React.useState(true);
	const [open, setOpen] = React.useState(false);
	const [index, setIndex] = React.useState(0);
	const [picList] = [hobbies.crossStitch];

	const handleClose = () => {
		setWelcomeOpen(false);
		setOpen(false);
	};

	const onClickImage = (i) => {
		setIndex(i);
		setOpen(true);
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
				open={welcomeOpen}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Coming soon - Hobbies page</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						This is a work in progress that I&apos;m hoping to finish in the near future, but
						feel free to close this dialog and peruse the sneak peek I&apos;ve left!
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
				{hobbies.crossStitch.map((piece, i) => (
					<Box key={piece.name} onClick={() => onClickImage(i)}>
						<img
							src={`/img/cross-stitch/${piece.fileName}`}
							alt={piece.altText}
							height={piece.size.height}
							width={piece.size.width}
						/>
					</Box>
				))}
			</Grid>

			<Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
				<DialogTitle id="alert-dialog-title">
					{picList[index].name}
					<IconButton aria-label="Close Dialog" onClick={handleClose} className={classes.closeIconButton}><CloseIcon /></IconButton>
				</DialogTitle>
				<Box className={classes.dialogContent}>
					<IconButton onClick={onClickPrevious} aria-label="Previous image">
						<ArrowLeftIcon />
					</IconButton>
					<img
						src={`/img/cross-stitch/${picList[index].fileName}`}
						// height={`${picList[index].size.height/2}`}
						width={500}
						alt={picList[index].altText}
						className={classes.dialogImage}
					/>
					<IconButton onClick={onClickNext} aria-label="Next image">
						<ArrowRightIcon />
					</IconButton>
				</Box>
			</Dialog>
		</React.Fragment>
	);
};

export default HobbiesList;
