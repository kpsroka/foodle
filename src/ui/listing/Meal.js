// @flow

import * as React from 'react';
import type { Meal as MealT } from '../../redux/state/State';
import './Meal.css';
import { formatPrice } from '../../PriceFormatter';

export type MealProps = {|
  meal: MealT,
  editable: boolean,
|};

export type MealDispatch = {|
  editMeal: () => any;
  deleteMeal: () => any;
|};

type MealCombinedProps = MealProps & MealDispatch;

export default function Meal(props:MealCombinedProps) {
  return (
    <div className={`Meal${props.editable ? ' EditableMeal' : ''}`}>
      <div>
        <div title="Meal name">{props.meal.name}</div>
        <div title="Meal orderer">{props.meal.orderer}</div>
        <div title="Meal price">{formatPrice(props.meal.priceE2)}</div>
      </div>
      <div>
        <div
            onClick={() => { if (props.editable) { props.editMeal(); } }}
            onKeyPress={({ key }) => { if (props.editable && key === 'Enter') { props.editMeal(); } }}
            className="MealControl fa fa-pencil-square-o"
            title="Edit meal"
            tabIndex={props.editable ? 0 : -1}
            role="link" />
        <div
            onClick={() => { if (props.editable) { props.deleteMeal(); } }}
            onKeyPress={({ key }) => { if (props.editable && key === 'Enter') { props.deleteMeal(); } }}
            className="MealControl fa fa-trash"
            title="Delete meal"
            tabIndex={props.editable ? 0 : -1}
            role="link" />
      </div>
      <div className="DisableControlOverlay" />
    </div>
  );
}
