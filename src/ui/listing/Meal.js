// @flow

import * as React from 'react';
import type { Meal as MealT } from '../../redux/state/State';
import './Meal.css';
import { formatPrice } from '../../PriceFormatter';

export type MealProps = {
  meal: MealT
};

export default function Meal(props:MealProps) {
  return (
    <div className="Meal">
      <div>
        <div>{props.meal.name}</div>
        <div>{props.meal.orderer}</div>
        <div>{formatPrice(props.meal.priceE2)}</div>
      </div>
      <div>
        <div className="MealControl fa fa-pencil-square-o" aria-hidden="true" />
        <div className="MealControl fa fa-trash" aria-hidden="true" />
      </div>
    </div>
  );
}
