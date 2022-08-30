import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions/actions";
import Card from "./cards/Card";
import style from "./Home.module.css";

const Home = () => {
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div className={style.countries}>
      {countries.length
        ? countries.map((c) => (
            <Card
              key={c.ID}
              id={c.ID}
              name={c.name}
              img={c.img_url}
              continent={c.continent}
            />
          )).slice(0,15)
        : <div>No hay paises</div>
      }
    </div>
  );
};

export default Home;
