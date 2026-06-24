import "./styles.css";
import { accordionData } from "./accordionData.js";
import { useState } from "react";

export default function App() {
  const [currIndex, setCurrIndex] = useState(null);
  return (
    <div className="App">
      <h1>Accordion - FAQ Section</h1>
      {accordionData.map((item, index) => {
        return (
          <div key={index}>
            <h3
              className={`question ${
                index === currIndex ? "active-question" : ""
              }`}
              onClick={() => setCurrIndex(index === currIndex ? null : index)}
            >
              {item.question}
            </h3>
            <p>{index === currIndex && item.answer}</p>
          </div>
        );
      })}
    </div>
  );
}
