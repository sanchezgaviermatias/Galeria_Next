import { AiOutlineArrowLeft } from "react-icons/ai";
import BlackImageCard from "../components/cards/BlackImageCard";

export default function Cards() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-4xl underline underline-offset-4 decoration-red-500  mt-2 mb-6">
        {" "}
        Cards
      </h1>

      <div className="flex items-center ">
        <BlackImageCard />
        <AiOutlineArrowLeft size={100} className="mx-12  " />
        <div className="border w-96 border-slate-50 relative shadow-lg  p-8 rounded-2xl  ">
          <span className="absolute text-xs -top-4 bg-black text-white px-2 py-1 rounded-lg right-0  transform rotate-6">
            Explanation
          </span>
          <p>En esta carda hacemos loocurass</p>
        </div>
        <div />
      </div>
    </div>
  );
}
