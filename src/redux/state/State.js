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

type ModalMode = 'LOGIN' | 'MESSAGE' | 'CREATE_ORDER' | 'ADD_MEAL';

type ListingMode = {
  list: 'ACTIVE' | 'HISTORY',
  expandedOrderIndex: ?number
};

type UiState = {
  listingMode: ?ListingMode,
  modalMode: ?ModalMode
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
    listingMode: null,
    modalMode: 'LOGIN',
  }
};
