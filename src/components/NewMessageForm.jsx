import React from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    messageCreatingState: state.messageCreatingState,
    currentChannelId: state.currentChannelId,
    user: state.user,
  };
  return props;
};

@connect(mapStateToProps)
@reduxForm(({
  form: 'newMessage',
}))
export default class NewMessageForm extends React.Component {
  componentDidUpdate() {
    this.messageInput.getRenderedComponent().focus();
  }

  sendMessage = async (values) => {
    const {
      user,
      currentChannelId,
      createMessage,
      reset,
    } = this.props;
    await createMessage({ ...values, author: user }, currentChannelId);
    return reset();
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form className="form-inline" onSubmit={handleSubmit(this.sendMessage)}>
        <div className="form-group mx-3">
          <Field
            name="message"
            required
            component="input"
            type="text"
            className="form-control"
            disabled={submitting}
            autoFocus
            ref={ref => this.messageInput = ref}
            withRef
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm" disabled={submitting}>Send</button>
      </form>
    );
  }
}
