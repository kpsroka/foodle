// @flow

import { connect } from 'react-redux';
import Meal from './Meal';
import type { Meal as MealT, State } from '../../redux/state/State';
import type { MealProps } from './Meal';

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

const MealComponent = connect(mapStateToProps)(Meal);

export default MealComponent;
