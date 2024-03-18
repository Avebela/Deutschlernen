"use client";
import React, { useContext, useLayoutEffect } from "react";
import Category from "./Category";
import { CategoryContext } from "@/context/CategoryContext";

const Categories = ({ categories }) => {
  const { changeCategory } = useContext(CategoryContext);

  useLayoutEffect(() => {
    changeCategory(categories?.data[0]?.attributes.name);
  }, []);

  return (
    <div className="flex gap-4 mb-8">
      {categories?.data?.map((category) => (
        <div
          key={category.id}
          className="w-28 h-20 text-white bg-slate-600 rounded-md  text-center flex items-center  hover:shadow-2xl"
        >
          <Category cat={category} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
