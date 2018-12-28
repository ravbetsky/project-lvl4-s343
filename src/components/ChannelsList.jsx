import React from 'react';
import cn from 'classnames';

export default class ChannelsList extends React.Component {
  renderChannelItem = ({ id, name }) => {
    const { currentChannelId } = this.props;
    const className = cn('list-group-item', { active: id === currentChannelId });
    return <li key={id} className={className}>{name}</li>;
  }

  render() {
    const { channels } = this.props;
    return (
      <ul className="list-group">
        {channels.map(this.renderChannelItem)}
      </ul>
    );
  }
}
