import { useSelector } from "react-redux";
import Post from "./Post/Post";

const AllPosts = () => {

      // 매개변수명은 상관없음  ⬇️
  const posts = useSelector((store) => store.PostReducer);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export default AllPosts;
