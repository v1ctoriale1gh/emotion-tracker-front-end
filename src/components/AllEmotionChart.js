import React, { Component } from "react";
import { Chart } from "react-google-charts";
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { getAllEmotionChartData } from '../actions';
import UserLogin from './UserLogin.js';

class AllEmotionChart extends Component {

    
     
    //set the title, axis titles, and min max for google API chart
    constructor(props) {
        super();
        this.options = {
        title: "All Emotions",
        hAxis: { title: "Emotions" },
        vAxis: { title: "Intensity", viewWindow: { min: 0, max: 15 } },
        }
    }        

    //when the component mounts, action creator to get all the data
    componentDidMount() {
        this.props.getAllEmotionChartData(this.props.user.id)
    }

    //if there is the data, (I.E. the fetch request has completed and state has been updated in 
    //(reducer/redux store/gobal state)
    //iterate over it and format the array of array of objects into an array of arrays
    //from this [[][{name: "fear", intensity: 8},{},{},{},....]] to this [list, of, emotions, [date, 1, 2, ...],[date, 1, 2, ...],[],[],
    //return the new data format
    //else return a a data format that when passed into google api labels everything to prompt user
    //to go back and make an emotion log
    composeData(){
        if (this.props.chartData.length > 0 ) {
        let data = [['Day', 'Fear', 'Anger', 'Sadness', 'Anxiety', 'Happiness', 'Peacefulness', 'Gratitude']]
        let dates = []
        let emotionData = []
        this.props.chartData.forEach(log => {
            dates.push(log.created_at.split("T")[0])
            let logArray = []
            log.emotions.forEach(emotion => {
                logArray.push(parseInt(emotion.intensity))
            })
            emotionData.push(logArray)
        })
        dates.forEach(date => {
            data.push([date])
        })
        emotionData.forEach((arrayOfNums, index) => {
            let position = index + 1
            data[position] = [`${data[position]}`, ...arrayOfNums]
        })
        return  data 
    } else {
        return [['Day', 'Fear', 'Anger', 'Sadness', 'Anxiety', 'Happiness', 'Peacefulness', 'Gratitude'],
                ["MAKE AN EMOTION LOG TO DISPLAY DATA", 0, 0, 0, 0, 0, 0, 0]]

    }
    }

    //if there is a user id render the component if there is not redirect to sign in
    render() {
      return (
        <div>
        {this.props.user.id ?
        <Container className={"all-emotion-chart"}>
          <Chart
            chartType="ColumnChart"
            options={this.options}
            data={this.composeData()}
            width="100%"
            height="400px"
            legendToggle
          />
        </Container>
        :
        <UserLogin /> }
        </div>
      );
    }
}

//get the chart data, and get the user from redux store

function mapStateToProps(state) {
    return {
        chartData: state.charts,
        user: state.user
    }
}

//pass in mapstate to props and map dispatch to props, and connect the component to redux store

export default connect(mapStateToProps, { getAllEmotionChartData })(AllEmotionChart);



/*
Fear: '0',
Anger: '0',
Sadness: '0',
Anxiety: '0',
Happiness: '0',
Peacefulness: '0',
Gratitude: '0'
*/