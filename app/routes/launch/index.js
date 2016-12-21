/**
 * Created by Adel on 21/12/16.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Launch extends Component {
	render() {
		return (
			<View>
				<Text>Welcome to CoachTutor</Text>
			</View>
		)
	}

	static navigationBarVisible() {
		return true;
	}

	static navigationBarColor() {
		return '#777';
	}
}