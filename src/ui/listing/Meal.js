// @flow

import * as React from 'react';
import type { Meal as MealT } from '../../redux/state/State';
import './Meal.css';

export type MealProps = {
  meal: MealT
};

export default function Meal(props:MealProps) {
  return (
    <div className="Meal">
      <div>
        <div>{props.meal.name}</div>
        <div>{props.meal.orderer}</div>
        <div>{props.meal.priceE2}</div>
      </div>
    </div>
  );
}
