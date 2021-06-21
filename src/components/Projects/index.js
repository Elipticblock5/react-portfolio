//based on mudle 20 photolist components, updated for my projects

import React, { useState } from "react";

function ProjectsCompleted() {
  const [projects] = useState([
    
    {
      name: "Javascript Quiz APP",
      desc: "A fun and silly online quiz game with local storage for high scores",
      tech: "Tech Used: HTML, CSS, Javascript",
      projectLink: "https://elipticblock5.github.io/hw04WebAPI/",
      githubLink: "https://github.com/Elipticblock5/hw04WebAPI",
    },
    
    
   
  
    {
      name: "Weather Dashboard",
      desc: "A weather app using openweather API, and showing search history",
      tech: "Tech Used: HTML, CSS, Bootsrap, JQuery, API",
      projectLink: "https://elipticblock5.github.io/hw06weather/",
      githubLink: "https://github.com/Elipticblock5/hw06weather",
    },

    {
      name: "AZ 4 Locals",
      desc: "An interactive blog made with custom login",
      tech: "Tech Used: HTML, CSS, Node, Express, Handlebars.js",
      projectLink: "https://agile-cliffs-08028.herokuapp.com/",
      githubLink: "https://github.com/marcysko/az4locals",
    },

    {
      name: "MongoDB Social Media Backend",
      desc: "A backend environment for a social media webiste",
      tech: "Tech Used: Node, MongoDB, Mongoose, Express",
      projectLink: "https://www.youtube.com/watch?v=X5d1MYNaAUM",
      githubLink: "https://github.com/Elipticblock5/hw18mongo",
    },
   
    {
      name: "Nate-Budget-Tracker",
      desc: "A progressive web app with online and offline capability",
      tech: "Tech Used: HTML, CSS, Express, Mongoose, MongoDB, Node, Heroku",
      projectLink: "https://nate-budget-tracker.herokuapp.com/",
      githubLink: "https://github.com/Elipticblock5/hw19pwa",
    },
  
  
  ]);

  return (
    <div>
      <h1 className="projects-completed-title">Some of my projects from basic to more advanced:</h1>
      <div className="flex-row project-completed">
        {projects.map((project, i) => (
          <div className="mx-1 project" key={project.name}>
            <img
              src={require(`../../assets/images/${i}.png`).default}
              alt={project.name}
              className="img-thumbnail"
            />
            <h3 className="block">{project.name}</h3>
            <h4 className="block">{project.desc}</h4>
            <h4 className="block">{project.tech}</h4>
            <a className="block" href={project.projectLink}>Project Link</a>
            <a className="block" href={project.githubLink}>GitHub Link</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsCompleted;