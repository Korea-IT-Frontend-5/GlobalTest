import { useContext } from "react";
import { ADD_STATUS_USER, UserContext, UserDispatchContext } from "../../../../../store/3_context";

const ContextQ2Form2 = () => {

  const dispatch = useContext(UserDispatchContext);

  const AddStatusBtn = () => {
    dispatch(ADD_STATUS_USER());
  }

  return (
    <div>
      <h1>Q2Form2</h1>
      <button onClick={AddStatusBtn}>STATUS 추가</button>
    </div>
  );
};
export default ContextQ2Form2;
