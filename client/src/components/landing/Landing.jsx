import React from "react";
import { Link } from "react-router-dom";
import style from './Landing.module.css'

const Landing = () => {
  return (
    <div className={style.main_container}>
      <h1 className={style.title}><mark>Maps</mark></h1>
      <p className={style.parrafal}>
      Search, filter and sort the 250 countries we have,<br /> you can even create activities for them.
      </p>
      <Link className={style.link} to='/countries'>
        <h2>Explore</h2>
      </Link>
    </div>
  );
};

export default Landing;