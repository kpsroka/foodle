// @flow

import React from 'react';
import Input from './Input';
import './Modal.css';

type ModalInput = {|
  id: string,
  label: string,
  hint: string,
  validate: string => boolean,
  defaultValue?: string,
|};

export type ModalProps = {|
  label: string,
  inputs: Array<ModalInput>,
  submitButtonText: string,
  userCanDismiss: boolean,
|};

export type ModalDispatch = {|
  onSubmit: {[string]: string} => any,
  onDismiss: () => any
|};

type ModalCombinedProps = ModalProps & ModalDispatch;

type ModalState = {|
  inputValues: {[string]: string},
|}

export default class Modal extends React.Component<ModalCombinedProps, ModalState> {
  constructor(props:ModalCombinedProps) {
    super(props);
    let inputValues = props.inputs.reduce(
        (accumulator, input) => ({ ...accumulator, [input.id]: input.defaultValue || '' }),
        {});
    this.state = { inputValues };
  }

  setInput(inputId:string, value:string) {
    this.setState({ inputValues: { ...this.state.inputValues, [inputId]: value } })
  }

  validateInputs() {
    for (let input of this.props.inputs) {
      if (!input.validate(this.state.inputValues[input.id])) {
        return false;
      }
    }
    return true;
  }

  renderButtonControls() {
    const cancelButton = this.props.userCanDismiss ?
        <button id="ModalDismissButton" onClick={() => this.props.onDismiss()}>Cancel</button>
        : null;
    const submitButton = this.props.submitButtonText !== '' ? (
        <button
            id="ModalSubmitButton"
            onClick={() => this.validateInputs() && this.props.onSubmit(this.state.inputValues)}>
          {this.props.submitButtonText}
        </button>
    ) : null;

    if (cancelButton !== null || submitButton !== null) {
      return <div id="ModalButtons">{cancelButton}{submitButton}</div>;
    } else {
      return null;
    }
  }

  render() {
    return (
        <div id="Modal">
          <div id="ModalDialog">
            <div id="ModalLabel">{this.props.label}</div>
            {this.props.inputs.map(
                input =>
                    <Input key={input.id}
                           {...input}
                           defaultValue={input.defaultValue || ''}
                           valid={input.validate(this.state.inputValues[input.id])}
                           onValueChange={(value:string) => this.setInput(input.id, value)}
                    />)}
            {this.renderButtonControls()}
          </div>
        </div>
    );
  }
}
