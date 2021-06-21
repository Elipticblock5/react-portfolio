import resume from "../../assets/files/Nathan B. Johnson resume.pdf";

function MyResume() {
  return (
    <section>
       <div className="resume-container">
        <a className="resume-download" href={resume} download>
          Download a copy of my resume here.
        </a>
      </div>
      <div className="tech-container">
        <h3 className="tech-title">Some of my technologies known:</h3>
        <ul>
          <li className="tech">HTML</li>
          <li className="tech">CSS</li>
          <li className="tech">JavaScript</li>
          <li className="tech">JQuery</li>
          <li className="tech">Bootstrap</li>
          <li className="tech">Web and REST API</li>
          <li className="tech">Node.js</li>
          <li className="tech">Express.js</li>
          <li className="tech">Object Oriented Design</li>
          <li className="tech">NoSQL, MongoDB, Mongoose</li>
          <li className="tech">Handlebars.js</li>
          <li className="tech">MySQL, Sequelize</li>
          <li className="tech">MERN stack development</li>
          <li className="tech">React</li>
        </ul>
      </div>
     
    </section>
  );
}

export default MyResume;