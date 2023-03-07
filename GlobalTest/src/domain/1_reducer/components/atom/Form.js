import { useContext, useRef } from "react";
import {
  ADD_INGREDIENT,
  IngredientContext,
  useIngredientDisPatch,
} from "../../../../store/1_reducer";

const Q1Form = () => {
  // 전역 dispatch 설정
  const ingredients = useContext(IngredientContext);
  const dispatch = useIngredientDisPatch();

  // 변하는 값을 useRef를 이용하여 가져옴
  const name = useRef();
  const price = useRef();

  // 추가 로직 사용하기
  const onAddIngredient = (e) => {
    e.preventDefault(); // submit의 작동 막기
    const id = ingredients[ingredients.length - 1].id + 1;
    dispatch(
      ADD_INGREDIENT({
        id,
        name: name.current.value,
        price: price.current.value,
      })
    );
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
