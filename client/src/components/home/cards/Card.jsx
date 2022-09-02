import style from './Card.module.css';

const Card = (props) => {
  let currencie = Object.keys(props.curr).toString().slice(0,3);

  return (
    <div id={props.ID} className={style.country_container}>
      <div className={style.flag_container}>
        <img src={props.img} alt="country_flag" />
      </div>
      <div className={style.infoContainer}>
        <div className={style.circle_data}>
          <div>
          <span className={style.country}>{props.id}</span>
          </div>
          <div>
          <span className={style.curr}>{currencie}</span>
          </div>
        </div>
      <div className={style.name_continent}>
        <h3>{props.name}</h3>
        <h4>{props.continent}</h4>
      </div>
      <div className={style.flag_circle}>
        <span>{props.flag}</span>
      </div>
      </div>
    </div>
  )
};

export default Card;