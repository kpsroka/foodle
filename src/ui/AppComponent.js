// @flow

import { connect } from 'react-redux';
import App from './App';

import type { State } from '../redux/state/State';
import type { AppProps } from './App';

function mapStateToProps(state:State):AppProps {
  return {
    hasListing: state.ui.listingMode !== undefined && state.ui.listingMode !== null,
    hasModal: state.ui.modalMode !== undefined && state.ui.modalMode !== null,
  }
}

const AppComponent = connect(mapStateToProps)(App);

export default AppComponent;
