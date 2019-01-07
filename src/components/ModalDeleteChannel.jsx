import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import connect from '../connect';


const mapStateToProps = (state) => {
  const props = {
    ui: state.ui,
    actionChannelId: state.actionChannelId,
  };
  return props;
};

@connect(mapStateToProps)
export default class ModalDeleteChannel extends React.Component {
  handleDelete = async () => {
    const {
      removeChannel,
      actionChannelId,
    } = this.props;
    await removeChannel(actionChannelId);
    this.handleClose();
  };

  handleClose = () => {
    const { modalToggle } = this.props;
    modalToggle(null);
  }

  render() {
    const { ui } = this.props;
    return (
      <Modal isOpen={ui.modal === 'deleteChannel'}>
        <ModalHeader>
          Are you sure?
        </ModalHeader>

        <ModalBody>You are going to delete this channel for everyone</ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
          <Button color="danger" onClick={this.handleDelete}>Confirm Delete</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
