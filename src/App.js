//importing component from react for life cycle method.... ***Reviewer*** Do I even need to do this? Does it need life cycle methods, state, etc?
import React, { Component } from 'react';
//import all my custom CSS
import './App.css';
//import the apps components
import Form from './components/Form.js';
import DropDown from './components/DropDown.js';
import Footer from './components/Footer.js';
import AllEmotionChart from './components/AllEmotionChart.js';
import OneEmotionChart from './components/OneEmotionChart.js';
import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin';
import Home from './components/Home';

//import route for client side routing
import { Route } from 'react-router-dom';
//bootstrap container
import Container from 'react-bootstrap/Container';

//const makeIndEmotionCharts = (arrayOfNames) = {
//  arrayOfNames.forEach((name) => {
//  return ({
//    <Route exact path=`/${name}`>
//    <OneEmotionChart name={name} />
//    </Route>
//  })
//  }
//})

class App extends Component {




  render() {
    return (
      //bootstrap container eith custom css
      <Container fluid className="App">
        <DropDown className="flex-sm-row-reverse" />
      {/* wrapping Routes in higher order component... login sign up an empotion log get router props bassed in to have access to window.history */}
        <Route exact path="/"><Home /></Route>
        <Route exact path="/log-in" render={(routerProps) => <UserLogin {...routerProps} />} />
        <Route exact path="/sign-up" render={(routerProps) => <UserSignup {...routerProps} />} />
        <Route exact path="/emotion-log" render={(routerProps) => <Form {...routerProps} />} />
        <Route exact path="/emotion-chart">
          <AllEmotionChart />
        </Route>
        <Route exact path="/Fear">
          <OneEmotionChart name={"Fear"} />
        </Route>
        <Route exact path="/Anger">
          <OneEmotionChart name={"Anger"} />
        </Route>
        <Route exact path="/Sadness">
          <OneEmotionChart name={"Sadness"} />
        </Route>
        <Route exact path="/Anxiety">
          <OneEmotionChart name={"Anxiety"} />
        </Route>
        <Route exact path="/Happiness">
          <OneEmotionChart name={"Happiness"} />
        </Route>
        <Route exact path="/Peacefulness">
          <OneEmotionChart name={"Peacefulness"} />
        </Route>
        <Route exact path="/Gratitude">
          <OneEmotionChart name={"Gratitude"} />
        </Route>
        <Footer />
      </Container>
    );
  };
};

export default (App);
