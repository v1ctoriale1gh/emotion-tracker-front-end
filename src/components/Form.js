import React, { Component } from 'react';
import EmotionForm from './EmotionForm.js';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';
import "../styles.css";



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
            Gratitude: '0',
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
        console.log(this.state);
    }

    handleSubmit = () => {
        console.log(this.state);
    }


    render() {
        return(
            <div className="center-align">
                <h3>Click on the number correlating to the level of intensity of your emotions:</h3>
                <h4>0 being not at all and 10 being very intense</h4>
                <Container>
                <CardGroup >
                        <EmotionForm name={"Fear"} numberClick={this.numberClick} />
                        <EmotionForm name={"Anger"} numberClick={this.numberClick} />
                        <EmotionForm name={"Sadness"} numberClick={this.numberClick} />
                </CardGroup><CardGroup>
                        <EmotionForm name={"Anxiety"} numberClick={this.numberClick} />
                        <EmotionForm name={"Happiness"} numberClick={this.numberClick} />
                        <EmotionForm name={"Peacefulness"} numberClick={this.numberClick} />
                        <EmotionForm name={"Gratitude"} numberClick={this.numberClick} />
                </CardGroup>
                </Container>
                <br />
                <Button variant="outline-light" size="lg" onClick={this.handleSubmit}>Submit My Emotion Log!</Button>
            </div>
        )
    };
};

export default Form;