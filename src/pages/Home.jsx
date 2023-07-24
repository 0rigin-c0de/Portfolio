import React, { useState, useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import Header from "../components/Header/Navbar";
import Homepage from "../components/Homepage/Hompage";
import Aboutpage from "../components/Aboutpage/Aboutpage";
import Skills from "../components/Skills/Myskills";
import Projectlist from "../components/Projectlist/Projectlist";
import Contactpage from "../components/Contactpage/Contactpage";
import "../App.css";
import arrow from "../Images/arrow.png";

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loaderCss">
          <Triangle
            height="120"
            width="120"
            color="#ffd900"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <Header />
          <Homepage />
          <Aboutpage />
          <Skills />
          <Projectlist />
          <Contactpage />
          {showScrollButton && (
            <div onClick={scrollToTop} className="scroll-to-top">
              <img src={arrow} alt="Scroll to top" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
