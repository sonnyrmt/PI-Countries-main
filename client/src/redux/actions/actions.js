export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const FILTER_COUNTRY = 'FILTER_COUNTRY';
export const ORDER_COUNTRY = 'ORDER_COUNTRY';
export const ORDER_POPULATION = 'ORDER_POPULATION';

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
  try {
    const res = await fetch(`http://localhost:3001/countries?name=${name}`);
    const json = await res.json();
    dispatch({ type: GET_COUNTRY_BY_NAME, payload: json })
  } catch (error) {
    console.log(error)
  }
};

export const filterCountry = (value) => dispatch => {
  dispatch({ type: FILTER_COUNTRY, payload: value });
};

export const orderAlphabetical = (value) => dispatch => {
  dispatch({ type: ORDER_COUNTRY, payload: value })
};

export const orderPopulation = (value) => dispatch => {
  dispatch({ type: ORDER_POPULATION, payload: value });
}