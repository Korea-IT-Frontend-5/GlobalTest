import Comment from "../Comment/Comment";
import CommentForm from "../Comment/Form";
import UserCard from "../UserCard/Card";
import { useDispatch } from "react-redux";
import { DELETE_POST, UPDATE_POST } from "../../../../../store/4_redux";
import { useState } from "react";


const Post = ({ post }) => {
  // dispatch 생성
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false); // 수정상태 관리 state
  const [editContent, setEditContent] = useState(post.content); // 수정문장 관리 state

  // 글 삭제
  const onDeletePost = (id) => {
    dispatch(DELETE_POST({ id }));
  };

  // onChange를 이용한 수정문장 기억
  const onChangeEditContent = (e) => setEditContent(e.target.value);

  // 글 수정
  const onEditPost = () => {
    // 수정상태일 때(완료) 버튼을 누르면
    if (isEdit) dispatch(UPDATE_POST({ id: post.id, content: editContent }));
    setIsEdit((prev) => !prev);
  };

  return (
    <div
      style={{
        border: "1px solid #999",
      }}
    >
      <h2>--PostTitle--</h2>
      <h2>{post.title}</h2>
      <UserCard user={post.User} />
      <h2>--PostContent--</h2>
      {isEdit ? (
        <textarea onChange={onChangeEditContent} value={editContent} />
      ) : (
        <p>{post.content}</p>
      )}
      <CommentForm comments={post.Comments}/>
      <div
        style={{
          display: "table",
          borderCollapse: "collapse",
          border: "1px solid #000",
        }}
      >
        {post.Comments &&
          post.Comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
      {post.myPost && (
        <>
          <button type="button" onClick={onEditPost}>
            {isEdit ? "완료" : "수정"}
          </button>
          <button type="button" onClick={onDeletePost}>
            삭제
          </button>
        </>
      )}
    </div>
  );
};
export default Post;
