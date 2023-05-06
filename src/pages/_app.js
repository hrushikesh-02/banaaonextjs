import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
// import Head from "next/head";
export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}
