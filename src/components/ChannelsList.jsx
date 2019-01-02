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
  setActiveChannel = id => () => {
    const { setChannel } = this.props;
    return setChannel(id);
  }

  renderChannelItem = ({ id, name }) => {
    const { currentChannelId } = this.props;
    const className = cn(
      'list-group-item',
      'list-group-item-action',
      { active: id === currentChannelId },
    );
    return (
      <button type="button" key={id} onClick={this.setActiveChannel(id)} className={className}>
        {name}
      </button>
    );
  }

  render() {
    const { channels } = this.props;
    return (
      <div className="list-group">
        {channels.map(this.renderChannelItem)}
      </div>
    );
  }
}
