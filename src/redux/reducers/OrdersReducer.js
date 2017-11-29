// @flow

import * as dotProp from 'dot-prop-immutable';
import type { ListingModeList, Meal, OrderData } from '../state/State';
import type { Action, AddMealAction } from '../actions/Actions';
import { parsePrice } from '../../PriceFormatter';


function createMeal(action:AddMealAction):Meal {
  const payload = action.payload;
  return {
    orderer: payload.mealOrderer,
    name: payload.mealName,
    priceE2: parsePrice(payload.mealPriceString)
  };
}

function listStringToKey(listString:ListingModeList):string {
  switch (listString) {
    case 'ACTIVE': return 'activeOrders';
    case 'HISTORY': return 'historicOrders';
    default: throw new Error(`Unrecognized list ${listString}`);
  }
}

export default function OrdersReducer(orderData:?OrderData, action:Action):?OrderData {
  if (orderData === undefined) {
    return null;
  }

  switch (action.type) {
    case 'ADD_MEAL': {
      if (orderData === null) { throw new Error('Illegal state'); }
      const order = {...orderData.activeOrders[action.payload.orderIndex]};
      order.meals = order.meals.slice();
      order.meals.push(createMeal(action));
      const activeOrders = orderData.activeOrders.slice();
      activeOrders[action.payload.orderIndex] = order;
      return {...orderData, activeOrders};
    }
    case 'DELETE_MEAL': {
      if (orderData === null) { throw new Error('Illegal state'); }
      const listKey = listStringToKey(action.payload.list);
      return dotProp.delete(
          orderData,
          `${listKey}.${action.payload.orderIndex}.meals.${action.payload.mealIndex}`);
    }
    case '_SET_ORDER_DATA': {
      return action.payload.orders;
    }
    default: {
      return orderData;
    }
  }
}
