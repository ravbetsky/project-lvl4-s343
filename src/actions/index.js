import axios from 'axios';
import { createAction } from 'redux-actions';

import routes from '../routes';

export const createMessageRequest = createAction('MESSAGE_CREATE_REQUEST');
export const createMessageSuccess = createAction('MESSAGE_CREATE_SUCCESS');
export const createMessageFailure = createAction('MESSAGE_CREATE_FAILURE');
export const addMessage = createAction('MESSAGE_ADD');

export const createChannelRequest = createAction('CHANNEL_CREATE_REQUEST');
export const createChannelSuccess = createAction('CHANNEL_CREATE_SUCCESS');
export const createChannelFailure = createAction('CHANNEL_CREATE_FAILURE');
export const addChannel = createAction('CHANNEL_ADD');

export const removeChannelRequest = createAction('CHANNEL_REMOVE_REQUEST');
export const removeChannelSuccess = createAction('CHANNEL_REMOVE_SUCCESS');
export const removeChannelFailure = createAction('CHANNEL_REMOVE_FAILURE');
export const deleteChannel = createAction('CHANNEL_DELETE');

export const patchChannelRequest = createAction('CHANNEL_PATCH_REQUEST');
export const patchChannelSuccess = createAction('CHANNEL_PATCH_SUCCESS');
export const patchChannelFailure = createAction('CHANNEL_PATCH_FAILURE');
export const renameChannel = createAction('CHANNEL_RENAME');

export const setCurrentChannelId = createAction('CHANNEL_ID_SET');

export const setUserName = createAction('USERNAME_SET');

export const setActionChannelId = createAction('ACTION_CHANNEL_SET');

export const modalToggle = createAction('MODAL_TOGGLE');

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
    console.log(e); // eslint-disable-line no-console
    dispatch(createMessageFailure());
  }
};

export const createChannel = data => async (dispatch) => {
  dispatch(createChannelRequest());
  try {
    const url = routes.channelsUrl();
    await axios.post(url,
      {
        data: {
          attributes: {
            name: data.name,
          },
        },
      });
    dispatch(createChannelSuccess());
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
    dispatch(createChannelFailure());
  }
};

export const removeChannel = channelId => async (dispatch) => {
  dispatch(removeChannelRequest());
  try {
    const url = routes.channelsUrl(channelId);
    await axios.delete(url);
    dispatch(removeChannelSuccess());
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
    dispatch(removeChannelFailure());
  }
};

export const patchChannel = (data, channelId) => async (dispatch) => {
  dispatch(patchChannelRequest());
  try {
    const url = routes.channelsUrl(channelId);
    await axios.patch(url,
      {
        data: {
          attributes: {
            name: data.name,
            id: data.id,
          },
        },
      });
    dispatch(patchChannelSuccess());
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
    dispatch(patchChannelFailure());
  }
};
