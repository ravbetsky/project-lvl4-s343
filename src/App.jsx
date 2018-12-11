import React from 'react';

export default class App extends React.Component {
  renderChannels() {
    const { channels } = this.props;
    return (
      <ul className="list-group">
        {channels.map(({ id, name }) => <li key={id} className="list-group-item">{name}</li>)}
      </ul>
    );
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <nav className="navbar navbar-light bg-light mb-3">{user}</nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <h3>Channels</h3>
              {this.renderChannels()}
            </div>
            <div className="col-lg-9 col-md-8">Messages will be displayed here</div>
          </div>
        </div>
      </div>
    );
  }
}
