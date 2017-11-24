// @flow

export type Meal = {
  orderer: string,
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
};

export type MessageModalMode = {
  type: 'MESSAGE',
  message: string,
  userCanDismiss: boolean
}

export type ModalMode = {
  type: 'LOGIN' | 'CREATE_ORDER' | 'ADD_MEAL',
  userCanDismiss: boolean
} | MessageModalMode;

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
