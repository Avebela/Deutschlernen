"use client";
import { CategoryContext } from "@/context/CategoryContext";
import React, { useContext } from "react";

const Category = ({ cat }) => {
  const { category, changeCategory } = useContext(CategoryContext);
  return (
    <div
      onClick={() => changeCategory(cat.attributes.name)}
      className={`${
        cat.attributes.name === category
          ? "bg-[#bf7f7f] text-black"
          : "bg-[#d9d7d3]"
      }  p-4 rounded-lg shadow-md cursor-pointer`}
    >
      {cat.attributes.name}
    </div>
  );
};

export default Category;
