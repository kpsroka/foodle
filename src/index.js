import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import AppComponent from './ui/AppComponent';
import OrdersReducer from './redux/reducers/OrdersReducer';
import UiReducer from './redux/reducers/UiReducer';
import UserReducer from './redux/reducers/UserReducer';
import './index.css';

const rootReducer = combineReducers({
  orders: OrdersReducer,
  ui: UiReducer,
  user: UserReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <AppComponent />
    </Provider>,
    document.getElementById('root')
);
