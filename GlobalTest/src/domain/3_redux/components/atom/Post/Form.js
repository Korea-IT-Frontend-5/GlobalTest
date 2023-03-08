import { useRef } from "react";
import { useDispatch } from "react-redux";
import { ADD_POST } from "../../../../../store/4_redux";

const PostForm = () => {
  // dispatch 생성
  const dispatch = useDispatch();

  const title = useRef();   // title값 useRef를 이용하여 화면랜더링을 하지않고 기억
  const content = useRef(); // content값 useRef를 이용하여 화면랜더링을 하지않고 기억

  // 글 추가
  const addPost = (e) => {
    e.preventDefault();
    dispatch(
      ADD_POST({
        Comments: [],
        Post_img: [''],
        User: {
          id: Math.floor(Math.random() * 10000),
          nickname: 'Juhong',
          profileImg:
            'https://i.pinimg.com/originals/d6/6b/7b/d66b7bc6d790cee508541fe1f80a3a2a.jpg',
        },
        content : content.current.value,
        createdAt: new Date(),
        id: Math.floor(Math.random() * 10000),
        myPost: true,
        title : title.current.value,
      })
    );
  };

  return (
    <>
      <h2>POST-FORM</h2>
      <form onSubmit={addPost}>
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
