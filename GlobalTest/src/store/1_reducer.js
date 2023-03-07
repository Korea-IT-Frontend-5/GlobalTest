import { createContext, useContext, useReducer } from "react";
import { createAction } from "../utils/createAction";

// 전역에서 관리할 배열
const initialState = [
  { id: 1, name: "피자 도우", price: 1000 },
  { id: 2, name: "토마토 소스", price: 500 },
  { id: 3, name: "치즈", price: 1000 },
  { id: 4, name: "피망", price: 500 },
  { id: 5, name: "양파", price: 500 },
];

// 저장공간 만들기 ➡️ 강사님은 냉장고라고 표현하심
export const IngredientContext = createContext();

// Dispatch를 보내기 위한 Context
export const IngredientDispatchContext = createContext();

// 어디서든 state를 사용하겠다(전역)
export const useIngredientState = () => useContext(IngredientContext);
export const useIngredientDisPatch = () => useContext(IngredientDispatchContext); //

// 액션 생성 함수
export const ADD_INGREDIENT = createAction("ADD_INGREDIENT");
export const DELETE_INGREDIENT = createAction("DELETE_INGREDIENT");

// Reducer 생성
const ingredientReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_INGREDIENT":
      // 받아온 배열값 전체를 넣어줌
      return [...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case "DELETE_INGREDIENT":
      // 삭제할 배열의 번호만 넣어줌
      return state.filter((ingredient) => ingredient.id !== action.payload.id);
    default:
      return state;
  }
};

//                        ⬇️ 하위에 있는 모드 컴포넌트
const ContextProvider = ({ children }) => {
  // useReducer 사용
  const [state, dispatch] = useReducer(ingredientReducer, initialState);

  return (
    <IngredientContext.Provider value={state}>
      <IngredientDispatchContext.Provider value={dispatch}>
        {children}
      </IngredientDispatchContext.Provider>
    </IngredientContext.Provider>
  );
};
export default ContextProvider;
