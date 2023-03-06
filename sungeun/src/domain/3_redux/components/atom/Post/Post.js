import Comment from "../Comment/Comment";
import CommentForm from "../Comment/Form";
import UserCard from "../UserCard/Card";

const Post = ({ post, onComm }) => {
  console.log(post)
  return (
    <div
      style={{
        border: "1px solid #999",
      }}
    >
      <div>
        <button>수정</button>
        <button>삭제</button>
      </div>
      <h2>--PostTitle--</h2>
      <h2>{post.title}</h2>
      <UserCard user={post.User} />
      <h2>--PostContent--</h2>
      <p>{post.content}</p>
      <CommentForm onComm={onComm} />
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
      {post.myPost && <button type="button">삭제</button>}
    </div>
  );
};
export default Post;
