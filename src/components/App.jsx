import React from 'react';
import ChannelsList from './ChannelsList';
import MessagesList from './MessagesList';
import NewMessageForm from './NewMessageForm';
import NewChannelForm from './NewChannelForm';
import UserNav from './UserNav';
import ModalDeleteChannel from './ModalDeleteChannel';
import ModalRenameChannel from './ModalRenameChannel';
import { UserProvider } from './UserContext';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    user: state.user,
  };
  return props;
};

@connect(mapStateToProps)
export default class App extends React.Component {
  render() {
    const { currentChannelId, user } = this.props;
    return (
      <div>
        <UserProvider value={user}>
          <UserNav />
        </UserProvider>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <h3>Channels</h3>
              <NewChannelForm />
              <ChannelsList />
            </div>
            <div className="col-lg-9 col-md-8">
              {currentChannelId && <MessagesList />}
              {currentChannelId && <NewMessageForm />}
            </div>
          </div>
        </div>
        <ModalDeleteChannel />
        <ModalRenameChannel />
      </div>
    );
  }
}
