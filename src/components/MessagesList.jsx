import React from 'react';

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
