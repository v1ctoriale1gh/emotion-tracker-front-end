export const addLog = (log, id) => {
    return (dispatch) => {
        let logData = { 
           log
        }
        dispatch({ 
            type: 'BEGIN_ADD_LOG' });
            fetch(`http://localhost:3000/users/${id}/logs`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(logData)
                })
                .then(() => dispatch({ type: 'ADD_LOG', logData}));
            };
    };

export const getAllEmotionChartData = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'BEGIN_GET_ALL_EMOTION_CHART_DATA'});
            fetch(`http://localhost:3000/users/${id}/logs`)
            .then(response => response.json())
            .then(logs => dispatch({ type: 'GET_ALL_EMOTION_CHART_DATA', logs }));
        };
    };

export const addUser = (user) => {
    let userData = {
        user:
        user
    }
    return (dispatch) => {
        dispatch({type: 'BEGIN_ADD_USER' });
        fetch('http://localhost:3000/users', {
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
            fetch('http://localhost:3000/users/login', {
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
            