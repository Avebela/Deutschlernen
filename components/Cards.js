import Link from "next/link";

const Cards = ({ article }) => (
  <Link
    href="/"
    className="block shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
  >
    <div className="text-lg text-slate-800 font-semibold">
      <div>{article.attributes.title}</div>
      <div> {article.attributes.description}</div>
    </div>
  </Link>
);

export default Cards;
