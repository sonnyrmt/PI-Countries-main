import style from './Activity.module.css'

const Activity = (props) => {

  console.log(props.activity)

  return (
  <div className={style.activities_container}>
    <h2>Activities: </h2>
    <div className={style.cards_container}>
      { props.activity && props.activity.map( a => (
        <div key={a.id} className={style.activity_card}>
          <p className={style.activity_name}>{a.name}</p>
          <p>Difficulty: {a.difficulty}</p>
          <p>Duration: {a.duration} hours</p>
          <p>Season: {a.season}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Activity;