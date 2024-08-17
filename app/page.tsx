"use client";

import Camp from "./_componants/Camp";
import Features from "./_componants/Features";
import Footer from "./_componants/Footer"; // Corrected the spelling of "components"
import GetApp from "./_componants/GetApp";
import Guide from "./_componants/Guide";
import Hero from "./_componants/Hero";
import { useOpen } from "./_componants/OpenContext"; // Corrected the spelling of "components"

export default function Home() {
  const { isOpen } = useOpen();

  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
      <Footer />
    </>
  );
}

// <>
// {isOpen ? null : (
//   <>

//     <Footer />
//   </>
// )}
// </>
