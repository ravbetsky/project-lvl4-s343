import { connect } from 'react-redux';
import Component from '../components/NewMessageForm';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const props = {
    messageCreatingState: state.messageCreatingState,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;
