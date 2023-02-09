import React from "react";
interface IPosts {
  body: string;
  title: string;
}

const PostList: React.FC<IPosts> = ({ body, title }) => {
  return (
    <div className=" container">
        <div className="mb-1 ">
    <h6 className="text-center    font-bold text-1xl">{title}</h6>

      <p className=" text-base">{body}</p>
      
        </div>
        {/* <button className=" bg-blue-700 ho"></button> */}
    </div>

  );
};
export default PostList;
