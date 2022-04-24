import { AiOutlineArrowLeft } from "react-icons/ai";
import BlackImageCard from "../components/cards/BlackImageCard";
import OneLineCard from "../components/cards/OnLineCard";

export default function Cards() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-4xl underline underline-offset-4 decoration-red-500  mt-2 mb-10">
        {" "}
        Cards
      </h1>
      <div className="flex items-center flex-col  md:flex-row  ">
        <BlackImageCard />
        <AiOutlineArrowLeft size={30} className="mx-12 hidden md:block   " />
        <div className="border w-96  border-slate-50 relative shadow-lg mt-9 md:mt-0 p-8 rounded-2xl  ">
          <span className="absolute text-xs -top-4 bg-black text-white px-2 py-1 rounded-lg right-0  transform rotate-6">
            Explanation
          </span>
          <p className="text-gray-600 tracking-tighter">
            Primero un <span className="tag"> div </span> con un{" "}
            <span className="tag">max-width</span>. Dentro de esto es{" "}
            <span className="tag">a</span> con una{" "}
            <span className="tag">img</span>. Luego por debajo (dentro del
            container) un <span className="tag">div</span> con h3, p y un a.
          </p>
        </div>
        <div />
      </div>

      <div className="mt-9 pt-16 pb-20 flex items-center border-t-slate-700 border-t-2">
        <OneLineCard />
        <AiOutlineArrowLeft size={30} className="mx-12 hidden md:block   " />
        <div className="border w-96 group  border-slate-50 relative shadow-lg mt-9 md:mt-0 p-8 rounded-2xl  ">
          <span className="absolute text-xs -top-4 bg-black text-white px-2 py-1 rounded-lg right-0  transform rotate-6">
            Explanation
          </span>
          <div className=" px-3 justify-start text-xs  absolute -bottom-5 right-1 z-40 hidden group-hover:flex bg-amber-50  ">
            <div> a (flex, max-width) </div>
            <div className="flex flex-col ml-5">
              <div> img (object-fit, width) </div>
              <div> div </div>
            </div>
            <div className="flex flex-col ml-5">
              <br />
              <div> h3, p </div>
            </div>
          </div>
          <p className="text-gray-600 tracking-tighter">
            Todo es un <span className="tag"> a </span> con un{" "}
            <span className="tag">max-width</span> y flex. Dentro de esto es una{" "}
            <span className="tag">img</span> con un div a su lado, esto por
            medio de flex. La <span className="tag">img</span> tiene un width
            determinado y un <span className="tag">object-fit</span>. Por último
            dentro del <span className="tag">div</span> hay un h3 y p.
          </p>
        </div>
      </div>
    </div>
  );
}
