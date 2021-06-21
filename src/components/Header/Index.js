import Nav from "../Nav";

function Header(props) {
  const {
    aboutSelect,
    setAboutSelect,
    portfolioSelect,
    setPortfolioSelect,
    contactSelect,
    setContactSelect,
    resumeSelect,
    setResumeSelect,
  } = props;

  return (
    <header className="flex-row align-items">
      <h2>Nate Johnson</h2>
      <Nav
        aboutSelect={aboutSelect}
        setAboutSelect={setAboutSelect}
        portfolioSelect={portfolioSelect}
        setPortfolioSelect={setPortfolioSelect}
        contactSelect={contactSelect}
        setContactSelect={setContactSelect}
        resumeSelect={resumeSelect}
        setResumeSelect={setResumeSelect}
      ></Nav>
    </header>
  );
}

export default Header;