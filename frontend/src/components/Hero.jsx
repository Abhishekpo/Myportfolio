import profileImg from "../assets/profile.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-intro">Hi, I'm</p>

        <h1>Abhishek Poudel</h1>

        <h2>Software Engineer | Full-Stack Developer</h2>

        <p className="hero-description">
          I build full-stack applications, real-time systems, and AI-powered
          software using React, Node.js, Python, and FastAPI.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>

          <a
            href="/Abhishek_Poudel_Resume.pdf"
            className="btn secondary-btn"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>

        <div className="hero-links">
          <a
            href="https://github.com/Abhishekpo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/apoudel1588/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:poudelabhishek24@gmail.com">
            Email
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <img
          src={profileImg}
          alt="Abhishek Poudel"
          className="profile-image"
        />
      </div>
    </section>
  );
}

export default Hero;