import { combineReducers } from "redux";


const rootReducer = combineReducers({
    logs: logsReducer,
    charts: chartReducer
  });
   
  export default rootReducer;
   
  function chartReducer(state = [], action) {
    switch (action.type) {
      case "GET_CHART":
        //return [...state, action.book];
  // 
      case "GET_EMOTION_CHART":
       // idx = state.findIndex(book => book.id  === action.id)
       // return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
      default:
        return state;
    }
  }
   
  function logsReducer(state = [], action) {
    switch (action.type) {
      case "ADD_LOG":
        return [...state, action.log];
      default:
        return state;
    }
  }