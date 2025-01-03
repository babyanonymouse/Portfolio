import "@/styles/globals.css";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {/* custom cursor */}
      {/* <div className="w-[32px] h-[32px] bg-white fixed top-0 left-0 z-50 pointer-events-none"></div> */}
    </>
  );
}
