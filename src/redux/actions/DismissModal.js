// @flow

import type { DismissModalAction } from './Actions';

export default function DismissModal():DismissModalAction {
  return {
    type: 'DISMISS_MODAL',
  }
}
