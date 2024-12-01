import React, { useState } from "react";

const Experience = ({ experiences, onAddExperience }) => {
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    dates: "",
    tasks: []
  });
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setNewExperience({
        ...newExperience,
        tasks: [...newExperience.tasks, newTask.trim()]
      });
      setNewTask(""); // Réinitialiser le champ des tâches
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (
      newExperience.title.trim() &&
      newExperience.company.trim() &&
      newExperience.dates.trim() &&
      newExperience.tasks.length > 0
    ) {
      onAddExperience(newExperience);
      // Réinitialiser le formulaire
      setNewExperience({ title: "", company: "", dates: "", tasks: [] });
      setNewTask("");
    } else {
      alert("Veuillez remplir tous les champs et ajouter au moins une tâche.");
    }
  };

  return (
    <section id="experience" style={{ padding: "20px" }}>
      <h2>Experience</h2>

      {experiences.map((exp, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h4>{exp.title}</h4>
          <p>
            <strong>{exp.company}</strong> – {exp.dates}
          </p>
          <ul>
            {exp.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Formulaire pour ajouter une nouvelle expérience */}
      <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "20px" }}>
        <h3>Ajouter une expérience</h3>

        <form onSubmit={handleSubmit}>
          {/* Ligne pour Titre, Entreprise et Dates */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Titre du poste"
              value={newExperience.title}
              onChange={(e) => setNewExperience({ ...newExperience, title: e.target.value })}
              style={{ flex: 1, padding: "10px" }}
            />
            <input
              type="text"
              placeholder="Nom de l'entreprise"
              value={newExperience.company}
              onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
              style={{ flex: 1, padding: "10px" }}
            />
            <input
              type="text"
              placeholder="Dates (ex : Jan 2020 - Dec 2023)"
              value={newExperience.dates}
              onChange={(e) => setNewExperience({ ...newExperience, dates: e.target.value })}
              style={{ flex: 1, padding: "10px" }}
            />
          </div>

          {/* Ligne pour les tâches */}
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Ajouter une tâche"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              style={{ width: "98%", padding: "10px" }}
            />
            <button
              type="button"
              onClick={handleAddTask}
              style={{ marginTop: "10px", padding: "10px 20px" }}
            >
              Ajouter une tâche
            </button>
          </div>

          {/* Liste des tâches ajoutées */}
          {newExperience.tasks.length > 0 && (
            <ul style={{ marginBottom: "10px" }}>
              {newExperience.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          )}

          {/* Bouton pour soumettre l'expérience */}
          <button type="submit" style={{ padding: "10px 20px" }}>
            Ajouter l'expérience
          </button>
        </form>
      </div>
    </section>
  );
};

export default Experience;
