import React, { Component } from "react";
import { Chart } from "react-google-charts";
import Container from 'react-bootstrap/Container';

export default class AllEmotionChart extends Component {
  render() {
    return (
      <Container className={"all-emotion-chart"}>
        <Chart
          chartType="ColumnChart"
          data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
          width="100%"
          height="400px"
          legendToggle
        />
      </Container>
    );
  }
}
