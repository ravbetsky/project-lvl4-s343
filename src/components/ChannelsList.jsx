import React from 'react';
import cn from 'classnames';
import { channelsSelector } from '../selectors';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    channels: channelsSelector(state),
    currentChannelId: state.currentChannelId,
  };
  return props;
};

@connect(mapStateToProps)
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
