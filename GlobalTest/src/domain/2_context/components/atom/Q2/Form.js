import { useContext, useRef } from "react";
import {
  ADD_USER,
  UserContext,
  UserDispatchContext,
} from "../../../../../store/3_context";
import ContextQ2Form2 from "./Form2";

const ContextQ2Form = () => {
  const userList = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  const name = useRef();
  const nickname = useRef();

  const AddBtn = () => {
    const id = (userList.length === 0 ? 1 : userList[userList.length - 1].id + 1);
    dispatch(
      ADD_USER({
        id,
        name: name.current.value,
        nickname: nickname.current.value,
      })
    );
    console.log(userList);
  };

  return (
    <div>
      <h1>Q2Form</h1>
      <input placeholder="name" ref={name} />
      <input placeholder="nick-name" ref={nickname} />
      <button onClick={AddBtn}>추가</button>
      <ContextQ2Form2 />
    </div>
  );
};
export default ContextQ2Form;
