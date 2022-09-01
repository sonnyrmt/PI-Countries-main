import { GET_ALL_COUNTRIES, PAGINATION } from "../actions/actions_vars";

const initialState = {
  countries: [],
  filtered: [],
  continent_state: "",
  order_state: "",
  population_state: "",
  aux_page : 0,
  page: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
        filtered: action.payload,
      };
    }

    case PAGINATION: {
      return {
        ...state,
        page: action.page,
      };
    }

    case 'EMPTY_FILTER': {
      return {
        ...state,
        filtered: state.countries,
        order_state: "",
      }
    };

    case "FILTER_CONTINENT": {
      const filtered = state.filtered.filter((c) =>
        c.continent.includes(action.payload)
      );
      console.log(action.payload)
      console.log(filtered)

      return {
        ...state,
        filtered: filtered.length ? filtered : 'error',
        continent_state: action.payload,
        aux_page: state.page,
        page: filtered.length < 15 ? 0 : state.aux_page,
      };
    }

    case 'FILTER_ORDER': {
      let order;

      if(action.payload === 'asc') {
        order =  state.filtered.slice().sort((a,b) => a.name.localeCompare(b.name));
      }
      if(action.payload === 'des') {
        order =  state.filtered.slice().sort((a,b) => b.name.localeCompare(a.name));
      }
      if(action.payload === 'higher') {
        order = state.filtered.slice().sort((a,b) => b.population - a.population)
      }
      if(action.payload === 'lower') {
        order = state.filtered.slice().sort((a,b) => a.population - b.population)
      }

      return {
        ...state,
        filtered: order || state.filtered,
        order_state: action.payload,
      }
    }

    default:
      return state;
  }
};

export default reducer;
