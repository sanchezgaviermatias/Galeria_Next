/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { AiOutlineCaretRight } from "react-icons/ai";

const listLinks = [
  { url: "/buttons", name: "Buttons" },
  { url: "/colections", name: "Colections" },
  { url: "/cards", name: "Cards" },
  { url: "/playground", name: "Playground" },
  { url: "/playground", name: "Playground" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl my-4"> The Bigining 👋🏻 </h1>
        {listLinks.map(({ url, name }) => (
          <Link href={url}>
            <div className="cursor-pointer">
              <a className="flex items-center  text-2xl hover:underline hover:decoration-cyan-600   ">
                <AiOutlineCaretRight className="text-blue-400 mr-1" /> {name}
              </a>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
