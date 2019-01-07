import { createSelector } from 'reselect';
import { pickBy, find } from 'lodash';

export const getChannels = state => state.channels;
export const channelsSelector = createSelector(
  getChannels,
  channels => Object.values(channels),
);

export const getGeneralChannel = state => find(state.channels, channel => (
  channel.name === 'general'
));
export const generalChannelIdSelector = createSelector(
  getGeneralChannel,
  general => general.id,
);

export const getActionChannel = state => find(state.channels, channel => (
  channel.id === state.actionChannelId
));
export const actionChannelNameSelector = createSelector(
  getActionChannel,
  channel => channel && channel.name,
);

export const getMessages = state => pickBy(state.messages, message => (
  message.channelId === state.currentChannelId
));
export const messagesSelector = createSelector(
  getMessages,
  messages => Object.values(messages),
);
