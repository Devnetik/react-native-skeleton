import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../index.js';

it('renders correctly without props', () => {
  const tree = renderer.create(<Component/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with props', () => {
  const view = (
    <Component onPress={()=>{}} icon={'gear'}/>
  );
  const tree = renderer.create(view).toJSON();
  expect(tree).toMatchSnapshot();
});
