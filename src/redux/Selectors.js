// @flow

import type { ListingModeList, Meal, Order, State } from './state/State';

export function selectOrderList(state:State, list:ListingModeList):Array<Order> {
  if (state.orders === null || state.orders === undefined) {
    throw new Error('No orders provided');
  }

  switch (list) {
    case 'ACTIVE': return state.orders.activeOrders;
    case 'HISTORY': return state.orders.historicOrders;
    default: throw new Error(`No such list: ${list}`);
  }
}

export function selectOrder(state:State, list:ListingModeList, orderIndex:number):Order {
  const orders = selectOrderList(state, list);
  if (!!orders[orderIndex]) {
    return orders[orderIndex];
  }

  throw new Error(`No order with index ${orderIndex}`);
}

export function selectMeal(state:State, list:ListingModeList, orderIndex:number, mealIndex:number):Meal {
  const meals = selectOrder(state, list, orderIndex).meals;
  if (!!meals[mealIndex]) {
    return meals[mealIndex];
  }

  throw new Error(`No meal with index ${mealIndex}`);
}
