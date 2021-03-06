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
  activeChannel = id => () => {
    const { setCurrentChannelId } = this.props;
    return setCurrentChannelId(id);
  }

  handleDelete = id => (e) => {
    e.stopPropagation();
    const { callAction } = this.props;
    callAction(id, 'deleteChannel');
  }

  handleRename = id => (e) => {
    e.stopPropagation();
    const { callAction } = this.props;
    callAction(id, 'renameChannel');
  }

  renderActions = (channelId) => {
    const id = channelId;
    return (
      <div className="actions float-right">
        <button type="button" className="btn btn-sm btn-light pt-0 pb-0" onClick={this.handleRename(id)}>rename</button>
        <button type="button" className="btn btn-sm btn-danger ml-2 pt-0 pb-0" onClick={this.handleDelete(id)}>x</button>
      </div>);
  }

  renderChannelItem = ({ id, name, removable }) => {
    const { currentChannelId } = this.props;
    const className = cn(
      'list-group-item',
      'list-group-item-action',
      { active: id === currentChannelId },
    );
    return (
      <button type="button" key={id} onClick={this.activeChannel(id)} className={className}>
        {name}
        {removable && this.renderActions(id)}
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
