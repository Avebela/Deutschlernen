import { Card, CardContent } from "@/components/ui/card";

import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import API_URL from "./config";

import Blogs from "@/components/Blogs";
import Categories from "@/components/Categories";

export const VERCEL_URL =
  process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL;
export const revalidate = 30;

async function fetchCategories() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      "http://127.0.0.1:1337/api/categories?fields=name",
      options
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      "http://127.0.0.1:1337/api/articles?populate=*",
      options
    );
    const response = await res.json();

    return response;
  } catch (err) {
    console.error(err);
  }
}

export default async function Home() {
  const res = await fetch(`${process.env.API_URL}/api/articles`);
  const { data } = await res.json();

  revalidatePath("/");

  const categories = await fetchCategories();
  const blogs = await fetchBlogs();

  return (
    <>
      <Categories categories={categories} />
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
        <Blogs blogs={blogs} />

        {data?.map((article) => (
          <Link
            key={article.id}
            {...article}
            // href={`/articles/${article.attributes.slug}`}
            href="/"
          >
            <Card key={article.id} className=" text-slate-900 font-semibold">
              <CardContent className="mt-5">
                <h3 className="text-xl line-clamp-2 font-semibold">
                  {article.attributes.title}
                </h3>
                <p className="text-md  line-clamp-3 mt-2 text-gray-600">
                  {article.attributes.description}
                </p>
              </CardContent>
              {/* <Button className="w-full mt-7">Далее</Button> */}
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
