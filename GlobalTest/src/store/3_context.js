import { createContext, useContext, useReducer } from "react";

// 전역에서 관리할 배열
const userList = [{ id: 1, name: "홍길동", nickname: "히히" }];

// 저장공간 만들기 ➡️ 강사님은 냉장고라고 표현하심
export const UserContext = createContext();

// Dispatch를 보내기 위한 Context
export const UserDispatchContext = createContext();

// 어디서든 state를 사용하겠다(전역)
export const useUserState = () => useContext(UserContext);
export const useUserDisPatch = () => useContext(UserDispatchContext);

// 액션 생성 함수
function createAction(type) {
  return function (payload) {
    return { type, payload };
  };
}

export const ADD_USER = createAction("ADD_USER");
export const ADD_STATUS_USER = createAction("ADD_STATUS_USER");
export const RESET_USER = createAction("RESET_USER");
export const SUBMIT_USER = createAction("SUBMIT_USER");

// Reducer 생성
const UserReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          nickname: action.payload.nickname,
        },
      ];
    case "ADD_STATUS_USER":
      state.map((test) => (test.isEdit = true));
      return state;
    case "RESET_USER":
      state = [];
      console.log(state);
      return state;
    case "SUBMIT_USER":
      state.map((test) => {
        if (test.isEdit) {
          console.log(test);
        }
      });
      return state;
    default:
      return state;
  }
};

//                        ⬇️ 하위에 있는 모드 컴포넌트
const UserContextProvider = ({ children }) => {
  // useReducer 사용
  const [state, dispatch] = useReducer(UserReducer, userList);

  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
export default UserContextProvider;
