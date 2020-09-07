export const addLog = (log) => {
    return (dispatch) => {
        let logData = { 
           log
        }
        console.log(logData)
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
            console.log(userData)
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
                    .catch((error) => dispatch({ type: 'FETCH_FAILURE', error: error }))
        };
    };
            
        


   //{"Fear"=>"6", "Anger"=>"5", "Sadness"=>"2", "Anxiety"=>"2", "Happiness"=>"2", "Peacefulness"=>"2", "Gratitude"=>"3", "controller"=>"logs", "action"=>"create", "user_id"=>"1", "log"=>{}}
   //{ Fear, Anger, Sadness, Anxiety, Happiness, Peacefulness, Gratitude }
   //https://www.npmjs.com/package/react-google-charts#quick-start
   //https://www.npmjs.com/package/react-google-charts#quick-start
   //https://jsfiddle.net/api/post/library/pure/
   //https://developers.google.com/chart/interactive/docs/gallery/combochart
   //https://developers.google.com/chart/interactive/docs/gallery/linechart
