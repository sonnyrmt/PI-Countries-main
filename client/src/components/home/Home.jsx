import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries, pagination } from "../../redux/actions/actions";
import Card from "./cards/Card";
import style from "./Home.module.css";

const Home = () => {
  const {page, filtered} = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const testClick = (e) => {
    e ? dispatch(pagination(e.target.value)) : dispatch(pagination(0))
  }

  const offset = page * 15;
  const limit = offset + 15;
  const current = filtered.slice(offset,limit);
  console.log(current)

  return (
    <div className={style.countries}>
      {current.length
        ? current.map((c) => (
            <Card
              key={c.ID}
              id={c.ID}
              name={c.name}
              img={c.img_url}
              continent={c.continent}
            />
          ))
        : <div>no hay pais</div>
      }
      <button value={1} onClick={testClick}>To page 2</button>
    </div>
  );
};

export default Home;
