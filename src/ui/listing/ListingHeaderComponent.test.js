import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import ListingHeader from './ListingHeader';
import ListingHeaderComponent from './ListingHeaderComponent';

describe('ListingHeaderComponent', () => {
  test('sets activeLabelIndex to match state', () => {
    const state = { ui: { listingMode: { list: 'HISTORY' } } };
    const store = createStore(x => x, state);

    const component = shallow(<ListingHeaderComponent store={store}/>);
    expect(component.find(ListingHeader)).toHaveLength(1);
    expect(component.find(ListingHeader).prop('activeLabelIndex')).toBe(
        component.find(ListingHeader).prop('labels').findIndex(label => label.id === 'HISTORY'));
  });
});
