import React, { Component } from "react";
import { Chart } from "react-google-charts";
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { getAllEmotionChartData } from '../actions';
import UserLogin from './UserLogin.js';

class AllEmotionChart extends Component {
     
    
    constructor(props) {
        super();
        this.options = {
        title: "All Emotions",
        hAxis: { title: "Emotions" },
        vAxis: { title: "Intensity", viewWindow: { min: 0, max: 15 } },
        }
    }        


    componentDidMount() {
        this.props.getAllEmotionChartData(this.props.user.id)
    }

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

function mapStateToProps(state) {
    return {
        chartData: state.charts,
        user: state.user
    }
}

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