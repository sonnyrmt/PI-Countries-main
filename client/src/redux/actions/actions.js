export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const FILTER_COUNTRY = 'FILTER_COUNTRY';

export const getAllCountries = (name) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:3001/countries?name${name}`);
    const json = await res.json();
    dispatch({ type: GET_ALL_COUNTRIES, payload: json });
  } catch (error) {
    console.log(error);
  }
};

export const getCountryByName = (name) => async (dispatch) => {
  const res = await fetch(`http://localhost:3001/countries?name=${name}`);
  const json = await res.json();
  dispatch({ type: GET_COUNTRY_BY_NAME, payload: json })
};

export const filterCountry = (value) => dispatch => {
  console.log(value)
  dispatch({ type: FILTER_COUNTRY, payload: value });
}
