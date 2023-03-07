import { createContext, useContext, useReducer } from "react";

// 전역에서 관리할 modal의 상태 여부
const ModalState = false;

// 저장공간 만들기 ➡️ 강사님은 냉장고라고 표현하심
export const ModalContext = createContext();

// Dispatch를 보내기 위한 Context
export const ModalDispatchContext = createContext();

// 어디서든 state를 사용하겠다(전역)
export const useModalState = () => useContext(ModalContext);
export const useModalDisPatch = () => useContext(ModalDispatchContext);

function createAction(type) {
  console.log(type);
  return function (payload) {
    console.log(payload);
    return { type, payload };
  };
}

// 액션 생성 함수
export const CHANGE_ONEBTN = createAction("CHANGE_ONEBTN");
export const CHANGE_TWOBTN = createAction("CHANGE_TWOBTN");

// Reducer 생성
const ModalReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "CHANGE_ONEBTN":
      return state;
    case "CHANGE_TWOBTN":
      return state;
    default:
      return state;
  }
};

//                        ⬇️ 하위에 있는 모드 컴포넌트
const ModalContextProvider = ({ children }) => {
  // useReducer 사용
  const [state, dispatch] = useReducer(ModalReducer, ModalState);

  return (
    <ModalContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;
