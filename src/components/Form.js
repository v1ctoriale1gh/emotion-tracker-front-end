import React, { Component } from 'react';
import EmotionForm from './EmotionForm.js';


class Form extends Component {

    constructor() {
        super();
        this.state = {
            Fear: '0',
            Anger: '0',
            Sadness: '0',
            Anxiety: '0',
            Hapiness: '0',
            Peacefulness: '0',
            Gratitude: '0',
        };
    };

    numberClick = (e) => {
        e.persist();
        e.target.className === "chosen-number" ? e.target.className = "" : e.target.className = "chosen-number"
        this.setState({
            [e.target.parentElement.dataset.name]: e.target.innerText
        });
        console.log(this.state);
        }


    render() {
        return(
            <div>
                <EmotionForm name={"Fear"}         numberClick={this.numberClick} />
                <EmotionForm name={"Anger"}        numberClick={this.numberClick} />
                <EmotionForm name={"Sadness"}      numberClick={this.numberClick} />
                <EmotionForm name={"Anxiety"}      numberClick={this.numberClick} />
                <EmotionForm name={"Happiness"}    numberClick={this.numberClick} />
                <EmotionForm name={"Peacefulness"} numberClick={this.numberClick} />
                <EmotionForm name={"Gratitude"}    numberClick={this.numberClick} />
            </div>
        )
    };
};

export default Form;