import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div className="section skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;