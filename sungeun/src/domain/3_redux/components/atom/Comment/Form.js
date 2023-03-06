import useInputs from "../../../../../utils/UseInputs";

const CommentForm = ({ onComm }) => {

  const [{ nickName, content }, onChangeComm] = useInputs({
    nickName: '',
    content: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    onComm(nickName, content);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" name="nickName" value={nickName} onChange={onChangeComm} placeholder="이름" />
      </label>
      <label>
        <input type="text" name="content" value={content} onChange={onChangeComm} placeholder="내용" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default CommentForm;
