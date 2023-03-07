const ReducerQ1List = ({ ingredient, onDelete }) => {
  return (
    <tbody>
      {ingredient.map((ingredient) => (
        <tr>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick={()=>onDelete(ingredient.id)}>삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
