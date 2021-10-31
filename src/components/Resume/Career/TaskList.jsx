import React from 'react';

// import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
	workTask: {
		// textAlign: 'right'
	}
}));

const TaskList = (props) => {
	const { tasks } = props;
	const classes = useStyles();
	return (
		<List dense>
			{tasks.map((task, index) => (
				<ListItem key={index} className={classes.workTask}>
					<Typography variant="body2">{task}</Typography>
				</ListItem>
			))}
		</List>
	);
};

TaskList.propTypes = {
	// eslint-disable-next-line react/require-default-props, react/forbid-prop-types
	tasks: PropTypes.object
};

export default TaskList;
