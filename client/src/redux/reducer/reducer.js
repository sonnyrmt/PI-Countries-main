import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  FILTER_COUNTRY,
  ORDER_COUNTRY,
  ORDER_POPULATION
} from "../actions/actions";

const initialState = {
  countries: [],
  filterCountries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
        filterCountries: action.payload
      };
    };

    case GET_COUNTRY_BY_NAME: {
      return {
        ...state,
        filterCountries: action.payload,
      };
    };

    case FILTER_COUNTRY: {
      const filtered = state.countries.filter(
        (c) => c.continent.includes(action.payload),
      );

      return {
        ...state,
        filterCountries: filtered,
      }     
    };

    case ORDER_COUNTRY: {
      const aux = state.countries.map(c => c);
      let countryOrder;

      if(action.payload === 'asc') {
        countryOrder = aux.sort((a,b) => a.name.localeCompare(b.name));
        return {
          ...state,
          filterCountries: countryOrder
        }
      }
      if(action.payload === 'des') {
        countryOrder = aux.sort((a,b) => b.name.localeCompare(a.name));
        return {
          ...state,
          filterCountries: countryOrder
        }
      }

      return {
        ...state,
        filterCountries: state.countries
      }
    };

    case ORDER_POPULATION: {
      const aux = state.countries.map(c => c);
      let populationOrder;

      if(action.payload === 'higher') {
        populationOrder= aux.sort((a,b) => b.population - a.population)

        return {
          ...state,
          filterCountries: populationOrder
        }
      }
      if(action.payload === 'lower') {
        populationOrder = aux.sort((a,b) => a.population - b.population)

        return {
          ...state,
          filterCountries: populationOrder
        }
      }
    };

    default:
      return state;
  }
};

export default reducer;
