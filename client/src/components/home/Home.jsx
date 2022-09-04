import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAllCountries } from "../../redux/actions/actions";
import Card from "./cards/Card";
import style from "./Home.module.css";
import Pagination from "./pagination/Pagination";

const Home = () => {
  const {page, filtered} = useSelector((state) => state);
  const {pathname} = useLocation();


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch, pathname]);

  const offset = page * 15;
  const limit = offset + 15;
  let current = filtered.slice(offset,limit);

  if(!current.length) current = filtered.slice((0),limit);

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
              curr={c.currencies}
              flag={c.flag}
            />
          ))
        : <div>no hay pais</div>
      }
      <Pagination page={page} total={filtered.length}/>
    </div>
  );
};

export default Home;
