// @flow

import { connect } from 'react-redux';
import type { OrderDispatch, OrderProps } from './Order';
import Order from './Order';
import type { Order as OrderT, State } from '../../redux/state/State';
import type { Dispatch } from '../../redux/actions/Actions';
import ToggleExpandedOrder from '../../redux/actions/ToggleExpandedOrder';
import { formatPrice } from '../../PriceFormatter';

export type OrderComponentOwnProps = {|
  order: OrderT,
  index: number,
  expanded: boolean,
|}

function mapStateToProps({}:State, { order, expanded }:OrderComponentOwnProps):OrderProps {
  return {
    restaurant: order.restaurant,
    owner: order.owner,
    formattedTotalPrice:
        formatPrice(
            order.meals
                .map(meal => meal.priceE2)
                .reduce((sum, nextPrice) => (sum + nextPrice), 0)),
    expanded
  };
}

function mapPropsToDispatch(dispatch:Dispatch, { index }:OrderComponentOwnProps):OrderDispatch {
  return {
    onOrderExpansionToggle: () => dispatch(ToggleExpandedOrder(index))
  }
}

const OrderComponent = connect(mapStateToProps, mapPropsToDispatch)(Order);

export default OrderComponent;
