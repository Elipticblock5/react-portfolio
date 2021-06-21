//used module 20 project photo port as template

import React, { useState } from "react";
//import Nav from "./components/Nav";
import MyStory from "./components/About";
import MyPortfolio from "./components/Projects";
import ContactForm from "./components/Contact";
import MyResume from "./components/Resume";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [aboutSelect, setAboutSelect] = useState(true);
  const [portfolioSelect, setPortfolioSelect] = useState(false);
  const [contactSelect, setContactSelect] = useState(false);
  const [resumeSelect, setResumeSelect] = useState(false);
//select states used select stated from module 20 photo port
  return (
    <div className="page-container">
    <div className="content-wrap">
      <Header
        aboutSelect={aboutSelect}
        setAboutSelect={setAboutSelect}
        portfolioSelect={portfolioSelect}
        setPortfolioSelect={setPortfolioSelect}
        contactSelect={contactSelect}
        setContactSelect={setContactSelect}
        resumeSelect={resumeSelect}
        setResumeSelect={setResumeSelect}
      ></Header>
      <main>
        {aboutSelect ? (
          <>
            <MyStory></MyStory>
          </>
        ) : (
          <></>
        )}
        {portfolioSelect ? (
          <>
            <MyPortfolio></MyPortfolio>
          </>
        ) : (
          <></>
        )}
        {contactSelect ? (
          <>
            <ContactForm></ContactForm>
          </>
        ) : (
          <></>
        )}
        {resumeSelect ? (
          <>
            <MyResume></MyResume>
          </>
        ) : (
          <></>
        )}
      </main>
    </div>
    <Footer></Footer>
  </div>
);
}


export default App;
