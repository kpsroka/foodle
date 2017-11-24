// @flow

import type { SetUserNameAction } from './Actions';

export default function SetUserName(userName:string):SetUserNameAction {
  return {
    type: '_SET_USER_NAME',
    payload: { userName }
  }
}
