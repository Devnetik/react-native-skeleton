/**
 * Created by maluramichael on 18/08/16.
 */

import {StyleSheet} from 'react-native';

const baseFontSize = 14;

export default StyleSheet.create({
	/* =============================================================================================================
	 === Some basic styles
	 ==============================================================================================================*/
	text       : {
		fontWeight: 'normal',
		fontSize  : baseFontSize,
		color     : 'black'
	},
	h1         : {
		fontSize: baseFontSize * 2
	},
	h2         : {
		fontSize: baseFontSize * 1.5
	},
	h3         : {
		fontSize: baseFontSize * 1.17
	},
	h4         : {
		fontSize: baseFontSize
	},
	h5         : {
		fontSize: baseFontSize * .83
	},
	h6         : {
		fontSize: baseFontSize * .67
	},
	bold       : {
		fontWeight: 'bold'
	},
	transparent: {
		backgroundColor: 'transparent'
	},

	/* =============================================================================================================
	 === Add your styles here
	 ==============================================================================================================*/
});