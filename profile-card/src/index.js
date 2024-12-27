import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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

  const Skill = (props) => {
    return ( 
        <div className="skill" style={{ backgroundColor: props.color }}>
          <span>{props.skill}</span>
          <span>{props.emoji}</span>
        </div>
    )
  }

  const SkillList = () => {
    return (
      <div className="skill-list">
        <Skill color="yellow" skill="js" emoji="🫡"/>
        <Skill color="red" skill="python" emoji="🥲"/>
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
