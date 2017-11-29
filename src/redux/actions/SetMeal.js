// @flow

import type { ListingModeList, Meal } from '../state/State';

export default function SetMeal(list:ListingModeList, orderIndex:number, mealIndex:number, meal:Meal) {
  return {
    type: 'SET_MEAL',
    payload: { list, orderIndex, mealIndex, meal }
  };
};
