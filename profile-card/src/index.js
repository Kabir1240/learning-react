import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    name:"python",
    level:"advanced",
    color:"yellow"
  },
  {
    name:"React",
    level:"beginner",
    color:"green"
  },
  {
    name:"git",
    level:"intermediate",
    color:"blue"
  },
]

function App() {
  const Avatar = () => {
    return <img className="avatar" src="./my_picture.jpg" alt="me" />;
  };

  const Intro = () => {
    return (
      <div>
        <h1 className="h1">Kabir Kashif</h1>
        <p className="body">hey, im a cool programmer</p>
      </div>
    )
  }

  const Skill = ({ name, color, level }) => {
    const getSkillEmoji = () => {
      if (level === "advanced") return "🫡";
      if (level === "intermediate") return "🙂";
      if (level === "beginner") return "🌱";
      return "❓"; // Default emoji for unknown levels
    };

    return (
        <div className="skill" style={{ backgroundColor: color }}>
          <span>{name}</span>
          <span>{getSkillEmoji}</span>
        </div>
    )
  }

  const SkillList = () => {
    return (
      <div className="skill-list">
        {skills.map((skill) => (
          <Skill color={skill.color} name={skill.name} level={skill.level}/>
        ))}
      </div>
    );
  };

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

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
