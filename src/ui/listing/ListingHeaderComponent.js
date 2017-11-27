// @flow

import { connect } from 'react-redux';
import ListingHeader from './ListingHeader';
import type { ListingHeaderDispatch, ListingHeaderProps, ListingLabelDef } from './ListingHeader';
import type { State } from '../../redux/state/State';
import SetDisplayedList from '../../redux/actions/SetDisplayedList';

const LISTING_LABELS:Array<ListingLabelDef> = [
  { id: 'ACTIVE', text: 'Active' },
  { id: 'HISTORY', text: 'History' }
];

function mapStateToProps(state:State):ListingHeaderProps {
  if (state.ui.listingMode !== null && state.ui.listingMode !== undefined) {
    // Flow will invalidate the above checks for listing mode existence in findIndex, so we grab a copy.
    const listingModeList = state.ui.listingMode.list;
    return {
      labels: LISTING_LABELS,
      activeLabelIndex: LISTING_LABELS.findIndex((label) => (label.id === listingModeList))
    };
  }

  throw new Error('Illegal state');
}

function mapPropsToDispatch(dispatch):ListingHeaderDispatch {
  return {
    onHeaderClicked: (list) => dispatch(SetDisplayedList(list))
  };
}

const ListingHeaderComponent = connect(mapStateToProps, mapPropsToDispatch)(ListingHeader);

export default ListingHeaderComponent;
