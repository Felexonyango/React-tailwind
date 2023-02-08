import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
const Post: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getposts = async () => {
      const result = await axios.get( "https://jsonplaceholder.typicode.com/posts");
      setPosts(result.data);
    };
    getposts()
  }, []);
  console.log(posts)

  return <div></div>;
};
export default Post;
