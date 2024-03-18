import React from "react";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import API_URL from "@/app/config";
export const VERCEL_URL =
  process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

export const revalidate = 30;

const getOneArticle = async (slug: any) => {
  const res = await fetch(
    `${process.env.API_URL}/api/articles?filters[slug]=${slug}`
  );
  const data = await res.json();

  revalidatePath(`/articles/${slug}`);
  return data;
};

// export default async function Article({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { data } = await getOneArticle(params.slug);
//   if (data.length === 0) return null;
//   return (
//     <div className="prose mx-auto max-w-screen-md px-2  dark:prose-invert prose-slate md:prose-lg lg:prose-xl   text-slate-950 ">
//       <BlocksRenderer content={data[0].attributes.content} />
//       <h1 className="text-3xl text-slate-950 font-semibold my-10"></h1>
//     </div>
//   );
// }

async function fetchBlog(id: number) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/articles/${id}`,
      options
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

const BlogPage = async ({ params }: any) => {
  const blog = await fetchBlog(params.id);

  // const imageUrl =
  //   "http://127.0.0.1:1337" + blog.data.attributes.img.data.attributes.url;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link href="/">{"< Back"}</Link>
      <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
        {/* <Image priority layout="fill" src={imageUrl} alt={""} /> */}
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold">{blog.data.attributes.title}</h1>
        <p className="text-gray-600 mt-2">{blog.data.attributes.description}</p>
        <div className="mt-4 flex items-center text-gray-400">
          <span className="text-sm">
            Published on{" "}
            {new Date(blog.data.attributes.publishedAt).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
