/**
 * Created by maluramichael on 25/08/16.
 */
import React, { Component } from 'react';
import {
	Text,
	View,
	Dimensions,
	TouchableHighlight
} from 'react-native';
import Style from './style';
import * as Constants from '../../constants';

export default class Dashboard extends Component {

	constructor(props) {
		super(props);

		this._toRoute = this._toRoute.bind(this);
	}

	_toRoute() {
		this.props.navigator.push({
			title: 'Training generieren',
			name : Constants.Routes.GENERATE_TRAINING
		})
	}

	render() {
		return (
			<View style={Style.container}>
				<TouchableHighlight
					onPress={this._toRoute}
					underlayColor={'transparent'}
					style={Style.dashboardButtonContainer}>
					<Text style={Style.dashboardButtonText}>Trainingseinheit{'\n'}generieren</Text>
				</TouchableHighlight>
				<TouchableHighlight
					onPress={()=>alert('')}
					underlayColor={'transparent'}
					style={Style.dashboardButtonContainer}>
					<Text style={Style.dashboardButtonText}>Trainingswoche{'\n'}planen</Text>
				</TouchableHighlight>
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