// @flow

import type { ListingModeList, Meal, OrderData, State } from '../state/State';

export type AddMealAction = {|
  type: 'ADD_MEAL',
  payload: {
    orderIndex: number,
    mealName: string,
    mealOrderer: string,
    mealPriceString: string
  }
|};

export type DeleteMealAction = {|
  type: 'DELETE_MEAL',
  payload: {
    list:ListingModeList,
    orderIndex:number,
    mealIndex:number
  }
|};

export type DismissModalAction = {|
  type: 'DISMISS_MODAL'
|};

export type SetDisplayedListAction = {|
  type: 'SET_DISPLAYED_LIST',
  payload: {
    list: ListingModeList
  }
|};

export type SetMealAction = {|
  type: 'SET_MEAL',
  payload: {
    list: ListingModeList,
    orderIndex: number,
    mealIndex: number,
    meal: Meal
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

export type ShowAddMealModalAction = {|
  type: 'SHOW_ADD_MEAL_MODAL',
  payload: {
    index: number
  }
|};

export type ShowEditMealModalAction = {|
  type: 'SHOW_EDIT_MEAL_MODAL',
  payload: {
    list:ListingModeList,
    orderIndex:number,
    mealIndex:number
  }
|};

export type ToggleExpandedOrderAction = {|
  type: 'TOGGLE_EXPANDED_ORDER',
  payload: {
    index: number
  }
|};

export type Action =
    AddMealAction |
    DeleteMealAction |
    DismissModalAction |
    SetDisplayedListAction |
    SetMealAction |
    SetModalMessageAction |
    SetOrderDataAction |
    SetUserNameAction |
    ShowAddMealModalAction |
    ShowEditMealModalAction |
    ToggleExpandedOrderAction;

export type GetState = () => State;
// Circular type dependency :/
// eslint-disable-next-line
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | Array<Action>) => any;
