import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2026 Abhishek Poudel. All rights reserved.
      </p>

      <div className="footer-links">
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
    </footer>
  );
}

export default Footer;