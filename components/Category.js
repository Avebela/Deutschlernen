"use client";
import { CategoryContext } from "@/context/CategoryContext";
import React, { useContext } from "react";

const Category = ({ cat }) => {
  const { category, changeCategory } = useContext(CategoryContext);
  return (
    <>
      <div
        onClick={() => changeCategory(cat.attributes.name)}
        className={`${
          cat.attributes.name === category ? "font-bold " : ""
        }  p-2 cursor-pointer`}
      >
        {cat.attributes.name}
      </div>
    </>
  );
};

export default Category;
