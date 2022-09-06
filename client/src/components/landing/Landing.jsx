import React from "react";
import { Link } from "react-router-dom";
import style from './Landing.module.css'

const Landing = () => {
  return (
    <div className={style.main_container}>
      <h1 className={style.title}><mark>Maps</mark></h1>
      <Link className={style.link} to='/countries'>
        <h2>Enter</h2>
      </Link>
    </div>
  );
};

export default Landing;