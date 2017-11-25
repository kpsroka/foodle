// @flow

import React from 'react';

export type ListingLabelDef = {
  id: string,
  text: string,
};

export type ListingHeaderProps = {
  labels: Array<ListingLabelDef>,
  activeLabelIndex: number
};

export type ListingHeaderDispatch = {
  onHeaderClicked: (string) => any
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
