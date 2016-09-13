'use strict';

/**
 * Created by maluramichael on 13/09/16.
 */

import './ReactotronConfig';
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {Data} from './app';
import Application from './application';

class AppWrapper extends Component {
	render() {
		return (
			<Provider store={Data.Store}>
				<Application/>
			</Provider>
		);
	}
}

AppRegistry.registerComponent('Skeleton', () => AppWrapper);
