import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '@material-ui/core/SvgIcon';

const NavBarLogo = (props) => {
	const { color, ...other } = props;
	return (
		<SvgIcon viewBox="0 0 1790 794" {...other}>
			{/* <g id="Layer_1">
				<g>
					<g> */}
			<path
				stroke={color}
				d="M421.25,518.1c-7.5,8.94-20.19,13.42-38.07,13.42c-17.89,0-30.68-5.05-38.36-15.15c-5.26-6.9-8.68-16.97-10.34-30.04
					c7.63-3.24,13.96-8.36,18.9-15.5c9.04-13.07,13.55-32.5,13.55-58.26v-92.14c4.86-1.16,10.25-1.79,16.26-1.79
					c16.54,0,28.56,4.52,36.05,13.56c7.5,9.04,12.02,24.42,13.56,46.15l12.98-1.16c-0.78-23.45-6.4-41.05-16.87-52.78
					c-10.49-11.73-25.73-17.6-45.72-17.6c-5.83,0-11.22,0.57-16.26,1.6v-39.79h25.97V256.8h-82.79l0.58,11.82h43.27v43.98
					c-6.88,3.17-12.8,7.59-17.65,13.39c-10.67,12.79-16.01,31.39-16.01,55.82v87.69c0,2.93,0.08,5.77,0.24,8.53
					c-2.4,0.35-4.88,0.59-7.55,0.59c-14.42,0-24.57-4.19-30.44-12.55c-5.87-8.37-9.47-23.7-10.82-46.01l-12.98,1.16
					c0.76,23.85,5.48,41.35,14.13,52.49c8.66,11.16,21.92,16.73,39.81,16.73c3.21,0,6.21-0.28,9.14-0.69
					c2.26,14.32,7.04,25.93,14.47,34.7c10.67,12.6,26.3,18.89,46.88,18.89c20.77,0,36.39-5.76,46.87-17.3s15.73-28.85,15.73-51.92
					l-12.98-1.16C432.6,494.12,428.76,509.16,421.25,518.1z M333.28,466.32v-81.34c0-23.66,3.84-40.62,11.54-50.91
					c2.49-3.33,5.57-6.07,9.13-8.32v87.39c0,23.08-3.23,39.77-9.67,50.05c-2.83,4.52-6.48,7.99-10.84,10.52
					C333.34,471.31,333.28,468.87,333.28,466.32z"
			/>
			<path
				stroke={color}
				d="M361.02,660.02C216,660.02,98,542.03,98,397c0-145.03,118-263.02,263.02-263.02S624.05,251.97,624.05,397
					C624.05,542.03,506.05,660.02,361.02,660.02z M361.02,148.36c-137.1,0-248.64,111.54-248.64,248.64
					c0,137.1,111.54,248.64,248.64,248.64S609.67,534.1,609.67,397C609.67,259.9,498.12,148.36,361.02,148.36z"
			/>
			{/* </g>
					<g>
						<g> */}
			<path
				stroke={color}
				d="M819.79,201.97v8.47h-18.61v103.14c0,18.46-3.23,32.38-9.71,41.75c-6.48,9.37-16.19,14.06-29.14,14.06
						c-12.81,0-22.32-4-28.53-11.99c-6.2-7.99-9.58-20.53-10.13-37.62l9.3-0.83c0.96,15.98,3.55,26.97,7.75,32.96
						c4.2,5.99,11.47,8.99,21.81,8.99c10.33,0,17.81-3.68,22.42-11.06c4.61-7.37,6.92-19.32,6.92-35.86V210.45h-31.01l-0.41-8.47
						H819.79z"
			/>
			<path
				stroke={color}
				d="M934.09,342.94c-2.34,8.95-6.17,15.6-11.47,19.94s-12.78,6.52-22.42,6.52c-11.58,0-20.61-3.65-27.08-10.96
						c-6.48-7.3-9.71-17.98-9.71-32.03v-41.55c0-14.47,3.27-25.35,9.81-32.65c6.55-7.3,15.19-10.96,25.94-10.96
						c10.74,0,19.35,3.72,25.84,11.16c6.48,7.45,9.71,18.74,9.71,33.9v20.04h-62v20.26c0,11.99,2.3,20.7,6.92,26.14
						c4.61,5.45,11.47,8.16,20.57,8.16c7.44,0,12.92-1.48,16.43-4.44c3.51-2.96,6.38-8.38,8.58-16.22L934.09,342.94z M872.7,284.86
						v13.02h52.7v-11.16c0-12.81-2.21-22.18-6.61-28.11c-4.41-5.92-10.95-8.88-19.64-8.88c-8.68,0-15.26,2.86-19.74,8.57
						C874.94,264.02,872.7,272.87,872.7,284.86z"
			/>
			<path
				stroke={color}
				d="M1024.41,358.86v8.47h-46.09v-8.47h18.61V251.79h-18.61v-8.47h27.91v16.54h1.65c2.89-5.92,7.13-10.51,12.71-13.75
						c5.58-3.24,11.33-4.86,17.26-4.86c9.09,0,16.43,3.24,22.01,9.72c5.58,6.48,8.37,15.23,8.37,26.25v81.65h18.6v8.47h-27.9v-88.26
						c0-9.51-1.97-16.74-5.89-21.7c-3.92-4.97-9.4-7.45-16.43-7.45c-5.79,0-11.3,1.45-16.53,4.34c-5.24,2.9-9.85,7.58-13.85,14.06
						v90.53H1024.41z"
			/>
			<path
				stroke={color}
				d="M1173.42,358.86v8.47h-46.09v-8.47h18.61V251.79h-18.61v-8.47h27.91v16.54h1.65c2.89-5.92,7.13-10.51,12.71-13.75
						c5.58-3.24,11.33-4.86,17.26-4.86c9.09,0,16.43,3.24,22.01,9.72c5.58,6.48,8.37,15.23,8.37,26.25v81.65h18.6v8.47h-27.9v-88.26
						c0-9.51-1.97-16.74-5.89-21.7c-3.92-4.97-9.4-7.45-16.43-7.45c-5.79,0-11.3,1.45-16.53,4.34c-5.24,2.9-9.85,7.58-13.85,14.06
						v90.53H1173.42z"
			/>
			<path
				stroke={color}
				d="M1279.45,367.33v-8.47h31V251.79h-31v-8.47h40.31v115.54h31v8.47H1279.45z M1315,216.03c-2.62,0-4.75-0.52-6.4-1.55
						c-1.65-1.04-2.48-2.93-2.48-5.69v-1.44c0-2.9,0.83-4.89,2.48-5.99c1.65-1.1,3.79-1.65,6.4-1.65s4.76,0.55,6.41,1.65
						c1.65,1.11,2.48,3.1,2.48,5.99v1.44c0,2.76-0.83,4.65-2.48,5.69C1319.76,215.51,1317.62,216.03,1315,216.03z"
			/>
			<path
				stroke={color}
				d="M1453.27,358.86v8.47h-58.91v-8.47h18.61V251.79h-18.61v-8.47h18.61v-11.37c0-9.92,2.3-17.56,6.92-22.94
						c4.62-5.38,10.44-8.06,17.47-8.06c2.9,0,5.75,0.41,8.58,1.24c2.82,0.83,5.34,1.86,7.54,3.1l-1.86,8.06
						c-2.06-1.24-4.31-2.2-6.72-2.9c-2.41-0.68-4.79-1.03-7.13-1.03c-4.69,0-8.44,1.76-11.27,5.26c-2.82,3.51-4.24,9.2-4.24,17.06
						v11.57h31v8.47h-31v107.07H1453.27z"
			/>
			<path
				stroke={color}
				d="M1570.67,342.94c-2.34,8.95-6.17,15.6-11.47,19.94s-12.78,6.52-22.42,6.52c-11.58,0-20.61-3.65-27.08-10.96
						c-6.48-7.3-9.71-17.98-9.71-32.03v-41.55c0-14.47,3.27-25.35,9.81-32.65s15.19-10.96,25.94-10.96
						c10.74,0,19.35,3.72,25.84,11.16c6.48,7.45,9.71,18.74,9.71,33.9v20.04h-62v20.26c0,11.99,2.3,20.7,6.92,26.14
						c4.61,5.45,11.47,8.16,20.57,8.16c7.44,0,12.92-1.48,16.43-4.44c3.51-2.96,6.38-8.38,8.58-16.22L1570.67,342.94z
						M1509.29,284.86v13.02h52.7v-11.16c0-12.81-2.21-22.18-6.61-28.11c-4.41-5.92-10.95-8.88-19.64-8.88s-15.26,2.86-19.74,8.57
						C1511.53,264.02,1509.29,272.87,1509.29,284.86z"
			/>
			<path
				stroke={color}
				d="M1614.9,367.33v-8.47h18.61V251.79h-18.61v-8.47h27.91v16.54h1.65c3.03-6.76,6.58-11.54,10.64-14.37
						c4.07-2.82,8.38-4.24,12.92-4.24c7.45,0,13.3,2.69,17.57,8.06c4.27,5.38,6.4,13.02,6.4,22.94v17.57h-9.3v-17.36
						c0-6.89-1.28-12.41-3.82-16.54c-2.55-4.13-6.52-6.19-11.89-6.19c-4.54,0-8.85,1.55-12.91,4.65c-4.07,3.1-7.82,8.1-11.27,14.99
						v89.49h19.22v8.47H1614.9z"
			/>
			<path
				stroke={color}
				d="M774.93,601.25c-14.75,0-25.94-4.52-33.59-13.54c-7.65-9.02-11.47-22.15-11.47-39.37V485.5
						c0-17.5,3.82-30.83,11.47-39.99c7.65-9.16,18.84-13.75,33.59-13.75c14.33,0,25.25,4.2,32.76,12.61
						c7.5,8.41,11.54,21.02,12.09,37.83l-9.31,0.83c-1.1-15.57-4.33-26.59-9.71-33.08c-5.38-6.47-13.99-9.71-25.84-9.71
						c-12.81,0-21.98,3.68-27.49,11.06s-8.26,19.53-8.26,36.48v58.29c0,16.67,2.75,28.63,8.26,35.86
						c5.51,7.24,14.68,10.85,27.49,10.85s21.91-3.2,27.28-9.6c5.38-6.41,8.13-17.19,8.26-32.35l9.31,0.83
						c0,16.53-3.76,28.94-11.27,37.2C801.01,597.11,789.82,601.25,774.93,601.25z"
			/>
			<path
				stroke={color}
				d="M901.81,601.25c-9.78,0-17.53-3.17-23.25-9.51c-5.72-6.34-8.58-14.95-8.58-25.84c0-9.92,2.62-17.74,7.86-23.46
						c5.23-5.71,12.61-8.58,22.11-8.58h32.03v-27.28c0-7.86-2.21-13.98-6.61-18.39c-4.41-4.41-10.41-6.61-17.98-6.61
						c-7.86,0-13.68,1.72-17.47,5.16c-3.79,3.45-6.72,9.72-8.78,18.81l-8.27-2.48c2.34-10.74,6.17-18.42,11.47-23.05
						c5.3-4.61,12.92-6.92,22.84-6.92c10.34,0,18.6,3,24.8,9s9.3,14.15,9.3,24.49v61.59c0,10.06,1.35,16.67,4.04,19.84
						c2.68,3.17,7.54,3.92,14.57,2.27v8.89c-6.89,1.37-12.58,0.59-17.05-2.38c-4.49-2.96-7-8.23-7.55-15.82h-1.44
						c-2.76,6.07-7.1,10.95-13.02,14.68S908.57,601.25,901.81,601.25z M902.85,592.98c5.92,0,11.27-1.61,16.02-4.85
						c4.75-3.23,9.12-7.89,13.12-13.95v-32.24h-31.41c-6.76,0-12.09,1.65-16.02,4.96c-3.93,3.31-5.89,9.24-5.89,17.77
						c0,9.1,1.96,16.09,5.89,20.98C888.48,590.54,894.58,592.98,902.85,592.98z"
			/>
			<path
				stroke={color}
				d="M1065.91,590.71v8.47H1007v-8.47h18.61V483.64H1007v-8.47h18.61V463.8c0-9.92,2.3-17.56,6.92-22.94
						c4.62-5.38,10.44-8.06,17.47-8.06c2.9,0,5.75,0.41,8.58,1.24c2.82,0.83,5.34,1.86,7.54,3.1l-1.86,8.06
						c-2.06-1.24-4.31-2.2-6.72-2.9c-2.41-0.68-4.79-1.03-7.13-1.03c-4.69,0-8.44,1.76-11.27,5.26c-2.82,3.51-4.24,9.2-4.24,17.06
						v11.57h31v8.47h-31v107.07H1065.91z"
			/>
			<path
				stroke={color}
				d="M1119.21,599.18v-8.47h31V483.64h-31v-8.47h40.31v115.54h31v8.47H1119.21z M1154.76,447.88c-2.62,0-4.75-0.52-6.4-1.55
						c-1.65-1.04-2.48-2.93-2.48-5.69v-1.44c0-2.9,0.83-4.89,2.48-5.99c1.65-1.1,3.79-1.65,6.4-1.65c2.62,0,4.76,0.55,6.41,1.65
						c1.65,1.11,2.48,3.1,2.48,5.99v1.44c0,2.76-0.83,4.65-2.48,5.69C1159.52,447.36,1157.37,447.88,1154.76,447.88z"
			/>
			<path
				stroke={color}
				d="M1314.51,574.79c-2.34,8.95-6.17,15.6-11.47,19.94c-5.3,4.34-12.78,6.52-22.42,6.52c-11.58,0-20.61-3.65-27.08-10.96
						c-6.48-7.3-9.71-17.98-9.71-32.03v-41.55c0-14.47,3.27-25.35,9.81-32.65s15.19-10.96,25.94-10.96
						c10.74,0,19.35,3.72,25.84,11.16c6.48,7.45,9.71,18.74,9.71,33.9v20.04h-62v20.26c0,11.99,2.3,20.7,6.92,26.14
						c4.61,5.45,11.47,8.16,20.57,8.16c7.44,0,12.92-1.48,16.43-4.44c3.51-2.96,6.38-8.38,8.58-16.22L1314.51,574.79z
						M1253.13,516.71v13.02h52.7v-11.16c0-12.81-2.21-22.18-6.61-28.11c-4.41-5.92-10.95-8.88-19.64-8.88
						c-8.68,0-15.26,2.86-19.74,8.57C1255.37,495.87,1253.13,504.72,1253.13,516.71z"
			/>
			<path
				stroke={color}
				d="M1365.34,599.18v-8.47h18.61V483.64h-18.61v-8.47h27.91v16.54h1.65c3.03-6.76,6.58-11.54,10.64-14.37
						c4.07-2.82,8.38-4.24,12.92-4.24c7.45,0,13.3,2.69,17.57,8.06c4.27,5.38,6.4,13.02,6.4,22.94v17.57h-9.3v-17.36
						c0-6.89-1.28-12.41-3.82-16.54c-2.55-4.13-6.52-6.19-11.89-6.19c-4.54,0-8.85,1.55-12.91,4.65c-4.07,3.1-7.82,8.1-11.27,14.99
						v89.49h19.22v8.47H1365.34z"
			/>
			<path
				stroke={color}
				d="M1528.8,601.25c-11.44,0-20.25-3.72-26.46-11.16c-6.2-7.45-9.3-17.98-9.3-31.62v-41.76c0-13.91,3.13-24.66,9.4-32.24
						c6.27-7.57,15.05-11.37,26.35-11.37s20.04,3.8,26.25,11.37c6.2,7.58,9.3,18.33,9.3,32.24v41.76c0,13.64-3.1,24.18-9.3,31.62
						C1548.85,597.53,1540.1,601.25,1528.8,601.25z M1528.8,592.77c8.82,0,15.4-2.82,19.74-8.47c4.34-5.65,6.51-14.26,6.51-25.83
						v-41.76c0-11.99-2.17-20.84-6.51-26.56c-4.34-5.71-10.92-8.57-19.74-8.57c-8.96,0-15.61,2.86-19.95,8.57
						c-4.34,5.72-6.51,14.57-6.51,26.56v41.76c0,11.57,2.17,20.18,6.51,25.83C1513.2,589.95,1519.84,592.77,1528.8,592.77z"
			/>
			{/* </g>
					</g>
				</g>
			</g> */}
		</SvgIcon>
	);
};

NavBarLogo.propTypes = {
	color: PropTypes.string
};

NavBarLogo.defaultProps = {
	color: '#000000'
};

export default NavBarLogo;