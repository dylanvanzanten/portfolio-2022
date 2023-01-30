import Head from "next/head";
import Script from "next/script";
import type { AppProps } from "next/app";

// Resources
import "../styles/_all.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Dylan van Zanten, a digital creative with a passion for digital products that involves design, branding and code — loves to work in a cross-functional team towards a shared vision."
        />
        <meta property="og:locale" content="" />
        <meta property="og:site_name" content="" />
      </Head>
      <Component {...pageProps} />
      <Script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        async
        defer
        type="module"
      />
    </>
  );
}
