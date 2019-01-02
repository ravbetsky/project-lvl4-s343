import React from 'react';
import { messagesSelector } from '../selectors';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    messages: messagesSelector(state),
  };
  return props;
};

@connect(mapStateToProps)
export default class MessagesList extends React.Component {
  renderMessage = ({ attributes }, i) => {
    const { author, content } = attributes;
    return (
      <li key={i}>
        <b>{author}</b>
        <br />
        {content}
      </li>
    );
  }

  render() {
    const { messages } = this.props;
    return (
      <ul>
        {messages.map(this.renderMessage)}
      </ul>
    );
  }
}
