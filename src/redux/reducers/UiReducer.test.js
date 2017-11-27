import UiReducer from './UiReducer';
import DismissModal from '../actions/DismissModal';
import SetModalMessage from '../actions/SetModalMessage';
import SetDisplayedList from '../actions/SetDisplayedList';

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
});