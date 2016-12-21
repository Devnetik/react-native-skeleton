/**
 * Created by Adel on 21/12/16.
 */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Style from './style';

export default class GenerateTraining extends Component {
	render() {
		return (
			<View style={Style.container}>
				<View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
					<TouchableHighlight
						underlayColor={'transparent'}
						style={{backgroundColor: 'red', height: 60, flex: 1, alignItems: 'center', justifyContent: 'center'}}
						onPress={()=>alert('')}>
						<Text style={{color: 'white'}}>WarmUp</Text>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={'transparent'}
						style={{backgroundColor: 'red', height: 60, flex: 1, alignItems: 'center', justifyContent: 'center'}}
						onPress={()=>alert('')}>
						<Text style={{color: 'white'}}>Schwerpunkt</Text>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={'transparent'}
						style={{backgroundColor: 'red', height: 60, flex: 1, alignItems: 'center', justifyContent: 'center'}}
						onPress={()=>alert('')}>
						<Text style={{color: 'white'}}>Abschluss Spiel</Text>
					</TouchableHighlight>
				</View>
				<Wheel />
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

class Wheel extends Component {
	render() {
		return (
			<Text>WHEEL</Text>
		)
	}
}