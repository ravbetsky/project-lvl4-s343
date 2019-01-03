// import { keyBy } from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { omit, mapValues } from 'lodash';
import * as actions from '../actions';

const channels = handleActions({
  [actions.addChannel](state, { payload }) {
    return { ...state, [payload.id]: payload };
  },
  [actions.deleteChannel](state, { payload }) {
    return omit(state, payload);
  },
  [actions.renameChannel](state, { payload: { name, id } }) {
    return mapValues(state, channel => (
      channel.id !== id
        ? channel
        : { ...channel, name }
    ));
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

const actionChannelId = handleActions({
  [actions.setActionChannelId](state, { payload }) {
    return payload;
  },
}, {});

const user = handleActions({
  [actions.setUserName](state, { payload }) {
    return payload;
  },
}, {});

// UI
const ui = handleActions({
  [actions.modalToggle](state, { payload }) {
    return { ...state, modal: payload };
  },
}, {});


export default combineReducers({
  channels,
  messages,
  currentChannelId,
  actionChannelId,
  user,
  ui,
  form: formReducer,
});
