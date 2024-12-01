import React, { useState } from "react";

const Skills = ({ skills, onAddSkill, onAddCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const handleAddSkill = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (selectedCategory === "Autre" && newCategory.trim()) {
      onAddCategory(newCategory); // Ajouter la nouvelle catégorie
      onAddSkill(newCategory, newSkill); // Ajouter la compétence à cette catégorie
      setNewCategory(""); // Réinitialiser le champ de nouvelle catégorie
      setNewSkill(""); // Réinitialiser le champ de nouvelle compétence
    } else if (selectedCategory && newSkill.trim()) {
      onAddSkill(selectedCategory, newSkill);
      setNewSkill(""); // Réinitialiser le champ de nouvelle compétence
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    if (value !== "Autre") {
      setNewCategory(""); // Réinitialiser si une catégorie existante est sélectionnée
    }
  };

  return (
    <section id="skills" style={{ padding: "20px" }}>
      <h2>Compétences</h2>
      <ul>
        {Object.keys(skills).map((category, index) => (
          <li key={index}>
            <strong>{category}</strong>: {skills[category].join(", ")}
          </li>
        ))}
      </ul>

      {/* Formulaire pour ajouter une nouvelle compétence */}
      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h4>Ajouter une compétence</h4>
        <form onSubmit={handleAddSkill}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            >
              <option value="">-- Sélectionner une catégorie --</option>
              {Object.keys(skills).map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
              <option value="Autre">Autre</option>
            </select>

            {selectedCategory === "Autre" && (
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Nouvelle catégorie"
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
              />
            )}

            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Nouvelle compétence"
              style={{
                flex: 2,
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "10px 20px",
            }}
          >
            Ajouter
          </button>
        </form>
      </div>
    </section>
  );
};

export default Skills;
