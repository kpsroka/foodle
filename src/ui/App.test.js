import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import ModalComponent from './modal/ModalComponent';
import ListingComponent from './listing/ListingComponent';

describe('App', () => {
  test('renders ModalComponent if props.modalMode is not null', () => {
    const modalMode = { type: 'LOGIN', userCanDismiss: true };
    const appWithModal = shallow(<App modalMode={modalMode} hasListing={false}/>);
    expect(appWithModal.find(ModalComponent)).toHaveLength(1);
  });

  test('renders ListingComponent if props.hasListing is true', () => {
    const appWithListing = shallow(<App modalMode={null} hasListing={true}/>);
    expect(appWithListing.find(ListingComponent)).toHaveLength(1);
  });

  test('does not render ModalComponent if props.modalMode is null', () => {
    const appWithoutModal = shallow(<App modalMode={null} hasListing={true} />);
    expect(appWithoutModal.find(ModalComponent)).toHaveLength(0);
  });

  test('does not render ListingComponent if props.hasListing is false', () => {
    const appWithoutListing = shallow(<App modalMode={null} hasListing={false} />);
    expect(appWithoutListing.find(ListingComponent)).toHaveLength(0);
  });
});

