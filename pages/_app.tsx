import Head from "next/head";
import localFont from "@next/font/local";
import type { AppProps } from "next/app";

// Resources
import "../styles/_all.scss";

// Components
import SiteMeta from "../components/SiteMeta/SiteMeta";

const markPro = localFont({
  src: [
    {
      path: "../public/fonts/MarkPro.woff",
    },
    {
      path: "../public/fonts/MarkPro.woff2",
    },
  ],
  weight: "300",
  style: "normal",
  display: "block",
  variable: "--font-stack-base-font",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "avenir next",
    "avenir",
    "segoe ui",
    "helvetica neue",
    "helvetica",
    "Cantarell",
    "Ubuntu",
    "roboto",
    "noto",
    "arial",
    "sans-serif",
  ],
});

const circularStd = localFont({
  src: [
    {
      path: "../public/fonts/CircularStd-Bold.woff",
    },
    {
      path: "../public/fonts/CircularStd-Bold.woff2",
    },
  ],
  weight: "700",
  style: "bold",
  display: "block",
  variable: "--font-stack-headings-font",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "avenir next",
    "avenir",
    "segoe ui",
    "helvetica neue",
    "helvetica",
    "Cantarell",
    "Ubuntu",
    "roboto",
    "noto",
    "arial",
    "sans-serif",
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <SiteMeta />
        <meta
          name="description"
          content="Dylan van Zanten, a digital creative with a passion for digital products that involves design, branding and code — loves to work in a cross-functional team towards a shared vision."
        />
        <meta property="og:locale" content="" />
        <meta property="og:site_name" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
