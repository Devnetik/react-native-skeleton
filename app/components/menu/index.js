/**
 * Created by maluramichael on 13/09/16.
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Style from './style';

export default class Menu extends Component {
	render() {
		return (
			<View style={Style.container}>
				{this.props.children && this.props.children.map((child)=>child)}
			</View>
		)
	}
}
