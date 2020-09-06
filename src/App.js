import React from 'react';
import './App.css';
import Form from './components/Form.js';
import DropDown from './components/DropDown.js';
import Footer from './components/Footer.js';
import AllEmotionChart from './components/AllEmotionChart.js';
import { Route } from 'react-router-dom';

class App extends React.Component {

  onClickForDropDown = (e) => {
    console.log(e.target)
  }
  render() {
    return (
      <div className="App">
        <DropDown className="flex-sm-row-reverse" />
        <Route path="/emotion-log">
        <Form />
        </Route>
        <Route path="/emotion-chart">
        <AllEmotionChart />
        </Route>
        <Footer />
      </div>
    );
  };
};

export default App;
