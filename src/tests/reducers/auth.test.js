import authReducer from '../../reducers/auth';

test('should prepare user id for login', () => {
  const uid = 'uiguhkdfjgkh';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should prepare user id for logout', () => {
  const uid = 'uiguhkdfjgkh';
  const action = {
    type: 'LOGOUT',
    uid
  };
  const state = authReducer({ uid }, action);
  expect(state).toEqual({});
});
