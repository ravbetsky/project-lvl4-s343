import React from 'react';
import { Field, reduxForm } from 'redux-form';
import cookies from 'js-cookie';

class NewMessageForm extends React.Component {
  sendMessage = (values) => {
    const { currentChannelId, createMessage } = this.props;
    createMessage(
      { ...values, author: cookies.get('user') },
      currentChannelId,
    );
  }

  render() {
    const { handleSubmit, messageCreatingState } = this.props;
    return (
      <form className="form-inline" onSubmit={handleSubmit(this.sendMessage)}>
        <div className="form-group mx-3">
          <Field name="message" required component="input" type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary btn-sm" disabled={messageCreatingState === 'requested'}>Send</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'newMessage',
})(NewMessageForm);
