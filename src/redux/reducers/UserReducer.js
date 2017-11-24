import type { User } from '../state/State';
import type { Action } from '../actions/Actions';

export default function UserReducer(user:?User, action:Action):User {
  if (user === undefined) {
    return null;
  }

  return User;
}
