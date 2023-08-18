import React from "react";
import Skip from "../components/Skip";
import Header from "../components/Header";
import Main from "../components/Main";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomeView = () => {
    return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <AboutMe />
            <Experience />
            <Work />
            <Contact />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;