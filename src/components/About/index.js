//based on module 20, About index.js file

import React from "react";

function MyStory() {
  return (
    <section className="about">
      <h1 id="about" className="px-1">My Story</h1>
      <br></br>
      <div className="px-1">
        <img
          src={require("../../assets/images/selfie.jpg").default}
          align="left"
          alt="selfie my-2"
          className="selfie px-1"
        ></img>
        <p className="px-1">
          <p>
          Hello, my name is Nate Johnson and I decided to make the move of 
          becoming a full-stack web developer after 10 years in the insurance industy.
          I have attended the University of Arizona Coding Boot Camp with
          the goal of working as a software developer. I enjoy technology, and 
          I am looking forwarding to using my past experiences in a new career 
          as a web developer. </p>
          


          <p>
          My prior experience has prepared me well for the attention to detail 
          required in software development, as well as, the team work and problem solving skills 
          required to be a great developer. I enjoy continuous learning and 
          staying up-to-date on current and emerging technologies.</p>
          
          <p>
          In my spare time I enjoy photography, traveling, and studying classical languages, literature, and past cultures of antiquity. Below you can view my LinkedIn page and GitHub page to learn a little bit more about me.  Thank you for visiting, and see the "Contact Me" section for information on how to reach out ot me. </p>
          </p>





        
      </div>
    </section>
  );
}

export default MyStory;
