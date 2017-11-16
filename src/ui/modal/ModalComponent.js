// @flow

import { connect } from 'react-redux';
import Modal from './Modal';

import type { ModalProps } from './Modal';
import type { State } from '../../redux/state/State';

const nonEmptyString = (arg) => (typeof arg === 'string' && arg !== '');
const priceString = (arg) => (typeof arg === 'string' && arg.match(/^\s*\d+([,.]\d{0,2})?\s*$/) !== null);
const logToConsole = (arg) => console.log(arg);

function mapStateToProps(state:State):ModalProps {
  if (!state.ui.modalMode) {
    throw new Error('Illegal state');
  }

  switch (state.ui.modalMode) {
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
        onSubmit: logToConsole
      };
    case 'MESSAGE':
      return {
        label: 'Message',
        submitButtonText: 'OK',
        inputs: [],
        onSubmit: logToConsole
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
        onSubmit: logToConsole
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
        onSubmit: logToConsole
      }
    }
    default:
      return { label: '💩', submitButtonText: '💩', inputs: [], onSubmit: (input) => {}}
  }
}

const ModalComponent = connect(mapStateToProps)(Modal);

export default ModalComponent;
