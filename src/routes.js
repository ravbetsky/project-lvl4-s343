const host = 'api/v1';

export default {
  channelsUrl: () => [host, 'channels'].join('/'),
  messagesUrl: channelId => [host, 'channels', channelId, 'messages'].join('/'),
};
