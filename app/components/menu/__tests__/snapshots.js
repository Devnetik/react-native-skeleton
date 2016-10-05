import {Text} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../index.js';

it('renders correctly without props', () => {
  const tree = renderer.create(<Component/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with children', () => {
  const view = (
    <Component>
      <Text>Dashboard</Text>
      <Text>About</Text>
    </Component>
  );
  const tree = renderer.create(view).toJSON();
  expect(tree).toMatchSnapshot();
});
