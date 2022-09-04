import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryByID } from "../../redux/actions/actions";
import style from "./CountryDetail.module.css";
import Activity from './activities/Activity'

const CountryDetail = () => {
  const {
    img_url,
    name,
    ID,
    continent,
    capital,
    sub_region,
    area,
    population,
    currencies,
    languages,
    Activities,
  } = useSelector((state) => state.detailed_country);

  const cleanLanguages = [];
  let currencyName;
  let symbol;

  for (const key in languages) {
    if (Object.hasOwnProperty.call(languages, key)) {
      const element = languages[key];
      cleanLanguages.push(element);
    }
  }

  for (const key in currencies) {
    if (Object.hasOwnProperty.call(currencies, key)) {
      currencyName = currencies[key].name;
      symbol = currencies[key].symbol;
    }
  }

  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryByID(id));
  }, [dispatch, id]);

  return (
    <div className={style.country_container}>
      <div className={style.banner}>
        <div className={style.container_img}>
          <img src={img_url} alt="country-flag" />
          <div className={style.carousel_info}>
            <div className={style.population}>
              <h4 className={style.boxModel}>Population</h4>
              <h4 className={style.value}>{population}</h4>
            </div>
            <div className={style.population}>
              <h4 className={style.boxModel}>Area </h4>
              <h4 className={style.value}>{area}</h4>
            </div>
            <h4 className={`${style.boxModel} ${style.green}`}>Independent</h4>
          </div>
        </div>
        <div className={style.separator}></div>
        <div className={style.main_info}>
          <h2 className={style.country_name}>{name} - {id}</h2>
          <h4 className={style.info}>Capital: {capital}</h4>
          <h4 className={style.info}>Subregion: {sub_region}</h4>
          <h4 className={style.info}>Continent: {continent}</h4>
          <div className={style.currencies}>
            <h4 className={style.info}>Languages :</h4>
            {cleanLanguages
              .map((lang) => (
                <p key={lang}>
                  <span className={style.arrow}>↳</span> {lang}
                </p>
              ))
              .slice(0, 5)}
          </div>
          <div className={style.currencies}>
            <h4 className={style.info}>Currencies :</h4>
            <p>
              <span className={style.arrow}>↳</span> {currencyName}
            </p>
            <p>
              <span className={style.arrow}>↳</span> Currency Symbol:
          {    <span className={style.symbol}>{symbol}</span>}
            </p>
          </div>
        </div>
      </div>
      <Activity activity={Activities} />
    </div>
  );
};

export default CountryDetail;
