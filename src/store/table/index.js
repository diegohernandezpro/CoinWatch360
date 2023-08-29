export const GET_TABLE_DATA_PENDING = "GET_TABLE_DATA_PENDING";
export const GET_TABLE_DATA_SUCCESS = "GET_TABLE_DATA_SUCCESS";
export const GET_TABLE_DATA_ERROR = "GET_TABLE_DATA_ERROR";
export const GET_TABLE_DATA_ERROR_DISAPPEAR = "GET_TABLE_DATA_ERROR_DISAPPEAR";

const intitialState = {
  isLoading: false,
  hasError: false,
  errorMsg: "",
  coinList: [],
};

const tableReducer = (state = intitialState, action) => {
  switch (action.type) {
    case GET_TABLE_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GET_TABLE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        coinList: action.payload,
      };
    case GET_TABLE_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMsg: "Error Retrieving Table Data. Please Try Again Later.",
      };
    case GET_TABLE_DATA_ERROR_DISAPPEAR:
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

export default tableReducer;

export const getTableDataSelector = (state) => state.table;
