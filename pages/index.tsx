// Libs
import React, { useEffect, useRef } from "react";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";

// Components
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import CaseTeaser from "../components/CaseTeaser/CaseTeaser";
import ContactTeaser from "../components/ContactTeaser/ContactTeaser";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const sectionContent = useTranslations("sectionContent");

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
        <title>Portfolio | 🦸🏻‍♂️ Dylan van Zanten</title>
      </Head>
      <Header innerRef={headerRef} />
      <Hero innerRef={heroRef} />
      <div
        data-grid
        data-container-size="l"
        data-cols="12"
        className="container"
      >
        <CaseTeaser
          caseTitle={"CoBuurt"}
          caseColor={"green"}
          caseLink={"/projects/cobuurt"}
        />
        <CaseTeaser caseTitle={"Nu Wonen"} caseColor={"red"} />
        <CaseTeaser caseTitle={"Nu Wonen"} caseColor={"blue"} />
        <CaseTeaser caseTitle={"Nu Wonen"} caseColor={"green"} />

        <section className="section-content">
          <p>{sectionContent("content")}</p>
        </section>
        <section className="section-content">
          <ContactTeaser />
        </section>
      </div>
      <Footer />
    </>
  );
};

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}

export default Home;
