import React from 'react';

// import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	workTask: {
		// textAlign: 'right'
	}
}))

const TaskList = (props) => {
	const { tasks } = props;
	const classes = useStyles();
	return (
		<List dense>
			{tasks.map((task, index) => {
				return (
					<ListItem key={index} className={classes.workTask}>
						<Typography variant="body2">{task}</Typography>
					</ListItem>
				)
			})}
		</List>
	);
};

export default TaskList;