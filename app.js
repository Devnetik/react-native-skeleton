/**
 * Created by maluramichael on 18/08/16.
 */

import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import {Theme} from './src';

export default class App extends Component {
	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center'}}>
				<Text style={Theme.Helper.mix('text,h1,bold')}>HELLO WORLD</Text>
			</View>
		);
	}
}