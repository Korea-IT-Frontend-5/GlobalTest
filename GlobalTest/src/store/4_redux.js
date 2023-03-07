import { createContext, useContext, useReducer, useState } from "react";
import { MockPosts } from "../__mock__/mockPosts";

// 전역에서 관리할 배열
const Posts = MockPosts(10); // 게시글 배열

// 전역에서 관리할 수정 상태
const isPostEdit = true;

// 저장공간 만들기 ➡️ 강사님은 냉장고라고 표현하심
export const PostContext = createContext();
export const EditPostContext = createContext();

// Dispatch를 보내기 위한 Context
export const PostDispatchContext = createContext();
export const EditPostDispatchContext = createContext();

// 어디서든 state를 사용하겠다(전역)
export const usePostState = () => useContext(PostContext);
export const usePostDisPatch = () => useContext(PostDispatchContext);

export const useEditPostState = () => useContext(EditPostContext);
export const useEditPostDisPatch = () => useContext(EditPostDispatchContext);

// 액션 생성 함수
function createAction(type) {
  return function (payload) {
    return { type, payload };
  };
}

export const ADD_POST = createAction("ADD_POST");
export const DELETE_POST = createAction("DELETE_POST");

// Reducer 생성
const PostReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_POST":
      const newPost = MockPosts(1)[0];
      newPost.title = action.payload.title;
      newPost.content = action.payload.content;
      newPost.myPost = true;
      return [...state, newPost];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
};


//                        ⬇️ 하위에 있는 모드 컴포넌트
const PostContextProvider = ({ children }) => {
  // useReducer 사용
  const [state, dispatch] = useReducer(PostReducer, Posts);
  const [edit, editDispatch] = useState(isPostEdit);

  return (
    <PostContext.Provider value={state}>
      <PostDispatchContext.Provider value={dispatch}>
        <EditPostContext.Provider value={edit}>
            <EditPostDispatchContext.Provider value={editDispatch}>
                {children}
            </EditPostDispatchContext.Provider>
        </EditPostContext.Provider>
      </PostDispatchContext.Provider>
    </PostContext.Provider>
  );
};
export default PostContextProvider;
