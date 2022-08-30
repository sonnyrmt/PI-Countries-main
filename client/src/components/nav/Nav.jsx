import style from './Nav.module.css'
import { useDispatch } from "react-redux";
import { getCountryByName, filterCountry } from "../../redux/actions/actions";

const Nav = () => {

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(getCountryByName(e.target.value))
  };

  const handleFilter = (e) => {
    dispatch(filterCountry(e.target.value));
  };

  return (
    <nav className={style.nav_container}>
      <div className={style.btn_container}>
        <h1>Countries</h1>
        <h4>Create country</h4>
      </div>
      <div className={style.input_container}>
        <input type="text" onChange={handleChange}/>
        <select name="filter" id="filter" onChange={handleFilter}>
          <option value="">Filter</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <select name="Order" id="order">
          <option value="">Order</option>
          <option value="continent">Alphabetical</option>
        </select>
      </div>
    </nav>
  );
};

export default Nav;