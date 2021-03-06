// @flow

import * as React from 'react';
import './Order.css';
import type { Children } from '../Children';

export type OrderProps = {|
  restaurant: string,
  owner: string,
  formattedTotalPrice: string,
  expanded: boolean,
|};

export type OrderDispatch = {|
  onOrderExpansionToggle: () => any,
|};

type OrderCombinedProps = OrderProps & OrderDispatch & Children;

export default class Order extends React.Component<OrderCombinedProps> {
  render() {
    return (
        <div className={`Order${this.props.expanded ? " expanded" : ""}`}>
          <div className="OrderSummary"
               onClick={() => { this.props.onOrderExpansionToggle(); }}>
            <div>
              <div>{this.props.restaurant}</div>
              <div>{this.props.owner}</div>
              <div>{this.props.formattedTotalPrice}</div>
            </div>
            <div className="OrderExpansionMarker">
              <i className="fa fa-chevron-down" aria-hidden="true" />
            </div>
          </div>
          {this.props.children}
        </div>
    );
  }
}
