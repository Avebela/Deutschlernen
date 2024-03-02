import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-4xl mx-auto px-2 py-5">
      <Link href="/" className="text-2xl text-slate-950 font-semibold my-10">
        Подготовка к экзамену А1
        <span className="text-slate-800"> по немецкому языку</span>
      </Link>
      <div className="text-xl text-slate-600 font-semibold px-2 my-10">
        Категории
      </div>
    </nav>
  );
};

export default Navbar;
