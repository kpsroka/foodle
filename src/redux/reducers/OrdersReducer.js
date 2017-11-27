import type { OrderData } from '../state/State';
import type { Action } from '../actions/Actions';

export default function OrdersReducer(orderData:?OrderData, action:Action):OrderData {
  if (orderData === undefined) {
    return null;
  }

  switch (action.type) {
    case '_SET_ORDER_DATA':
      return action.payload.orders;
    default:
      return orderData;
  }
}
