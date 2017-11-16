import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import ModalComponent from './modal/ModalComponent';
import ListingComponent from './listing/ListingComponent';

describe('App', () => {
  it('renders ModalComponent if props.hasModal is true', () => {
    const appWithModal = shallow(<App hasModal={true} hasListing={false}/>);
    expect(appWithModal.contains(<ModalComponent/>)).toBe(true);
  });

  it('renders ListingComponent if props.hasListing is true', () => {
    const appWithModal = shallow(<App hasModal={false} hasListing={true}/>);
    expect(appWithModal.contains(<ListingComponent />)).toBe(true);
  });

  it('does not render ModalComponent if props.hasModal is false', () => {
    const appWithoutModal = shallow(<App hasModal={false} hasListing={true} />);
    expect(appWithoutModal.contains(<ModalComponent />)).toBe(false);
  });

  it('does not render ListingComponent if props.hasListing is false', () => {
    const appWithoutModal = shallow(<App hasModal={true} hasListing={false} />);
    expect(appWithoutModal.contains(<ListingComponent />)).toBe(false);
  });
});

