import { useRef } from "react";
import {
  ADD_INGREDIENT,
  useIngredientDisPatch,
} from "../../../../store/1_reducer";

const Q1Form = ({ ingredients }) => {
  // 전역 dispatch 설정
  const dispatch = useIngredientDisPatch();

  const name = useRef();
  const price = useRef();

  const onAddIngredient = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_INGREDIENT",
      name,
      price,
    });
  };

  return (
    <form onSubmit={onAddIngredient}>
      <label>
        <input type="text" name="name" placeholder="재료" ref={name} />
      </label>
      <label>
        <input type="number" name="price" placeholder="가격" ref={price} />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default Q1Form;
