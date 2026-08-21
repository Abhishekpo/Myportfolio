import "./Skills.css";
function Skills() {
  const skills = {
    Languages: ["JavaScript", "Python", "Java", "SQL"],
    Frontend: ["React", "HTML", "CSS"],
    Backend: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
    Databases: ["MongoDB", "MySQL"],
    "AI / ML": [
      "OpenAI API",
      "Tesseract OCR",
      "RapidFuzz",
      "Ollama",
      "bge-m3",
      "Llama 3.2",
      "RAG",
    ],
    Tools: ["Git", "Docker", "Linux"],
  };

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-card" key={category}>
            <h3>{category}</h3>

            <div className="skill-list">
              {items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;