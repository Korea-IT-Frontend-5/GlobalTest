import { createAction } from "../utils/createAction";                       // 액션함수 불러오기
import { MockPosts } from "../__mock__/mockPosts";                          // Mock데이터 불러오기
import { applyMiddleware, combineReducers, createStore } from "redux";      // redux 불러오기
import { composeWithDevTools } from "redux-devtools-extension";             // redux-devtools-extension 불러오기
import logger from "redux-logger";                                          // redux-logger 불러오기

export const ADD_POST = createAction("ADD_POST");         // 게시글 추가
export const EDIT_POST = createAction("EDIT_POST");       // 게시글 수정
export const DELETE_POST = createAction("DELETE_POST");   // 게시글 삭제

// Reducer 생성
const Posts = MockPosts(10);    // 기존에 미리 넣어둘 가짜 데이터 생성
const postReducer = (state = Posts, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...state];
    case "EDIT_POST":
      const newPosts = [...state];
      const index = newPosts.findIndex((post) => post.id === action.payload.id);
      newPosts[index].content = action.payload.content;
      return newPosts;
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
};

// reducer들이 담길 rootReducer
export const rootReducer = combineReducers({ postReducer });

const reduxConfig = () => {
  const store = createStore(
    rootReducer,
    process.env.NODE_ENV === "development" && // 개발 모드일 때만
      composeWithDevTools(applyMiddleware(logger))
  );
  return store;
};

export default reduxConfig;
