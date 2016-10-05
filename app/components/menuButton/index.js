/**
 * Created by maluramichael on 13/09/16.
 */
import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import Style from './style';

export default class MenuButton extends Component {
	render() {
		return (
			<TouchableHighlight style={Style.button}
								onPress={this.props.onPress}
								underlayColor={'transparent'}>
				<Icon name={this.props.icon} size={24} color={'white'}/>
			</TouchableHighlight>
		)
	}

	static defaultProps = {
		icon: 'gear'
	}
}
