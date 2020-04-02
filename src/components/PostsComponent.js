import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import PostUser from './PostUser';

class PostsComponent extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderList() {
    return this.props.allPosts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <PostUser uID = {post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { allPosts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(PostsComponent);
