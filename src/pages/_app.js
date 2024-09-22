import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
//this page will show content on all other pages
export default function App({ Component, pageProps }) {
  return (
    <>
  <Navbar />
  <Component {...pageProps} />

  </>)
}
