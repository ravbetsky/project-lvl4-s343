import cookies from 'js-cookie';
import React from 'react';
import ChannelsList from '../containers/ChannelsList';
import MessagesList from './MessagesList';
import NewMessageForm from './NewMessageForm';

const App = () => {
  const user = cookies.get('user');
  return (
    <div>
      <nav className="navbar navbar-light bg-light mb-3">{user}</nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <ChannelsList />
          </div>
          <div className="col-lg-9 col-md-8">
            <MessagesList />
            <NewMessageForm />
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;
