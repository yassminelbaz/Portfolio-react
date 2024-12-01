import React, { useState } from "react";

const Projects = ({ projects, onAddProject }) => {
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
  });

  const handleAddProject = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (newProject.name.trim() && newProject.description.trim()) {
      onAddProject(newProject);
      setNewProject({ name: "", description: "" }); // Réinitialise le formulaire
    }
  };

  return (
    <section id="projects" style={{ padding: "20px" }}>
      <h2>Projects</h2>

      {/* Liste des projets */}
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h4>{project.name}</h4>
          <p>{project.description}</p>
        </div>
      ))}

      {/* Formulaire d'ajout */}
      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ddd",
          padding: "20px",
        }}
      >
        <h3>Ajouter un projet</h3>
        <form onSubmit={handleAddProject}>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Nom du projet"
              value={newProject.name}
              onChange={(e) =>
                setNewProject({ ...newProject, name: e.target.value })
              }
              style={{ flex: 1, padding: "10px" }}
            />
            <input
              type="text"
              placeholder="Description"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
              style={{ flex: 2, padding: "10px" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px 20px" }}>
            Ajouter projet
          </button>
        </form>
      </div>
    </section>
  );
};

export default Projects;
