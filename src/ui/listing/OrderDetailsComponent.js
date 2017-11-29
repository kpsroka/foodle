// @flow

import { connect } from 'react-redux';
import OrderDetails from './OrderDetails';
import type { ListingModeList, State } from '../../redux/state/State';
import type { OrderDetailsDispatch, OrderDetailsProps } from './OrderDetails';
import type { Dispatch } from '../../redux/actions/Actions';
import ShowAddMealModal from '../../redux/actions/ShowAddMealModal';
import { selectOrder } from '../../redux/Selectors';

export type OrderComponentOwnProps = {|
  list: ListingModeList,
  index: number,
|}

function mapStateToProps(state:State, { list, index }:OrderComponentOwnProps):OrderDetailsProps {
  const order = selectOrder(state, list, index);
  return {
    meals: order.meals,
    state: order.state,
    canAddMeals: (list === 'ACTIVE') && (order.state === 'OPEN')
  };
}

function mapPropsToDispatch(dispatch:Dispatch, { index }:OrderComponentOwnProps):OrderDetailsDispatch {
  return {
    onAddMeal: () => dispatch(ShowAddMealModal(index))
  };
}

const OrderDetailsComponent = connect(mapStateToProps, mapPropsToDispatch)(OrderDetails);

export default OrderDetailsComponent;
