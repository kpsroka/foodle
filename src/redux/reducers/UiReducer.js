// @flow

import type { UiState } from '../state/State';
import type { Action } from '../actions/Actions';

export default function UiReducer(uiState?:UiState, action:Action):UiState {
  if (uiState === undefined) {
    return {
      listingMode: null,
      modalMode: {
        type: 'LOGIN',
        userCanDismiss: false
      }
    };
  }

  switch (action.type) {
    case 'DISMISS_MODAL':
      return {...uiState, modalMode: null};
    case '_SET_MODAL_MESSAGE':
      return {
        ...uiState,
        modalMode: {
          type: 'MESSAGE',
          message: action.payload.message,
          userCanDismiss: action.payload.userCanDismiss
        }
      };
    case 'SHOW_ADD_MEAL_MODAL':
      return {
        ...uiState,
        modalMode: {
          type: 'ADD_MEAL',
          orderIndex: action.payload.index
        }
      };
    case 'SET_DISPLAYED_LIST':
      const sameList = uiState.listingMode && (uiState.listingMode.list === action.payload.list);
      const expandedOrderIndex = uiState.listingMode ? uiState.listingMode.expandedOrderIndex : null;
      return {
        ...uiState,
        listingMode: {
          list: action.payload.list,
          expandedOrderIndex: sameList ? expandedOrderIndex : null
        }
      };
    case 'TOGGLE_EXPANDED_ORDER': {
      const sameIndex = uiState.listingMode && (uiState.listingMode.expandedOrderIndex === action.payload.index);
      return {
        ...uiState,
        listingMode: {
          ...uiState.listingMode,
          expandedOrderIndex: sameIndex ? null : action.payload.index
        }
      };
    }
    default:
      return uiState;
  }
}
