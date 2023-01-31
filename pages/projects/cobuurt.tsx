import React, { useEffect, useRef } from "react";
import Head from "next/head";

// Components
import Header from "../../components/Header/Header";

const CoBuurt = () => {
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
      <p>CoBuurt project</p>
    </>
  );
};

export default CoBuurt;
