import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

describe('React App', () => {
  it('renders the html we want', () => {
    const component = renderer.create(<App />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
