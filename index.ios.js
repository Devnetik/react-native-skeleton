import {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './index.js';

class AppWrapper extends Component {
	render() {
		return (
			<App/>
		);
	}
}

AppRegistry.registerComponent('Skeleton', () => AppWrapper);
