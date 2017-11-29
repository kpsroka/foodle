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

export type AddMealModalMode = {
  type: 'ADD_MEAL',
  orderIndex: number,
}

export type EditMealModalMode = {
  type: 'EDIT_MEAL',
  list: ListingModeList,
  orderIndex: number,
  mealIndex: number
};

export type ModalMode = { type: 'LOGIN' | 'CREATE_ORDER' } |
    MessageModalMode |
    AddMealModalMode |
    EditMealModalMode;

export type ListingModeList = 'ACTIVE' | 'HISTORY';

export type ListingMode = {
  list: ListingModeList,
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
