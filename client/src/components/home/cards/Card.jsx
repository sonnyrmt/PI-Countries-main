import style from './Card.module.css';

const Card = (props) => {


  return (
    <div id={props.ID} className={style.country_container}>
      <div className={style.flag_container}>
        <img src={props.img} alt="country_flag" />
      </div>
      <div className={style.infoContainer}>
        <h3>{props.name}</h3>
        <h4>{props.continent}</h4>
      </div>
    </div>
  )
};

export default Card;