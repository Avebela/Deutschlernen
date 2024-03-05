import React from "react";

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

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await getOneArticle(params.slug);
  if (data.length === 0) return null;
  return (
    <div className="prose mx-auto max-w-screen-md px-2  dark:prose-invert prose-slate md:prose-lg lg:prose-xl   text-slate-950 ">
      <BlocksRenderer content={data[0].attributes.content} />
      <h1 className="text-3xl text-slate-950 font-semibold my-10"></h1>
    </div>
  );
}
