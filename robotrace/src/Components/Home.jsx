import React, { useContext, useState } from "react";
import Card from "../ShareComponents/Card";

import "./Home.css";
import { context } from "../Context/Store";

const Home = () => {
  const {username} = useContext(context)
 
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
      welcome {username} to the home page
      <Card username={username}/>
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
