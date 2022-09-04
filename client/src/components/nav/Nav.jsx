import style from './Nav.module.css'
import { useDispatch, useSelector } from "react-redux";
import { filters, getCountryByName, getAllCountries } from "../../redux/actions/actions";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const {pathname} = useLocation();
  const countries = useSelector((state) => state.countries);
  const unique = [...new Map(countries.map(item => [item.continent, item])).values()];
  
  const { continent_state, order_state } = useSelector((state) => state)

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
    if(e.target.value) {
      dispatch(getCountryByName(e.target.value))
    } else {
      if(continent == "" && order == "") {
        dispatch(getAllCountries());
      } else {
        setFilters(continent, order);
      }
    }
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
        <div className={style.logoInputContainer}>
          <h1 className={style.title}>Maps.pi</h1>
          {pathname === '/countries' || pathname === '/countries/' ?
          <input placeholder='Search..' className={style.searchBar} type="text" onChange={handleSearch}/>
          : null }
        </div>
        <button className={style.activity}>{pathname === '/countries' || pathname === '/countries/' ? 'Create activity' : 'Back'}</button>
      </div>
      {pathname === '/countries' ?
        <div className={style.input_container}>
          <div className={style.input_bg}>
            <div className={style.labelAndSelect}>
              <label htmlFor="title-continent">Continent Filter</label>
              <select className={style.selectInput} defaultValue='Choose Continent' name="filter" id="filter" onChange={handleContinent}>
                <option value="">Choose One</option>
                {unique.map( c => <option key={c.ID} value={c.continent}>{c.continent}</option>)}
              </select>
            </div>
            <div className={style.labelAndSelect}>
              <label htmlFor="title-continent">Order Format</label>
              <select className={style.selectInput} defaultValue='Choose Continent' name="order" id="order" onChange={handleOrder}>
                <option value="">Choose format</option>
                <option value="asc">A-Z</option>
                <option value="des">Z-A</option>
                <option value="higher">Higher Population</option>
                <option value="lower">Lower Population</option>
              </select>
            </div>
            <div className={style.labelAndSelect}>
              <label htmlFor="title-activity">Activity Filter</label>
              <select className={style.selectInput} name="activities" id="activities">
                <option value="">No activities</option>
              </select>
            </div>
          </div>
        </div>
      : null }
    </nav>
  );
};

export default Nav;