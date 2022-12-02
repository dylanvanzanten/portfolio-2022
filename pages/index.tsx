/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import CaseTeaser from "../components/CaseTeaser/CaseTeaser";

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
      <div className="container" data-container-size="l">
        <CaseTeaser caseTitle={"CoBuurt"} caseColor={"green"} />
        <CaseTeaser caseTitle={"Nu Wonen"} caseColor={"red"} />
        <CaseTeaser caseTitle={"Nu Wonen"} caseColor={"blue"} />
        <CaseTeaser caseTitle={"Nu Wonen"} caseColor={"green"} />
      </div>
      <div className="container" data-container-size="l">
        <section
          className="section-content"
          style={{ ["--span"]: 7, ["--start"]: 2 }}
          data-span="7"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            modi rem architecto labore, voluptate ducimus sapiente, nihil
            voluptates, facere amet excepturi nostrum voluptatibus provident.
            Deserunt quaerat culpa ipsum aspernatur beatae.
          </p>
        </section>
      </div>

      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
}
