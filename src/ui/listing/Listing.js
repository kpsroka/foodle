import * as React from 'react';
import ListingHeaderComponent from './ListingHeaderComponent';
import Meal from './Meal';
import OrderComponent from './OrderComponent';
import OrderDetailsComponent from './OrderDetailsComponent';
import type { Order } from '../../redux/state/State';
import './Listing.css';

export type ListingProps = {|
  orders: Array<Order>,
  expandedOrderIndex: number
|};

export default class Listing extends React.PureComponent<ListingProps> {
  renderDetailsComponent(index, order) {
    if (this.props.expandedOrderIndex !== index) {
      return null;
    }

    return (
      <OrderDetailsComponent order={order} index={index}>
        {order.meals.map((meal, mealIndex) => (
          <Meal
              key={`${index}:${mealIndex}`}
              meal={meal}
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
                    key={index}
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
