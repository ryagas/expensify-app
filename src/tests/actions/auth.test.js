import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout } from '../../actions/auth';

const createMockStore = configureMockStore([thunk]);

test('should setup login action object', () => {
  const uid = 'uiguhkdfjgkh';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should setup logout', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
