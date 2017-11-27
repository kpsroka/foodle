// @flow

import type { SetDisplayedListAction } from './Actions';
import type { ListingModeList } from '../state/State';

export default function SetDisplayedList(list:ListingModeList):SetDisplayedListAction {
  return {
    type: 'SET_DISPLAYED_LIST',
    payload: { list }
  };
}
