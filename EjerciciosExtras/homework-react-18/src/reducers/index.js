import {
  GET_ALL_USERS,
  GET_ALL_POSTS,
  GET_ALL_USER_POSTS,
  GET_ALL_COMMENTS_POST
} from "../actions";

const initialState = {
  users: [],
  posts: [],
  userPosts: [],
  commentsPost: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return({
        ...state,
        users: action.payload
      });
      break;
    case GET_ALL_POSTS:
      return({
        ...state,
        posts: action.payload
      });
      break;
    case GET_ALL_USER_POSTS:
      return({
        ...state,
        userPosts: action.payload
      });
      break;
    case GET_ALL_COMMENTS_POST:
      return({
        ...state,
        commentsPost: action.payload
      });
      break;
    default:
      return state;
  }
}