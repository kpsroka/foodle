// @flow

import React from 'react';
import Input from './Input';

type ModalInput = {|
  id: string,
  label: string,
  hint: string,
  validate: string => boolean
|};

export type ModalProps = {|
  label: string,
  inputs: Array<ModalInput>,
  submitButtonText: string,
  onSubmit: ({[string]: string} => any)
|};

type ModalState = {|
  inputValues: { [string]: string },
|}

export default class Modal extends React.Component<ModalProps, ModalState> {
  constructor(props:ModalProps) {
    super(props);
    let inputValues = props.inputs.reduce((accumulator, input) => ({ ...accumulator, [input.id]: '' }), {});
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

  render() {
    return (
        <div>
          <div>{this.props.label}</div>
          {this.props.inputs.map(
              input =>
                  <Input key={input.id}
                         {...input}
                         defaultValue=''
                         valid={input.validate(this.state.inputValues[input.id])}
                         onValueChange={(value:string) => this.setInput(input.id, value)}
                  />)}
          <button>Cancel</button>
          <button onClick={() => this.validateInputs() && this.props.onSubmit(this.state.inputValues)}>
            {this.props.submitButtonText}
          </button>
        </div>
    );
  }
}
