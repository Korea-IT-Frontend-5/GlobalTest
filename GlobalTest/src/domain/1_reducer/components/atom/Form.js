import { useRef } from "react";

const Q1Form = ({ onSubmit }) => {



  const onAddIngredient = (e)=>{
    e.preventDefault();
    onSubmit(e.target.name.value,e.target.price.value);
    e.target.name.value ='';
    e.target.price.value='';
  }

  return (
    <form onSubmit={onAddIngredient}>
      <label>
        <input type="text" name="name" placeholder="재료"/>
      </label>
      <label>
        <input type="number" name="price" placeholder="가격"/>
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default Q1Form;
