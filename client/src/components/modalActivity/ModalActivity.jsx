import style from "./ModalActivity.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setModal, createActivity } from "../../redux/actions/actions";
import { useState } from "react";
import Error from "./errors/Error"
import { useEffect } from "react";

export const validateInputs = (input) => {
  const { name, difficulty, duration } = input;
  let errors = {};
  if(name.length > 15 && name !== "") errors.name = 'Max length exceeded';
  if(name.length < 2 && name !== "") errors.name = 'Min length almost to be two';

  if(difficulty !== "" && isNaN(parseInt(difficulty))) errors.difficulty = 'Difficulty need to be number'
  if(parseInt(difficulty) < 1) errors.difficulty = 'Min difficulty is one';
  if(parseInt(difficulty) > 5) errors.difficulty = 'Max difficulty is five';

  if(duration.length > 5) errors.duration = 'Max length exceeded'; 
  if(duration.length && duration[2] !== ':') errors.duration = 'The format is hh:mm'
  if(duration.length && !duration[3]) errors.duration = 'The format is hh:mm';
  if(duration.length && !duration[4]) errors.duration = 'The format is hh:mm';
  if(duration[0] && isNaN(parseInt(duration[0]))) errors.duration = `"${duration[0]}" need to be a number`;
  if(duration[1] && isNaN(parseInt(duration[1]))) errors.duration = `"${duration[1]}" need to be a number`;
  if(duration[3] && isNaN(parseInt(duration[3]))) errors.duration = `"${duration[3]}" need to be a number`;
  if(duration[4] && isNaN(parseInt(duration[4]))) errors.duration = `"${duration[4]}" need to be a number`;
  
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
    difficulty: '',
    duration: '',
    season: ''
  })
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true)
  const [limitCountry,setLimitCountry] = useState({});
  const { filtered } = useSelector((state) => state);

  useEffect(() => {

    if(errors.name || errors.difficulty || errors.duration) {
      setIsDisabled(true);
    } else { 
      if(!countries.names.length || !input.name.length || !input.difficulty.length || !input.duration.length || !input.season.length) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false)
      }
    }

  }, [limitCountry, errors]);
  

  const handleClose = () => {
    dispatch(setModal(false));
    document.body.style.overflow = "scroll";
  };

  const handleCountry = (e) => {
    const max = validateCountries({
      names: [...countries.names, e.target[e.target.selectedIndex].text],
      countries: [...countries.countries, e.target.value]
    })
    setLimitCountry(max);

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
      setErrors(validateInputs({
        ...input,
        [e.target.name]: e.target.value
      }))

      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('asd')
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
            {limitCountry.countries &&  <Error timedError={limitCountry.countries} />}
          </div>
          <div className={style.countryInput}>
            <label htmlFor="">Name :</label>
            <input className={style.input_style}  value={input.name}  onChange={handleInputChange} name="name" type="text" placeholder="Football, Basket" />
            {errors.name ? <Error error={errors.name}/> : null}
          </div>
          <div className={style.countryInput}>
            <label htmlFor="">Difficulty :</label>
            <input className={style.input_style} value={input.difficulty} onChange={handleInputChange} name="difficulty" type="text" min={1} max={5}  placeholder="Set difficulty" />
            {errors.difficulty ? <Error error={errors.difficulty}/> : null}
          </div>
          <div className={style.countryInput}>
            <label htmlFor="">Duration :</label>
            <input className={`${style.input_style} ${style.time}`}  value={input.duration} placeholder='Set duration'  onChange={handleInputChange} name="duration" type="text" />
            {errors.duration ? <Error error={errors.duration}/> : null}
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
                <span onClick={handleDelete} id={index}  key={name} >{name}</span>
            )): null}
          </div>
          <button className={style.submit} disabled={isDisabled} type="submit">{isDisabled ? 'Rellene todos los campos' : 'Submit'}</button>
        </div>
      </form>
    </div>
  );
};

export default ModalActivity;
