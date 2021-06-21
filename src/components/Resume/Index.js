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
        <h4 className="tech-title">Some of my technology proficiencies:</h4>
        
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>Web and REST API</li>
          <li>Node.js</li>
        

          
          <li>Express.js</li>
          <li>Object Oriented Design</li>
          <li>NoSQL, MongoDB, Mongoose</li>
          <li>Handlebars.js</li>
          <li>MySQL, Sequelize</li>
          <li>MERN stack development</li>
          <li>React</li>
        </ul>
        
      </div>
     
    </section>
  );
}

export default MyResume;