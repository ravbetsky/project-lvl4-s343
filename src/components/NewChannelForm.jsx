import React from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from '../connect';

@connect()
@reduxForm(({
  form: 'newChannel',
}))
export default class NewChannelForm extends React.Component {
  createNewChannel = async (values) => {
    const { createChannel, reset } = this.props;
    await createChannel({ ...values });
    return reset();
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form className="form-inline mb-2" onSubmit={handleSubmit(this.createNewChannel)}>
        <div className="form-group mr-3">
          <Field name="name" required component="input" type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary btn-sm" disabled={submitting}>Add</button>
      </form>
    );
  }
}
