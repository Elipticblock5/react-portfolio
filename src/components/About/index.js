import React from "react";

function About() {
  return (
    <section className="about">
      <h1 id="about" className="px-1">About Nate Johnson</h1>
      <div className="px-1">
        <img
          src={require("../../assests/images/selfie.jpg").default}
          alt="self-portrait my-2"
          className="self-portrait px-1"
        ></img>
        <p className="px-1">
          Hello, my name is Nate Johnson and I decided to make the move of 
          becoming a web developer after 10 years in the insurance industy.
          I have attended the University of Arizona Coding Boot Camp with
          the goal of working as a software developer. 
          
          My prior experience has prepared me well for the attention to detail 
          required in software development and the team work and problem solving skills 
          required to be a great developer. I also enjoy continuous learning and 
          staying up-to-date on current technologies.

          In my spare time I enjoy traveling, and studying history and past cultures. 






        </p>
      </div>
    </section>
  );
}

export default About;
