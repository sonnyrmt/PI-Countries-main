import {
  GET_ALL_COUNTRIES,
  PAGINATION,
  EMPTY_FILTER,
  FILTER_CONTINENT,
  FILTER_ORDER
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

export const filters = (filters) => async (dispatch) => { 
  dispatch({type: EMPTY_FILTER });
  dispatch({type: FILTER_CONTINENT, payload: filters.continent});
  dispatch({type: FILTER_ORDER, payload: filters.order});
  
}

export const pagination = (value) => async (dispatch) => {
  dispatch({ type: PAGINATION, page: +value });
};