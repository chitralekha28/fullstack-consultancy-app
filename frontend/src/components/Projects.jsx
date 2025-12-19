import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="projects" id="projects">

      <h2>Our Projects</h2>

      <div className="project-grid">
        {projects.length === 0 && <p>No projects available</p>}

        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            {/* Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
            )}

            {/* Name */}
            <h4>{project.name}</h4>

            {/* Description */}
            <p>{project.description}</p>

            {/* Dummy Button */}
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
