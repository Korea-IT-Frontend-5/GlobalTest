import { createAction } from "../utils/createAction";
import { MockPosts } from "../__mock__/mockPosts";

// 액션 생성 함수
export const ADD_POST = createAction("ADD_POST");       // 글 생성
export const DELETE_POST = createAction("DELETE_POST"); // 글 삭제
export const UPDATE_POST = createAction("UPDATE_POST"); // 글 수정

// 게시글 데이터
const Posts = MockPosts(10);

// 게시글 Reducer
export const PostReducer = (state = Posts, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...state];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload.id);
    case "UPDATE_POST":
      const updatePost = [...state];
      const index = updatePost.findIndex(
        (post) => post.id === action.payload.id
      );
      updatePost[index].content = action.payload.content;
      return updatePost;
    default:
      return state;
  }
};
