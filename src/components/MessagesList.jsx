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
      <ul className="list-unstyled">
        {messages.map((message) => {
          const { id, author, content } = message;
          return (
            <li className="media mb-1" key={id}>
              <div className="media-body">
                <div className="mt-0">
                  <b>{author}</b>
                </div>
                {content}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
