import { combineReducers } from "redux";


const rootReducer = combineReducers({
    logs: logsReducer,
    charts: chartReducer,
    user: userReducer
  });
   
  export default rootReducer;
   
  function chartReducer(state = [], action) {
    //set default value so that our app doesn't break
    switch (action.type) {
      case "GET_CHART":
        
      case "GET_ALL_EMOTION_CHART_DATA":
       return action.logs
   
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
        return state = []
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