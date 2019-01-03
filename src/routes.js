import { compact } from 'lodash';

const host = 'api/v1';

export default {
  channelsUrl: channelId => compact([host, 'channels', channelId]).join('/'),
  messagesUrl: channelId => [host, 'channels', channelId, 'messages'].join('/'),
};
