// @flow

import React from 'react';
import ListingComponent from './listing/ListingComponent';
import ModalComponent from './modal/ModalComponent';

import './App.css';
import type { ModalMode } from '../redux/state/State';

export type AppProps = {
  hasListing: boolean,
  modalMode: ?ModalMode,
};

class App extends React.Component<AppProps> {
  render() {
    return (
      <div className="App">
        <div className="AppTitleBar">Foodle</div>
        { this.props.hasListing ? <ListingComponent /> : null }
        { this.props.modalMode !== null ? <ModalComponent modalMode={this.props.modalMode} /> : null }
      </div>
    )
  }
}

export default App;
