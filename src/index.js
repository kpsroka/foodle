import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import AppComponent from './ui/AppComponent';
import registerServiceWorker from './registerServiceWorker';
import { DEFAULT_STATE } from './redux/state/State';

const store = createStore((state, action) => state, DEFAULT_STATE);

ReactDOM.render(
    <Provider store={store}>
      <AppComponent />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
