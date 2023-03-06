import Post from "./Post/Post";

const AllPosts = ({ posts, onComm }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} onComm={onComm} />
      ))}
    </div>
  );
};
export default AllPosts;
