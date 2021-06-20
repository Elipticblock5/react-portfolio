import React, { useState } from "react";

function ProjectsComp() {
  const [projects] = useState([
    {
      name: "AZ 4 Locals",
      deployedLink: "https://agile-cliffs-08028.herokuapp.com/",
      githubLink: "https://github.com/marcysko/az4locals",
    },
  
    {
      name: "Weather Dashboard",
      deployedLink: "https://elipticblock5.github.io/hw06weather/",
      githubLink: "https://github.com/Elipticblock5/hw06weather",
    },
   
    {
      name: "Nate-Budget-Tracker",
      deployedLink: "https://nate-budget-tracker.herokuapp.com/",
      githubLink: "https://github.com/Elipticblock5/hw19pwa",
    },
    {
        name: "Javascript Quiz APP",
        deployedLink: "https://elipticblock5.github.io/hw04WebAPI/",
        githubLink: "https://github.com/Elipticblock5/hw04WebAPI",
      },
    {
      name: "MongoDB Social Media Backend",
      deployedLink: "https://www.youtube.com/watch?v=X5d1MYNaAUM",
      githubLink: "https://github.com/Elipticblock5/hw18mongo",
    },
  ]);

  return (
    <div>
      <h1 className="project-list-title">Previous Projects:</h1>
      <div className="flex-row project-list">
        {projects.map((project, i) => (
          <div className="mx-1 project" key={project.name}>
            <img
              src={require(`../../assets/images/${i}.png`).default}
              alt={project.name}
              className="img-thumbnail"
            />
            <h3 className="block">{project.name}</h3>
            <a className="block" href={project.deployedLink}>Deployed Link</a>
            <a className="block" href={project.githubLink}>GitHub Repository</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsComp;