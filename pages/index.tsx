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

      <div className="container">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          modi rem architecto labore, voluptate ducimus sapiente, nihil
          voluptates, facere amet excepturi nostrum voluptatibus provident.
          Deserunt quaerat culpa ipsum aspernatur beatae.
        </p>
      </div>
    </>
  );
}
