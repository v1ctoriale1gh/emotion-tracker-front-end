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
      //console.log(action.logs)
      //replace default value with the actual array we want so our app runs 
       return action.logs
   
      default:
        return state;
    }
  }

  function userReducer(state = [], action) {
    switch (action.type) {
      case "ADD_USER":
        return action.user;
      default:
        return state;
    }
  }

  function logsReducer(state = [], action) {
    switch (action.type) {
      case "ADD_LOG":
        return [state, action.log];
        //case "GET_ALL_EMOTION_CHART_DATA":
      //console.log(action.logs)
       //return [state, action.logs]
      default:
        return state;
    }
  }