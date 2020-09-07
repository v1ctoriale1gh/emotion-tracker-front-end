import React from 'react';
import './App.css';
import Form from './components/Form.js';
import DropDown from './components/DropDown.js';
import Footer from './components/Footer.js';
import AllEmotionChart from './components/AllEmotionChart.js';
import UserSignup from './components/UserSignup.js';
import { Route } from 'react-router-dom';

class App extends React.Component {

  onClickForDropDown = (e) => {
    console.log(e.target)
  }
  render() {
    return (
      <div className="App">
        <DropDown className="flex-sm-row-reverse" />
        <Route exact path="/sign-up" render={(routerProps) => <UserSignup {...routerProps} />} />
        <Route exact path="/emotion-log" render={(routerProps) => <Form {...routerProps} />} />
        <Route exact path="/emotion-chart">
        <AllEmotionChart />
        </Route>
        <Footer />
      </div>
    );
  };
};

export default App;
