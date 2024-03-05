import { Card, CardContent } from "@/components/ui/card";

import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import API_URL from "./config";
import { Ultra } from "next/font/google";
export const VERCEL_URL =
  process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL;
export const revalidate = 30;

export default async function Home() {
  const res = await fetch(`http://127.0.0.1:1337/api/articles`);
  const { data } = await res.json();
  console.log(data);

  //   const { data as categories } = await fetch(`${config.api}/api/categories?fields=name`).then((res) =>
  //   res.json()
  // );
  revalidatePath("/");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
        {data?.map((article) => (
          <Link
            key={article.id}
            {...article}
            href={`/articles/${article.attributes.slug}`}
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
