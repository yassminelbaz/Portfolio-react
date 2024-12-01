import React from 'react';

const About = ({ name, role, experience, domain, projects, skills, photo }) => {
  return (
    <section id="about" style={{ padding: '20px' }}>
      <h2>About Me</h2>
      <img 
          src={photo} 
          alt={`Portrait of ${name}`} 
          style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }} 
        />
        <h3>{name}</h3>
      <p>
        Je suis {name}, {role} avec {experience} d'expérience dans {domain}.
        J'ai travaillé sur des projets variés, allant de {projects[0]} à {projects[1]}, ce qui m'a permis de développer une expertise dans {skills.join(', ')}.
        Curieux et motivé, j'aime relever des défis et apprendre de nouvelles compétences pour continuer à évoluer dans mon domaine.
      </p>
    </section>
  );
};

export default About;
