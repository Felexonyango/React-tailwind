import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./PostList";
import { useQuery } from "@tanstack/react-query";

interface IPosts {
  body: string;
  title: string;
}
const RenderPostList = (props: { body: string; title: string }) => {
  return <PostList body={props.body} title={props.title} />;
};

const Post: React.FC<IPosts> = () => {

  function getposts(){
   return fetch('https://jsonplaceholder.typicode.com/posts')
   .then((res)=>res.json())
   .catch((err)=>console.log(err))
  };
  const { isLoading, isError, data, error } = useQuery(['posts'], getposts)

  if(isError) return <h1>{JSON.stringify(error)}</h1>
  if(isLoading) return<h1>isLoading...</h1>
  console.log(data)

 
  return (
    <div>
      {data.map((post:any) => (
        <ul key={post.id}>
          <RenderPostList body={post.body} title={post.title} />
        </ul>
      ))}
    </div>
  );
};

export default Post;
