import { useContext } from "react";
import {
  useIngredientDisPatch,
  IngredientContext,
  DELETE_INGREDIENT,
} from "../../../../store/1_reducer";

const ReducerQ1List = () => {

  // 전역에서 데이터와 dispatch를 불러옴
  const ingredients = useContext(IngredientContext);
  const dispatch = useIngredientDisPatch();
  console.log(ingredients);

  // 재료 삭제 로직 사용하기
  const onDeleteIngredient = (id) => {
    dispatch(DELETE_INGREDIENT({ id }));
  };

  return (
    <tbody>
      {ingredients.map((ingredient) => (
        <tr key={ingredient.id}>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick={() => onDeleteIngredient(ingredient.id)}>
              삭제
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
