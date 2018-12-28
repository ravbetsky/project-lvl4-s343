import { connect } from 'react-redux';
import Component from '../components/MessagesList';
import * as actionCreators from '../actions';
import { messagesSelector } from '../selectors';

const Container = connect(
  (state) => {
    const props = {
      messages: messagesSelector(state),
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;
