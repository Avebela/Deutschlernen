"use client";
import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { CategoryContext } from "@/context/CategoryContext";

const Blogs = ({ blogs }) => {
  const { category } = useContext(CategoryContext);

  const filteredBlogs = blogs.data.filter((blog) => {
    console.log(blog);
    return blog.attributes.categories?.data?.some(
      (cat) => cat.attributes.name === category
    );
  });
  return (
    <div>
      {filteredBlogs?.map((blog) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
