import {
  GET_ALL_COUNTRIES,
  PAGINATION,
  EMPTY_FILTER,
  FILTER_CONTINENT,
  FILTER_ORDER,
  GET_COUNTRY_BY_NAME,
  GET_COUNTRY_BY_ID,
  MODAL_OPEN
} from "./actions_vars";

export const getAllCountries = () => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:3001/countries`);
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
    dispatch({type: GET_COUNTRY_BY_NAME, payload: json})
  } catch (error) {
    console.log(error)
  }
};

export const getCountryByID = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:3001/countries/${id}`);
    const json = await res.json();
    dispatch({ type: GET_COUNTRY_BY_ID, payload: json });
  } catch (error) {
    console.log(error)
  }
};

export const filters = (filters, noFilters) => async (dispatch) => { 
  dispatch({type: EMPTY_FILTER });
  dispatch({type: FILTER_CONTINENT, payload: filters.continent});
  dispatch({type: FILTER_ORDER, payload: filters.order});
  
}

export const pagination = (value) => async (dispatch) => {
  dispatch({ type: PAGINATION, page: +value });
};

export const setModal = (value) => async (dispatch) => {
  dispatch({type: MODAL_OPEN, payload: value})
};