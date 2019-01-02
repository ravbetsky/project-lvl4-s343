import React from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from '../connect';

@connect()
class NewChannelForm extends React.Component {
  addNewChannel = async (values) => {
    const { addChannel, reset } = this.props;
    await addChannel({ ...values });
    return reset();
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form className="form-inline mb-2" onSubmit={handleSubmit(this.addNewChannel)}>
        <div className="form-group mr-3">
          <Field name="name" required component="input" type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary btn-sm" disabled={submitting}>Add</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'newChannel',
})(NewChannelForm);
