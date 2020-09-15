import React, { Component } from "react";
import { Chart } from "react-google-charts";
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { getOneEmotionChartData } from '../actions';

import UserLogin from './UserLogin.js';

class OneEmotionChart extends Component {

    
     
    //set the title, axis titles, and min max for google API chart
    constructor(props) {
        super();
        this.options = {
        title: props.name,
        hAxis: { title: "Dates" },
        vAxis: { title: "Intensity", viewWindow: { min: 0, max: 15 } },
        }
    }        

    //when the component mounts, action creator to get all the data
    componentDidMount() {
        !!this.props.user.id && this.props.getOneEmotionChartData(this.props.user.id, this.props.name)
    }

    composeData(){
        if (this.props.chartData.length > 0 ) {
            
        let data = [['Date', 'Intensity']]
        this.props.chartData.forEach(log => {
            let logArray = []
            logArray.push(log.created_at.split("T")[0])
            logArray.push(parseInt(log.intensity))
            data.push(logArray)
        })
        console.log(data)
        return data
    } else {
        return [['Date', 'Intensity'],
                ["MAKE AN EMOTION LOG TO DISPLAY DATA", 0]]

    }
    }

    //if there is a user id render the component if there is not redirect to sign in
    render() {
      return (
        <div>
        {this.props.user.id ?
        <Container className={"all-emotion-chart"}>
          <Chart
            loader={<div>Loading Chart</div>}
            chartType="LineChart"
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
        chartData: state.emotionCharts,
        user: state.user
    }
}


//function mapDispatchToProps(dispatch) {
//  return {
//        boundGetOneEmotionChartData: (id, name) => dispatch(getOneEmotionChartData(id,name))
//}    

//
//pass in mapstate to props and map dispatch to props, and connect the component to redux store

export default connect(mapStateToProps, { getOneEmotionChartData })(OneEmotionChart);