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
import Navigator from 'react-native-better-navigator';
import {
	Data,
	Constants,
	Routes
} from './app';

class App extends Component {

	constructor(props) {
		super(props);
		this.router = this.router.bind(this);

		this.routeMap = new Map([
			[Constants.Routes.DASHBOARD, Routes.Dashboard]
		]);
	}

	router(route) {
		if (!route) return null;
		if (!this.routeMap) return null;
		if (!this.routeMap.has(route.name)) return null;

		return this.routeMap.get(route.name);
	}

	render() {
		return (
			<Provider store={Data.Store}>
				<Navigator initialRoute={{name: Constants.Routes.DASHBOARD}}
						   routes={this.router}/>
			</Provider>
		);
	}
}

AppRegistry.registerComponent('Skeleton', () => App);
