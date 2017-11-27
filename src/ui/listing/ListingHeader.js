// @flow

import React from 'react';
import type { ListingModeList } from '../../redux/state/State';

export type ListingLabelDef = {
  id: ListingModeList,
  text: string,
};

export type ListingHeaderProps = {
  labels: Array<ListingLabelDef>,
  activeLabelIndex: number
};

export type ListingHeaderDispatch = {
  onHeaderClicked: (ListingModeList) => any
};

type ListingHeaderCombinedProps = ListingHeaderProps & ListingHeaderDispatch;

export default function ListingHeader(props:ListingHeaderCombinedProps) {
  return (
      <div className="ListingHeader">
        {props.labels.map((label, index) => (
            <div
                key={label.id}
                className={"label" + (index === props.activeLabelIndex ? " active" : "")}
                onClick={() => props.onHeaderClicked(label.id)}
            >
              {label.text}
            </div>
        ))}
      </div>
  );
}
