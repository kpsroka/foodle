import UiReducer from './UiReducer';
import DismissModal from '../actions/DismissModal';
import SetModalMessage from '../actions/SetModalMessage';
import SetDisplayedList from '../actions/SetDisplayedList';
import ToggleExpandedOrder from '../actions/ToggleExpandedOrder';
import ShowAddMealModal from '../actions/ShowAddMealModal';

describe('UiReducer', () => {
  describe('on DismissModal action', () => {
    test('sets modalMode to null', () => {
      const uiState = {
        listingMode: null,
        modalMode: { type: 'MESSAGE', userCanDismiss: false }
      };

      expect(UiReducer(uiState, DismissModal())).toMatchObject({ listingMode: null, modalMode: null });
    });
  });

  describe('on SetModalMessage action', () => {
    test('sets modalMode to message with appropriate payload', () => {
      const uiState = { listingMode: null,  modalMode: null };

      const message = "Hey Ho";
      const userCanDismiss = true;

      expect(UiReducer(uiState, SetModalMessage(message, userCanDismiss))).toMatchObject({
        listingMode: null,
        modalMode: { type: 'MESSAGE', message, userCanDismiss }
      });
    });
  });

  describe('on SetDisplayedList action', () => {
    test('sets displayed list to the given value', () => {
      const uiState = { listingMode: null,  modalMode: null };
      const list = 'ACTIVE';

      expect(UiReducer(uiState, SetDisplayedList(list)).listingMode).toMatchObject({ list });
    });
  });

  describe('on ToggleExpandedOrder action', () => {
    test('sets expandedOrderIndex to given, if it was set to different', () => {
      const uiState = { listingMode: { list: 'ACTIVE', expandedOrderIndex: 1 }, modalMode: null };
      const newOrderIndex = 3;
      expect(UiReducer(uiState, ToggleExpandedOrder(newOrderIndex)).listingMode).toMatchObject(
          { expandedOrderIndex: newOrderIndex }
      );
    });

    test('sets expandedOrderIndex to null, if it was set to given', () => {
      const expandedOrderIndex = 2;
      const uiState = { listingMode: { list: 'ACTIVE', expandedOrderIndex }, modalMode: null };

      expect(UiReducer(uiState, ToggleExpandedOrder(expandedOrderIndex)).listingMode)
          .toMatchObject({ expandedOrderIndex: null });
    });
  });

  describe('on ShowAddMealModal action', () => {
    test('sets modalMode to ADD_MEAL with proper orderIndex set', () => {
      const orderIndex = 4;
      const uiState = { listingMode: null, modalMode: null };

      expect(UiReducer(uiState, ShowAddMealModal(orderIndex)).modalMode)
          .toMatchObject({ type: 'ADD_MEAL', orderIndex });
    });
  })
});