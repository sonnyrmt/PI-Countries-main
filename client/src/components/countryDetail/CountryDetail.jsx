import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryByID } from "../../redux/actions/actions";
import style from "./CountryDetail.module.css";
import Activity from "./activities/Activity";
import checkmark from "../../assets/img/checkmark.png";
import crossmark from "../../assets/img/crossmark.png";

const CountryDetail = () => {
  const {
    img_url,
    name,
    continent,
    capital,
    sub_region,
    area,
    population,
    currencies,
    languages,
    Activities,
    independent,
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
              <div className={style.boxModel}>Population</div>
              <div className={style.value}>{population}</div>
            </div>
            <div className={style.population}>
              <div className={style.boxModel}>Area km<sup>2</sup></div>
              <div className={style.value}>{area}</div>
            </div>
            <div className={style.population}>
              <div className={style.boxModel}>Independent</div>
              <div className={style.checkNoCheck}>
                <img
                  src={independent === true ? checkmark : crossmark}
                  alt="independent"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.separator}></div>
        <div className={style.main_info}>
          <h2 className={style.country_name}>
            {name} - {id}
          </h2>
          <div className={style.info}>Capital: {capital}</div>
          <div className={style.info}>Continent: {continent}</div>
          <div className={style.info}>Subregion: {sub_region}</div>
          <div className={style.currencies}>
            <div className={style.info}>Official Languages:</div>
            {cleanLanguages
              .map((lang) => (
                <p key={lang}>
                  <span className={style.arrow}>↳</span> {lang}
                </p>
              ))
              .slice(0, 2)}
          </div>
          <div className={style.currencies}>
            <div className={style.info}>Currencies:</div>
            <p>
              <span className={style.arrow}>↳</span> {currencyName}
            </p>
            <p>
              <span className={style.arrow}>↳</span> Currency Symbol:
              {<span className={style.symbol}>{symbol}</span>}
            </p>
          </div>
        </div>
      </div>
      <Activity activity={Activities} />
    </div>
  );
};

export default CountryDetail;
