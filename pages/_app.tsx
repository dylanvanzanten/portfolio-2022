import Head from "next/head";

import "../styles/_all.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="" />
        <meta property="og:site_name" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
