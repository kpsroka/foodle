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

const ORDERED_ORDER_STATES:Array<OrderState> = ['OPEN', 'FINALIZED', 'ORDERED', 'DELIVERED'];

function comesBefore(stateA:OrderState, stateB:OrderState) {
  return ORDERED_ORDER_STATES.indexOf(stateA) < ORDERED_ORDER_STATES.indexOf(stateB);
}

function getStateLabelStyles(propsState:OrderState, labelState:OrderState) {
  const auxState =
      (propsState === labelState) ? ' CurrentState' :
          (comesBefore(labelState, propsState) ? ' PastState' : ' FutureState');

  return `OrderDetailsStatusState${auxState}`;
}

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
            <span className={getStateLabelStyles(props.state, 'OPEN')}>
              <i className="fa fa-pencil" aria-hidden="true" />
              Opened
            </span>
            <span className={getStateLabelStyles(props.state, 'FINALIZED')}>
              <i className="fa fa-lock" aria-hidden="true" />
              Finalized
            </span>
            <span className={getStateLabelStyles(props.state, 'ORDERED')}>
              <i className="fa fa-phone" aria-hidden="true" />
              Ordered
            </span>
            <span className={getStateLabelStyles(props.state, 'ORDERED')}>
              <i className="fa fa-check" aria-hidden="true" />
              Delivered
            </span>
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
