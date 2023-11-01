import "./index.css";

import myImage from "./IMG-5032.jpg";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={myImage} alt="Tarik Kurtanovic"></img>;
}

function Intro() {
  return (
    <div>
      <p>
        I am a skilled front-end developer with expertise in JavaScript and
        React. I am passionate about creating dynamic and interactive web
        experiences. With a strong foundation in these technologies, I am always
        eager to learn and adapt to new technologies and frameworks, ensuring
        that I stay up-to-date with the latest trends in the industry. My
        portfolio showcases my ability to build responsive and user-friendly web
        applications that provide a seamless and engaging user experience.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
          key={skill}
        />
      ))}
    </div>
  );
}

function Skill({ color, level, skill }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "advanced" && "💪"}
        {level === "intermediate" && "💥"}
      </span>
    </div>
  );
}

export default App;
