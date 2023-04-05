import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>Hi I'm Arun Kumar Kadari</h1>
        <p className="description">
          {" "}
          Fullstack developer with 8 years of experience and sound knowledge in
          web technologies.
        </p>
        <div className="skill-container">
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
          <span className="skill">Reactjs</span>
          <span className="skill">Nodejs</span>
          <span className="skill">Expressjs</span>
          <span className="skill">Mongo DB</span>
          <span className="skill">Postgres</span>
          <span className="skill">Material UI</span>
        </div>
      </div>
      <div className="projects-container">
        <div className="project">
          <h2> Calendar </h2>
          <p className="project-description">
            A simple calendar application based on react with great visual
            asthetics
          </p>
          <span className="link-box">
            <a href="https://github.com/arunkumar413/Calendar"> preview </a>
          </span>
          <span className="link-box">
            <a href="https://github.com/arunkumar413/Calendar"> github </a>
          </span>
        </div>
        <div className="project">
          <h2> Pradarshana </h2>
          <p className="project-description">
            A web based presentation tool with extensible features. Uses react
          </p>
          <span className="link-box">
            <a href="https://arunkumar413.github.io/pradarshana/"> preview </a>
          </span>
          <span className="link-box">
            <a href="https://github.com/arunkumar413/pradarshana"> github </a>
          </span>
        </div>
        <div className="project">
          <h2> Servonk Settings</h2>
          <p className="project-description">
            A beautiful web based page to manage the settings of servo based web
            browser.
          </p>
          <span className="link-box">
            <a href="https://arunkumar413.github.io/servonk_settings_page/">
              {" "}
              preview{" "}
            </a>
          </span>
          <span className="link-box">
            <a href="https://github.com/arunkumar413/servonk_settings_page">
              {" "}
              github{" "}
            </a>
          </span>
        </div>
        <div className="project">
          <h2> Tippani</h2>
          <p className="project-description">
            Tippani is a simple and minimal plain text based notes app. This
            tool can be used for organizing to-dos,ideas, convert formattted
            text to plain text etc,.
          </p>
          <span className="link-box">
            <a href="https://arunkumar413.github.io/tippani/"> preview </a>
          </span>
          <span className="link-box">
            <a href="https://github.com/arunkumar413/tippani"> github </a>
          </span>
        </div>
      </div>
    </div>
  );
}
