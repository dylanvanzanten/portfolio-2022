import React, { useEffect, useRef } from "react";

import Head from "next/head";

// Components
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import CaseTeaser from "../components/CaseTeaser/CaseTeaser";
import ContactTeaser from "../components/ContactTeaser/ContactTeaser";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !headerRef.current) return;

      if (window.scrollY >= heroRef.current.offsetHeight) {
        headerRef.current.classList.add("header--sticky");
      } else {
        headerRef.current.classList.remove("header--sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title></title>
      </Head>
      <Header innerRef={headerRef} />
      <Hero innerRef={heroRef} />
      <div className="container" data-container-size="l">
        <CaseTeaser
          caseTitle={"CoBuurt"}
          caseColor={"green"}
          caseLink={"/projects/cobuurt"}
        />
        <CaseTeaser caseTitle={"Nu Wonen"} caseColor={"red"} />
        <CaseTeaser caseTitle={"Nu Wonen"} caseColor={"blue"} />
        <CaseTeaser caseTitle={"Nu Wonen"} caseColor={"green"} />

        <section
          className="section-content"
          style={{ ["--span"]: 7, ["--start"]: 1 }}
          data-span="7"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            modi rem architecto labore, voluptate ducimus sapiente, nihil
            voluptates, facere amet excepturi nostrum voluptatibus provident.
            Deserunt quaerat culpa ipsum aspernatur beatae.
          </p>
        </section>
        <section
          className="section-content"
          style={{ ["--span"]: 12, ["--start"]: 1 }}
          data-span="12"
        >
          <ContactTeaser />
        </section>
      </div>
      <Footer />

      <script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        async
      ></script>
      <script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        async
      ></script>
    </>
  );
}
