import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Modal from './Modal';
import Input from './Input';

describe('Modal', () => {
  const DEFAULT_PROPS =
      { label: '', inputs: [], submitButtonText: 'OK', userCanDismiss: false, onSubmit: () => {}, onDismiss: () => {} };

  it('renders inputs in given order', () => {
    const inputs = [
      { id: 'input1', label: 'Input One', hint: 'Hint One', validate: () => true },
      { id: 'input2', label: 'Input Two', hint: 'Hint Two', validate: () => true },
      { id: 'input3', label: 'Input Three', hint: 'Hint Three', validate: () => true }
    ];
    const modalProps = {...DEFAULT_PROPS, inputs};
    const modal = shallow(<Modal {...modalProps} />);

    expect(modal.find(Input)).toHaveLength(inputs.length);
    inputs.forEach((input, index) => { expect(modal.find(Input).get(index).props).toMatchObject(input); });
  });

  it('on submit button click validates inputs against provided functions, and calls onSubmit', () => {
    const onSubmitSpy = sinon.spy();
    const inputs = [
      { id: 'input1', label: 'Input One', hint: 'Hint One', validate: (str) => (str === 'foo') },
      { id: 'input2', label: 'Input Two', hint: 'Hint Two', validate: (str) => (str === 'bar')},
      { id: 'input3', label: 'Input Three', hint: 'Hint Three', validate: (str) => (str === 'baz') }
    ];
    const modalProps = {...DEFAULT_PROPS, inputs, onSubmit: onSubmitSpy};

    const modal = shallow(<Modal {...modalProps} />);
    const modalInputs = modal.find(Input);
    expect(modalInputs).toHaveLength(inputs.length);
    const modalSubmitButton = modal.find('button#ModalSubmitButton');
    expect(modalSubmitButton).toHaveLength(1);

    modalSubmitButton.simulate('click', {});
    expect(onSubmitSpy.notCalled).toBe(true);

    modalInputs.get(0).props.onValueChange('foo');
    modalInputs.get(1).props.onValueChange('bar');
    modalInputs.get(2).props.onValueChange('invalid');

    modalSubmitButton.simulate('click', {});
    expect(onSubmitSpy.notCalled).toBe(true);

    modalInputs.get(2).props.onValueChange('baz');
    modalSubmitButton.simulate('click', {});
    expect(onSubmitSpy.calledOnce).toBe(true);
  });

  it('renders submit button with the given text', () => {
    const submitButtonText = 'Eneduerabe';
    const modalProps = {...DEFAULT_PROPS, submitButtonText};
    const modal = shallow(<Modal {...modalProps} />);

    expect(modal.find('button#ModalSubmitButton')).toHaveLength(1);
    expect(modal.find('button#ModalSubmitButton').text()).toBe(submitButtonText);
  });

  it('calls onSubmit on button press if no inputs are provided', () => {
    const onSubmitSpy = sinon.spy();
    const modalProps = {...DEFAULT_PROPS, inputs: [], onSubmit: onSubmitSpy};
    const modal = shallow(<Modal {...modalProps} />);

    expect(modal.find(Input)).toHaveLength(0);
    expect(modal.find('button#ModalSubmitButton')).toHaveLength(1);
    expect(onSubmitSpy.notCalled).toBe(true);
    modal.find('button#ModalSubmitButton').simulate('click', {});
    expect(onSubmitSpy.calledOnce).toBe(true);
  });

  it('calls onDismiss on button press if userCanDismiss === true', () => {
    const onDismissSpy = sinon.spy();
    const modalProps = {...DEFAULT_PROPS, userCanDismiss: true, onDismiss: onDismissSpy};

    const modal = shallow(<Modal {...modalProps} />);
    expect(modal.find('button#ModalDismissButton')).toHaveLength(1);
    expect(onDismissSpy.notCalled).toBe(true);
    modal.find('button#ModalDismissButton').simulate('click');
    expect(onDismissSpy.calledOnce).toBe(true);
  });

  it('does not render dismiss button if userCanDismiss === false', () => {
    const onDismissSpy = sinon.spy();
    const modalProps = {...DEFAULT_PROPS, userCanDismiss: false, onDismiss: onDismissSpy};

    const modal = shallow(<Modal {...modalProps} />);
    expect(modal.find('button#ModalDismissButton')).toHaveLength(0);
    expect(onDismissSpy.notCalled).toBe(true);
  })
});
