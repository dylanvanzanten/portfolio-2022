// Libs
import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";

// Interfaces
import IHome from "@/interface/IHome";

// Components
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import CaseTeaser from "@/components/CaseTeaser/CaseTeaser";
import ContactTeaser from "@/components/ContactTeaser/ContactTeaser";
import Footer from "@/components/Footer/Footer";

const Home = ({}: IHome) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolledUp, setIsScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !headerRef.current) return;

      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      if (currentScrollPos >= heroRef.current.offsetHeight) {
        headerRef.current.classList.add("header--sticky");
        headerRef.current.classList.remove("header--hide"); // Ensure header is not hidden when scrolling down inside the Hero component
      } else {
        headerRef.current.classList.remove("header--sticky");
      }
      if (
        isScrollingUp &&
        currentScrollPos > 20 &&
        !heroRef.current.contains(event?.target as Node)
      ) {
        headerRef.current.classList.add("header--hide");
      } else {
        headerRef.current.classList.remove("header--hide");
      }

      setIsScrolledUp(isScrollingUp && currentScrollPos - prevScrollPos > 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <Head>
        <title>Portfolio | 🦸🏻‍♂️ Dylan van Zanten</title>
      </Head>
      <Header innerRef={headerRef} isScrolledUp={isScrolledUp} />
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

        <section data-text className="section-content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            modi rem architecto labore, voluptate ducimus sapiente, nihil
            voluptates, facere amet excepturi nostrum voluptatibus provident.
            Deserunt quaerat culpa ipsum aspernatur beatae.
          </p>
        </section>
        <section className="section-content">
          <ContactTeaser />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
