import "./Projects.css";

const projects = [
  {
    title: "AI-Powered Alcohol Label Verification",
    tech: "Python • FastAPI • React • Tesseract OCR • RapidFuzz",
    description:
      "Full-stack alcohol label verification application built for a U.S. Department of the Treasury/TTB take-home assessment. It uses OCR, regex extraction, normalization, and fuzzy matching to validate compliance information.",
    metrics: [
      "Validates 5 compliance fields",
      "2–3 second processing time per label",
      "Single and batch uploads",
    ],
    github: "https://github.com/Abhishekpo/Alcohol_label_Verifier",
    demo: "https://alcohol-label-verifier-1.onrender.com",
  },
  {
    title: "Real-Time Video Calling App",
    tech: "React • Node.js • Express.js • WebRTC • Socket.IO",
    description:
      "Peer-to-peer video communication platform with a custom signaling server for exchanging SDP offers and ICE candidates.",
    metrics: [
      "2–4 concurrent peer connections",
      "3–5 second average call setup",
      "Tested with 20 users",
    ],
    github: "https://github.com/Abhishekpo/My-videocall-App",
    demo: "https://videocallfrontend-1se9.onrender.com/",
  },
  {
    title: "LectureRAG Assistant",
    tech: "Python • Ollama • bge-m3 • Llama 3.2",
    description:
      "Local Retrieval-Augmented Generation assistant that uses vector embeddings and cosine similarity to retrieve relevant lecture transcript sections.",
    metrics: [
      "Indexed 10–15 lecture transcripts",
      "Top 3 semantic retrieval",
      "2–4 second retrieval time",
    ],
    github: "https://github.com/Abhishekpo/LectureRAG-Assistant",
    demo: null,
  },
  {
    title: "AI Conversational Assistant",
    tech: "React • Node.js • MongoDB • OpenAI API",
    description:
      "Full-stack conversational AI application with persistent chat sessions, conversation history, REST APIs, and responsive message rendering.",
    metrics: [
      "1–2 second response time",
      "Tested with 100+ prompts",
      "Persistent conversation history",
    ],
    github: "https://github.com/Abhishekpo/My_ChatGpt",
    demo: "https://my-chatgptfrontend.onrender.com/",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <p className="projects-label">My Work</p>
        <h2>Featured Projects</h2>

        <p>
          A selection of projects focused on full-stack development, real-time
          communication, and AI-powered software.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-content">
              <h3>{project.title}</h3>

              <p className="project-tech">{project.tech}</p>

              <p className="project-description">
                {project.description}
              </p>

              <ul className="project-metrics">
                {project.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </div>

            <div className="project-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-button secondary"
              >
                GitHub
              </a>

              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-button primary"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;