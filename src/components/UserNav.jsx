import React from 'react';
import connect from '../connect';

const mapStateToProps = (state) => {
  const props = {
    user: state.user,
  };
  return props;
};

@connect(mapStateToProps)
export default class UserNav extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-light bg-light mb-3">{user}</nav>
    );
  }
}
