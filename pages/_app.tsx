// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@stadiamaps/ferrostar-webcomponents";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
