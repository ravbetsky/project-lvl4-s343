import React from 'react';
import { Field, reduxForm } from 'redux-form';
import cookies from 'js-cookie';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    messageCreatingState: state.messageCreatingState,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

@connect(mapStateToProps)
class NewMessageForm extends React.Component {
  sendMessage = async (values) => {
    const { currentChannelId, createMessage, reset } = this.props;
    await createMessage(
      { ...values, author: cookies.get('user') },
      currentChannelId,
    );
    return reset();
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form className="form-inline" onSubmit={handleSubmit(this.sendMessage)}>
        <div className="form-group mx-3">
          <Field name="message" required component="input" type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary btn-sm" disabled={submitting}>Send</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'newMessage',
})(NewMessageForm);
