export const GET_INFOGRAPHIC_PENDING = "GET_INFOGRAPHIC_PENDING";
export const GET_INFOGRAPHIC_SUCCESS = "GET_INFOGRAPHIC_SUCCESS";
export const GET_INFOGRAPHIC_ERROR = "GET_INFOGRAPHIC_ERROR";
export const GET_INFOGRAPHIC_ERROR_DISAPPEAR =
  "GET_INFOGRAPHIC_ERROR_DISAPPEAR";

const initialState = {
  isLoading: true,
  hasError: false,
  errorMsg: "",
  coinsData: [],
};

const infographicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFOGRAPHIC_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GET_INFOGRAPHIC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        coinsData: action.payload,
      };
    case GET_INFOGRAPHIC_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMsg: "Error Retrieving Infographic's Data. Please Try Again Later",
      };
    case GET_INFOGRAPHIC_ERROR_DISAPPEAR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default infographicReducer;

export const getInfographicSelector = (state) => state.infographic;
