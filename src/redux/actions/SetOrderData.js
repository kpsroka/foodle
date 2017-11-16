// @flow

import type { OrderData } from '../state/State';
import type { SetOrderDataAction } from './Actions';

export default function SetOrderData(orders:OrderData):SetOrderDataAction {
  return {
    type: '_SET_ORDER_DATA',
    payload: { orders }
  }
}