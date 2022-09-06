import style from "./Activity.module.css";

const Activity = (props) => {
  return (
    <div className={style.activities_container}>
      <h2>Activities: </h2>
      <div className={style.cards_container}>
        {props.activity && props.activity.length ? (
          props.activity.map((a) => (
            <div key={a.id} className={style.activity_card}>
              <p className={style.activity_name}>{a.name}</p>
              <div>
                <span className={style.separator}>~</span> Difficulty:
                <span className={style.result}> {a.difficulty}</span>
              </div>
              <div>
                <span className={style.separator}>~</span> Duration:
                <span>  {a.duration} hours</span>
              </div>
              <div>
                <span className={style.separator}>~</span> Season:
                <span> {a.season}</span>
              </div>
            </div>
          ))
        ) : (
          <div className={style.noActivity}>
            No activities created from this country
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity;
