import * as React from 'react';
import ListingHeaderComponent from './ListingHeaderComponent';
import OrderComponent from './OrderComponent';
import OrderDetailsComponent from './OrderDetailsComponent';
import type { Order } from '../../redux/state/State';

export type ListingProps = {|
  orders: Array<Order>,
  expandedOrderIndex: number
|};

export default class Listing extends React.PureComponent<ListingProps> {
  renderDetailsComponent(index, order) {
    return this.props.expandedOrderIndex === index ? <OrderDetailsComponent order={order} index={index} /> : null;
  };

  render() {
    return (
        <div>
          <ListingHeaderComponent />
          {this.props.orders.map((order, index) => (
              <OrderComponent
                  key={index}
                  index={index}
                  order={order}
                  expanded={this.props.expandedOrderIndex === index}>
                {this.renderDetailsComponent(index, order)}
              </OrderComponent>
          ))}
        </div>
    );
  }
}
