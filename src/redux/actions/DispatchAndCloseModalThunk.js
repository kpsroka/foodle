// @flow

import type { Action, Dispatch, ThunkAction } from './Actions';
import DismissModal from './DismissModal';

export default function DispatchAndCloseModal(action:Action):ThunkAction {
  return (dispatch:Dispatch) => {
    dispatch(action);
    dispatch(DismissModal());
  }
}
