// @flow

type Meal = {
  owner: string,
  name: string,
  priceE2: number,
};

type OrderState = 'OPEN' | 'FINALIZED' | 'ORDERED' | 'DELIVERED';

type Order = {
  state: OrderState,
  owner: string,
  restaurant: string,
  meals: Array<Meal>
}

type OrderData = {
  activeOrders: Array<Order>,
  historicOrders: Array<Order>
}

type ModalMode = {
  mode: 'MODAL',
  subMode: 'LOGIN' | 'MESSAGE' | 'CREATE_ORDER' | 'ADD_MEAL'
};

type ListingMode = {
  mode: 'LISTING',
  list: 'ACTIVE' | 'HISTORY',
  expandedOrderIndex: ?number
};

type UiState = {
  mode: ModalMode | ListingMode
};

type User = {
  name: string,
  // TODO: Add auth tokens.
};

type State = {
  orders?: OrderData,
  ui: UiState,
  user?: User,
};

export const DEFAULT_STATE:State = {
  ui: {
    mode: {
      mode: 'MODAL',
      subMode: 'LOGIN',
    },
  }
};
