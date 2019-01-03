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
import { keyBy } from 'lodash';
import reducers from './reducers';
import App from './components/App';
import * as actions from './actions';

if (!cookies.get('user')) {
  cookies.set('user', faker.name.findName());
}

/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */

const store = createStore(
  reducers,
  {
    channels: keyBy(gon.channels, channel => channel.id),
    messages: keyBy(gon.messages, message => message.id),
    currentChannelId: gon.currentChannelId,
  },
  typeof devtoolMiddleware === 'undefined'
    ? compose(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk), devtoolMiddleware),
);

store.dispatch(actions.setUserName(cookies.get('user')));

const socket = io();
socket.on('newMessage', ({ data: { attributes } }) => {
  store.dispatch(actions.addMessage(attributes));
});
socket.on('newChannel', ({ data: { attributes } }) => {
  store.dispatch(actions.addChannel(attributes));
});
socket.on('removeChannel', ({ data: { id } }) => {
  store.dispatch(actions.deleteChannel(id));
  store.dispatch(actions.setCurrentChannelId(null));
});
socket.on('renameChannel', ({ data: { attributes } }) => {
  store.dispatch(actions.renameChannel(attributes));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('chat'),
);

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}
