// import { keyBy } from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channels = handleActions({
  [actions.addChannel](state, { payload }) {
    return { ...state, [payload.id]: payload };
  },
}, {});

const messages = handleActions({
  [actions.addMessage](state, { payload }) {
    return { ...state, [payload.id]: payload };
  },
}, {});

const currentChannelId = handleActions({
  [actions.setCurrentChannelId](state, { payload }) {
    return payload;
  },
}, {});

const user = handleActions({
  [actions.setUserName](state, { payload }) {
    return payload;
  },
}, {});

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  user,
  form: formReducer,
});
