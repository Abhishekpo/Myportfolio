import "./About.css";
function About() {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>

      <p className="about-text">
        I'm a Computer Science graduate from the University of Maryland, College Park, who enjoys
        building software that solves real problems. I've worked on full-stack applications, real-time communication systems,
        and AI-powered tools using technologies like React, Node.js, Python, FastAPI, WebRTC, and REST APIs.
      </p>

      <p className="about-text">
        Outside of coding, I enjoy playing tennis and soccer.
        I also like meeting new people, making friends, and talking with people from different countries because
        I enjoy learning about different cultures, experiences, and ways of thinking.
      </p>
      <p className="about-text">
        I'm currently looking for software engineering opportunities where I can keep learning,
         contribute to meaningful products,
         and work with people from different backgrounds.
      </p>
    </section>
  );
}

export default About;