import style from './Nav.module.css'
import { useDispatch, useSelector } from "react-redux";
import { filters } from "../../redux/actions/actions";
import { useState } from 'react';

const Nav = () => {
  const countries = useSelector((state) => state.countries);
  const unique = [...new Map(countries.map(item => [item.continent, item])).values()];
  
  const { continent_state, order_state } = useSelector((state) => state)
  
  const [search, setSearch] = useState('');

  const [continent, setCotinent] = useState(continent_state);
  const [order, setOrder] = useState(order_state);

  const dispatch = useDispatch();

  const setFilters = (continent = "", order = "" ) => {
    setCotinent(continent);
    setOrder(order);

    dispatch(filters({
      continent,
      order,
    }))
  }

  const handleSearch = (e) => {
    setFilters(e.target.value);
  };

  const handleContinent = (e) => {
    setFilters(e.target.value, order)
  };

  const handleOrder = (e) => {
    setFilters(continent, e.target.value )
  }

  return (
    <nav className={style.nav_container}>
      <div className={style.btn_container}>
        <h1>Countries</h1>
        <h4>Create country</h4>
        <input type="text" onChange={handleSearch}/>
      </div>
      <div className={style.input_container}>
        <select defaultValue='Choose Continent' name="filter" id="filter" onChange={handleContinent}>
          <option value="">Choose Continent</option>
          {unique.map( c => <option key={c.ID} value={c.continent}>{c.continent}</option>)}
        </select>
        <select defaultValue='Choose Continent' name="order" id="order" onChange={handleOrder}>
          <option value="">Choose Order</option>
          <option value="asc">A-Z</option>
          <option value="des">Z-A</option>
          <option value="higher">Higher Population</option>
          <option value="lower">Lower Population</option>
        </select>
        <select name="activities" id="activities">
          <option value="">No hay actividades</option>
        </select>
      </div>
    </nav>
  );
};

export default Nav;