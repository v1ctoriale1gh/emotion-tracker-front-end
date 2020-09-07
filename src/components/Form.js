import React, { Component } from 'react';
import EmotionForm from './EmotionForm.js';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { addLog } from '../actions';



class Form extends Component {

    constructor() {
        super();
        this.state = {
            Fear: '0',
            Anger: '0',
            Sadness: '0',
            Anxiety: '0',
            Happiness: '0',
            Peacefulness: '0',
            Gratitude: '0'
        };
    };

    numberClick = (e) => {
        e.persist();
        if (e.target.className === "chosen-number") {
            e.target.className = ""
            this.setState({
                [e.target.parentElement.dataset.name]: '0'
            });
        } else {
            e.target.className = "chosen-number"
            this.setState({
                [e.target.parentElement.dataset.name]: e.target.innerText.split(" ")[0]
            });
        }
    }

    handleSubmit = () => {
        this.props.addLog(this.state);
        setTimeout(() => {
              this.props.history.push('/emotion-chart'); }, 1000);
        
    }

    composeEmotionForms = (nameArray) => {
    return nameArray.map(name => <EmotionForm key={name} name={`${name}`} numberClick={this.numberClick} />)
    }


    render() {
        return(
            <div className="center-align">
                <h3>Click on the number correlating to the level of intensity of your emotions:</h3>
                <h4>0 being not at all and 10 being very intense</h4>
                <Container>
                <CardGroup >
                    {this.composeEmotionForms(["Fear", "Anger", "Sadness"])}
                </CardGroup><CardGroup>
                    {this.composeEmotionForms(["Anxiety", "Happiness", "Peacefulness", "Gratitude"])}
                </CardGroup>
                </Container>
                <br />
                <Button className={"submit-button"} variant="outline-light" size="lg" onClick={this.handleSubmit}>Submit My Emotion Log!</Button>
            </div>
        )
    };
};

export default connect(null, { addLog })(Form);