/**
 * Created by maluramichael on 18/08/16.
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import BetterNavigator from 'react-native-better-navigator';
import LoadingOverlay from 'react-native-loading-overlay';
import Drawer from 'react-native-drawer';

import { connect } from 'react-redux';

import { Constants, Routes, Components, Data } from './app';

class Application extends Component {

	//**********************************************
	// Component
	//**********************************************
	constructor( props ) {
		super( props );
		this.router = this.router.bind( this );
		this.toggleSideMenu = this.toggleSideMenu.bind( this );
		this.onSideMenuOpen = this.onSideMenuOpen.bind( this );
		this.onSideMenuClose = this.onSideMenuClose.bind( this );
		this.onPressDrawerButton = this.onPressDrawerButton.bind( this );

		const routes = [
			[ Constants.Routes.LAUNCH, Routes.Launch ],
			[ Constants.Routes.DASHBOARD, Routes.Dashboard ],
			[ Constants.Routes.GENERATE_TRAINING, Routes.GenerateTraining ]
		];

		this.routeMap = new Map( routes );
	}

	render() {
		const { Loading, SideMenu } = this.props.Store;

		const initialRoute = { name: Constants.Routes.DASHBOARD, title: 'CoachTutor' };

		const defaultComponents = {
			left: ()=> <Components.MenuButton icon='bars' onPress={this.toggleSideMenu}/>
		};

		const scene = (
			<View style={{flex: 1}}>
				<BetterNavigator initialRoute={initialRoute}
								 routes={this.router}
								 defaultComponents={defaultComponents}
								 sceneStyle={{backgroundColor: 'white'}}
								 ref={'betterNavigator'}/>
				<LoadingOverlay visible={Loading.loadingCount > 0} text={Loading.text}/>
			</View>
		);

		const drawerStyles = {
			drawer: { shadowRadius: 0 },
			main  : { paddingLeft: 0 },
		};

		const tweenHandler = ( ratio ) => ({
			main: { opacity: (2 - ratio) / 2 }
		});

		return (
			<Drawer ref={(drawer)=>this.drawer = drawer}
					type="overlay"
					content={<Components.Menu onPress={this.onPressDrawerButton}/>}
					openDrawerOffset={0.4} // 20% gap on the right side of drawer
					panCloseMask={0.5}
					panThreshold={.25}
					panOpenMask={0}
					tapToClose={true}
					tweenHandler={tweenHandler}
					closedDrawerOffset={0}
					styles={drawerStyles}
					open={SideMenu.isOpen}
					onOpen={this.onSideMenuOpen}
					onClose={this.onSideMenuClose}>
				{scene}
			</Drawer>
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

	toggleSideMenu() {
		this.props.dispatch( Data.Actions.SideMenu.toggle() );
	}

	onSideMenuOpen() {
		this.props.dispatch( Data.Actions.SideMenu.open() );
	}

	onSideMenuClose() {
		this.props.dispatch( Data.Actions.SideMenu.close() );
	}

	onPressDrawerButton( route ) {
		this.refs.betterNavigator.refs.navigator.resetTo( route );
		setTimeout( ()=> {
			this.props.dispatch( Data.Actions.SideMenu.close() );
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