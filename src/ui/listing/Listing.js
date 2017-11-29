import * as React from 'react';
import ListingHeaderComponent from './ListingHeaderComponent';
import MealComponent from './MealComponent';
import OrderComponent from './OrderComponent';
import OrderDetailsComponent from './OrderDetailsComponent';
import type { ListingModeList, Order } from '../../redux/state/State';
import './Listing.css';

export type ListingProps = {|
  list: ListingModeList,
  orders: Array<Order>,
  expandedOrderIndex: number
|};

export default class Listing extends React.PureComponent<ListingProps> {
  renderDetailsComponent(orderIndex, order) {
    if (this.props.expandedOrderIndex !== orderIndex) {
      return null;
    }

    return (
      <OrderDetailsComponent list={this.props.list} index={orderIndex}>
        {order.meals.map((_, mealIndex) => (
          <MealComponent
              key={`${this.props.list}:${orderIndex}:${mealIndex}`}
              list={this.props.list}
              orderIndex={orderIndex}
              mealIndex={mealIndex}
          />
        ))}
      </OrderDetailsComponent>
    );
  };

  render() {
    return (
        <div className="Listing">
          <ListingHeaderComponent />
          <div className="ListingBody">
            <div className="ListingColumnLabels">
              <div>
                <div>Orders from</div>
                <div>Owner</div>
                <div>Price</div>
              </div>
            </div>
            {this.props.orders.map((order, index) => (
                <OrderComponent
                    key={`${this.props.list}:${index}`}
                    index={index}
                    order={order}
                    expanded={this.props.expandedOrderIndex === index}>
                  {this.renderDetailsComponent(index, order)}
                </OrderComponent>
            ))}
          </div>
        </div>
    );
  }
}
