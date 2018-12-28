// import { keyBy } from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channels = handleActions({
  [actions.fetchChannelsSuccess](state, { payload }) {
    return payload.channels;
  },
}, {});

const messages = handleActions({
  [actions.fetchMessagesSuccess](state, { payload }) {
    return payload.messages;
  },
}, {});

const currentChannelId = handleActions({
  [actions.setCurrentChannelId](state, { payload }) {
    return payload.currentChannelId;
  },
}, {});

const messageCreatingState = handleActions({
  [actions.createMessageRequest]() {
    return 'requested';
  },
  [actions.createMessageFailure]() {
    return 'failed';
  },
  [actions.createMessageSuccess]() {
    return 'successed';
  },
}, 'none');

export default combineReducers({
  messageCreatingState,
  channels,
  messages,
  currentChannelId,
  form: formReducer,
});
