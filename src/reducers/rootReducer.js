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
      case "GET_ALL_EMOTION_CHART_DATA":
       return [state, action.logs]
   
      default:
        return state;
    }
  }
   
  function logsReducer(state = [], action) {
    switch (action.type) {
      case "ADD_LOG":
        return [state, action.log];
      default:
        return state;
    }
  }