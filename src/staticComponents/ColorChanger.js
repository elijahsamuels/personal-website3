import React from "react";
import "./ColorChanger.css";

const ColorChanger = (string) => {
  const safeString = string || "";

  const randomLetterIndex = Math.floor(Math.random() * safeString.length);

  const stringWithColorLetter = safeString.split("").map((letter, index) => (
    <span
      key={index}
      style={{ color: index === randomLetterIndex ? "red" : "white" }}>
      {letter}
    </span>
  ));

  return <div>{stringWithColorLetter}</div>;
};

export default ColorChanger;
