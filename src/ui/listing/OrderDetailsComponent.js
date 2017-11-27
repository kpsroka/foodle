// @flow

import { connect } from 'react-redux';
import OrderDetails from './OrderDetails';
import type { Order, State } from '../../redux/state/State';
import type { OrderDetailsDispatch, OrderDetailsProps } from './OrderDetails';
import type { Dispatch } from '../../redux/actions/Actions';
import ShowAddMealModal from '../../redux/actions/ShowAddMealModal';

export type OrderComponentOwnProps = {|
  order: Order,
  index: number,
|}

function mapStateToProps({}:State, { order }:OrderComponentOwnProps):OrderDetailsProps {
  return {
    meals: order.meals,
    state: order.state
  };
}

function mapPropsToDispatch(dispatch:Dispatch, { index }:OrderComponentOwnProps):OrderDetailsDispatch {
  return {
    onAddMeal: () => dispatch(ShowAddMealModal(index))
  };
}

const OrderDetailsComponent = connect(mapStateToProps, mapPropsToDispatch)(OrderDetails);

export default OrderDetailsComponent;
