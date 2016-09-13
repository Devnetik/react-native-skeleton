/**
 * Created by maluramichael on 18/08/16.
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import BetterNavigator from 'react-native-better-navigator';
import LoadingOverlay from 'react-native-loading-overlay';
import Drawer from 'react-native-drawer';

import { connect } from 'react-redux';

import { Constants, Routes } from './app';

class Application extends Component {

	//**********************************************
	// Component
	//**********************************************
	constructor( props ) {
		super( props );
		this.router = this.router.bind( this );
		this.onSideMenuOpen = this.onSideMenuOpen.bind( this );
		this.onSideMenuClose = this.onSideMenuClose.bind( this );
		this.onPressDrawerButton = this.onPressDrawerButton.bind( this );

		this.routeMap = new Map( [
			[ Constants.Routes.DASHBOARD, Routes.Dashboard ]
		] );
	}

	render() {
		const { Loading, SideMenu } = this.props.Store;

		const initialRoute = { name: Constants.Routes.DASHBOARD, title: 'Dashboard' };

		return (
			<BetterNavigator initialRoute={initialRoute}
							 routes={this.router}
							 sceneStyle={{backgroundColor: 'white'}}
							 ref={'betterNavigator'}/>
		);
	}

	//**********************************************
	// Methods
	//**********************************************
	router( route ) {
		if ( !route ) return null;
		if ( !this.routeMap ) return null;
		if ( !this.routeMap.has( route.name ) ) return null;

		return this.routeMap.get( route.name );
	}

	onSideMenuOpen() {
		this.props.dispatch( Data.Actions.General.openSideMenu() );
	}

	onSideMenuClose() {
		this.props.dispatch( Data.Actions.General.closeSideMenu() );
	}

	onPressDrawerButton( route ) {
		this.refs.betterNavigator.refs.navigator.resetTo( route );
		setTimeout( ()=> {
			this.props.dispatch( Data.Actions.General.closeSideMenu() );
		}, 120 );
	}
}

const stateSelector = state => {
	return {
		Store: {
			Loading : state.Loading,
			SideMenu: state.SideMenu
		}
	}
};

const connector = connect( stateSelector );
const connectedApplication = connector( Application );

export default connectedApplication;