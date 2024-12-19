import { makeStyles } from '@material-ui/core';

const typewriterStyles = makeStyles((theme) => ({

	'@keyframes typing': {
		from: { width: 0 },
		to: { width: '70%' }
	},
	'@keyframes blink-caret': {
		from: { borderColor: 'transparent' },
		'50%': { borderColor: theme.palette.primary.dark },
		to: { borderColor: 'transparent' }
	},
	typewriter: {
		overflow: 'hidden', /* Ensures the content is not revealed until the animation */
		borderRight: `.15em solid ${theme.palette.primary.dark}`, /* The typwriter cursor */
		whiteSpace: 'nowrap', /* Keeps the content on a single line */
		margin: '0 auto', /* Gives that scrolling effect as the typing happens */
		letterSpacing: '.15em', /* Adjust as needed */
		animation: '$typing 4.5s steps(40, end), $blink-caret .75s step-end infinite'
	}
}));

export default typewriterStyles;
