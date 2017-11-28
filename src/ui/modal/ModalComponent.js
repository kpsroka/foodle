// @flow

import { connect } from 'react-redux';
import type { ModalDispatch, ModalProps } from './Modal';
import Modal from './Modal';
import type { ModalMode, State } from '../../redux/state/State';
import DismissModal from '../../redux/actions/DismissModal';
import type { Dispatch } from '../../redux/actions/Actions';
import LogIn from '../../redux/actions/LogIn';
import AddMeal from '../../redux/actions/AddMeal';
import DispatchAndCloseModal from '../../redux/actions/DispatchAndCloseModalThunk';
import { isValidPriceString } from '../../PriceFormatter';

const nonEmptyString = (arg) => (typeof arg === 'string' && arg !== '');
const logToConsole = (arg) => console.log(arg);

export type ModalComponentOwnProps = {| modalMode: ModalMode |};

function mapStateToProps({}:State, ownProps:ModalComponentOwnProps):ModalProps {
  switch (ownProps.modalMode.type) {
    case 'LOGIN':
      return {
        label: 'Welcome',
        submitButtonText: 'Log in',
        inputs: [
          {
            id: 'name',
            label: 'Your name',
            hint: 'Your name',
            validate: nonEmptyString,
          }
        ],
        userCanDismiss: false
      };
    case 'MESSAGE':
      return {
        label: ownProps.modalMode.message,
        submitButtonText: ownProps.modalMode.userCanDismiss ? 'OK' : '',
        inputs: [],
        userCanDismiss: false,
      };
    case 'CREATE_ORDER':
      return {
        label: 'Create order',
        submitButtonText: 'Create',
        inputs: [
          {
            id: 'restaurant',
            label: 'Orders from',
            hint: 'Name of the restaurant',
            validate: nonEmptyString
          },
          {
            id: 'owner',
            label: 'Owner name',
            hint: 'Your name',
            validate: nonEmptyString
          },
        ],
        userCanDismiss: true,
      };
    case 'ADD_MEAL': {
      return {
        label: 'Add meal',
        submitButtonText: 'Add',
        inputs: [
          {
            id: 'meal',
            label: 'Meal name',
            hint: 'Name of the meal',
            validate: nonEmptyString
          },
          {
            id: 'orderer',
            label: 'Orderer name',
            hint: 'Your name',
            validate: nonEmptyString
          },
          {
            id: 'price',
            label: 'Price',
            hint: 'e.g. 20,00',
            validate: isValidPriceString
          }
        ],
        userCanDismiss: true,
      }
    }
    default:
      return { label: '💩', submitButtonText: '💩', inputs: [], userCanDismiss: false }
  }
}

function getOnSubmitDispatch(modalMode:ModalMode, dispatch:Dispatch):({[string]:string} => any) {
  switch (modalMode.type) {
    case 'LOGIN': return (input) => dispatch(LogIn({name: input.name}));
    case 'ADD_MEAL': return (input) => {
      dispatch(
          DispatchAndCloseModal(
              // $FlowFixMe: flow can't refine modalMode to AddMealModalMode?
              AddMeal(modalMode.orderIndex, input.meal, input.orderer, input.price)));
    };
    default: return logToConsole;
  }
}

function mapDispatchToProps(dispatch:Dispatch, { modalMode }:ModalComponentOwnProps):ModalDispatch {
  return {
    onSubmit: getOnSubmitDispatch(modalMode, dispatch),
    onDismiss: () => { dispatch(DismissModal()); }
  }
}

const ModalComponent = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalComponent;
