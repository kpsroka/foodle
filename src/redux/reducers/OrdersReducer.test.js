import OrdersReducer from './OrdersReducer';
import SetOrderData from '../actions/SetOrderData';
import AddMeal from '../actions/AddMeal';

describe('OrdersReducer', () => {
  const defaultOrders = {
    activeOrders: [
      { state: 'OPEN', owner: "Foo", restaurant: "Bar", meals: [] },
      {
        state: 'FINALIZED',
        owner: "Foo",
        restaurant: "Baz",
        meals: [{ orderer: "Joe", name: "Broccoli", priceE2: 123 }]
      }
    ],
    historicOrders: [
      {
        state: 'DELIVERED',
        owner: "Jane",
        restaurant: "Baz",
        meals: [
          { orderer: "Joe", name: "Cauliflower", priceE2: 124 },
          { orderer: "Jane", name: "Romanesco", priceE2: 404 }
        ]
      }
    ]
  };

  describe('on SetOrderData action', () => {
    test('replaces order data with action payload', () => {
      const newOrders = {
        activeOrders: [{ state: 'OPEN', owner: "Foo", restaurant: "Bar", meals: [] }],
        historicOrders: [
          {
            state: 'DELIVERED',
            owner: "Foo",
            restaurant: "Baz",
            meals: [{ orderer: "Joe", name: "Broccoli", priceE2: 123 }]
          }
        ]
      };

      expect(OrdersReducer(null, SetOrderData(newOrders))).toBe(newOrders);
      expect(OrdersReducer(defaultOrders, SetOrderData(newOrders))).toBe(newOrders);
    });
  });

  describe('on AddMeal action', () => {
    test('adds new order matching action payload to activeOrders', () => {
      const orderIndex = 1;
      const mealName = 'Curry';
      const orderer = 'John McClane';
      const priceString = ' 023,4';
      const action = AddMeal(orderIndex, mealName, orderer, priceString);

      const newOrders = OrdersReducer(defaultOrders, action);
      expect(newOrders).not.toBe(defaultOrders);
      expect(newOrders.historicOrders).toBe(defaultOrders.historicOrders);
      expect(newOrders.activeOrders).not.toBe(defaultOrders.activeOrders);

      expect(newOrders.activeOrders).toHaveLength(defaultOrders.activeOrders.length);
      expect(newOrders.activeOrders[orderIndex].meals)
          .toHaveLength(defaultOrders.activeOrders[orderIndex].meals.length + 1);
      expect(newOrders.activeOrders[orderIndex].meals[newOrders.activeOrders[orderIndex].meals.length - 1])
          .toMatchObject({ name: mealName, orderer, priceE2: 2340 });

    });
  });
});
