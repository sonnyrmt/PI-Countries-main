import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to='/countries'>Enter</Link>
    </div>
  );
};

export default Landing;