import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';

import faker from 'faker';
import gon from 'gon';
import cookies from 'js-cookie';
import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import io from 'socket.io-client';
import reducers from './reducers';
import App from './components/App';
import { fetchChannels, fetchMessages, setUserName } from './actions';

if (!cookies.get('user')) {
  cookies.set('user', faker.name.findName());
}

const { currentChannelId } = gon;

/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */

const store = createStore(
  reducers,
  {
    channels: [],
    messages: [],
    user: null,
    currentChannelId,
  },
  typeof devtoolMiddleware === 'undefined'
    ? compose(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk), devtoolMiddleware),
);

store.dispatch(setUserName(cookies.get('user')));
store.dispatch(fetchChannels());
store.dispatch(fetchMessages(currentChannelId));

const socket = io();
socket.on('newMessage', () => store.dispatch(fetchMessages(currentChannelId)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('chat'),
);

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}
