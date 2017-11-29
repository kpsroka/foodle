// @flow

import { connect } from 'react-redux';
import type { MealDispatch, MealProps } from './Meal';
import Meal from './Meal';
import type { ListingModeList, State } from '../../redux/state/State';
import type { Dispatch } from '../../redux/actions/Actions';
import { selectMeal } from '../../redux/Selectors';
import DeleteMeal from '../../redux/actions/DeleteMeal';
import ShowEditMealModal from '../../redux/actions/ShowEditMealModal';

export type MealComponentOwnProps = {|
  list: ListingModeList,
  orderIndex: number,
  mealIndex: number,
|};

function mapStateToProps(state:State, ownProps:MealComponentOwnProps):MealProps {
  const meal = selectMeal(state, ownProps.list, ownProps.orderIndex, ownProps.mealIndex);
  const userName = (state.user ? state.user.name : '');

  return {
    meal: meal,
    editable: userName === meal.orderer
  };
}

function mapPropsToDispatch(dispatch:Dispatch, ownProps:MealComponentOwnProps):MealDispatch {
  const { list, orderIndex, mealIndex } = ownProps;
  return {
    deleteMeal: () => { dispatch(DeleteMeal(list, orderIndex, mealIndex)); },
    editMeal: () => { dispatch(ShowEditMealModal(list, orderIndex, mealIndex)) },
  };
}

const MealComponent = connect(mapStateToProps, mapPropsToDispatch)(Meal);

export default MealComponent;
