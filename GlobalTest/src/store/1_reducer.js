import { createContext, useContext, useReducer } from "react";
import { createAction } from "../utils/createAction";

// 저장될 빈 배열
const initialState = [];

// 저장공간 만들기 ➡️ 강사님은 냉장고라고 표현하심
const IngredientListContext = createContext();
const IngredientDispatchContext = createContext();

// 어디서든 state를 사용하겠다(전역)
export const useIngredientState = () => useContext(IngredientListContext);
export const useIngredientDisPatch = () =>
  useContext(IngredientDispatchContext); //

export const ADD_INGREDIENT = createAction("ADD_INGREDIENT");
export const DELETE_INGREDIENT = createAction("DELETE_INGREDIENT");

// Reducer 생성
export const ingredientReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      // 받아온 배열값 전체를 넣어줌
      return [action.payload, ...state];
    case "DELETE_INGREDIENT":
      // 삭제할 배열의 번호만 넣어줌
      return state.filter((ingredient) => ingredient.id !== action.id);
    default:
      return;
  }
};

//                        ⬇️ 하위에 있는 모드 컴포넌트
const IngredientProvider = ({ children }) => {
  // useReducer 사용
  const [ingredientList, dispatch] = useReducer(
    ingredientReducer,
    initialState
  );

  return (
    <IngredientListContext.Provider value={ingredientList}>
      <IngredientDispatchContext.Provider value={dispatch}>
        {children}
      </IngredientDispatchContext.Provider>
    </IngredientListContext.Provider>
  );
};
export default IngredientProvider;
