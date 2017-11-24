// @flow

import { connect } from 'react-redux';
import Modal from './Modal';

import type { ModalDispatch, ModalProps } from './Modal';
import type { ModalMode, State } from '../../redux/state/State';
import DismissModal from '../../redux/actions/DismissModal';
import type { Dispatch } from '../../redux/actions/Actions';

const nonEmptyString = (arg) => (typeof arg === 'string' && arg !== '');
const priceString = (arg) => (typeof arg === 'string' && arg.match(/^\s*\d+([,.]\d{0,2})?\s*$/) !== null);
const logToConsole = (arg) => console.log(arg);

export type ModalComponentOwnProps = {| modalMode: ModalMode |};

function mapStateToProps(unused:State, ownProps:ModalComponentOwnProps):ModalProps {
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
        submitButtonText: 'OK',
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
            validate: priceString
          }
        ],
        userCanDismiss: true,
      }
    }
    default:
      return { label: '💩', submitButtonText: '💩', inputs: [], userCanDismiss: false }
  }
}

function mapDispatchToProps(dispatch:Dispatch):ModalDispatch {
  return {
    onSubmit: logToConsole,
    onDismiss: () => { dispatch(DismissModal()) }
  }
}

const ModalComponent = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalComponent;
