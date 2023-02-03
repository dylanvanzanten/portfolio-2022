// Libs
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import Head from "next/head";
import localFont from "@next/font/local";
import type { AppProps } from "next/app";

// Resources
import "../styles/_all.scss";
import nl from "../lang/nl.json";
import en from "../lang/en.json";

// Components
import SiteMeta from "../components/SiteMeta/SiteMeta";

const messages = {
  nl,
  en,
};

// Fonts
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
  variable: "--font-stack-base",
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
  variable: "--font-stack-headings",
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

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const { locale } = useRouter();

  return (
    <>
      <style jsx global>{`
        :root {
          --font-stack-base: ${markPro.style.fontFamily};
          --font-stack-headings: ${circularStd.style.fontFamily};
        }
      `}</style>
      <Head>
        <SiteMeta />
      </Head>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
}
