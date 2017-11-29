// @flow

import { connect } from 'react-redux';
import Meal from './Meal';
import type { Meal as MealT, State } from '../../redux/state/State';
import type { MealDispatch, MealProps } from './Meal';
import type { Dispatch } from '../../redux/actions/Actions';

export type MealComponentOwnProps = {|
  meal: MealT,
|};

function mapStateToProps(state:State, ownProps:MealComponentOwnProps):MealProps {
  if (!state.user) {
    throw new Error('Illegal State');
  }

  const userName = state.user.name;

  return {
    meal: ownProps.meal,
    editable: userName === ownProps.meal.orderer
  };
}

function mapPropsToDispatch(dispatch:Dispatch, ownProps:MealComponentOwnProps):MealDispatch {
  return {
    deleteMeal: () => {},
    editMeal: () => {},
  };
}

const MealComponent = connect(mapStateToProps, mapPropsToDispatch)(Meal);

export default MealComponent;
