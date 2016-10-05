/**
 * Created by maluramichael on 05/10/16.
 */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import Navigator from 'react-native-better-navigator';
import Component from '../';
import {Store} from '../../../data';

it('renders correctly without props', () => {
	const tree = renderer.create(
		<Provider store={Store}>
			<Navigator initialRoute={{name: 'Route'}} routes={()=>{return Component}}/>
		</Provider>
	).toJSON();
	expect(tree).toMatchSnapshot();
});
