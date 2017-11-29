// @flow

import type { ListingModeList } from '../state/State';
import type { ShowEditMealModalAction } from './Actions';

export default function ShowEditMealModal(
    list:ListingModeList,
    orderIndex:number,
    mealIndex:number):ShowEditMealModalAction {
  return {
    type: 'SHOW_EDIT_MEAL_MODAL',
    payload: { list, orderIndex, mealIndex }
  };
}
