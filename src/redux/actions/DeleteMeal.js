import type { ListingModeList } from '../state/State';

export default function DeleteMeal(list:ListingModeList, orderIndex:number, mealIndex:number) {
  return {
    type: 'DELETE_MEAL',
    payload: { list, orderIndex, mealIndex }
  };
}
