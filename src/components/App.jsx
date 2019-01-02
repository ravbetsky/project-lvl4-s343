import React from 'react';
import ChannelsList from './ChannelsList';
import MessagesList from './MessagesList';
import NewMessageForm from './NewMessageForm';
import NewChannelForm from './NewChannelForm';
import UserNav from './UserNav';

const App = () => (
  <div>
    <UserNav />
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <h3>Channels</h3>
          <NewChannelForm />
          <ChannelsList />
        </div>
        <div className="col-lg-9 col-md-8">
          <MessagesList />
          <NewMessageForm />
        </div>
      </div>
    </div>
  </div>);

export default App;
