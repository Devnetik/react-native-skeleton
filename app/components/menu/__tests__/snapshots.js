import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../index.js';

it('renders correctly without props', () => {
  const tree = renderer.create(<Component/>).toJSON();
  expect(tree).toMatchSnapshot();
});
