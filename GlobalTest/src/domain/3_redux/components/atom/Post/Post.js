import { useContext } from "react";
import {
  DELETE_POST,
  EditPostContext,
  PostDispatchContext,
} from "../../../../../store/4_redux";
import Comment from "../Comment/Comment";
import CommentForm from "../Comment/Form";
import UserCard from "../UserCard/Card";

const Post = ({ post }) => {
  const editState = useContext(EditPostContext);
  console.log(editState);

  const dispatch = useContext(PostDispatchContext);

  const onDelPost = (id) => {
    dispatch(DELETE_POST({ id }));
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
      <p>{post.content}</p>
      <CommentForm />
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
          <button type="button" onClick={() => onDelPost(post.id)}>
            삭제
          </button>
          <button type="button">수정</button>
        </>
      )}
    </div>
  );
};
export default Post;
