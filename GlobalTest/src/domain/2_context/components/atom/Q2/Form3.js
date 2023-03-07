import { useContext } from "react";
import { RESET_USER, UserDispatchContext } from "../../../../../store/3_context";

const ContextQ2Form3 = () => {

  const dispatch = useContext(UserDispatchContext);
  
  const ResetBtn = () => {
    dispatch(RESET_USER());
  };

  return (
    <div>
      <h1>Q2Form3</h1>
      <button onClick={ResetBtn}>RESET</button>
    </div>
  );
};
export default ContextQ2Form3;
