//all of my action creators
//thunx allows me to return functions, and even multiple functions in my action creators
//so that here I can perform my async fetch requests here
//so that my that I can place logic inside of these action creators like
//on like 15, 30, 43, etc, these were useful to me in debugging but is it necessary to have a seperate
//case in my reducer to MAKE my app do something diff while waiting on the requests?
//it's so dinky...and takes so little time on the back end to fulfill a promise...
//I do realize I could go into my reducer and but a case that returns the current state before...or loading state or something...


export const addLog = (log, id) => {
    return (dispatch) => {
        let logData = { 
           log
        }
        dispatch({ 
            type: 'BEGIN_ADD_LOG' });
            fetch(`https://emotion-logger-back-end.herokuapp.com/users/${id}/logs`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(logData)
                })
                .then((obj) => dispatch({ type: 'ADD_LOG', obj}));
            };
    };

export const getAllEmotionChartData = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'BEGIN_GET_ALL_EMOTION_CHART_DATA'});
            fetch(`https://emotion-logger-back-end.herokuapp.com/users/${id}/logs`)
            .then(response => response.json())
            .then(logs => dispatch({ type: 'GET_ALL_EMOTION_CHART_DATA', logs }));
        };
    };

export const getOneEmotionChartData = (id, name) => {
    return (dispatch) => {
        console.log(id, name)
        dispatch({
            type: 'BEGIN_GET_ONE_EMOTION_CHART_DATA'});
            console.log(id, name)
            fetch(`https://emotion-logger-back-end.herokuapp.com/users/${id}/${name}`)
            .then(response => response.json())
            .then(logs => dispatch({ type: 'GET_ONE_EMOTION_CHART_DATA', logs }));
        };
    };

export const addUser = (user) => {
    let userData = {
        user:
        user
    }
    return (dispatch) => {
        dispatch({type: 'BEGIN_ADD_USER' });
        fetch(`https://emotion-logger-back-end.herokuapp.com/users` , {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)})
            .then((obj) => obj.json())
            .then((obj) => dispatch({ type: 'ADD_USER', user: obj }))
        };
    };

    export const loginUser = (user) => {
        let userData = {
            user:
            user
        }
        return (dispatch) => {
            dispatch({type: 'BEGIN_LOGIN_USER' });
            fetch(`https://emotion-logger-back-end.herokuapp.com/users/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)})
                .then((obj) => obj.json())
                .then((obj) => dispatch({ type: 'LOGIN_USER', user: obj }))
            };
        };

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT_USER'})
        }
    };
            