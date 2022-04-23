/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/globals.css";
import Link from "next/link";

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <div className="flex h-screen flex-col ">
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
      <footer
        className="  text-xl font-thin  flex 
            justify-center bg-slate-800 "
      >
        <Link href="/">
          <a className="text-white py-2 px-5  rounded-xl"> Go Back Home</a>
        </Link>
      </footer>
    </div>
  );
}

export default MyApp;
