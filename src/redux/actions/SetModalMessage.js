// @flow

import type { SetModalMessageAction } from './Actions';

export default function SetModalMessage(message:string, userCanDismiss:boolean):SetModalMessageAction {
  return {
    type: '_SET_MODAL_MESSAGE',
    payload: {
      message,
      userCanDismiss
    },
  }
}
