/**
 * Created by maluramichael on 18/08/16.
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, AppRegistry} from 'react-native';
import Navigator from 'react-native-better-navigator';
import {connect} from 'react-redux';
import {Constants, Routes} from './app';

class Application extends Component {

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
		const initialRoute = {name: Constants.Routes.DASHBOARD, title: 'Dashboard'};

		return (
			<Navigator initialRoute={initialRoute}
					   routes={this.router}
					   sceneStyle={{backgroundColor: 'white'}}/>
		);
	}
}

const stateSelector = state => {
	return {
		Store: {
			Loading: state.Loading,
			General: state.General
		}
	}
};

const connector = connect(stateSelector);
const connectedApplication = connector(Application);

export default connectedApplication;