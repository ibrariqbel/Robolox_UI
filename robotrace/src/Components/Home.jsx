import React, { useEffect, useState } from "react";
import Card from "../ShareComponents/Card";
import axios from "axios";
import "./Home.css";

const Home = (props) => {
  const [count, setcont] = useState(0);
  const [enableDarkMood, setEnableDarkMood] = useState(false);

  const incremenHandel = () => {
    setcont((count) => count + 1);
  };
  const decrementHandel = () => {
    setcont((count) => count - 1);
  };
  const enableDarkMoodHandler = () => {
    setEnableDarkMood(!enableDarkMood);
  };

  return (
    <div className={enableDarkMood ? "container-dark" : "container-light"}>
      welcome {props.user}
      <Card user={props.user} />
      the value of count is:"{count}"
      <button onClick={incremenHandel}>Increment</button>:
      <button onClick={decrementHandel}> Decerement</button>
      <br />
      <button onClick={enableDarkMoodHandler}>
        {enableDarkMood ? "Enable Light Mood" : "Enable Dark Mood"}
      </button>
    </div>
  );
};

export default Home;
