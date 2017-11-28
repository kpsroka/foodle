// @flow

import * as React from 'react';
import type { Meal, OrderState } from '../../redux/state/State';
import './OrderDetails.css';

export type OrderDetailsProps = {|
  meals: Array<Meal>,
  state: OrderState,
|};

export type OrderDetailsDispatch = {|
  onAddMeal: () => any,
|};

type OrderDetailsCombinedProps = OrderDetailsProps & OrderDetailsDispatch;

export default function OrderDetails(props:OrderDetailsCombinedProps) {
  return (
    <div className="OrderDetails">
      <div className="OrderDetailsHeader">
        <button
            className="OrderDetailsAddMeal"
            onClick={() => props.onAddMeal()}>+ Add meal</button>
        <div className="OrderDetailsStatus">
          <div className="OrderDetailsStatusString">Status</div>
          <div>
            <span>Opened</span>
            <span>Finalized</span>
            <span>Ordered</span>
            <span>Delivered</span>
          </div>
        </div>
      </div>
      <div className="OrderDetailsMeals">
        {props.meals.map((meal, index) => (
          <div key={index}>
            meal.name, meal.orderer, meal.priceE2
          </div>
        ))}
      </div>
    </div>
  );
}
