/* eslint-disable jsx-a11y/anchor-is-valid */

export default function playground() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl text-center tag my-5"> Playground </h1>
      <h2 className="text-xl text-center tag my-5"> Cards Replay </h2>
      <div className="flex">
        <a
          href="#"
          className="rounded-lg shadow-lg  space-x-3 hover:transform hover:scale-105 transition-all hover:shadow-xl max-w-md mx-auto mt-10 flex flex-row"
        >
          <img
            className=" 2  rounded-l-lg object-cover w-56"
            src="https://yt3.ggpht.com/ytc/AKedOLTFiXkh-7MUCDPE_5CtsZVuQJGHv1QhKyqNwGpXiA=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <div className="pt-3">
            <h3 className="text-2xl mb-2 text-gray-800">Rodrigo del Rosso</h3>
            <p>I m experte in data science baby nasheee 🙉</p>
          </div>
        </a>
        <a
          href="#"
          className="rounded-lg shadow-lg  space-x-3 hover:transform hover:scale-105 transition-all hover:shadow-xl max-w-md mx-auto mt-10 flex flex-row"
        >
          <img
            className=" 2  rounded-l-lg object-cover w-56"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHw1E_2KURhNg/profile-displayphoto-shrink_800_800/0/1576155271739?e=1656547200&v=beta&t=Mi0K0KjlaAUH8tjtOEg_Swv8CgJ2xKCTT2kHxWyMPf0"
            alt=""
          />
          <div className="pt-3">
            <h3 className="text-2xl mb-2 text-gray-800">Matias Moris</h3>
            <p>Soy re nashe baby, las tengo a todas las nenas jeje 😎</p>
          </div>
        </a>
      </div>
      {/* Second Cards */}
      <div className="flex mb-10">
        <div
          className="flex max-w-xs mt-6 ml-16 flex-col pb-4 rounded-lg shadow border
     border-gray-200"
        >
          <a href="#">
            <img
              className="w-full object-cover rounded-t-lg "
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEDtvgdEQU72g/profile-displayphoto-shrink_400_400/0/1639169351278?e=1656547200&v=beta&t=jl4dG39_Ur7hxmDY3YjhKHpFZWZuGzfo8xYp6wjhZc0"
              alt=""
            />
          </a>
          <div className="flex flex-col mt-2 mx-3 space-y-1">
            <h3 className="text-xl text-slate-800">Antonio Marrazo</h3>
            <p className="text-slate-600 pb-2 ">
              Soy experto en finance la tengo re clara y cuentos billetes verdes
              💵💹🤑
            </p>
            <a
              className="bg-blue-800 self-start rounded-lg text-sm font-semibold   text-white px-3 py-2 "
              href="#"
            >
              {" "}
              Read more{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
