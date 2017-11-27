// @flow

import { connect } from 'react-redux';
import Listing from './Listing';
import type { State } from '../../redux/state/State';
import type { ListingProps } from './Listing';

function mapStateToProps(state:State):ListingProps {
  const listingMode = state.ui.listingMode;
  const orderData = state.orders;
  if (listingMode && orderData) {
    return {
      orders: listingMode.list === 'ACTIVE' ? orderData.activeOrders : orderData.historicOrders,
      expandedOrderIndex: listingMode.expandedOrderIndex
    };
  }

  throw new Error('Illegal state');
}

const ListingComponent = connect(mapStateToProps)(Listing);

export default ListingComponent;
