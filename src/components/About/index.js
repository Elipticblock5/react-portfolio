import React from 'react'
import coverImage from "../../assets/images/selfie.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Nate Johnson</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Placeholder text, placeholder text
      </p>
      </div>
    </section>
  )
}

export default About
