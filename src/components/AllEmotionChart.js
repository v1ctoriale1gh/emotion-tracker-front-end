import React, { Component } from "react";
import { Chart } from "react-google-charts";
import Container from 'react-bootstrap/Container';

export default class AllEmotionChart extends Component {
     
    
    constructor(props) {
        super();
        this.options = {
        title: "All Emotions",
        hAxis: { title: "Emotions" },
        vAxis: { title: "Intensity", viewWindow: { min: 0, max: 15 } },
        }
        this.data = [
            ['Day', 'Fear', 'Anger', 'Sadness', 'Anxiety', 'Happiness', 'Peacefulness', 'Gratitude'],
            ['2004/05',  1,      10,      3,        3,           4,             1,          9     ],
            ['2005/06',  3,      8,       5,        6,           3,             2,          9     ],
            ['2006/07',  5,      6,       8,        4,           4,             3,          9     ],
            ['2007/08',  9,      4,       4,        3,           5,             7,          9     ],
            ['2008/09',  3,      2,       7,        1,           7,             8,          9     ],
            ['2004/10',  1,      10,      3,        3,           4,             1,          9     ],
            ['2005/11',  3,      8,       5,        6,           3,             2,          9     ],
            ['2006/12',  5,      6,       8,        4,           4,             3,          9     ],
            ['2007/13',  9,      4,       4,        3,           5,             7,          9     ],
            ['2008/14',  3,      2,       7,        1,           7,             8,          9     ]
        ]
    }

  render() {
    return (
      <Container className={"all-emotion-chart"}>
        <Chart
          chartType="ColumnChart"
          options={this.options}
          data={this.data}
          width="100%"
          height="400px"
          legendToggle
        />
      </Container>
    );
  }
}

/*
Fear: '0',
Anger: '0',
Sadness: '0',
Anxiety: '0',
Happiness: '0',
Peacefulness: '0',
Gratitude: '0'
*/