import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
// import Card from "./Card";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[500px] my-[70px] ">
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <div>No posts found !!!</div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-sm mb-1">{post.title}</p>
            <p className="text-[10px]">
              By <span className="italic">{post.author}</span> On{" "}
              <span className="font-bold underline">{post.category}</span>
            </p>
            <p className="text-[10px]">Posted on {post.date}</p>
            <p className="text-[13px] mt-[5px]">{post.content}</p>
            <div className="flex gap-x-3">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    className="text-blue-500 underline font-bold text-[10px] mb-[15px]"
                    key={index}
                  >{`#${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
