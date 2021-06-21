//based on module 20 project
import React from "react";

function Navigation(props) {
  const {
    aboutSelect,
    setAboutSelect,
    portfolioSelect,
    setPortfolioSelect,
    contactSelect,
    setContactSelect,
    resumeSelect,
    setResumeSelect
  } = props;

  return (
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <span
              className={`${!aboutSelect && "white"} ${
                aboutSelect && "navActive"
              }`}
              onClick={() => {
                setAboutSelect(true);
                setPortfolioSelect(false);
                setContactSelect(false);
                setResumeSelect(false);
              }}
            >
              My Story
            </span>
          </li>
          <li className="mx-2">
            <span
              className={`${!portfolioSelect && "white"} ${
                portfolioSelect && "navActive"
              }`}
              onClick={() => {
                setAboutSelect(false);
                setPortfolioSelect(true);
                setContactSelect(false);
                setResumeSelect(false);
              }}
            >
              My Portfolio
            </span>
          </li>
          <li className="mx-2">
            <span
              className={`${!contactSelect && "white"} ${
                contactSelect && "navActive"
              }`}
              onClick={() => {
                setAboutSelect(false);
                setPortfolioSelect(false);
                setContactSelect(true);
                setResumeSelect(false);
              }}
            >
              Contact Me Here
            </span>
          </li>
          <li className="mx-2">
            <span
              className={`${!resumeSelect && "white"} ${
                resumeSelect && "navActive"
              }`}
              onClick={() => {
                setAboutSelect(false);
                setPortfolioSelect(false);
                setContactSelect(false);
                setResumeSelect(true);
              }}
            >
              My Resume
            </span>
          </li>
        </ul>
      </nav>
  );
}

export default Navigation;