// @flow

export type Meal = {
  owner: string,
  name: string,
  priceE2: number,
};

export type OrderState = 'OPEN' | 'FINALIZED' | 'ORDERED' | 'DELIVERED';

export type Order = {
  state: OrderState,
  owner: string,
  restaurant: string,
  meals: Array<Meal>
}

export type OrderData = {
  activeOrders: Array<Order>,
  historicOrders: Array<Order>
}

export type ModalMode = 'LOGIN' | 'MESSAGE' | 'CREATE_ORDER' | 'ADD_MEAL';

export type ListingMode = {
  list: 'ACTIVE' | 'HISTORY',
  expandedOrderIndex: ?number
};

export type UiState = {
  listingMode: ?ListingMode,
  modalMode: ?ModalMode
};

export type User = {
  name: string,
  // TODO: Add auth tokens.
};

export type State = {
  orders?: OrderData,
  ui: UiState,
  user?: User,
};

export const DEFAULT_STATE:State = {
  ui: {
    listingMode: null,
    modalMode: 'LOGIN',
  }
};
