export const GET_CHART_DATA_PENDING = "GET_CHART_DATA_PENDING";
export const GET_CHART_DATA_SUCCESS = "GET_CHART_DATA_SUCCESS";
export const GET_CHART_DATA_ERROR = "GET_CHART_DATA_ERROR";
export const GET_CHART_DATA_ERROR_DISAPPEAR = "GET_CHART_DATA_ERROR_DISAPPEAR";

const intitialState = {
  isLoading: true,
  hasError: false,
  errorMsg: "",
  chartData: [],
};

function chartsReducer(state = intitialState, action) {
  switch (action.type) {
    case GET_CHART_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GET_CHART_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chartData: action.payload,
      };
    case GET_CHART_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMsg: "Error Retrieving Chart Data. Please Try Again Later.",
      };
    case GET_CHART_DATA_ERROR_DISAPPEAR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMsg: "",
      };
    default:
      return state;
  }
}

export default chartsReducer;

export const getChartsDataSelector = (state) => state.charts;
