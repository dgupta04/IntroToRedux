import React from 'react';
import { connect } from 'react-redux';

class PostUser extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.uID) };
};

export default connect(mapStateToProps)(PostUser);
