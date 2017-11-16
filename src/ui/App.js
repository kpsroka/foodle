// @flow

import React from 'react';
import ListingComponent from './listing/ListingComponent';
import ModalComponent from './modal/ModalComponent';

import './App.css';

export type AppProps = {
  hasListing: boolean,
  hasModal: boolean,
};

class App extends React.Component<AppProps> {
  render() {
    return (
      <div className="App">
        <div>Foodle</div>
        { this.props.hasListing ? <ListingComponent /> : null }
        { this.props.hasModal ? <ModalComponent /> : null }
      </div>
    )
  }
}

export default App;
