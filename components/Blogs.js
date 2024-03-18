"use client";
import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { CategoryContext } from "@/context/CategoryContext";

const Blogs = ({ blogs }) => {
  const { category } = useContext(CategoryContext);

  const filteredBlogs = blogs?.data?.filter((blog) => {
    return blog.attributes.categories?.data?.some(
      (cat) => cat.attributes.name === category
    );
  });
  return (
    <>
      <div className="text-xl p-4  text-slate-700 ">
        Cтатьи категории {category}
      </div>
      <div></div>
      {filteredBlogs?.map((blog) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </>
  );
};

export default Blogs;
