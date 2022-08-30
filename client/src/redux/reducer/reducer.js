import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  FILTER_COUNTRY,
} from "../actions/actions";

const initialState = {
  countries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
      };
    }

    case GET_COUNTRY_BY_NAME: {
      return {
        ...state,
        countries: action.payload,
      };
    }

    case FILTER_COUNTRY: {
/*       const filtered = state.countries.filter(
        (c) => c.continent === action.payload
      );
      console.log(filtered)
      console.log(action.payload)
      return {
        countries: filtered
      } arreglar filtrado  */  
    }

    default:
      return state;
  }
};

export default reducer;
