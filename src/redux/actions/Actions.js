// @flow

import type { OrderData, State } from '../state/State';

export type DismissModalAction = {|
  type: 'DISMISS_MODAL'
|};

export type SetDisplayedListAction = {|
  type: 'SET_DISPLAYED_LIST',
  payload: {
    list: string
  }
|};

export type SetModalMessageAction = {|
  type: '_SET_MODAL_MESSAGE',
  payload: {
    message: string,
    userCanDismiss: boolean
  }
|};

export type SetOrderDataAction = {|
  type: '_SET_ORDER_DATA',
  payload: {
    orders: OrderData
  }
|};

export type SetUserNameAction = {|
  type: '_SET_USER_NAME',
  payload: {
    userName: string
  }
|};

export type Action =
    DismissModalAction |
    SetDisplayedListAction |
    SetModalMessageAction |
    SetOrderDataAction |
    SetUserNameAction;

export type GetState = () => State;
// Circular type dependency :/
// eslint-disable-next-line
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | Array<Action>) => any;
