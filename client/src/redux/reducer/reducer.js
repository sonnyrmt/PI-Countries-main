import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME } from '../actions/actions';

const initialState = {
  countries:[],
  search_country: 'country'
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
      }
    };
    
    case GET_COUNTRY_BY_NAME: {
      return {
        ...state,
        countries: action.payload,
        
      }
    };

    default: return state;
  }
};

export default reducer;