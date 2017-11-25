import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ListingHeader from './ListingHeader';

describe('ListingHeader', () => {
  it('renders given labels in order', () => {
    const labels = [{ id: 'foo', text: 'textFoo' }, { id: 'bar', text: 'textBar' }, { id: 'baz', text: 'textBaz' }];
    const combinedProps = { labels, activeLabelIndex: 0, onHeaderClicked: () => {}};
    const listingHeader = shallow(<ListingHeader {...combinedProps}/>);

    expect(listingHeader.find('.label')).toHaveLength(labels.length);
    labels.forEach((label, index) => {
      expect(listingHeader.find('.label').at(index).text()).toBe(label.text);
    });
  });

  it('calls onHeaderClicked with clicked label ID', () => {
    const onHeaderClicked = sinon.spy();
    const labels = [{ id: 'foo', text: 'textFoo' }, { id: 'bar', text: 'textBar' }, { id: 'baz', text: 'textBaz' }];
    const combinedProps = { labels, activeLabelIndex: 0, onHeaderClicked };
    const listingHeader = shallow(<ListingHeader {...combinedProps}/>);

    expect(onHeaderClicked.notCalled).toBe(true);
    expect(listingHeader.find('.label')).toHaveLength(labels.length);
    labels.forEach((label, index) => {
      const labelElement = listingHeader.find('.label').at(index);
      labelElement.simulate('click');
      expect(onHeaderClicked.callCount).toBe(index + 1);
      expect(onHeaderClicked.getCall(index).args[0]).toBe(label.id);
    });
  });
});