import { combineReducers } from "redux";

//using multiple reducers, one for users and log in, one for making emotion logs, and one for getting the chart data


const rootReducer = combineReducers({
    logs: logsReducer,
    charts: chartReducer,
    user: userReducer,
    emotionCharts: emotionChartReducer
  });
   
  export default rootReducer;
   
  function chartReducer(state = [], action) {
    //set default value so that our app doesn't break
    switch (action.type) {
      case "GET_ALL_EMOTION_CHART_DATA":
       return action.logs;
      case "LOGOUT_USER":
       return [];
      default:
        return state;
    }
  }

  function emotionChartReducer(state = [], action) {
    //set default value so that our app doesn't break
    switch (action.type) {
      case "GET_ONE_EMOTION_CHART_DATA":
       return action.logs;
       case "LOGOUT_USER":
        return [];
      default:
        return state;
    }
  }

  function userReducer(state = [], action) {
    switch (action.type) {
      case "ADD_USER":
        return action.user;
      case "LOGIN_USER":
        return action.user;
      case "LOGOUT_USER":
        return []
      default:
        return state;
    }
  }

  function logsReducer(state = [], action) {
    switch (action.type) {
      case "ADD_LOG":
        return [state, action.log];
      case "LOGOUT_USER":
        return []
      default:
        return state;
    }
  }