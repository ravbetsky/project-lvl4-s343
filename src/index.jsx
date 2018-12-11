import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';

import faker from 'faker';
import gon from 'gon';
import cookies from 'js-cookie';
import React from 'react';
import { render } from 'react-dom';
// import io from 'socket.io-client';
import App from './App';

if (!cookies.get('user')) {
  cookies.set('user', faker.name.findName());
}

const state = { ...gon, user: cookies.get('user') };

render(
  <App {...state} />,
  document.getElementById('chat'),
);

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}
