import React from 'react';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import App from './App';
import AppComponent from './AppComponent';

describe('AppComponent', () => {
  it('sets hasListing and hasModal to be false if state.ui.listingMode/modalMode are not set', () => {
    const state = { ui: {} };
    const store = createStore((x) => (x), state);
    const component = shallow(<AppComponent store={store} />);

    expect(component.find(App).length).toBe(1);
    expect(component.find(App).get(0).props.hasListing).toBe(false);
    expect(component.find(App).get(0).props.hasModal).toBe(false);
  });

  it('sets hasListing to be true if state.ui.listingMode is set', () => {
    const state = { ui: { listingMode: { list: 'ACTIVE', expandedOrderIndex: 0 } } };
    const store = createStore((x) => (x), state);
    const component = shallow(<AppComponent store={store} />);

    expect(component.find(App).length).toBe(1);
    expect(component.find(App).get(0).props.hasListing).toBe(true);
  });

  it('sets hasModal to be true if state.ui.modalMode is set', () => {
    const state = { ui: { modalMode: 'LOGIN' } };
    const store = createStore((x) => (x), state);
    const component = shallow(<AppComponent store={store} />);

    expect(component.find(App).length).toBe(1);
    expect(component.find(App).get(0).props.hasModal).toBe(true);
  });
});
