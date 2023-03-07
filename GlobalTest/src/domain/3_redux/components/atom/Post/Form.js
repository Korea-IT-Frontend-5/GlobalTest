import { useContext, useRef } from "react";
import {
  ADD_POST,
  PostDispatchContext,
} from "../../../../../store/4_redux";

const PostForm = () => {
  const dispatch = useContext(PostDispatchContext);

  const title = useRef();
  const content = useRef();

  // 글 추가 로직을 dispatch를 이용하여 사용하기
  const onAddPost = (e) => {
    e.preventDefault(); // form의 submit으로 인한 화면 새로고침 막기
    dispatch(
      ADD_POST({
        title: title.current.value,
        content: content.current.value,
      })
    );
  };

  return (
    <>
      <h2>POST-FORM</h2>
      <form onSubmit={onAddPost}>
        <label>
          <input type="text" name="title" placeholder="제목" ref={title} />
        </label>
        <label>
          <input type="text" name="content" placeholder="내용" ref={content} />
        </label>
        <button type="submit">추가</button>
      </form>
    </>
  );
};
export default PostForm;
