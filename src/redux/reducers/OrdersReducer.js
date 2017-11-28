import type { Meal, OrderData } from '../state/State';
import type { Action, AddMealAction } from '../actions/Actions';

function toIntPriceE2(priceString:string):number {
  const found = priceString.match(/^\s*(\d+)(?:[,.](\d{0,2}))?\s*$/);
  if (found === null) {
    throw new Error(`Illegal price string: ${priceString}`);
  }

  const integral = Number.parseInt(found[1], 10);
  const fractional =
      (found[2] === undefined || found[2].length === 0) ? 0 :
      (found[2].length === 1) ? (Number.parseInt(found[2], 10) * 10) : Number.parseInt(found[2], 10);
  return (integral * 100) + fractional;
}

function createMeal(action:AddMealAction):Meal {
  const payload = action.payload;
  return {
    orderer: payload.mealOrderer,
    name: payload.mealName,
    priceE2: toIntPriceE2(payload.mealPriceString)
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
