import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  let currency = Object.keys(props.curr).toString().slice(0, 3);

  return (
    <div id={props.ID} className={style.country_container}>
      <div className={style.flag_container}>
        <div className={style.btn_container}>
          <Link to={`/countries/${props.id}`}>
            <button className={style.more_info}>✚</button>
          </Link>
        </div>
        <img src={props.img} alt="country_flag" />
      </div>
      <div className={style.infoContainer}>
        <div className={style.name_country}>
          <h3>{props.name}</h3>
        </div>
        <div className={style.circle_data}>
          <div>
            <span className={style.country}>{props.id}</span>
          </div>
          <div>
            <span className={style.curr}>Currency · {currency}</span>
          </div>
        </div>

        <div className={style.flag_circle}>
          <div className={style.continent_info}>
            <label htmlFor="continent">@Continent:</label>
            <p>
              <span className={style.arrow}>↳</span> {props.continent}
            </p>
          </div>
          <span className={style.flag}>{props.flag}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
