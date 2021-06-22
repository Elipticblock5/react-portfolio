import resume from "../../assets/files/Nathan B. Johnson resume.pdf";

function MyResume() {
  return (
    <section>
        <div className="resume-container"><center>
        <a className="resume-download" href={resume} download>
          <center>Download a copy of my resume here.</center>
        </a>
        <img
          src={require("../../assets/images/Resume.PNG").default}
          align="center"
          alt="resumePic"
          className="flex-row resume"
        ></img>
        </center>
        </div>
        <div>
          <br></br>
       
      </div>
       
      <div className="flex-row tech-container">
        <h4 className="tech-title">Proficient at the following technologies:</h4>
        <br></br>
        
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