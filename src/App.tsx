import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Post from "./components/post";
import PostList from "./components/PostList";

const App = () => {
  return (
    <div className=" container mx-auto">
      <div className="flex   space-x-4 ">
        <div className=" text-center text-justify py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aut
          dolorem ex possimus quo veniam modi voluptatem quibusdam rem sunt iure
          ea sed magnam voluptate libero quam est itaque molestiae.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          maiores numquam iusto eaque, dolores ut cumque suscipit sit eius
          dignissimos dolorem praesentium perspiciatis laudantium iste ex odit
          aliquid esse vero?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          maiores numquam iusto eaque, dolores ut cumque suscipit sit eius
          dignissimos dolorem praesentium perspiciatis laudantium iste ex odit
          aliquid esse vero?
        </div>
      </div>
      <div className="flex   space-x-4 ">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          maiores numquam iusto eaque, dolores ut cumque suscipit sit eius
          dignissimos dolorem praesentium perspiciatis laudantium iste ex odit
          aliquid esse vero?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          maiores numquam iusto eaque, dolores ut cumque suscipit sit eius
          dignissimos dolorem praesentium perspiciatis laudantium iste ex odit
          aliquid esse vero?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          maiores numquam iusto eaque, dolores ut cumque suscipit sit eius
          dignissimos dolorem praesentium perspiciatis laudantium iste ex odit
          aliquid esse vero?
        </div>
      </div>

 <form className="w-full ">
  <div className="md:flex md:items-center mb-6">

  <input type="text" placeholder="Text"name='name' className="block text-right mb-1"/>
  </div>

  

 </form>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button>
      <Post body="" title="" />
    </div>
  );
};

export default App;
