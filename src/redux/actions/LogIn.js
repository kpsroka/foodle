// @flow

import FetchOrders from './FetchOrders';
import SetModalMessage from './SetModalMessage';
import SetUserName from './SetUserName';
import type { Dispatch } from './Actions';

type LogInPayload = {|
  name: string
|};

// This simulates asynchronous logging in. Once we use OAuth, this will get replaced by a proper action.
function LogInWithDelay(username:string, delayMillis:number) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(username), delayMillis);
  });
}

export default function LogIn(input:LogInPayload) {
  return (dispatch:Dispatch) => {
    dispatch(SetModalMessage('Logging in', false));
    LogInWithDelay(input.name, 500).then((username) => {
      dispatch(SetUserName(username));
      dispatch(FetchOrders());
    })
  }
}