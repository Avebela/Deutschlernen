import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-4xl  ">
      <Link href="/" className="flex items-center text-xl my-3">
        <img src="logoImg.jpg" alt="Logo" className="w-20 h-20 m-1 mr-10" />
        <div>
          <span className="text-slate-700">
            Подготовка к экзамену А1 по немецкому языку
          </span>
        </div>
      </Link>
      <div className="text-xl text-slate-600 font-semibold">Категории</div>
    </nav>
  );
};

export default Navbar;
