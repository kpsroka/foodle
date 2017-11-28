import type { Meal, OrderData } from '../state/State';
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

export default function OrdersReducer(orderData:?OrderData, action:Action):OrderData {
  if (orderData === undefined) {
    return null;
  }

  switch (action.type) {
    case 'ADD_MEAL':
      const order = { ...orderData.activeOrders[action.payload.orderIndex] };
      order.meals = order.meals.slice();
      order.meals.push(createMeal(action));
      const activeOrders = orderData.activeOrders.slice();
      activeOrders[action.payload.orderIndex] = order;
      return { ...orderData, activeOrders };
    case '_SET_ORDER_DATA':
      return action.payload.orders;
    default:
      return orderData;
  }
}
