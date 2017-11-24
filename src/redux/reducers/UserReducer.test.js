import UserReducer from './UserReducer';
import SetUserName from '../actions/SetUserName';

describe('UserReducer', () => {
  describe('on SetUserName action', () => {
    test('sets user name', () => {
      const userName = 'John';
      const action = SetUserName(userName);
      expect(UserReducer(null, action)).toMatchObject({ name: userName });
    });
  });
});
