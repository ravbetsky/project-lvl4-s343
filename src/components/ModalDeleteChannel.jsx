import React from 'react';
import { Button, Modal } from 'react-bootstrap';
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
      <Modal show={ui.modal === 'deleteChannel'}>
        <Modal.Header>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Body>You are going to delete this channel for everyone</Modal.Body>

        <Modal.Footer>
          <Button bsStyle="secondary" onClick={this.handleClose}>Cancel</Button>
          <Button bsStyle="danger" onClick={this.handleDelete}>Confirm Delete</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
