export const addLog = (log) => {
    return (dispatch) => {
        let logData = { 
           log
        }
        dispatch({ 
            type: 'BEGIN_ADD_LOG' });
            fetch('http://localhost:3000/users/1/logs', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(logData)
                })
                .then(() => dispatch({ type: 'ADD_LOG', logData}));
            };
    };

export const getAllEmotionChartData = () => {
    return (dispatch) => {
        dispatch({
            type: 'BEGIN_GET_ALL_EMOTION_CHART_DATA'});
            fetch('http://localhost:3000/users/1/logs')
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