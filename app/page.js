import { Card, CardContent } from "@/components/ui/card";

import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import API_URL from "./config";

import Blogs from "@/components/Blogs";
import Categories from "@/components/Categories";

// export const VERCEL_URL =
//   process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL;
export const revalidate = 30;

async function fetchCategories() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/categories?fields=name`
      //  options
    );
    const response = await res.json();
    revalidatePath("/");
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
      `${process.env.API_URL}/api/articles?populate=*`
      // options
    );
    const response = await res.json();
    revalidatePath("/");
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
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5  m-6">
        <Blogs blogs={blogs} />
      </div>
      <div className="max-w-prose h-2 bg-slate-800"></div>

      <h2 className="text-xl  m-6  text-slate-700 font-semibold">Все статьи</h2>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-5 mb-4 ">
        {data?.map((article) => (
          <Link
            key={article.id}
            {...article}
            href={`/articles/${article.attributes.slug}`}
          >
            <Card
              key={article.id}
              className="rounded-lg shadow-md hover:shadow-2xl"
            >
              <CardContent className="mt-5">
                <h3 className="text-xl line-clamp-2 font-semibold  text-slate-800">
                  {article.attributes.title}
                </h3>
                <p className=" line-clamp-4 mt-2 text-gray-700">
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
