import resume from "../../assets/files/Nathan B. Johnson resume.pdf";

function Resume() {
  return (
    <section>
      <div className="proficiency-container">
        <h3 className="proficiency-title">A Sample of my Proficiencies:</h3>
        <ul>
          <li className="proficiency">HTML</li>
          <li className="proficiency">CSS</li>
          <li className="proficiency">JavaScript</li>
          <li className="proficiency">JQuery</li>
          <li className="proficiency">Bootstrap</li>
          <li className="proficiency">Web and REST API</li>
          <li className="proficiency">Node.js</li>
          <li className="proficiency">Express.js</li>
          <li className="proficiency">Object Oriented Design</li>
          <li className="proficiency">NoSQL, MongoDB, Mongoose</li>
          <li className="proficiency">Handlebars.js</li>
          <li className="proficiency">MySQL, Sequelize</li>
          <li className="proficiency">MERN stack development</li>
          <li className="proficiency">React</li>
        </ul>
      </div>
      <div className="resume-container">
        <a className="resume-download" href={resume} download>
          Download a copy of my resume here.
        </a>
      </div>
    </section>
  );
}

export default Resume;