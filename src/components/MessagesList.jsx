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
  render() {
    const { messages } = this.props;
    return (
      <ul>
        {messages.map((message) => {
          const { id, author, content } = message;
          return (
            <li key={id}>
              <b>{author}</b>
              <br />
              {content}
            </li>
          );
        })}
      </ul>
    );
  }
}
