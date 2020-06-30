import produce from "immer";

/*************************************************************
  Action types
*************************************************************/
export const SET_RESTAURANTS_DATA = "SET_RESTAURANTS_DATA";
export const FETCH_RESTAURANTS_REQUEST = "FETCH_RESTAURANTS_REQUEST";
export const FETCH_RESTAURANTS_SUCCESS = "FETCH_RESTAURANTS_SUCCESS";
export const FETCH_RESTAURANTS_FAILURE = "FETCH_RESTAURANTS_FAILURE";

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

/*************************************************************
  Init state
*************************************************************/
const INITIAL_STATE = {
  restaurants: null,
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
        draft.restaurants = {
          restaurants: { ...action.payload },
          apiStatus: { ...draft.apiStatus },
        };
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
      default:
        return state;
    }
  });
}
