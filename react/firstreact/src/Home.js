import React, { useState } from "react";
import { Test } from "./Test";
import "./Home.css";
// with JSX
const Home = () => {
  // state

  const [showName, setShowName] = useState(true);
  console.log("show", showName);

  return (
    <div className="test">
      <button
        onClick={() => {
          return setShowName(true);
        }}
      >
        Show Name
      </button>
      <button
        onClick={() => {
          return setShowName(false);
        }}
      >
        Hide Name
      </button>

      <h1> {showName ? "FirstName" : ""}</h1>
    </div>
  );
};

// without jsx

// syntax without jsx using React.createElement()
// React.createElement('tag_name', null, 'text which you want to show')
// const Home = () => {
//   return React.createElement("h2", null, "this is heading 2 tag");
// };

// const Home = () => {
//   return React.createElement(
//     "h1",
//     null,
//     React.createElement("p", null, "this is para")
//   );
// };

export default Home;

// class => className
// onclick => onClick
// onchange = onChange
// ternery operator

// expression or condition ? "text show when condition true" : "text show when condition false";
