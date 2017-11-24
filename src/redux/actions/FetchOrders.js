// @flow

import DismissModal from './DismissModal';
import SetModalMessage from './SetModalMessage';
import SetOrderData from './SetOrderData';
import type { Meal, Order, OrderData, OrderState } from '../state/State';
import type { Dispatch } from './Actions';

function makeMeal(name:string, orderer:string, priceE2:number):Meal {
  return { name, orderer, priceE2 };
}

function makeOrder(state:OrderState, restaurant:string, owner:string, ...meals:Array<Meal>):Order {
  return { state, restaurant, owner, meals };
}

const FAKE_ORDER_DATA:OrderData = {
  activeOrders: [
    makeOrder('OPEN', 'Panda Ramen', 'Jacek',
        makeMeal('Ramen na wypasie', 'Jacek', 2500),
        makeMeal('Vege', 'Janina', 2200)),
    makeOrder('OPEN', 'Panczo', 'Aga',
        makeMeal('Burrito', 'Jacek', 2155)),
    makeOrder('FINALIZED', 'Panczo', 'Aga',
        makeMeal('Quesadilla', 'Aga', 2390),
        makeMeal('Quesadilla', 'Ahmed', 2390)),
    makeOrder('DELIVERED', 'Kurger Bing', 'Josef Kusthausarbeiter',
        makeMeal('HAMBURGER', 'Josef Kusthausarbeiter.', 999),
        makeMeal('CHEESEBURGER', 'Havard R. Wirklichlangernachname', 1099)),
  ],
  historicOrders: [
    makeOrder('DELIVERED', 'Panda Ramen', 'Jacek',
        makeMeal('Specjał dnia', 'Jacek', 2900)),
    makeOrder('DELIVERED', 'Żabka', 'Aga',
        makeMeal('Hot dog', 'Aga', 499),
        makeMeal('Czupa czups truskawkowy', 'Havard R. Wirklichlangernachname', 99)),
  ]
};



// This simulates asynchronous logging in. Once we use OAuth, this will get replaced by a proper action.
function FetchWithDelay(delayMillis:number) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(FAKE_ORDER_DATA), delayMillis);
  });
}

export default function FetchOrders() {
  return (dispatch:Dispatch) => {
    dispatch(SetModalMessage('Fetching orders', false));
    FetchWithDelay(500).then((data) => {
      dispatch(SetOrderData(data));
      dispatch(DismissModal());
    })
  }
}
