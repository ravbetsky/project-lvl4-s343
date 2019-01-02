import axios from 'axios';
import { createAction } from 'redux-actions';

import routes from '../routes';

export const fetchChannelsRequest = createAction('CHANNELS_FETCH_REQUEST');
export const fetchChannelsSuccess = createAction('CHANNELS_FETCH_SUCCESS');
export const fetchChannelsFailure = createAction('CHANNELS_FETCH_FAILURE');

export const createMessageRequest = createAction('MESSAGE_CREATE_REQUEST');
export const createMessageSuccess = createAction('MESSAGE_CREATE_SUCCESS');
export const createMessageFailure = createAction('MESSAGE_CREATE_FAILURE');

export const fetchMessagesRequest = createAction('MESSAGES_FETCH_REQUEST');
export const fetchMessagesSuccess = createAction('MESSAGES_FETCH_SUCCESS');
export const fetchMessagesFailure = createAction('MESSAGES_FETCH_FAILURE');

export const setCurrentChannelId = createAction('CHANNEL_ID_SET');

export const setUserName = createAction('USERNAME_SET');

export const fetchChannels = () => async (dispatch) => {
  dispatch(fetchChannelsRequest());
  try {
    const url = routes.channelsUrl();
    const response = await axios.get(url);
    dispatch(fetchChannelsSuccess({ channels: response.data }));
  } catch (e) {
    console.log(e);
    dispatch(fetchChannelsFailure());
  }
};

export const fetchMessages = channelId => async (dispatch) => {
  dispatch(fetchMessagesRequest());
  try {
    const url = routes.messagesUrl(channelId);
    const response = await axios.get(url);
    dispatch(fetchMessagesSuccess({ messages: response.data }));
  } catch (e) {
    console.log(e);
    dispatch(fetchMessagesFailure());
  }
};

export const createMessage = (data, channelId) => async (dispatch) => {
  dispatch(createMessageRequest());
  try {
    const url = routes.messagesUrl(channelId);
    await axios.post(url,
      {
        data: {
          attributes: {
            author: data.author,
            content: data.message,
          },
        },
      });
    dispatch(createMessageSuccess());
  } catch (e) {
    console.log(e);
    dispatch(createMessageFailure());
  }
};
