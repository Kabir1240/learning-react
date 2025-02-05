import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs}/>
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem key={el.title} currOpen={currOpen} onOpen={setCurrOpen} num={i} title={el.title} text={el.text}>
          {el.text}
        </AccordionItem>
      ))}
    </div>
  )
}

const AccordionItem = ({ num, title, children, currOpen, onOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = currOpen === num;

  const handleToggle = () => {
    // setIsOpen((isOpen) => !isOpen)
    onOpen(isOpen ? null : num)
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <p className="number">{num > 9 ? num + 1 :`0${num + 1}`}</p>
      <p className="text">{title}</p>
      <p className="icon" onClick={handleToggle}>{isOpen ? "-" : "+"}</p>
      {isOpen && (
          <div className="content-box">{children}</div>
        )}
    </div>
  )
}