import type { User } from '../state/State';
import type { Action } from '../actions/Actions';

export default function UserReducer(user:?User, action:Action):User {
  if (user === undefined) {
    return null;
  }

  switch (action.type) {
    case '_SET_USER_NAME':
      return { name: action.payload.userName };
    default:
      return user;
  }
}
