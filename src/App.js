//import logo from './logo.svg';
import './App.css';
import Header from './Composant/Header';
import About from './Composant/About';
import Skills from './Composant/Skills';
import Experience from './Composant/Experience';
import Projects from './Composant/Projects';
import Footer from './Composant/Footer';
import photo from './ELBAZ.jpg'
import React, { useState } from "react";

function App() {
  const [projects, setProjects] = useState( [
    {
      name: "OCR pour Thèses Doctorales",
      description: "Développement d’un modèle OCR pour numériser et extraire des informations des pages de garde des thèses."
    },
    {
      name: "Prédiction des Revenus",
      description: "Création d'un modèle de machine learning pour prédire la diminution des revenus des produits."
     
      
    }
  ]);
  const addProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };
  

  const [experiences, setExperiences] = useState( [
    {
      title: "Data Scientist",
      company: "TechCorp",
      dates: "Jan 2020 - Dec 2023",
      tasks: [
        "Réalisé un modèle de prédiction des ventes avec une précision de 92%.",
        "Amélioré les performances de traitement des données de 30%.",
        "Collaboré avec des équipes cross-fonctionnelles pour intégrer des solutions ML dans le workflow."
      ]
    },
    {
      title: "Intern - Machine Learning",
      company: "Innovate AI",
      dates: "Jun 2019 - Dec 2019",
      tasks: [
        "Géré l'analyse des données clients pour identifier les tendances.",
        "Développé un outil d'analyse de texte pour la classification des documents.",
        "Participé à des ateliers avec les parties prenantes pour définir les besoins du projet."
      ]
    }
  ]);
  const addExperience = (newExperience) => {
    setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
  };

  const  [skills, setSkills] = useState({
    "Langages de programmation": ["Python", "JavaScript", "C"],
    "Outils & frameworks": ["TensorFlow", "React", "Google Analytics"],
    "Soft Skills": ["Communication", "Gestion de projet", "Résolution de problèmes"],
    "Autres compétences": ["SEO", "Rédaction de contenu", "Analyse de données"]
  });

  const addCategory = (newCategory) => {
    if (!newCategory.trim() || skills[newCategory]) return; // Évite les doublons
    setSkills((prevSkills) => ({
      ...prevSkills,
      [newCategory]: [] // Initialise une catégorie vide
    }));
  };

  const addSkill = (category, newSkill) => {
    if (!newSkill.trim()) return;

    setSkills((prevSkills) => ({
      ...prevSkills,
      [category]: [...(prevSkills[category] || []), newSkill]
    }));
  };

  const aboutProps = {
    name: "Yassmin Elbaz",
    role: "Data Scientist",
    experience: "3 ans",
    domain: "l'analyse des données et le machine learning",
    projects: ["un modèle de prédiction des revenus", "un système OCR pour les thèses"],
    skills: ["Python", "TensorFlow", "Analyse de données", "Machine Learning"]
  };
  
  return (
    <>
    <Header />
    <About {...aboutProps} photo={photo}  />
    <Skills skills={skills} onAddSkill={addSkill} onAddCategory={addCategory}/>
    <Experience  experiences={experiences} onAddExperience ={addExperience }  />
    <Projects projects={projects} onAddProject ={ addProject }  />
    <Footer/>
    

    </>
  );
}

export default App;
