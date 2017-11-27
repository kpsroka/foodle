// @flow

import type { ShowAddMealModalAction } from './Actions';

export default function ShowAddMealModal(index:number):ShowAddMealModalAction {
  return {
    type: 'SHOW_ADD_MEAL_MODAL',
    payload: { index }
  };
}
