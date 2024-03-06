import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  const truncateBlogDesc =
    blog.attributes.description.length > 80
      ? blog.attributes.description.substring(0, 80) + "..."
      : blog.attributes.description;

  // const imageUrl =
  //   "http://127.0.0.1:1337" + blog.attributes.img.data.attributes.url;

  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden  cursor-pointer">
      <Link href={`/blog/${blog.id}`}>
        {/* <div className="relative w-full h-1" style={{ paddingBottom: "100%" }}>
          <Image
            priority
            layout="fill"
            src={""}
            alt={""}
            className="rounded-t-lg"
          />
        </div> */}
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            {blog.attributes.title}
          </h2>
          <p className="text-gray-600">{truncateBlogDesc}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
