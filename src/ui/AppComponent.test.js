import React from 'react';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import App from './App';
import AppComponent from './AppComponent';

describe('AppComponent', () => {
  it('sets hasListing to false and hasModal to null if state.ui.listingMode/modalMode are not set', () => {
    const state = { ui: {} };
    const store = createStore((x) => (x), state);
    const component = shallow(<AppComponent store={store} />);

    expect(component.find(App).length).toBe(1);
    expect(component.find(App).get(0).props.hasListing).toBe(false);
    expect(component.find(App).get(0).props.modalMode).toBe(null);
  });

  it('sets hasListing to be true if state.ui.listingMode is set', () => {
    const state = { ui: { listingMode: { list: 'ACTIVE', expandedOrderIndex: 0 } } };
    const store = createStore((x) => (x), state);
    const component = shallow(<AppComponent store={store} />);

    expect(component.find(App).length).toBe(1);
    expect(component.find(App).get(0).props.hasListing).toBe(true);
  });

  it('passes state.ui.modalMode as prop if set in state', () => {
    const state = { ui: { modalMode: { type: 'LOGIN', userCanDismiss: true } } };
    const store = createStore((x) => (x), state);
    const component = shallow(<AppComponent store={store} />);

    expect(component.find(App).length).toBe(1);
    expect(component.find(App).get(0).props.modalMode).toEqual(state.ui.modalMode);
  });
});
