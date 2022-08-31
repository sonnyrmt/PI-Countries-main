import style from './Nav.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName, filterCountry, orderAlphabetical, orderPopulation } from "../../redux/actions/actions";

const Nav = () => {
  const countries = useSelector((state) => state.countries);
  const unique = [...new Map(countries.map(item => [item.continent, item])).values()]

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(getCountryByName(e.target.value))
  };

  const handleFilter = (e) => {
    dispatch(filterCountry(e.target.value));
  };

  const handleOrder = (e) => {
    dispatch(orderAlphabetical(e.target.value))
  }

  const handlePopulation = (e) => {
    dispatch(orderPopulation(e.target.value))
  }

  return (
    <nav className={style.nav_container}>
      <div className={style.btn_container}>
        <h1>Countries</h1>
        <h4>Create country</h4>
        <input type="text" onChange={handleChange}/>
      </div>
      <div className={style.input_container}>
        <select name="filter" id="filter" onChange={handleFilter}>
          <option value="">Filter</option>
          {unique.map( c => <option key={c.ID} value={c.continent}>{c.continent}</option>)}
        </select>
        <select name="order" id="order" onChange={handleOrder}>
          <option value="">Order</option>
          <option value="asc">Ascending</option>
          <option value="des">Descending</option>
        </select>
        <select name="filter" id="filter" onChange={handlePopulation}>
          <option value="">Population</option>
          <option value="higher">Higher</option>
          <option value="lower">Lower</option>
        </select>
      </div>
    </nav>
  );
};

export default Nav;