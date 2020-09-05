export const addLog = (log) => {
console.log()

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
                .then(response => response.json())
                .then(log => dispatch({ type: 'ADD_LOG', logData}));
            };
    };

    export const getAllEmotionChartData = () => {
        return (dispatch) => {
            dispatch({
                type: 'BEGIN_GET_ALL_EMOTION_CHART_DATA'});
                fetch('http://localhost:3000/users/1/logs')
                .then(response => response.json())
                .then(logs => dispatch({ type: 'GET_ALL_EMOTION_CHART_DATA', logs }))
            }
        }


   //{"Fear"=>"6", "Anger"=>"5", "Sadness"=>"2", "Anxiety"=>"2", "Happiness"=>"2", "Peacefulness"=>"2", "Gratitude"=>"3", "controller"=>"logs", "action"=>"create", "user_id"=>"1", "log"=>{}}
   //{ Fear, Anger, Sadness, Anxiety, Happiness, Peacefulness, Gratitude }