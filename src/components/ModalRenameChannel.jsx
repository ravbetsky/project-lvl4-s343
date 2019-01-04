import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import connect from '../connect';


const mapStateToProps = (state) => {
  const props = {
    ui: state.ui,
    actionChannelId: state.actionChannelId,
  };
  return props;
};

@connect(mapStateToProps)
@reduxForm(({
  form: 'renameChannel',
}))
export default class ModalRenameChannel extends React.Component {
  handleSubmit = async (values) => {
    const {
      actionChannelId,
      patchChannel,
      reset,
    } = this.props;
    await patchChannel({ ...values }, actionChannelId);
    reset();
    this.handleClose();
  };

  handleClose = () => {
    const { modalToggle } = this.props;
    modalToggle(null);
  }

  render() {
    const {
      ui,
      handleSubmit,
      submitting,
    } = this.props;
    return (
      <Modal show={ui.modal === 'renameChannel'}>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <Modal.Header>
            <Modal.Title>Enter new channel name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group mx-3">
              <Field name="name" required component="input" type="text" className="form-control" disabled={submitting} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="secondary" onClick={this.handleClose} disabled={submitting}>Cancel</Button>
            <Button type="submit" bsStyle="primary" disabled={submitting}>Save changes</Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
