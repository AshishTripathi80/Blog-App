import { Link } from "react-router-dom";
import Like from "./Like";

const PostExcerpt = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
      </p>
      <Like/>
    </article>
  );
};
export default PostExcerpt;
