import Head from "next/head";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="" />
        <meta property="og:site_name" content="" />
      </Head>
      <Header />
      <Hero />

      <main></main>
    </>
  );
}
