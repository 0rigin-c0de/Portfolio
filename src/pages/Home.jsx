import React from "react";
import Header from "../components/Header/Navbar";
import Homepage from "../components/Homepage/Hompage";
import Aboutpage from "../components/Aboutpage/Aboutpage";
import Skills from "../components/Skills/Myskills";
import Projectlist from "../components/Projectlist/Projectlist";
import Contactpage from "../components/Contactpage/Contactpage";
function Home() {
  return (
    <div>
      <Header />
      <Homepage />
      <Aboutpage />
      <Skills />
      <Projectlist />
      <Contactpage />
    </div>
  );
}

export default Home;
