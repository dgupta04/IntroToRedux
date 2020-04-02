import _ from 'lodash';
import blogAPI from '../apis/blogAPI';

export const fetchData = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await blogAPI.get('/posts');
  dispatch({ type: 'GET_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await blogAPI.get(`/users/${id}`);
  dispatch({ type: 'GET_USER', payload: response.data });
};