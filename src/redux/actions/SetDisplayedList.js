// @flow

import type { SetDisplayedListAction } from './Actions';

export default function SetDisplayedList(list:string):SetDisplayedListAction {
  return {
    type: 'SET_DISPLAYED_LIST',
    payload: { list }
  };
}
