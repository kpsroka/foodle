import OrdersReducer from './OrdersReducer';
import SetOrderData from '../actions/SetOrderData';

describe('OrdersReducer', () => {
  describe('on SetOrderData action', () => {
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
  })
});