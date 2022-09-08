import style from "./ModalActivity.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setModal, createActivity } from "../../redux/actions/actions";
import { useState } from "react";
import Error from "./errors/Error"

export const validateInputs = (input) => {
  const { name, difficulty, duration } = input;
  let errors = {};


  return errors;
}

export const validateCountries = (input) => {
  const {countries} = input;
  let errors = {};
  
  if(countries.length > 3) errors.countries = 'Cant add more than three';
  return errors;
}

const ModalActivity = () => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState({
    names: [],
    countries: [],
  });
  const [input, setInput] = useState({
    name: '',
    difficulty: 1,
    duration: 1,
    season: ''
  })
  const [errors, setErrors] = useState({});
  const { filtered } = useSelector((state) => state);
  

  const handleClose = () => {
    dispatch(setModal(false));
    document.body.style.overflow = "scroll";
  };

  const handleCountry = (e) => {
    const max = validateCountries({
      names: [...countries.names, e.target[e.target.selectedIndex].text],
      countries: [...countries.countries, e.target.value]
    })
    setErrors(max);

    if(!max.countries) {
      setCountries({
        names: [...countries.names, e.target[e.target.selectedIndex].text],
        countries: [...countries.countries, e.target.value]
      })
    }
  }

  const handleDelete = (e) => {
    setCountries({
      names: [...countries.names.filter((c, index) => index !== parseInt(e.target.id))],
      countries: [...countries.countries.filter((c, index) => index !== parseInt(e.target.id))]
    })
  }

  const handleInputChange = (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createActivity(countries.countries ,input))
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
            <select onChange={handleCountry} className={`${style.input_style} ${style.select}`}>
              <option value="">Choose a country</option>
              {filtered.length && filtered.map( c => {
                const uppercase = c.name[0].toUpperCase() + c.name.substring(1);
                return ( 
                  <option key={c.ID} value={c.ID} name={uppercase} id={uppercase}>{uppercase}</option>
                )
              })}
            </select>
            {errors.countries &&  <Error timedError={errors.countries} />}
          </div>
          <div className={style.countryInput}>
            <label htmlFor="">Name :</label>
            <input className={style.input_style}  value={input.name}  onChange={handleInputChange} name="name" type="text" placeholder="Football, Basket" />
            <Error error={'error'}/>
          </div>
          <div className={style.countryInput}>
            <label htmlFor="">Difficulty :</label>
            <input className={style.input_style} value={parseInt(input.difficulty)} onChange={handleInputChange} name="difficulty" type="number" min={1} max={5}  placeholder="Set difficulty" />
            <Error error={'error'}/>
          </div>
          <div className={style.countryInput}>
            <label htmlFor="">Duration :</label>
            <input className={style.input_style}  value={parseInt(input.duration)}  onChange={handleInputChange} name="duration" type="hour" />
            <Error error={'error'}/>
          </div>
          <div onChange={handleInputChange}  className={style.countryInput}>
            <label htmlFor="">Season :</label>
            <div className={style.checkbox_container}>
              <div className={style.checkbox}>
                <label htmlFor="">Summer</label>
                <input name="season" type="radio" value={'Summer'} />
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
          <div className={style.addedCountries} >
            {countries.names.length ? countries.names.map((name, index) => (
                <span onClick={handleDelete} id={index}  key={name} >{name} {index}</span>
            )): null}
          </div>
          <input className={style.submit} type="submit"/>
        </div>
      </form>
    </div>
  );
};

export default ModalActivity;
