import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Projects";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [aboutSelect, setAboutSelect] = useState(true);
  const [portfolioSelect, setPortfolioSelect] = useState(false);
  const [contactSelect, setContactSelect] = useState(false);
  const [resumeSelect, setResumeSelect] = useState(false);

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
            <About></About>
          </>
        ) : (
          <></>
        )}
        {portfolioSelect ? (
          <>
            <Portfolio></Portfolio>
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
            <Resume></Resume>
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
