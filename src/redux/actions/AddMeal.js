// @flow

import type { AddMealAction } from './Actions';

export default function AddMeal(
    orderIndex:number,
    mealName:string,
    mealOrderer:string,
    mealPriceString:string)
    :AddMealAction {
  return {
    type: 'ADD_MEAL',
    payload: {
      orderIndex,
      mealName,
      mealOrderer,
      mealPriceString
    }
  };
}
