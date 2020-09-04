import React, { Component } from 'react';
import EmotionForm from './EmotionForm.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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


    render() {
        return(
            <div>
                <h3>Click on the number correlating to level of intensity of your emotions:</h3>
                <h4>0 being not at all and 10 being very intense</h4>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md={3}><EmotionForm name={"Fear"} numberClick={this.numberClick} /></Col>
                        <Col md={3}><EmotionForm name={"Anger"} numberClick={this.numberClick} /></Col>
                        <Col md={3}><EmotionForm name={"Sadness"} numberClick={this.numberClick} /></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md={3}><EmotionForm name={"Anxiety"} numberClick={this.numberClick} /></Col>
                        <Col md={3}><EmotionForm name={"Happiness"} numberClick={this.numberClick} /></Col>
                        <Col md={3}><EmotionForm name={"Peacefulness"} numberClick={this.numberClick} /></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col sm={3}><EmotionForm name={"Gratitude"} numberClick={this.numberClick} /></Col>
                    </Row>
                </Container>
            </div>
        )
    };
};

export default Form;