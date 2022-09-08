import style from "./ModalActivity.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setModal, createActivity } from "../../redux/actions/actions";
import { searchModal } from "../../redux/actions/actions";
import { useState } from "react";

export const validate = (input) => {
  const { name, difficulty, duration } = input;
  let errors = {};
  if(name.length > 15) errors.name = 'Name max length 15';
  if(parseInt(difficulty) < 1 || parseInt(difficulty) > 5) errors.difficulty = 'Diff betweeen 1 and 5';
  if(parseInt(duration) < 1 || parseInt(duration) > 12 ) errors.duration = 'Min duration 1 max duration 12'

  return errors;
}

const ModalActivity = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    countryCode: '',
    name: '',
    difficulty: 1,
    duration: 1,
    season: ''
  })
  const { filtered } = useSelector((state) => state);
  

  const handleClose = () => {
    dispatch(setModal(false));
    document.body.style.overflow = "scroll";
  };


  const handleInputChange = (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
   /*  dispatch(createActivity(input)) */
  }

  return (
    <div className={style.modalBG}>
      <form onSubmit={handleSubmit}  className={style.modalContainer}>
        <div className={style.topBtn}>
          <button onClick={handleClose}>Close</button>
        </div>
        <div className={style.wrapper}>
          <div className={style.countryInput}>
            <label htmlFor="">Country :</label>
            <select onChange={handleInputChange} name="countryCode" className={style.input_style}>
              <option value="">Choose a country</option>
              {filtered.length && filtered.map( c => {
                const uppercase = c.name.toUpperCase()
                return ( 
                  <option key={c.ID} value={c.ID} >{uppercase}</option>
                )
              })}
            </select>
          </div>
          <div className={style.countryInput}>
            <label htmlFor="">Name :</label>
            <input className={style.input_style}  value={input.name}  onChange={handleInputChange} name="name" type="text" placeholder="Football, Basket" />
          </div>
          <div className={style.countryInput}>
            <label htmlFor="">Difficulty :</label>
            <input className={style.input_style} value={parseInt(input.difficulty)} onChange={handleInputChange} name="difficulty" type="number" min={1} max={5}  placeholder="Set difficulty" />
          </div>
          <div className={style.countryInput}>
            <label htmlFor="">Duration :</label>
            <input className={style.input_style}  value={parseInt(input.duration)}  onChange={handleInputChange} name="duration" type="hour" />
          </div>
          <div onChange={handleInputChange}  className={style.countryInput}>
            <label htmlFor="">Season :</label>
            <div className={style.checkbox_container}>
              <div className={style.checkbox}>
                <label htmlFor="">Summer</label>
                <input name="season" type="radio" value={'Verano'} />
              </div>
              <div className={style.checkbox}>
                <label htmlFor="">Spring</label>
                <input name="season" type="radio" value={'Spring'} />
              </div>
              <div className={style.checkbox}>
                <label htmlFor="">Autumn</label>
                <input name="season" type="radio" value={'Autumn'} />
              </div>
              <div className={style.checkbox}>
                <label htmlFor="">Winter</label>
                <input name="season" type="radio" value={'Winter'} />
              </div>
            </div>
          </div>
          <input className={style.submit} type="submit"/>
        </div>
      </form>
    </div>
  );
};

export default ModalActivity;
