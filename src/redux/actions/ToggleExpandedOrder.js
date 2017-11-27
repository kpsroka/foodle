// @flow

import type { ToggleExpandedOrderAction } from './Actions';

export default function ToggleExpandedOrder(index:number):ToggleExpandedOrderAction {
  return {
    type: 'TOGGLE_EXPANDED_ORDER',
    payload: { index }
  };
}
