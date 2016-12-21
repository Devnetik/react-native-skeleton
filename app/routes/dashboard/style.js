/**
 * Created by maluramichael on 28/08/16.
 */

import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
	container               : {
		flex           : 1,
		backgroundColor: 'white',
	},
	dashboardButtonContainer: {
		flex           : 0.5,
		justifyContent : 'center',
		backgroundColor: 'red',
		borderColor    : 'gray',
		borderWidth    : 2,
		width          : Dimensions.get('window').width,
	},
	dashboardButtonText     : {
		textAlign : 'center',
		color     : 'white',
		fontWeight: 'bold',
		fontSize  : 32
	}
})