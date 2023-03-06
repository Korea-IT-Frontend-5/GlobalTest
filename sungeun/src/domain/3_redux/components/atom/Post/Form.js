import useInputs from "../../../../../utils/UseInputs";

const PostForm = ({ onSubmit }) => {

  const [{ title, content }, onChangeForm] = useInputs({
    title: '',
    content: '',
  });

  const onAddPost = (e) => {
    e.preventDefault();
    onSubmit(title, content);
  }

  return (
    <>
      <h2>POST-FORM</h2>
      <form onSubmit={onAddPost}>
        <label>
          <input type="text" name="title" onChange={onChangeForm} placeholder="제목" />
        </label>
        <label>
          <input type="text" name="content" onChange={onChangeForm} placeholder="내용" />
        </label>
        <button type="submit">추가</button>
      </form>
    </>
  );
};
export default PostForm;
