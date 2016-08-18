/**
 * Created by maluramichael on 18/08/16.
 */

import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	AppRegistry
} from 'react-native';
import {Provider} from 'react-redux';
import {
	Data,
	Theme
} from './app';

class App extends Component {
	render() {
		return (
			<Provider store={Data.Store}>
				<View style={{flex: 1, justifyContent: 'center'}}>
					<Text style={Theme.Helper.mix('text,h1,bold')}>HELLO WORLD</Text>
				</View>
			</Provider>
		);
	}
}

AppRegistry.registerComponent('Skeleton', () => App);
