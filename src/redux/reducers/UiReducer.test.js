import UiReducer from './UiReducer';
import DismissModal from '../actions/DismissModal';

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
});