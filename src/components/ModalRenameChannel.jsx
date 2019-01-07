import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import { Field, reduxForm } from 'redux-form';
import connect from '../connect';
import { actionChannelNameSelector } from '../selectors';

const mapStateToProps = (state) => {
  const props = {
    ui: state.ui,
    actionChannelId: state.actionChannelId,
    channelName: actionChannelNameSelector(state),
  };
  return props;
};

@connect(mapStateToProps)
@reduxForm(({
  form: 'renameChannel',
}))
export default class ModalRenameChannel extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { channelName } = nextProps;
    const {
      channelName: oldChannelName,
      destroy,
      initialize,
    } = this.props;
    if (channelName !== oldChannelName) {
      destroy();
      initialize({ channelName });
    }
  }

  handleSubmit = async (values) => {
    const {
      actionChannelId,
      patchChannel,
      reset,
    } = this.props;
    const { channelName: name } = values;
    await patchChannel({ name }, actionChannelId);
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
      <Modal isOpen={ui.modal === 'renameChannel'}>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <ModalHeader>
            Enter new channel name
          </ModalHeader>
          <ModalBody>
            <div className="form-group mx-3">
              <Field
                name="channelName"
                required
                component="input"
                type="text"
                className="form-control"
                disabled={submitting}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.handleClose} disabled={submitting}>Cancel</Button>
            <Button type="submit" color="primary" disabled={submitting}>Save changes</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}
