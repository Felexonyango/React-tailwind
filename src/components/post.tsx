import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./PostList";
interface IPosts {
  body: string;
  title: string;
}
const RenderPostList = (props: { body: string; title: string }) => {
  return <PostList body={props.body} title={props.title} />;
};

const Post: React.FC<IPosts> = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getposts = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(result.data);
    };
    getposts();
  }, []);

  return (
    <div>
      {posts.map((post: any) => (
        <ul key={post.id}>
          <RenderPostList body={post.body} title={post.title} />
        </ul>
      ))}
    </div>
  );
};

export default Post;
