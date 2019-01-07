// import { keyBy } from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { omit, mapValues } from 'lodash';
import * as actions from '../actions';

const channels = handleActions({
  [actions.addChannel](state, { payload: channel }) {
    return { ...state, [channel.id]: channel };
  },
  [actions.deleteChannel](state, { payload: channel }) {
    return omit(state, channel);
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
  [actions.addMessage](state, { payload: message }) {
    return { ...state, [message.id]: message };
  },
}, {});

const currentChannelId = handleActions({
  [actions.setCurrentChannelId](state, { payload: channelId }) {
    return channelId;
  },
}, {});

const actionChannelId = handleActions({
  [actions.setActionChannelId](state, { payload: channelId }) {
    return channelId;
  },
}, {});

const user = handleActions({
  [actions.setUserName](state, { payload: userName }) {
    return userName;
  },
}, {});

// UI
const ui = handleActions({
  [actions.modalToggle](state, { payload: modalType }) {
    return { ...state, modal: modalType };
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
