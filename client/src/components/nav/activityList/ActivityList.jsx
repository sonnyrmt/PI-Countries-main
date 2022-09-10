

const ActivityList = (props) => {
  return (
    <>
      { props.act && !props.act.length ? 
        <option value="" hidden>No activities</option>
        : <option value="" hidden>Choose Activity</option>
      }
        <option value="">Reset</option>
      { props.act && props.act.map( a => {
        const uppercase = a.name[0].toUpperCase() + a.name.substring(1);
        return (
          <option key={a.ID} name="activity" value={uppercase}>{uppercase}</option>
        )
      })
      }
    </>

    )
}

export default ActivityList;