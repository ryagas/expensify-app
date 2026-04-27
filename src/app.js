import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses, setExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// Development mode: skip Firebase and render app directly
if (process.env.NODE_ENV === 'development' && process.env.FIREBASE_API_KEY === 'test') {
  // Use a test user ID for development
  store.dispatch(login('test-user-id'));
  // Dispatch empty expenses for development (skip Firebase fetch)
  store.dispatch(setExpenses([]));
  renderApp();
  if (history.location.pathname === '/') {
    history.push('/dashboard');
  }
} else {
  // Production mode: use Firebase
  const { firebase } = require('./firebase/firebase');
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch(login(user.uid));
      store.dispatch(startSetExpenses()).then(() => {
        renderApp();
        if (history.location.pathname === '/') {
          history.push('/dashboard');
        }
      });
    } else {
      store.dispatch(logout());
      renderApp();
      history.push('/');
    }
  });
}
