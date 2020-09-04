import React from 'react';
import './App.css';
import Form from './components/Form.js';
import DropDown from './components/DropDown.js';
import Footer from './components/Footer.js';

class App extends React.Component {

  onClickForDropDown = (e) => {
    console.log(e.target)
  }
  render() {
    return (
      <div className="App">
        <DropDown onClickForDropDown={this.onClickForDropDown} className="flex-sm-row-reverse" />
        <Form />
        <Footer />
      </div>
    );
  };
};

export default App;
