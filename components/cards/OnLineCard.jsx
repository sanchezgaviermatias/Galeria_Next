/* eslint-disable jsx-a11y/anchor-is-valid */

export default function OnLineCard() {
  const srcImagen =
    "https://www.lifeder.com/wp-content/uploads/2022/01/montana.jpg";

  return (
    <a
      href="#"
      className="flex flex-col max-w-xl  mx-auto bg-white rounded-lg border 
        shadow-md md:flex-row md:max-w-md md:mx-0
         hover:bg-gray-100 "
    >
      <img
        className="object-cover h-52 rounded-t-lg md:h-auto
                     md:w-52 md:rounded-none md:rounded-l-lg"
        src={srcImagen}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </a>
  );
}
