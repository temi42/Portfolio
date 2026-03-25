import WelcomePopup from "./WelcomePopup";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      <WelcomePopup />

      {/* HEADER */}
      <header style={{
        background: "#ec71ba",
        color: "white",
        padding: "40px",
        textAlign: "center"
      }}>
        <h1>Temidayo Aiyeonegun</h1>
        <p>Computer Science Student | Data & Systems Analyst</p>
      </header>

      {/* ABOUT */}
      <section style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
        <h2>About Me</h2>
        <p>
          I am a third-year Computer Science student with a strong interest in applying data,
          algorithms, and computational thinking to solve real-world problems.
        </p>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
        <h2>Projects</h2>

        <div>
          <h3>Study Habits & Academic Performance Analysis</h3>
          <p>Analyzed relationships between study habits and grades using data visualization.</p>
          <a href="https://github.com/temi42/Study-Analysis" target="_blank">View Project</a>
        </div>

        <div>
          <h3>School Accessibility Analysis Tool</h3>
          <p>Evaluated stair-free routes to improve accessibility within a campus.</p>
          <a href="https://github.com/temi42/School-accessibility" target="_blank">View Project</a>
        </div>

        <div>
          <h3>Spam Message Detection System (In Progress)</h3>
          <p>Building a rule-based system in C++ to classify spam messages.</p>
          <a href="https://github.com/temi42/Spam-detector" target="_blank">View Project</a>
        </div>

      </section>

      {/* SKILLS */}
      <section style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
        <h2>Skills</h2>
        <p>
          Java, JavaScript, Python, SQL, C++, React, HTML <br />
          Data Structures, Algorithms, Data Analysis
        </p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
        <h2>Contact</h2>
        <p>
          GitHub: <a href="https://github.com/temi42" target = "blank"> Github </a> <br></br>
          Email: taiyeonegun@gmail.com
        </p>
      </section>

    </div>
  );
}

export default App;
