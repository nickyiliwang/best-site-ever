import produce from "immer";

/*************************************************************
  Action types
*************************************************************/
export const SET_RESTAURANTS_DATA = "SET_RESTAURANTS_DATA";
export const FETCH_RESTAURANTS_REQUEST = "FETCH_RESTAURANTS_REQUEST";
export const FETCH_RESTAURANTS_SUCCESS = "FETCH_RESTAURANTS_SUCCESS";
export const FETCH_RESTAURANTS_FAILURE = "FETCH_RESTAURANTS_FAILURE";
export const SET_FILTER_TERM = "SET_FILTER_TERM";
/*************************************************************
  Action creator
*************************************************************/
export const redux_SetRestaurantsData = (data) => ({
  type: SET_RESTAURANTS_DATA,
  payload: data,
});
export const redux_FetchRestaurantsRequest = (location) => {
  return {
    type: FETCH_RESTAURANTS_REQUEST,
    payload: location,
  };
};
export const redux_FetchRestaurantsSuccess = (response) => ({
  type: FETCH_RESTAURANTS_SUCCESS,
  payload: response,
});
export const redux_FetchRestaurantsFailure = (response) => ({
  type: FETCH_RESTAURANTS_FAILURE,
  payload: response,
});

export const redux_SetFilterTerm = (term) => ({
  type: SET_FILTER_TERM,
  payload: term,
});

/*************************************************************
  Init state
*************************************************************/
const INITIAL_STATE = {
  filterTerm: "",
  restaurants: null,
  metaData: null,
  apiStatus: {
    apiProcessing: false,
    response: null,
  },
};

/*************************************************************
  Reducer
*************************************************************/
export default function rootReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_RESTAURANTS_DATA: {
        draft.restaurants = [...action.payload.restaurants];
        // draft.metaData = {
        //   ...action.payload.metaData,
        // };
        break;
      }
      case FETCH_RESTAURANTS_REQUEST: {
        draft.apiStatus = {
          ...draft.apiStatus,
          apiProcessing: true,
        };
        break;
      }
      case FETCH_RESTAURANTS_SUCCESS: {
        draft.apiStatus = {
          ...draft.apiStatus,
          apiProcessing: false,
        };
        break;
      }
      case FETCH_RESTAURANTS_FAILURE: {
        draft.apiStatus = {
          ...draft.apiStatus,
          apiProcessing: false,
          response: action.payload,
        };
        break;
      }
      case SET_FILTER_TERM: {
        draft.filterTerm = action.payload;
        break;
      }
      default:
        return state;
    }
  });
}
